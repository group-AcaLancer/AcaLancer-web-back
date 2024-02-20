import transporter from "./mailer.js";
import Jwt from "jsonwebtoken";
import ejs from "ejs";
import path from "path";
import getImages from "./getImages.js";
import "dotenv/config";

const sendMail = (email, subject, template, attachments) => {
  // Esta es la estructura del email
  transporter.sendMail({
    to: email,
    subject,
    hmtl: template,
    attachments,
  });
};
//  Genera el token para enviar por correo electronico
const getTemplate = async (templatePath, templateVar) => {
  const emailTemplate = path.join(__dirname, templatePath);
  const template = await ejs.renderFile(emailTemplate, templateVar);
  return template;
};
//  Envio de un mensaje con una imagen adjunta
const sendWelcomeEmail = async (email, data) => {
  const token = Jwt.sign({ email }, process.env.JWT_EMAIL_SECRET, {
    expiresIn: "3d",
    algorithm: "HS512",
  });
  //    La ruta a donde se encuentra el archivo .ejs que contiene el cuerpo del email
  template = await getTemplate("../views/welcome/welcome-email.ejs", {
    ...data,
    token,
    url: process.env.FRONT_URL,
  });

  // Agregamos las imagenes al template
  const attachements = await getImages("../views/welcome/images");
  // enviamos el email
  sendMail(email, "Bienvenido a AcaLancer Web", template, attachements);
};

export default sendWelcomeEmail;