// src/pages/api/kayit.ts - GEÇİCİ ÇÖZÜM (HEMEN ÇALIŞIR)
import type { APIRoute } from 'astro';
import { Resend } from 'resend';

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.formData();
    const formTipi = formData.get('formTipi')?.toString();
    
    const adSoyad = formData.get('adSoyad')?.toString();
    const telefon = formData.get('telefon')?.toString();
    const email = formData.get('email')?.toString();
    
    if (!adSoyad || !telefon) {
      return new Response(
        JSON.stringify({ error: 'Ad soyad ve telefon zorunludur.' }),
        { status: 400 }
      );
    }
    
    let emailContent = '';
    let konu = '';
    
    if (formTipi === 'ders') {
      const kategori = formData.get('kategori')?.toString();
      const ders = formData.get('ders')?.toString();
      const egitmen = formData.get('egitmen')?.toString();
      const egitimTuru = formData.get('egitimTuru')?.toString();
      const sehir = formData.get('sehir')?.toString();
      
      const egitimTuruMetin = {
        'yuz-yuze-birebir': 'Yüz yüze - Birebir Özel Ders',
        'yuz-yuze-grup': 'Yüz yüze - Grup Dersi',
        'online-birebir': 'Online - Birebir Özel Ders',
        'online-grup': 'Online - Grup Dersi'
      }[egitimTuru || ''] || egitimTuru;
      
      konu = `[DERS KAYDI] ${adSoyad} - ${kategori}`;
      
      emailContent = `
        <h2>Yeni Ders Kaydı</h2>
        <p><strong>Ad Soyad:</strong> ${adSoyad}</p>
        <p><strong>Telefon:</strong> ${telefon}</p>
        ${email ? `<p><strong>E-posta:</strong> ${email}</p>` : ''}
        <p><strong>Ders Kategorisi:</strong> ${kategori}</p>
        <p><strong>Ders Adı:</strong> ${ders || 'Belirtilmemiş'}</p>
        <p><strong>Eğitmen:</strong> ${egitmen || 'Belirtilmemiş'}</p>
        <p><strong>Eğitim Türü:</strong> ${egitimTuruMetin}</p>
        <p><strong>Eğitmenin Şehri:</strong> ${sehir}</p>
        <hr>
        <p><strong>Tarih:</strong> ${new Date().toLocaleString('tr-TR')}</p>
        <p><strong>IP:</strong> ${request.headers.get('x-forwarded-for') || 'Bilinmiyor'}</p>
      `;
      
    } else {
      const konuSecim = formData.get('konu')?.toString();
      const mesaj = formData.get('mesaj')?.toString();
      
      if (!mesaj) {
        return new Response(
          JSON.stringify({ error: 'Mesaj zorunludur.' }),
          { status: 400 }
        );
      }
      
      konu = `[İLETİŞİM] ${adSoyad} - ${konuSecim}`;
      
      emailContent = `
        <h2>Yeni İletişim Formu Mesajı</h2>
        <p><strong>Ad Soyad:</strong> ${adSoyad}</p>
        <p><strong>Telefon:</strong> ${telefon}</p>
        ${email ? `<p><strong>E-posta:</strong> ${email}</p>` : ''}
        <p><strong>Konu:</strong> ${konuSecim}</p>
        <p><strong>Mesaj:</strong></p>
        <p>${mesaj.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><strong>Tarih:</strong> ${new Date().toLocaleString('tr-TR')}</p>
        <p><strong>IP:</strong> ${request.headers.get('x-forwarded-for') || 'Bilinmiyor'}</p>
      `;
    }
    
    // GEÇİCİ ÇÖZÜM - HEP GMAIL'E GÖNDER
    await resend.emails.send({
        from: 'İstanbul Eğitim Merkezi <form@istanbulegitimmerkezi.com>',
        to: [
            'mehmetfatihakgun@gmail.com',     // HER ZAMAN gmail'e gitsin
            'iletisim@istanbulegitimmerkezi.com' // Yandex'e de gitsin
        ],
        subject: konu,
        html: emailContent
        });
    
    // Kullanıcıya mail (eğer varsa)
    if (email) {
      await resend.emails.send({
        from: 'İstanbul Eğitim Merkezi <onboarding@resend.dev>', // GEÇİCİ
        to: [email],
        subject: 'Başvurunuz Alındı - İstanbul Eğitim Merkezi',
        html: `
          <h2>Merhaba ${adSoyad},</h2>
          <p>Başvurunuz başarıyla alındı.</p>
          <p>Gün içinde sizi bilgilendireceğiz.</p>
          <p>Web sitemiz: <a href="https://istanbulegitimmerkezi.com">istanbulegitimmerkezi.com</a></p>
          <hr>
          <p style="color: #666; font-size: 12px;">İstanbul Eğitim Merkezi</p>
        `
      });
    }
    
    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Başvurunuz alındı! Gün içinde sizi bilgilendireceğiz.' 
      }),
      { status: 200 }
    );
    
  } catch (error) {
    console.error('Form gönderim hatası:', error);
    return new Response(
      JSON.stringify({ error: 'Bir hata oluştu. Lütfen daha sonra tekrar deneyin.' }),
      { status: 500 }
    );
  }
};