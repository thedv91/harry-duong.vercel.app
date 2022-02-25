import sendgrid from '@sendgrid/mail';
import type { NextApiRequest, NextApiResponse } from 'next';

if (process.env.SENDGRID_API_KEY) {
  sendgrid.setApiKey(process.env.SENDGRID_API_KEY);
}

async function sendEmail(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { email, name, message, subject } = req.body;
    await sendgrid.send({
      to: 'thedv91@gmail.com', // Your email where you'll receive emails
      from: 'nopbongdem@gmail.com', // your website email address here
      subject,
      text: `${message}`,
      html: `<div>You've got a mail
      <p>From: ${name}</p>
      <p>Email: ${email}</p>
      <p>Content: ${message}</p></div>`,
    });
  } catch (error: any) {
    return res.status(200).json({ error: error.message });
  }

  return res.status(200).json({ error: '' });
}

export default sendEmail;
