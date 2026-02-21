// src/data/courses-lise.js
export const courses = [
  // ===== İstanbul Avrupa Yakası YAKASI =====
  {
    slug: "tyt-ayt-matematik-geometri-avrupa",
    title: "TYT-AYT Matematik, Geometri",
    category: "Sınav Hazırlık",
    breadcrumb: "Sınav Hazırlık > Matematik",
    image: "/images/sinav-hazirlik.jpg",
    instructors: [
      {
        slug: "mahmut-cevher",
        name: "Mahmut Cevher",
        since: 2012,
        rating: 4.9,
        privatePrice: 3500,
        groupPrice: 1750,
        corporate: true,
        online: true,
        location: "İstanbul Avrupa Yakası",
        bio: "Matematik ve geometri alanında 12 yıllık deneyim, TYT-AYT sınavlarına hazırlık uzmanı.",
        specialties: ["TYT Matematik", "AYT Matematik", "Geometri"]
      },
      {
        slug: "yalcin-kucukay",
        name: "Yalçın Küçükay",
        since: 2013,
        rating: 4.8,
        privatePrice: 3600,
        groupPrice: 1800,
        corporate: false,
        online: true,
        location: "İstanbul Anadolu Yakası",
        bio: "Matematik öğretmeni, 10 yıldır özel ders veriyor.",
        specialties: ["TYT Matematik", "AYT Matematik", "Geometri"]
      },
      {
        slug: "riza-yucesoy",
        name: "Rıza Yücesoy",
        since: 2014,
        rating: 4.7,
        privatePrice: 3200,
        groupPrice: 1600,
        corporate: true,
        online: false,
        location: "Ankara",
        bio: "Ankara'da matematik özel ders, KPSS ve TYT-AYT.",
        specialties: ["TYT Matematik", "AYT Matematik", "KPSS Matematik"]
      },
      {
        slug: "gulten-soylu",
        name: "Gülten Soylu",
        since: 2015,
        rating: 4.6,
        privatePrice: 3200,
        groupPrice: 1600,
        corporate: false,
        online: true,
        location: "Adana",
        bio: "Adana'da matematik özel ders, geometri uzmanı.",
        specialties: ["TYT Matematik", "AYT Matematik", "Geometri"]
      }
    ],
    description: "TYT ve AYT matematik ile geometri konularında uzman eğitmenlerle birebir ders imkanı.",
    whyTake: "Sınavlarda başarıyı yakalamak ve eksiklerinizi tamamlamak için.",
    employmentAreas: "Üniversite sınavları, KPSS, okul derslerine destek.",
    requirements: "Temel matematik bilgisi önerilir."
  },
  {
    slug: "tyt-ayt-edebiyat-turkce-avrupa",
    title: "TYT-AYT Edebiyat, Türkçe",
    category: "Sınav Hazırlık",
    breadcrumb: "Sınav Hazırlık > Türkçe",
    image: "/images/sinav-hazirlik.jpg",
    instructors: [
      {
        slug: "senem-gurel",
        name: "Senem Gürel",
        since: 2013,
        rating: 4.7,
        privatePrice: 2800,
        groupPrice: 1400,
        corporate: true,
        online: true,
        location: "İstanbul Avrupa Yakası",
        bio: "Türkçe ve edebiyat öğretmeni, 10 yıldır sınavlara hazırlık.",
        specialties: ["TYT Türkçe", "AYT Edebiyat"]
      },
      {
        slug: "fugen-arda",
        name: "Fügen Arda",
        since: 2014,
        rating: 4.6,
        privatePrice: 2900,
        groupPrice: 1450,
        corporate: false,
        online: true,
        location: "İstanbul Anadolu Yakası",
        bio: "Edebiyat ve paragraf teknikleri uzmanı.",
        specialties: ["TYT Türkçe", "AYT Edebiyat", "Paragraf Teknikleri"]
      },
      {
        slug: "pembe-savas",
        name: "Pembe Savaş",
        since: 2015,
        rating: 4.5,
        privatePrice: 2700,
        groupPrice: 1350,
        corporate: true,
        online: false,
        location: "Ankara",
        bio: "KPSS ve TYT-AYT Türkçe özel ders.",
        specialties: ["TYT Türkçe", "AYT Edebiyat", "KPSS Türkçe"]
      },
      {
        slug: "selda-goksu",
        name: "Selda Göksu",
        since: 2016,
        rating: 4.4,
        privatePrice: 2700,
        groupPrice: 1350,
        corporate: false,
        online: true,
        location: "Malatya",
        bio: "Malatya'da Türkçe ve edebiyat dersleri.",
        specialties: ["TYT Türkçe", "AYT Edebiyat"]
      }
    ],
    description: "TYT Türkçe ve AYT edebiyat konularında uzman eğitmenlerle birebir ders.",
    whyTake: "Sınavlarda yüksek netler için.",
    employmentAreas: "Üniversite sınavları, KPSS.",
    requirements: "Temel dil bilgisi yeterli."
  },
  {
    slug: "tyt-ayt-fizik-avrupa",
    title: "TYT-AYT Fizik",
    category: "Sınav Hazırlık",
    breadcrumb: "Sınav Hazırlık > Fizik",
    image: "/images/sinav-hazirlik.jpg",
    instructors: [
      {
        slug: "tanju-bolukbasi",
        name: "Tanju Bölükbaşı",
        since: 2011,
        rating: 4.8,
        privatePrice: 3200,
        groupPrice: 1600,
        corporate: true,
        online: true,
        location: "İstanbul Avrupa Yakası",
        bio: "Fizik öğretmeni, 12 yıldır TYT-AYT hazırlık.",
        specialties: ["TYT Fizik", "AYT Fizik", "9-10-11-12 Sınıf Destek"]
      },
      {
        slug: "nusret-firat",
        name: "Nusret Fırat",
        since: 2012,
        rating: 4.7,
        privatePrice: 3300,
        groupPrice: 1650,
        corporate: false,
        online: true,
        location: "İstanbul Anadolu Yakası",
        bio: "Fizik alanında doktora, özel ders deneyimi.",
        specialties: ["TYT Fizik", "AYT Fizik", "9-10-11-12 Sınıf Destek"]
      },
      {
        slug: "turgay-serdar",
        name: "Turgay Serdar",
        since: 2013,
        rating: 4.6,
        privatePrice: 3000,
        groupPrice: 1500,
        corporate: true,
        online: false,
        location: "Ankara",
        bio: "Ankara'da fizik özel ders.",
        specialties: ["TYT Fizik", "AYT Fizik", "9-10-11-12 Sınıf Destek"]
      },
      {
        slug: "bulent-ozyurt",
        name: "Bülent Özyurt",
        since: 2014,
        rating: 4.5,
        privatePrice: 3000,
        groupPrice: 1500,
        corporate: false,
        online: true,
        location: "Adana",
        bio: "Adana'da fizik dersleri.",
        specialties: ["TYT Fizik", "AYT Fizik", "9-10-11-12 Sınıf Destek"]
      }
    ],
    description: "TYT ve AYT fizik konularında uzman eğitmenlerle birebir ders.",
    whyTake: "Fizik netlerinizi artırın.",
    employmentAreas: "Üniversite sınavları, mühendislik hedefleyenler.",
    requirements: "Temel fizik bilgisi."
  },
  {
    slug: "tyt-ayt-kimya-avrupa",
    title: "TYT-AYT Kimya",
    category: "Sınav Hazırlık",
    breadcrumb: "Sınav Hazırlık > Kimya",
    image: "/images/sinav-hazirlik.jpg",
    instructors: [
      {
        slug: "cemile-zorlu",
        name: "Cemile Zorlu",
        since: 2012,
        rating: 4.7,
        privatePrice: 3200,
        groupPrice: 1600,
        corporate: true,
        online: true,
        location: "İstanbul Avrupa Yakası",
        bio: "Kimya öğretmeni, 11 yıllık deneyim.",
        specialties: ["TYT Kimya", "AYT Kimya", "9-10-11-12 Sınıf Destek"]
      },
      {
        slug: "ayla-somersan",
        name: "Ayla Somersan",
        since: 2013,
        rating: 4.6,
        privatePrice: 3300,
        groupPrice: 1650,
        corporate: false,
        online: true,
        location: "İstanbul Anadolu Yakası",
        bio: "Kimya alanında uzman, özel ders.",
        specialties: ["TYT Kimya", "AYT Kimya", "9-10-11-12 Sınıf Destek"]
      },
      {
        slug: "sirin-erol",
        name: "Şirin Erol",
        since: 2014,
        rating: 4.5,
        privatePrice: 3000,
        groupPrice: 1500,
        corporate: true,
        online: false,
        location: "İzmir",
        bio: "İzmir'de kimya dersleri.",
        specialties: ["TYT Kimya", "AYT Kimya", "9-10-11-12 Sınıf Destek"]
      }
    ],
    description: "TYT ve AYT kimya konularında birebir ders.",
    whyTake: "Kimyada başarı için.",
    employmentAreas: "Üniversite sınavları, tıp ve diş hekimliği hedefleyenler.",
    requirements: "Temel kimya bilgisi."
  },
  {
    slug: "tyt-ayt-biyoloji-avrupa",
    title: "TYT-AYT Biyoloji",
    category: "Sınav Hazırlık",
    breadcrumb: "Sınav Hazırlık > Biyoloji",
    image: "/images/sinav-hazirlik.jpg",
    instructors: [
      {
        slug: "ercan-sumer",
        name: "Ercan Sümer",
        since: 2013,
        rating: 4.6,
        privatePrice: 3100,
        groupPrice: 1550,
        corporate: true,
        online: true,
        location: "İstanbul Avrupa Yakası",
        bio: "Biyoloji öğretmeni, 10 yıldır özel ders.",
        specialties: ["TYT Biyoloji", "AYT Biyoloji", "9-10-11-12 Sınıf Destek"]
      },
      {
        slug: "ozkan-okan",
        name: "Özkan Okan",
        since: 2014,
        rating: 4.5,
        privatePrice: 3200,
        groupPrice: 1600,
        corporate: false,
        online: true,
        location: "İstanbul Anadolu Yakası",
        bio: "Biyoloji alanında yüksek lisans, özel ders.",
        specialties: ["TYT Biyoloji", "AYT Biyoloji", "9-10-11-12 Sınıf Destek"]
      },
      {
        slug: "kaya-ozden",
        name: "Kaya Özden",
        since: 2015,
        rating: 4.4,
        privatePrice: 3000,
        groupPrice: 1500,
        corporate: true,
        online: false,
        location: "İzmir",
        bio: "İzmir'de biyoloji dersleri.",
        specialties: ["TYT Biyoloji", "AYT Biyoloji", "9-10-11-12 Sınıf Destek"]
      },
      {
        slug: "necla-inci",
        name: "Necla İnci",
        since: 2016,
        rating: 4.3,
        privatePrice: 2900,
        groupPrice: 1450,
        corporate: false,
        online: true,
        location: "Konya",
        bio: "Konya'da biyoloji özel ders.",
        specialties: ["TYT Biyoloji", "AYT Biyoloji", "9-10-11-12 Sınıf Destek"]
      }
    ],
    description: "TYT ve AYT biyoloji konularında uzman eğitmenler.",
    whyTake: "Biyoloji netlerinizi artırın.",
    employmentAreas: "Üniversite sınavları, sağlık bölümleri.",
    requirements: "Temel biyoloji bilgisi."
  },
  {
    slug: "tyt-ayt-tarih-cografya-avrupa",
    title: "TYT-AYT Tarih, Coğrafya",
    category: "Sınav Hazırlık",
    breadcrumb: "Sınav Hazırlık > Sosyal Bilimler",
    image: "/images/sinav-hazirlik.jpg",
    instructors: [
      {
        slug: "sebnem-kurtoglu",
        name: "Şebnem Kurtoğlu",
        since: 2012,
        rating: 4.7,
        privatePrice: 3000,
        groupPrice: 1500,
        corporate: true,
        online: true,
        location: "İstanbul Avrupa Yakası",
        bio: "Tarih ve coğrafya öğretmeni, KPSS deneyimi.",
        specialties: ["TYT Tarih", "AYT Tarih", "KPSS Tarih"]
      },
      {
        slug: "gunes-karabuda",
        name: "Güneş Karabuda",
        since: 2013,
        rating: 4.6,
        privatePrice: 3100,
        groupPrice: 1550,
        corporate: false,
        online: true,
        location: "İstanbul Anadolu Yakası",
        bio: "Tarih, coğrafya ve KPSS Coğrafya dersleri.",
        specialties: ["TYT Tarih", "AYT Tarih", "KPSS Coğrafya"]
      },
      {
        slug: "nedim-altin",
        name: "Nedim Altın",
        since: 2014,
        rating: 4.5,
        privatePrice: 2800,
        groupPrice: 1400,
        corporate: true,
        online: false,
        location: "Bursa",
        bio: "Bursa'da tarih özel ders.",
        specialties: ["TYT Tarih", "AYT Tarih", "KPSS Tarih"]
      },
      {
        slug: "aysun-gursoy",
        name: "Aysun Gürsoy",
        since: 2015,
        rating: 4.4,
        privatePrice: 2800,
        groupPrice: 1400,
        corporate: false,
        online: true,
        location: "Bursa",
        bio: "Coğrafya ve KPSS Coğrafya dersleri.",
        specialties: ["TYT Coğrafya", "AYT Coğrafya", "KPSS Coğrafya"]
      },
      {
        slug: "vedat-sahbaz",
        name: "Vedat Şahbaz",
        since: 2016,
        rating: 4.3,
        privatePrice: 2600,
        groupPrice: 1300,
        corporate: true,
        online: true,
        location: "Konya",
        bio: "Konya'da tarih ve coğrafya dersleri.",
        specialties: ["TYT Tarih", "TYT Coğrafya"]
      }
    ],
    description: "TYT ve AYT tarih, coğrafya konularında birebir ders.",
    whyTake: "Sosyal bilimler netlerinizi yükseltin.",
    employmentAreas: "Üniversite sınavları, KPSS.",
    requirements: "Temel bilgi yeterli."
  },
  {
    slug: "kpss-genel-yetenek-genel-kultur-egitim-bilimleri-avrupa",
    title: "KPSS Genel Yetenek-Genel Kültür, Eğitim Bilimleri",
    category: "Sınav Hazırlık",
    breadcrumb: "Sınav Hazırlık > KPSS",
    image: "/images/sinav-hazirlik.jpg",
    instructors: [
      {
        slug: "levent-dirim",
        name: "Levent Dirim",
        since: 2010,
        rating: 4.9,
        privatePrice: 4500,
        groupPrice: 2250,
        corporate: true,
        online: true,
        location: "İstanbul Avrupa Yakası",
        bio: "KPSS alanında 15 yıllık deneyim, eğitim bilimleri uzmanı.",
        specialties: ["KPSS Genel Yetenek", "KPSS Genel Kültür", "Eğitim Bilimleri"]
      },
      {
        slug: "mesut-ors",
        name: "Mesut Örs",
        since: 2011,
        rating: 4.8,
        privatePrice: 4200,
        groupPrice: 2100,
        corporate: false,
        online: true,
        location: "İstanbul Anadolu Yakası",
        bio: "KPSS matematik, geometri ve genel yetenek.",
        specialties: ["KPSS Matematik", "KPSS Geometri", "Genel Yetenek"]
      },
      {
        slug: "suleyman-ege",
        name: "Süleyman Ege",
        since: 2012,
        rating: 4.7,
        privatePrice: 4800,
        groupPrice: 2400,
        corporate: true,
        online: false,
        location: "Eskişehir",
        bio: "Eğitim bilimleri (gelişim psikolojisi, öğrenme psikolojisi) uzmanı.",
        specialties: ["KPSS Eğitim Bilimleri"]
      },
      {
        slug: "ismail-ozguven",
        name: "İsmail Özgüven",
        since: 2013,
        rating: 4.6,
        privatePrice: 4000,
        groupPrice: 2000,
        corporate: false,
        online: true,
        location: "Kayseri",
        bio: "KPSS matematik ve geometri dersleri.",
        specialties: ["KPSS Matematik", "KPSS Geometri"]
      }
    ],
    description: "KPSS'ye hazırlık için genel yetenek, genel kültür ve eğitim bilimleri dersleri.",
    whyTake: "Kamu personeli alım sınavında başarı için.",
    employmentAreas: "KPSS, memurluk.",
    requirements: "Lisans veya önlisans mezunu."
  },
  {
    slug: "yds-yokdil-dil-sinavi-ingilizce-avrupa",
    title: "YDS, YÖKDİL, Dil Sınavına Hazırlık (İngilizce)",
    category: "Dil Sınavı",
    breadcrumb: "Dil Sınavı > İngilizce",
    image: "/images/sinav-hazirlik.jpg",
    instructors: [
      {
        slug: "nergis-ozer",
        name: "Nergis Özer",
        since: 2012,
        rating: 4.9,
        privatePrice: 5000,
        groupPrice: 2500,
        corporate: true,
        online: true,
        location: "İstanbul Avrupa Yakası",
        bio: "YDS ve YÖKDİL alanında uzman, 12 yıllık deneyim.",
        specialties: ["YDS", "YÖKDİL", "Proficiency"]
      },
      {
        slug: "canan-ozden",
        name: "Canan Özden",
        since: 2013,
        rating: 4.8,
        privatePrice: 4500,
        groupPrice: 2250,
        corporate: false,
        online: true,
        location: "Eskişehir",
        bio: "İngilizce dil sınavlarına hazırlık.",
        specialties: ["YDS", "YÖKDİL", "Proficiency"]
      }
    ],
    description: "YDS, YÖKDİL ve proficiency sınavlarına birebir hazırlık.",
    whyTake: "Dil sınavlarında yüksek puan almak için.",
    employmentAreas: "Akademik kariyer, yüksek lisans, doktora.",
    requirements: "Orta düzey İngilizce."
  },
  {
    slug: "egitim-koclugu-motivasyon-planlama-avrupa",
    title: "Eğitim Koçluğu, Motivasyon ve Planlama",
    category: "Koçluk",
    breadcrumb: "Koçluk > Eğitim Koçluğu",
    image: "/images/sinav-hazirlik.jpg",
    instructors: [
      {
        slug: "kudret-sabanci",
        name: "Kudret Sabancı",
        since: 2014,
        rating: 4.7,
        privatePrice: 4000,
        groupPrice: 2000,
        corporate: true,
        online: true,
        location: "İstanbul Avrupa Yakası",
        bio: "Eğitim koçu, motivasyon ve planlama uzmanı.",
        specialties: ["Eğitim Koçluğu", "Motivasyon", "Planlama"]
      },
      {
        slug: "arda-binyazar",
        name: "Arda Binyazar",
        since: 2015,
        rating: 4.6,
        privatePrice: 4200,
        groupPrice: 2100,
        corporate: false,
        online: true,
        location: "İstanbul Anadolu Yakası",
        bio: "Mesleki yönlendirme ve eğitim koçluğu.",
        specialties: ["Eğitim Koçluğu", "Mesleki Yönlendirme"]
      },
      {
        slug: "berna-koroglu",
        name: "Berna Köroğlu",
        since: 2016,
        rating: 4.5,
        privatePrice: 3800,
        groupPrice: 1900,
        corporate: true,
        online: false,
        location: "Antalya",
        bio: "Sınav kaygısı danışmanlığı ve koçluk.",
        specialties: ["Eğitim Koçluğu", "Sınav Kaygısı Danışmanlığı"]
      },
      {
        slug: "alev-onder",
        name: "Alev Önder",
        since: 2017,
        rating: 4.4,
        privatePrice: 3500,
        groupPrice: 1750,
        corporate: false,
        online: true,
        location: "Samsun",
        bio: "Ders çalışma programı ve koçluk.",
        specialties: ["Eğitim Koçluğu", "Ders Çalışma Programı"]
      }
    ],
    description: "Eğitim koçluğu ile hedeflerinize ulaşın, motivasyonunuzu artırın.",
    whyTake: "Sınav sürecinde rehberlik ve destek için.",
    employmentAreas: "Her yaştan öğrenci.",
    requirements: "Ön koşul yok."
  },
  {
    slug: "sinif-destek-tum-dersler-avrupa",
    title: "9-10-11-12. Sınıf Destek (Tüm Dersler)",
    category: "Okul Derslerine Destek",
    breadcrumb: "Okul Desteği > Lise",
    image: "/images/sinav-hazirlik.jpg",
    instructors: [
      {
        slug: "songul-ekin",
        name: "Songül Ekin",
        since: 2015,
        rating: 4.5,
        privatePrice: 2500,
        groupPrice: 1250,
        corporate: true,
        online: true,
        location: "İstanbul Avrupa Yakası",
        bio: "Lise derslerine destek, tüm dersler.",
        specialties: ["9-10-11-12 Sınıf Tüm Dersler"]
      },
      {
        slug: "ergun-toy",
        name: "Ergün Toy",
        since: 2016,
        rating: 4.4,
        privatePrice: 2200,
        groupPrice: 1100,
        corporate: false,
        online: true,
        location: "Trabzon",
        bio: "Trabzon'da lise derslerine destek.",
        specialties: ["9-10-11-12 Sınıf Tüm Dersler"]
      }
    ],
    description: "Lise 9,10,11 ve 12. sınıf öğrencilerine tüm derslerde destek.",
    whyTake: "Okul derslerinde başarıyı yakalamak için.",
    employmentAreas: "Lise öğrencileri.",
    requirements: "Ön koşul yok."
  },
  {
    slug: "sinif-destek-sayisal-anadolu",
    title: "9-10-11-12. Sınıf Destek (Sayısal Dersler)",
    category: "Okul Derslerine Destek",
    breadcrumb: "Okul Desteği > Sayısal",
    image: "/images/sinav-hazirlik.jpg",
    instructors: [
      {
        slug: "belma-sahiner",
        name: "Belma Şahiner",
        since: 2014,
        rating: 4.6,
        privatePrice: 2600,
        groupPrice: 1300,
        corporate: true,
        online: true,
        location: "İstanbul Anadolu Yakası",
        bio: "Sayısal derslerde uzman, matematik-fizik-kimya-biyoloji.",
        specialties: ["Sayısal Dersler", "9-10-11-12 Sınıf Destek"]
      }
    ],
    description: "Sayısal alanındaki lise öğrencilerine matematik, fizik, kimya, biyoloji derslerinde destek.",
    whyTake: "Sayısal derslerde netlerinizi artırın.",
    employmentAreas: "Sayısal bölüm öğrencileri.",
    requirements: "Temel bilgi."
  },
  {
    slug: "sinif-destek-esit-agirlik-antalya",
    title: "9-10-11-12. Sınıf Destek (Eşit Ağırlık)",
    category: "Okul Derslerine Destek",
    breadcrumb: "Okul Desteği > Eşit Ağırlık",
    image: "/images/sinav-hazirlik.jpg",
    instructors: [
      {
        slug: "ferit-durak",
        name: "Ferit Durak",
        since: 2015,
        rating: 4.5,
        privatePrice: 2300,
        groupPrice: 1150,
        corporate: false,
        online: true,
        location: "Antalya",
        bio: "Eşit ağırlık derslerine destek (Türkçe, matematik, tarih, coğrafya).",
        specialties: ["Eşit Ağırlık Dersleri", "9-10-11-12 Sınıf Destek"]
      }
    ],
    description: "Eşit ağırlık öğrencilerine yönelik ders desteği.",
    whyTake: "TM bölümünde başarı için.",
    employmentAreas: "Eşit ağırlık öğrencileri.",
    requirements: "Temel bilgi."
  },
  {
    slug: "almanca-dil-sinavi-hazirlik-istanbul-anadolu",
    title: "Almanca Dil Sınavı Hazırlık (Goethe, TestDaF)",
    category: "Dil Sınavı",
    breadcrumb: "Dil Sınavı > Almanca",
    image: "/images/sinav-hazirlik.jpg",
    instructors: [
      {
        slug: "itir-eser",
        name: "Itır Eser",
        since: 2013,
        rating: 4.9,
        privatePrice: 5500,
        groupPrice: 2750,
        corporate: true,
        online: true,
        location: "İstanbul Anadolu Yakası",
        bio: "Almanca dil sınavlarına hazırlık, Goethe ve TestDaF.",
        specialties: ["Almanca", "Goethe", "TestDaF"]
      }
    ],
    description: "Goethe ve TestDaF sınavlarına birebir hazırlık.",
    whyTake: "Almanya'da eğitim veya kariyer için.",
    employmentAreas: "Almanca dil sınavları.",
    requirements: "Temel Almanca bilgisi."
  },
  {
    slug: "fransizca-dil-sinavi-hazirlik-gaziantep",
    title: "Fransızca Dil Sınavı Hazırlık (DELF, DALF)",
    category: "Dil Sınavı",
    breadcrumb: "Dil Sınavı > Fransızca",
    image: "/images/sinav-hazirlik.jpg",
    instructors: [
      {
        slug: "jale-baysal",
        name: "Jale Baysal",
        since: 2012,
        rating: 4.9,
        privatePrice: 5200,
        groupPrice: 2600,
        corporate: false,
        online: true,
        location: "Gaziantep",
        bio: "Fransızca DELF ve DALF sınavlarına hazırlık.",
        specialties: ["Fransızca", "DELF", "DALF"]
      }
    ],
    description: "DELF ve DALF sınavlarına birebir hazırlık.",
    whyTake: "Fransızca dil belgesi almak için.",
    employmentAreas: "Fransızca dil sınavları.",
    requirements: "Temel Fransızca bilgisi."
  }
];