const mongoose = require('mongoose');
const mailSender = require('../utils/mailSender');
const emailTemplate = require('../mailTemplate/emailVerification');

const OTPSchema = new mongoose.Schema({
  email: { type: String, required: true },
  otp: { type: String, required: true },
  createdAt: { type: Date, default: Date.now, expires: 60 * 5 }, // 5 minutes expiration
});

// Define a post-save hook to send email after the document has been saved
OTPSchema.pre('save', async function (next) {
  if (this.isNew) {
    await mailSender(this.email, 'Verification Email', emailTemplate(this.otp));
  }
  next();
});

const OTP = mongoose.model('OTP', OTPSchema);

module.exports = OTP;
