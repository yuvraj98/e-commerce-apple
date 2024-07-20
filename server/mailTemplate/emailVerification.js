const otpTemplate = (otp) => {
    return `<!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <title>OTP Verification Email</title>
      <style>
        body {
          background-color: #ffffff;
          font-family: Arial, sans-serif;
          font-size: 16px;
          line-height: 1.4;
          color: #333333;
          margin: 0;
          padding: 0;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          text-align: center;
        }
        .message {
          font-size: 18px;
          font-weight: bold;
          margin-bottom: 20px;
        }
        .body {
          font-size: 16px;
          margin-bottom: 20px;
        }
        .highlight {
          font-weight: bold;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="message">OTP Verification Email</div>
        <div class="body">
          <p>Dear User,</p>
          <p>Thank you for registering with CarryCart. To complete your registration, please use the following OTP to verify your account:</p>
          <h2 class="highlight">${otp}</h2>
          <p>This OTP is valid for 5 minutes. If you did not request this verification, please disregard this email.</p>
        </div>
        <div class="support">If you have any questions or need assistance, please feel free to reach out to us at <a href="mailto:info@ccart.com">info@ccart.com</a>. We are here to help!</div>
      </div>
    </body>
    </html>`;
  };
  
  module.exports = otpTemplate;
  