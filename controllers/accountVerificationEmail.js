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
    <div class="es-wrapper-color">
    <!--[if gte mso 9]>
        <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
            <v:fill type="tile" color="#ffffff"></v:fill>
        </v:background>
    <![endif]-->
    <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" style="background-position: left top;">
        <tbody>
            <tr>
                <td class="esd-email-paddings" valign="top">
                    <!--[if !mso]><!-- -->
                    <table cellpadding="0" cellspacing="0" class="esd-header-popover es-content es-desk-hidden" align="center">
                        <tbody>
                            <tr>
                                <td class="esd-stripe" align="center">
                                    <table bgcolor="#efefef" class="es-content-body" align="center" cellpadding="0" cellspacing="0" width="600" style="border-radius: 20px 20px 0px 0px; background-color: #efefef; background-image: url(https://img.freepik.com/foto-gratis/equipaje-amarillo-plano-espacio-copia_23-2148786124.jpg?w=826&t=st=1678933804~exp=1678934404~hmac=cc1e5821318a3724fc140c01f4cff4ddfc69aaa14f8af5bbb3b4d5cd7756d8be); background-repeat: no-repeat; background-position: center top;" background="https://img.freepik.com/foto-gratis/equipaje-amarillo-plano-espacio-copia_23-2148786124.jpg?w=826&t=st=1678933804~exp=1678934404~hmac=cc1e5821318a3724fc140c01f4cff4ddfc69aaa14f8af5bbb3b4d5cd7756d8be">
                                        <tbody>
                                            <tr>
                                                <td class="esd-structure es-p40t es-p40r es-p40l" align="left">
                                                    <table cellpadding="0" cellspacing="0" width="100%">
                                                        <tbody>
                                                            <tr>
                                                                <td width="520" class="esd-container-frame" align="center" valign="top">
                                                                    <table cellpadding="0" cellspacing="0" width="100%">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td align="left" class="esd-block-image es-m-txt-c" style="font-size: 0px;"><a target="_blank" href="https://viewstripo.email"><img src="https://jmverr.stripocdn.email/content/guids/CABINET_ee77850a5a9f3068d9355050e69c76d26d58c3ea2927fa145f0d7a894e624758/images/group_4076323.png" alt="Confirm email" style="display: block; border-radius: 100px;" width="100" title="Confirm email"></a></td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="es-p20t es-p40r es-p40l esd-structure" align="left">
                                                    <table cellpadding="0" cellspacing="0" width="100%">
                                                        <tbody>
                                                            <tr>
                                                                <td width="520" class="esd-container-frame" align="center" valign="top">
                                                                    <table cellpadding="0" cellspacing="0" width="100%" bgcolor="#fafafa" style="background-color: #fafafa; border-radius: 10px; border-collapse: separate;">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td align="left" class="esd-block-text es-p20">
                                                                                    <h3>Welcome,&nbsp;${mail}</h3>
                                                                                    <p><br></p>
                                                                                    <p>You're receiving this message because you recently signed up for a account.<br><br>Confirm your email address by clicking the button below. This step adds extra security to your account by verifying you own this email.</p>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <!--<![endif]-->
                    <table cellpadding="0" cellspacing="0" class="es-content" align="center">
                        <tbody>
                            <tr>
                                <td class="esd-stripe" align="center">
                                    <table bgcolor="#efefef" class="es-content-body" align="center" cellpadding="0" cellspacing="0" width="600">
                                        <tbody>
                                            <tr>
                                                <td class="esd-structure es-p30t es-p40b es-p40r es-p40l" align="left">
                                                    <table cellpadding="0" cellspacing="0" width="100%">
                                                        <tbody>
                                                            <tr>
                                                                <td width="520" class="esd-container-frame" align="center" valign="top">
                                                                    <table cellpadding="0" cellspacing="0" width="100%">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td align="center" class="esd-block-button">
                                                                                    <!--[if mso]><a href="" target="_blank" hidden>
<v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" esdevVmlButton href="" 
            style="height:56px; v-text-anchor:middle; width:520px" arcsize="50%" stroke="f"  fillcolor="#1b2021">
    <w:anchorlock></w:anchorlock>
    <center style='color:#e7c621; font-family:Imprima, Arial, sans-serif; font-size:22px; font-weight:700; line-height:22px;  mso-text-raise:1px'>Confirm email</center>
</v:roundrect></a>
<![endif]-->
                                                                                    <!--[if !mso]><!-- --><button class="msohide es-button-border" style="display: block; background: #1b2021; border-radius: 20px; padding-left: 10px; padding-right: 10px; padding-bottom: 5px;   padding-top: 5px; font-weight: bolder; margin-top: 1.5rem;"><a href="${host}/auth/verify/${code}" 
                                                                                    class="es-button msohide" target="_blank" style="padding-left: 5px; padding-right: 5px; display: block; background: #1b2021; border-color: #1b2021; color: #e7c621;  text-decoration: none; font-size: 20px;">Confirm email</a></button>
                                                                                    <!--<![endif]-->
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="esd-structure es-p40r es-p40l" align="left">
                                                    <table cellpadding="0" cellspacing="0" width="100%">
                                                        <tbody>
                                                            <tr>
                                                                <td width="520" class="esd-container-frame" align="center" valign="top">
                                                                    <table cellpadding="0" cellspacing="0" width="100%">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td align="left" class="esd-block-text">
                                                                                    <p>Thanks,<br><br>MyTinerary</p>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td align="center" class="esd-block-spacer es-p40t es-p20b" style="font-size:0">
                                                                                    <table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0">
                                                                                        <tbody>
                                                                                            <tr>
                                                                                                <td style="border-bottom: 1px solid #666666; background: unset; height: 1px; width: 100%; margin: 0px;"></td>
                                                                                            </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table cellpadding="0" cellspacing="0" class="es-content esd-footer-popover" align="center">
                        <tbody>
                            <tr>
                                <td class="esd-stripe" align="center">
                                    <table bgcolor="#efefef" class="es-content-body" align="center" cellpadding="0" cellspacing="0" width="600" style="border-radius: 0px 0px 20px 20px;">
                                        <tbody>
                                            <tr>
                                                <td class="esd-structure es-p20t es-p20b es-p40r es-p40l esdev-adapt-off" align="left">
                                                    <table width="520" cellpadding="0" cellspacing="0" class="esdev-mso-table">
                                                        <tbody>
                                                            <tr>
                                                                <td class="esdev-mso-td" valign="top">
                                                                    <table cellpadding="0" cellspacing="0" align="left" class="es-left">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td width="47" class="esd-container-frame" align="center" valign="top">
                                                                                    <table cellpadding="0" cellspacing="0" width="100%">
                                                                                        <tbody>
                                                                                            <tr>
                                                                                                <td align="center" class="esd-block-image es-m-txt-l" style="font-size: 0px;"><a target="_blank" href="https://viewstripo.email"><img src="https://jmverr.stripocdn.email/content/guids/CABINET_ee77850a5a9f3068d9355050e69c76d26d58c3ea2927fa145f0d7a894e624758/images/group_4076325.png" alt="Demo" style="display: block;" width="47" title="Demo"></a></td>
                                                                                            </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </td>
                                                                <td width="20"></td>
                                                                <td class="esdev-mso-td" valign="top">
                                                                    <table cellpadding="0" cellspacing="0" class="es-right" align="right">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td width="453" class="esd-container-frame" align="center" valign="top">
                                                                                    <table cellpadding="0" cellspacing="0" width="100%">
                                                                                        <tbody>
                                                                                            <tr>
                                                                                                <td align="left" class="esd-block-text">
                                                                                                    <p style="font-size: 16px;">This link expire in 24 hours. If you have questions, <a target="_blank" style="font-size: 16px;" href="https://viewstripo.email">we're here to help</a></p>
                                                                                                </td>
                                                                                            </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </tbody>
    </table>
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
        subject: 'Verify your new account in Mytinerary',// asunto del mail
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