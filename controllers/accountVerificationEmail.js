//requiero los modulos de nodemailer y de google apis
const {createTransport} = require('nodemailer')
const {google} = require('googleapis')

//defino el constructor de propiedades del modulo de googleapis
const OAuth2 = google.auth.OAuth2
//defino las variables de entorno con los datos d las credenciales de gooogle
//estas credenciales son del mail q va a manejar el envio de correos de verificacion
// tienen q crear un usuario d gmail para su app
const {GOOGLE_ID, GOOGLE_REFRESH, GOOGLE_SECRET, GOOGLE_URL, GOOGLE_USER, BACK_URL} = process.env
//defino una funcion para construir la credencial
function createClient() {
    return new OAuth2(// requiere los datos q alojamos en las variables
        GOOGLE_ID,
        GOOGLE_SECRET,
        GOOGLE_URL
    )
}
// defino el transportador
function getTransport(client) {
    //la funcion requiere q le pase la credencial completa(la recien creada + refresh token)
    // access token tiene vencimiento
    //necesito utilizar metodos de google para poder "calcular" ese codigo
    const accessToken = client.getAccessToken()
    return createTransport({
        service: 'gmail',   //requiere nombre d servicio de mensajeria(gmail) 
        auth: {              // los datos de las credenciales
            user: GOOGLE_USER,
            type: 'OAuth2',
            clientId: GOOGLE_ID,
            clientSecret: GOOGLE_SECRET,
            refreshToken: GOOGLE_REFRESH,
            accessToken: accessToken
        },
        tls: { rejectUnauthorized: false }//propiedad de seguridad.para q el antivirus no me rechaze el mail
    }) // o lo mande a spam
}
//defino  1 funcion para definir el cuerpo´del mail
//va a ser un template string
//debe tener un link hacia 1 ruta del controlador de usuario
//q cambia la propiedad verificado de false a true
//este metodo es otro metodo q hay q codear
function getEmailBody({mail, host, code}) {
    return `
        <div>
            <h1>Welcome, ${mail}</h1>            
            <a href="${host}/auth/verify/${code}">
                Verify my account.
            </a>
        </div>

        `


    }
// defino una ultima funcion q junta todos los pasos anteriores
// esta fx se necesita exportar y utilizar en el metodo signup
//para efectivamente enviar el correo de verificacion
const accountVerificationEmail = async (mailDelNuevoUsuario, codigoCalculadoConCrypto) => {
    //defino 1 credencial utilizando la funcion anterior
    const client = createClient()
    //seteo el refreshToken en la credencial
    // es necesario setearlo manualmente,porq el constructor No admite la propiedad REFRESH TOKEN 
    //para la creacion de una credencial
    client.setCredentials({ refresh_token: process.env.GOOGLE_REFRESH })
    const transport = getTransport(client)
    //defino las opciones del correo
    const mailOptions = { 
        from: GOOGLE_USER,//desde donde envio el correo
        to: mailDelNuevoUsuario,//hacia quien
        subject: 'Verify your new account in Amazing Events',// asunto del mail
        html: getEmailBody({mail:mailDelNuevoUsuario, host:BACK_URL, code:codigoCalculadoConCrypto}) //invoco la funcion  q retorna el template string
    }
    // utilizo el metodo sendmail del transportador para enviar el correo
   
    await transport.sendMail( //el metodo requiere q le pase las
        mailOptions, // opciones del correo y
         (error, response) => {// 1 funcion callback para manejar el error
            if (error) {
                console.error(error)
                return
            }
             console.log('Email sent!')
        }
    )
}

module.exports = accountVerificationEmail