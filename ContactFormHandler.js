const AWS = require('aws-sdk');

exports.handler = async (event) => {
  const { firstName, lastName, email, subject, message } = JSON.parse(
    event.body
  );

  //Email where I'll receive the contact form data
  const recipientEmail = 'Ryanbegell@outlook.com';

  // SES email parameters
  const params = {
    Source: 'noreply@ryanbegell.com', // My verified SES email
    Destination: { ToAddresses: [recipientEmail] },
    Message: {
      Subject: {
        Data:
          'Portfolio Site Email from ' +
          firstName +
          ' ' +
          lastName +
          ':' +
          subject,
      },
      Body: {
        Text: {
          Data: ` First Name: ${firstName}\nLast Name: ${lastName}\nEmail Address: ${lastName}\n Subject: ${subject}\n Message: ${message}`,
        },
      },
    },
  };

  try {
    //send email
    await ses.sendEmail(emailParams).promise();
    a;
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully' }),
    };
  } catch (error) {
    console.error('Email sending failed:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Failed to send email' }),
    };
  }
};
