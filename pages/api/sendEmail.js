// pages/api/sendEmail.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, subject, message } = req.body;

    // Configura el transporte de Nodemailer
    const transporter = nodemailer.createTransport({
      host: 'smtp.example.com', // Utiliza tu servidor SMTP
      port: 587, // Puerto SMTP
      secure: false, // true para 465, false para otros puertos
      auth: {
        user: process.env.EMAIL_USER, // Tu usuario SMTP
        pass: process.env.EMAIL_PASS, // Tu contraseña SMTP
      },
    });

    try {
      // Enviar el correo
      await transporter.sendMail({
        from: `"${name}" <${email}>`,
        to: 'davidfelipe.fj@gmail.com', // Reemplaza con tu dirección de correo
        subject: subject,
        text: message,
      });

      res.status(200).json({ message: 'Correo enviado correctamente' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al enviar el correo' });
    }
  } else {
    res.status(405).json({ message: 'Método no permitido' });
  }
}
