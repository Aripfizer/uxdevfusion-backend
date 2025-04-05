import { EventNotification } from 'src/types/notification.types';

export const emailModels = {
  [EventNotification.SendContactMail]: {
    subject: 'Alerte Nouveau message de UxDevFusion',
    content: `<div>
    <div>
      Informations du message depuis votre site en ligne
    </div>
    <br />
    <div>Nom : <span style="font-weight: bold">{fullname}</span></div>
    <div>
      Téléphone :
      <div style="font-weight: bold">{phone}</div>
    </div>
    <div>
      Email :
      <a href="mailto:{email}" target="_blank" style="font-weight: bold; color: #CF902A;">{email}</a>
    </div>
  
    <br />
    <div>
      Message : <br />
      <div style="font-weight: bold; color: #1f2937;">{message}</div>
    </div>
  </div>`,
  },
};

export const getTemplate = () => {
  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="color-scheme" content="light" />
    <meta name="supported-color-schemes" content="light" />
    <style>
      @media only screen and (max-width: 600px) {
        .inner-body {
          width: 90% !important;
        }

        .footer {
          width: 100% !important;
        }
      }

      @media only screen and (max-width: 500px) {
        .button {
          width: 100% !important;
        }
      }
    </style>
  </head>

  <body
    style="
      box-sizing: border-box;
      position: relative;
      -webkit-text-size-adjust: none;
      background-color: #ffffff;
      height: 100%;
      line-height: 1.4;
      margin: 0;
      padding: 0;
      width: 100% !important;
      font-family: 'Montserrat', sans-serif;
      color: #374151;
    "
  >
    <table
      class="wrapper"
      width="100%"
      cellpadding="0"
      cellspacing="0"
      role="presentation"
      style="
        box-sizing: border-box;
        position: relative;
        font-family: 'Montserrat', sans-serif;
        -premailer-cellpadding: 0;
        -premailer-cellspacing: 0;
        -premailer-width: 100%;
        margin: 0;
        padding: 0;
        width: 100%;
        background-color: #593e14;
      "
    >
      <tr>
        <td
          align="center"
          style="
            box-sizing: border-box;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
              Helvetica, Arial, sans-serif, 'Apple Color Emoji',
              'Segoe UI Emoji', 'Segoe UI Symbol';
            position: relative;
          "
        >
          <table
            class="content"
            width="100%"
            cellpadding="0"
            cellspacing="0"
            role="presentation"
            style="
              box-sizing: border-box;
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
                Helvetica, Arial, sans-serif, 'Apple Color Emoji',
                'Segoe UI Emoji', 'Segoe UI Symbol';
              position: relative;
              -premailer-cellpadding: 0;
              -premailer-cellspacing: 0;
              -premailer-width: 100%;
              margin: 0;
              padding: 0;
              width: 100%;
            "
          >
            <tr>
              <td
                class="header"
                style="
                  box-sizing: border-box;
                  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI',
                    Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji',
                    'Segoe UI Emoji', 'Segoe UI Symbol';
                  position: relative;
                  padding: 5px 0;
                  text-align: center;
                "
              >
                <a
                  href="https://uxdevfusion.onrender.com"
                  style="
                    box-sizing: border-box;
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI',
                      Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji',
                      'Segoe UI Emoji', 'Segoe UI Symbol';
                    position: relative;
                    font-size: 19px;
                    font-weight: bold;
                    text-decoration: none;
                    display: inline-block;
                  "
                >
                  <h2
                    style="
                      box-sizing: border-box;
                      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI',
                        Roboto, Helvetica, Arial, sans-serif,
                        'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
                      position: relative;
                      border: none;
                      margin-bottom: 3rem;
                      color: #f8fafc;
                      display: flex;
                      justify-content: center;
                      align-items: center;
                    "
                  >
                    <span style="margin-right: 10px"> Nouveau Message</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill="currentColor"
                        d="M1.796 2.098a.5.5 0 1 0-.6.8L3.198 4.4a.5.5 0 1 0 .6-.8zM1 7a.5.5 0 0 0 0 1h1.5a.5.5 0 0 0 0-1zm11.45 9a2.501 2.501 0 0 1-4.9 0zM9.998 2c3.149 0 5.744 2.334 5.984 5.355l.014.222l.004.225l-.001 3.606l.954 2.587l.025.084l.016.087l.005.088c0 .315-.196.59-.522.707l-.113.033l-.115.01H3.751a.75.75 0 0 1-.259-.046c-.287-.106-.476-.372-.482-.716l.004-.118l.034-.13l.951-2.583L4 7.792l.004-.224C4.127 4.45 6.771 2 9.998 2m8.906.198a.5.5 0 0 0-.7-.1L16.202 3.6a.5.5 0 0 0 .6.8l2.002-1.502a.5.5 0 0 0 .1-.7M19.5 7.5A.5.5 0 0 0 19 7h-1.5a.5.5 0 0 0 0 1H19a.5.5 0 0 0 .5-.5"
                      />
                    </svg>
                  </h2>
                </a>
              </td>
            </tr>

            <!-- Email Body -->
            <tr>
              <td
                class="body"
                width="100%"
                cellpadding="0"
                cellspacing="0"
                style="
                  box-sizing: border-box;
                  position: relative;
                  font-family: 'Montserrat', sans-serif;

                  -premailer-cellpadding: 0;
                  -premailer-cellspacing: 0;
                  -premailer-width: 100%;
                  margin: 0;
                  padding: 0;
                  width: 100%;
                  background-color: #593e14;
                  border-bottom: 1px solid #593e14;
                  border-top: 1px solid #593e14;
                  border: hidden !important;
                "
              >
                <table
                  class="inner-body"
                  align="center"
                  width="570"
                  cellpadding="0"
                  cellspacing="0"
                  role="presentation"
                  style="
                    box-sizing: border-box;
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI',
                      Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji',
                      'Segoe UI Emoji', 'Segoe UI Symbol';
                    position: relative;
                    -premailer-cellpadding: 0;
                    -premailer-cellspacing: 0;
                    -premailer-width: 570px;
                    background-color: #ffffff;
                    border-color: #e8e5ef;
                    border-radius: 2px;
                    border-width: 1px;
                    box-shadow: 0 2px 0 rgba(0, 0, 150, 0.025),
                      2px 4px 0 rgba(0, 0, 150, 0.015);
                    margin: 0 auto;
                    padding: 0;
                    width: 570px;
                  "
                >
                  <!-- Body content -->
                  <tr>
                    <td
                      class="content-cell"
                      style="
                        box-sizing: border-box;
                        position: relative;
                        font-family: 'Montserrat', sans-serif;

                        max-width: 100vw;
                        padding: 32px;
                      "
                    >
                      <h1
                        style="
                          box-sizing: border-box;
                          position: relative;
                          font-size: 18px;
                          font-weight: bold;
                          margin-top: 0;
                          text-align: left;
                          font-family: 'Montserrat', sans-serif;
                        "
                      >
                        Vous avez été contacter
                        <br />
                        {subject}
                      </h1>
                      <p
                        style="
                          box-sizing: border-box;
                          font-family: -apple-system, BlinkMacSystemFont,
                            'Segoe UI', Roboto, Helvetica, Arial, sans-serif,
                            'Apple Color Emoji', 'Segoe UI Emoji',
                            'Segoe UI Symbol';
                          position: relative;
                          font-size: 16px;
                          line-height: 1.5em;
                          margin-top: 0;
                          text-align: left;
                        "
                      >
                        {content}
                      </p>
                      <br />

                      <p
                        style="
                          box-sizing: border-box;
                          position: relative;
                          font-size: 16px;
                          line-height: 1.5em;
                          margin-top: 0;
                          text-align: left;
                          font-family: 'Montserrat', sans-serif;
                          color: #593e14;
                        "
                      >
                        Cordialement,
                      </p>
                      <p
                        style="
                          box-sizing: border-box;
                          position: relative;
                          font-size: 16px;
                          line-height: 1.5em;
                          margin-top: 0;
                          text-align: left;
                          font-family: 'Montserrat', sans-serif;
                          color: #CF902A;
                        "
                      >
                        UxDevFusion
                      </p>
                      <table
                        class="subcopy"
                        width="100%"
                        cellpadding="0"
                        cellspacing="0"
                        role="presentation"
                        style="
                          box-sizing: border-box;
                          position: relative;
                          font-family: 'Montserrat', sans-serif;
                          color: #593e14;
                          border-top: 1px solid #e8e5ef;
                          margin-top: 25px;
                          padding-top: 25px;
                        "
                      >
                        <tr>
                          <td
                            style="
                              box-sizing: border-box;
                              position: relative;
                              font-family: 'Montserrat', sans-serif;
                              color: #593e14;
                            "
                          >
                            <p
                              style="
                                box-sizing: border-box;
                                position: relative;
                                line-height: 1.5em;
                                margin-top: 0;
                                text-align: left;
                                font-family: 'Montserrat', sans-serif;
                                color: #593e14;
                                font-size: 14px;
                              "
                            >
                              Pour tout problème, veuillez envoyer un courriel à
                              <span
                                class="text-green-taxi"
                                style="
                                  box-sizing: border-box;
                                  position: relative;
                                  font-family: 'Montserrat', sans-serif;
                                  color: #CF902A;
                                  font-weight: bold;
                                "
                                >ariel.dossou@outlook.fr</span
                              >
                            </p>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <tr>
              <td
                style="
                  box-sizing: border-box;
                  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI',
                    Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji',
                    'Segoe UI Emoji', 'Segoe UI Symbol';
                  position: relative;
                "
              >
                <table
                  class="footer"
                  align="center"
                  width="570"
                  cellpadding="0"
                  cellspacing="0"
                  role="presentation"
                  style="
                    box-sizing: border-box;
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI',
                      Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji',
                      'Segoe UI Emoji', 'Segoe UI Symbol';
                    position: relative;
                    -premailer-cellpadding: 0;
                    -premailer-cellspacing: 0;
                    -premailer-width: 570px;
                    margin: 0 auto;
                    padding: 0;
                    text-align: center;
                    width: 570px;
                  "
                >
                  <tr>
                    <td
                      class="content-cell"
                      align="center"
                      style="
                        box-sizing: border-box;
                        font-family: -apple-system, BlinkMacSystemFont,
                          'Segoe UI', Roboto, Helvetica, Arial, sans-serif,
                          'Apple Color Emoji', 'Segoe UI Emoji',
                          'Segoe UI Symbol';
                        position: relative;
                        max-width: 100vw;
                        padding: 32px;
                      "
                    >
                      <p
                        style="
                          box-sizing: border-box;
                          font-family: -apple-system, BlinkMacSystemFont,
                            'Segoe UI', Roboto, Helvetica, Arial, sans-serif,
                            'Apple Color Emoji', 'Segoe UI Emoji',
                            'Segoe UI Symbol';
                          position: relative;
                          line-height: 1.5em;
                          margin-top: 0;
                          color: #b0adc5;
                          font-size: 12px;
                          text-align: center;
                        "
                      >
                        © {year} UxDevFusion. All rights reserved.
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
`;
};
