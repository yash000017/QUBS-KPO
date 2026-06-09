// Copy this file to emailjs.config.js and fill in your EmailJS credentials.
// Setup guide: https://www.emailjs.com/docs/
//
// 1. Create a free account at https://www.emailjs.com
// 2. Email Services → Add Gmail → connect quantum-kpo@gmail.com → copy Service ID
// 3. Email Templates → create two templates (see below) → copy Template IDs
// 4. Account → API Keys → copy Public Key
//
// BOOKING TEMPLATE variables:
//   {{service}}, {{date}}, {{time}}, {{client_name}}, {{client_email}},
//   {{company}}, {{phone}}, {{notes}}, {{to_email}}
//
// CONTACT TEMPLATE variables:
//   {{first_name}}, {{last_name}}, {{client_name}}, {{client_email}},
//   {{company}}, {{service}}, {{message}}, {{to_email}}

window.EMAILJS_CONFIG = {
  publicKey: 'YOUR_PUBLIC_KEY',
  serviceId: 'YOUR_SERVICE_ID',
  templates: {
    booking: 'YOUR_BOOKING_TEMPLATE_ID',
    contact: 'YOUR_CONTACT_TEMPLATE_ID'
  },
  toEmail: 'quantum-kpo@gmail.com'
};
