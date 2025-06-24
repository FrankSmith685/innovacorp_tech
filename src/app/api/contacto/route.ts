// app/api/contacto/route.ts
import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { nombre, telefono, servicio, mensaje } = await req.json();

    // Validación básica (opcional)
    if (!nombre || !servicio || !mensaje) {
      return NextResponse.json({ error: 'Faltan campos requeridos' }, { status: 400 });
    }

    // Configura el transporte SMTP (usa tus datos reales aquí)
    const transporter = nodemailer.createTransport({
      service: 'gmail', // o "hotmail", "outlook", etc.
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: ['f.s.b.rojas@gmail.com'],
      subject: `Nuevo contacto: ${servicio}`,
      html: `
        <h3>Nuevo mensaje desde el formulario</h3>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Teléfono:</strong> ${telefono || 'No proporcionado'}</p>
        <p><strong>Servicio:</strong> ${servicio}</p>
        <p><strong>Mensaje:</strong> ${mensaje}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Correo enviado con éxito' });
  } catch (error) {
    console.error('Error enviando correo:', error);
    return NextResponse.json({ error: 'Error al enviar el correo' }, { status: 500 });
  }
}
