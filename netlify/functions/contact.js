require('dotenv').config();

exports.handler = (event, _context, callback) => {

  //  console.log('data', JSON.parse(event.body))
    const sgMail = require('@sendgrid/mail')

    

    const data = JSON.parse(event.body);

    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    const msg = {
    to: 'isharasamuditha@gmail.com', // Change to your recipient
    from: 'isharasamuditha@gmail.com', // Change to your verified sender
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: `<ul>
            <li> ${data.name} </li>
            <li> ${data.email} </li>
            </ul>`,  
    }
     sgMail.send(msg).then(() => {
        callback(null, {
            statusCode: 200,
            body: JSON.stringify({ feedback: 'Email sent successfully' , event}),
        });
    }).catch((error) => {
        console.error('ERR' + error);
        
    })
}
