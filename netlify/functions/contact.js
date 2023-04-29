require('dotenv').config();

exports.handler = (event, _context, callback) => {

    console.log('data', JSON.parse(event.body))
    const sgMail = require('@sendgrid/mail')

    const data = JSON.parse(event.body)


    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    const msg = {
    to: 'ceytive@gmail.com', // Change to your recipient
    from: 'isharasamuditha@gmail.com', // Change to your verified sender
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: `<strong>${data.name}</strong>`,
    }
    sgMail
    .send(msg)
    .then(() => {
        console.log('Email sent')
    })
    .catch((error) => {
        console.error(error)
    })
}
