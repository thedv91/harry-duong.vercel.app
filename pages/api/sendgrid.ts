import sendgrid from '@sendgrid/mail';
import type { NextApiRequest, NextApiResponse } from 'next';

if (process.env.SENDGRID_API_KEY) {
  sendgrid.setApiKey(process.env.SENDGRID_API_KEY);
}

async function sendEmail(req: NextApiRequest, res: NextApiResponse) {
  try {
    console.log('REQ.BODY', req.body);
    await sendgrid.send({
      to: 'thedv91@gmail.com', // Your email where you'll receive emails
      from: 'manuarorawork@gmail.com', // your website email address here
      subject: `${req.body.subject}`,
      html: `<div>You've got a mail</div>`,
    });
  } catch (error: any) {
    // console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: '' });
}

export default sendEmail;
