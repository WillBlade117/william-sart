import nodemailer from 'nodemailer';

// Fonction de validation
function validateInput({ firstName, lastName, company, email, message }) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return (
    typeof firstName === 'string' &&
    typeof lastName === 'string' &&
    typeof company === 'string' &&
    typeof message === 'string' &&
    emailRegex.test(email) &&
    message.length >= 5 &&
    message.length <= 3000
  );
}

export async function POST(request) {
  try {
    const { firstName, lastName, company, email, message, website } = await request.json();

    if (website && website.trim() !== '') {
      return new Response(JSON.stringify({ error: 'Bot detected' }), { status: 400 });
    }

    if (!validateInput({ firstName, lastName, company, email, message })) {
      return new Response(JSON.stringify({ error: 'Invalid input' }), { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.GMAIL_USER,
      replyTo: email,
      to: process.env.GMAIL_USER,
      subject: `Nouveau message de ${firstName} ${lastName} (${company || 'Particulier'})`,
      text: `Nom: ${firstName} ${lastName}
Société: ${company || 'Particulier'}
Email: ${email}
Message: ${message}
    `,
    };

    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: 'Erreur lors de l\'envoi de l\'e-mail' }), { status: 500 });
  }
}
