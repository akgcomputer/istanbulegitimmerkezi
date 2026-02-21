import { Resend } from 'resend';

const resend = new Resend('re_8gpcWFPq_91fPuvjNVoVCAdP5rQ9KWc6V');

resend.emails.send({
  from: 'onboarding@resend.dev',
  to: 'mehmetfatihakgun@gmail.com',
  subject: 'Test - İstanbul Eğitim Merkezi',
  html: '<h1>Merhaba!</h1><p>Resend test başarılı. 🎉</p>'
}).then(() => {
  console.log('E-posta gönderildi!');
}).catch((error) => {
  console.error('Hata:', error);
});