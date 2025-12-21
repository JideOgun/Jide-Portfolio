# EmailJS Setup Instructions

To enable the contact form to send emails, you need to set up EmailJS (free service).

## Steps to Set Up EmailJS:

1. **Create an EmailJS account:**

   - Go to https://www.emailjs.com/
   - Sign up for a free account (allows 200 emails/month)

2. **Add an Email Service:**

   - Go to "Email Services" in your dashboard
   - Click "Add New Service"
   - **Recommended:** Choose "EmailJS" (their built-in service) - easiest option, no API setup needed
   - **Alternative:** Choose "Outlook" or "SendGrid" - usually easier than Gmail
   - **If using Gmail:** You may need to:
     - Go to Google Cloud Console (console.cloud.google.com)
     - Enable Gmail API
     - Set up OAuth 2.0 credentials with proper scopes
     - This can be complicated - consider using EmailJS's built-in service instead

3. **Create/Update your Email Template:**

   - Go to "Email Templates" in your dashboard
   - Click on your template (template_p0in30m) to edit it
   - **Subject Line:** `New Contact Form Message from {{from_name}}`
   - **Email Body:** Use this template structure (make sure to include ALL fields):

     ```
     You have a new message from your portfolio contact form!

     ──────────────────────────────────────────────
     SENDER INFORMATION:
     ──────────────────────────────────────────────
     Name: {{from_name}}
     Email: {{from_email}}

     ──────────────────────────────────────────────
     MESSAGE:
     ──────────────────────────────────────────────
     {{message}}

     ──────────────────────────────────────────────
     Reply to: {{reply_to}}
     ──────────────────────────────────────────────
     ```

   - **Important:** Make sure "Reply To" field in EmailJS is set to: `{{reply_to}}`
   - Save the template

4. **Get your Public Key:**

   - Go to "Account" → "General"
   - Copy your Public Key

5. **Update the Contact.js file:**
   - Open `src/components/Contact.js`
   - Replace these three values:
     - `EMAILJS_SERVICE_ID` - Your Service ID (found in Email Services)
     - `EMAILJS_TEMPLATE_ID` - Your Template ID (found in Email Templates)
     - `EMAILJS_PUBLIC_KEY` - Your Public Key (found in Account → General)

## Example:

```javascript
const EMAILJS_SERVICE_ID = "service_abc123";
const EMAILJS_TEMPLATE_ID = "template_xyz789";
const EMAILJS_PUBLIC_KEY = "abc123XYZ789";
```

That's it! Your contact form will now send emails directly to your inbox.
