import nodemailer from 'nodemailer';


export async function POST(request) {
  const { firstName, lastName, company, email, message } = await request.json();

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.GMAIL_USER,
    subject: `Nouveau message de ${firstName} ${lastName} : ${company}`,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Erreur lors de l\'envoi de l\'e-mail' }), { status: 500 });
  }
}
