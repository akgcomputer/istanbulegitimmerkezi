// src/data/courses-ilkogretim.js

export const courses = [
  {
    slug: "matematik-ozel-dersi",
    title: "Matematik Özel Dersi",
    category: "İlköğretim",
    breadcrumb: "Eğitim > İlköğretim > Matematik",
    image: "/images/ilkogretim.jpg",
    instructors: [
      {
        slug: "adem-oztas",
        name: "Adem Öztaş",
        since: 2015,
        rating: 4.7,
        privatePrice: 900,
        groupPrice: 450,
        corporate: false,
        online: true,
        location: "İstanbul Avrupa Yakası",
        bio: "İlköğretim matematik özel ders, 10 yıllık deneyim.",
        specialties: ["Matematik"]
      },
      {
        slug: "berrin-kuru",
        name: "Berrin Kuru",
        since: 2016,
        rating: 4.5,
        privatePrice: 750,
        groupPrice: 375,
        corporate: false,
        online: true,
        location: "Ankara",
        bio: "Ankara'da matematik özel ders, çocuklarla iletişim güçlü.",
        specialties: ["Matematik"]
      }
    ],
    description: "İlköğretim düzeyinde matematik özel dersi, konulara hakim ve öğrenci odaklı yaklaşım.",
    whyTake: "Matematikte zorlanan öğrenciler için birebir destek.",
    employmentAreas: "Okul derslerine yardımcı, sınav hazırlık.",
    requirements: "İlkokul veya ortaokul öğrencisi olmak."
  },
  {
    slug: "turkce-ozel-dersi",
    title: "Türkçe Özel Dersi",
    category: "İlköğretim",
    breadcrumb: "Eğitim > İlköğretim > Türkçe",
    image: "/images/ilkogretim.jpg",
    instructors: [
      {
        slug: "cetin-aksungur",
        name: "Çetin Aksungur",
        since: 2014,
        rating: 4.8,
        privatePrice: 850,
        groupPrice: 425,
        corporate: false,
        online: true,
        location: "İstanbul Anadolu Yakası",
        bio: "Türkçe öğretmeni, dil bilgisi ve edebiyat dersleri.",
        specialties: ["Türkçe"]
      },
      {
        slug: "dursun-efe",
        name: "Dursun Efe",
        since: 2017,
        rating: 4.4,
        privatePrice: 700,
        groupPrice: 350,
        corporate: false,
        online: true,
        location: "İzmir",
        bio: "İzmir'de Türkçe dersleri, okuma ve anlama becerileri.",
        specialties: ["Türkçe"]
      }
    ],
    description: "Türkçe derslerinde dil bilgisi, okuma anlama ve yazılı anlatım konularında yardımcı.",
    whyTake: "Okul başarısını artırmak ve sınavlara hazırlık.",
    employmentAreas: "Okul müfredatına uygun.",
    requirements: "İlkokul veya ortaokul öğrencisi."
  },
  {
    slug: "fen-bilgisi-ozel-dersi",
    title: "Fen Bilgisi Özel Dersi",
    category: "İlköğretim",
    breadcrumb: "Eğitim > İlköğretim > Fen",
    image: "/images/ilkogretim.jpg",
    instructors: [
      {
        slug: "emine-sinem-kaya",
        name: "Emine Sinem Kaya",
        since: 2014,
        rating: 4.9,
        privatePrice: 950,
        groupPrice: 475,
        corporate: false,
        online: true,
        location: "İstanbul Anadolu Yakası",
        bio: "Fen bilgisi öğretmeni, deneylerle öğretim.",
        specialties: ["Fen"]
      },
      {
        slug: "fikret-ozsahin",
        name: "Fikret Özşahin",
        since: 2016,
        rating: 4.6,
        privatePrice: 800,
        groupPrice: 400,
        corporate: false,
        online: true,
        location: "Bursa",
        bio: "Bursa'da fen bilgisi dersleri, LGS hazırlık.",
        specialties: ["Fen"]
      }
    ],
    description: "Fen bilgisi konularını eğlenceli ve anlaşılır bir şekilde öğrenin.",
    whyTake: "Fen dersindeki zorlukları aşmak ve proje ödevlerine yardım.",
    employmentAreas: "Okul dersleri, LGS fen hazırlık.",
    requirements: "İlkokul veya ortaokul öğrencisi."
  },
  {
    slug: "ingilizce-ozel-dersi",
    title: "İngilizce Özel Dersi",
    category: "İlköğretim",
    breadcrumb: "Eğitim > İlköğretim > İngilizce",
    image: "/images/ilkogretim.jpg",
    instructors: [
      {
        slug: "gulizar-balci",
        name: "Gülizar Balcı",
        since: 2013,
        rating: 4.8,
        privatePrice: 1100,
        groupPrice: 550,
        corporate: false,
        online: true,
        location: "İstanbul Anadolu Yakası",
        bio: "İngilizce öğretmeni, çocuklara yönelik eğlenceli dersler.",
        specialties: ["İngilizce"]
      },
      {
        slug: "huseyin-serhat-pekel",
        name: "Hüseyin Serhat Pekel",
        since: 2015,
        rating: 4.7,
        privatePrice: 950,
        groupPrice: 475,
        corporate: false,
        online: true,
        location: "Antalya",
        bio: "Antalya'da İngilizce özel ders, konuşma ağırlıklı.",
        specialties: ["İngilizce"]
      }
    ],
    description: "İlköğretim İngilizce derslerine yardımcı, temel dil becerileri.",
    whyTake: "Okul İngilizcesini pekiştirmek ve yabancı dil temeli oluşturmak.",
    employmentAreas: "Okul müfredatı, genel İngilizce.",
    requirements: "İlkokul veya ortaokul öğrencisi."
  },
  {
    slug: "sosyal-bilgiler-ozel-dersi",
    title: "Sosyal Bilgiler Özel Dersi",
    category: "İlköğretim",
    breadcrumb: "Eğitim > İlköğretim > Sosyal",
    image: "/images/ilkogretim.jpg",
    instructors: [
      {
        slug: "isil-ovgun",
        name: "Işıl Övgün",
        since: 2015,
        rating: 4.6,
        privatePrice: 800,
        groupPrice: 400,
        corporate: false,
        online: true,
        location: "İstanbul Anadolu Yakası",
        bio: "Sosyal bilgiler öğretmeni, harita ve tarih konularında uzman.",
        specialties: ["Sosyal Bilgiler"]
      },
      {
        slug: "ibrahim-eser",
        name: "İbrahim Eser",
        since: 2017,
        rating: 4.4,
        privatePrice: 650,
        groupPrice: 325,
        corporate: false,
        online: true,
        location: "Eskişehir",
        bio: "Eskişehir'de sosyal bilgiler dersleri, etkinliklerle öğretim.",
        specialties: ["Sosyal Bilgiler"]
      }
    ],
    description: "Sosyal bilgiler derslerinde tarih, coğrafya ve vatandaşlık konuları.",
    whyTake: "Sosyal bilgilerde başarıyı artırmak ve sınavlara hazırlık.",
    employmentAreas: "Okul dersleri, LGS sosyal hazırlık.",
    requirements: "İlkokul veya ortaokul öğrencisi."
  },
  {
    slug: "lgs-hazirlik-kursu",
    title: "LGS Hazırlık Kursu",
    category: "İlköğretim",
    breadcrumb: "Eğitim > İlköğretim > LGS",
    image: "/images/ilkogretim.jpg",
    instructors: [
      {
        slug: "kadriye-tanriverdi",
        name: "Kadriye Tanrıverdi",
        since: 2012,
        rating: 4.9,
        privatePrice: 1400,
        groupPrice: 700,
        corporate: false,
        online: true,
        location: "İstanbul Anadolu Yakası",
        bio: "LGS uzmanı, tüm derslerde rehberlik.",
        specialties: ["LGS Hazırlık"]
      },
      {
        slug: "lokman-hekim-yalcin",
        name: "Lokman Hekim Yalçın",
        since: 2014,
        rating: 4.8,
        privatePrice: 1200,
        groupPrice: 600,
        corporate: false,
        online: true,
        location: "Konya",
        bio: "Konya'da LGS hazırlık, matematik ve fen ağırlıklı.",
        specialties: ["LGS Hazırlık"]
      }
    ],
    description: "Liselere Geçiş Sınavı'na yönelik tüm derslerde özel hazırlık.",
    whyTake: "LGS'de başarılı olmak ve hedef liseye yerleşmek.",
    employmentAreas: "LGS sınavına hazırlık.",
    requirements: "8. sınıf öğrencisi olmak."
  },
  {
    slug: "okuma-yazma-ogretimi",
    title: "Okuma Yazma Öğretimi",
    category: "İlköğretim",
    breadcrumb: "Eğitim > İlköğretim > Okuma Yazma",
    image: "/images/ilkogretim.jpg",
    instructors: [
      {
        slug: "mediha-sozen",
        name: "Mediha Sözen",
        since: 2016,
        rating: 4.7,
        privatePrice: 750,
        groupPrice: 375,
        corporate: false,
        online: true,
        location: "İstanbul Anadolu Yakası",
        bio: "Sınıf öğretmeni, okuma yazma güçlüğü çeken çocuklara yardım.",
        specialties: ["Okuma Yazma"]
      },
      {
        slug: "necmiye-ates",
        name: "Necmiye Ateş",
        since: 2017,
        rating: 4.5,
        privatePrice: 600,
        groupPrice: 300,
        corporate: false,
        online: true,
        location: "Adana",
        bio: "Adana'da okuma yazma öğretimi, ses temelli yöntem.",
        specialties: ["Okuma Yazma"]
      }
    ],
    description: "Okuma yazma öğrenmekte zorlanan çocuklara birebir destek.",
    whyTake: "Okul öncesi veya ilkokul 1. sınıf öğrencileri için temel beceri.",
    employmentAreas: "İlkokul müfredatına hazırlık.",
    requirements: "5-7 yaş arası çocuklar."
  },
  {
    slug: "dikte-ve-okuma-becerileri",
    title: "Dikte ve Okuma Becerileri",
    category: "İlköğretim",
    breadcrumb: "Eğitim > İlköğretim > Dikte",
    image: "/images/ilkogretim.jpg",
    instructors: [
      {
        slug: "orhan-gazi-budak",
        name: "Orhan Gazi Budak",
        since: 2015,
        rating: 4.6,
        privatePrice: 700,
        groupPrice: 350,
        corporate: false,
        online: true,
        location: "İstanbul Anadolu Yakası",
        bio: "Türkçe öğretmeni, dikte ve hızlı okuma teknikleri.",
        specialties: ["Dikte"]
      },
      {
        slug: "ozlem-reyhan",
        name: "Özlem Reyhan",
        since: 2016,
        rating: 4.4,
        privatePrice: 550,
        groupPrice: 275,
        corporate: false,
        online: true,
        location: "Samsun",
        bio: "Samsun'da okuma becerileri ve dikte çalışmaları.",
        specialties: ["Dikte"]
      }
    ],
    description: "Dikte çalışmaları ve okuma hızını artırma teknikleri.",
    whyTake: "Okuma ve yazma becerilerini geliştirmek isteyen öğrenciler.",
    employmentAreas: "Okul başarısına katkı.",
    requirements: "İlkokul öğrencisi."
  },
  {
    slug: "zihinden-matematik",
    title: "Zihinden Matematik",
    category: "İlköğretim",
    breadcrumb: "Eğitim > İlköğretim > Zihinden Matematik",
    image: "/images/ilkogretim.jpg",
    instructors: [
      {
        slug: "pasa-yavuz",
        name: "Paşa Yavuz",
        since: 2014,
        rating: 4.7,
        privatePrice: 850,
        groupPrice: 425,
        corporate: false,
        online: true,
        location: "İstanbul Anadolu Yakası",
        bio: "Matematik öğretmeni, zihinden işlem teknikleri.",
        specialties: ["Zihinden Matematik"]
      },
      {
        slug: "rifat-can-ertem",
        name: "Rifat Can Ertem",
        since: 2016,
        rating: 4.5,
        privatePrice: 700,
        groupPrice: 350,
        corporate: false,
        online: true,
        location: "Kayseri",
        bio: "Kayseri'de zihinden matematik ve problem çözme.",
        specialties: ["Zihinden Matematik"]
      }
    ],
    description: "Zihinden hızlı işlem yapma teknikleri ve matematiksel düşünme.",
    whyTake: "Matematikte pratiklik kazanmak ve işlem hızını artırmak.",
    employmentAreas: "Okul dersleri, sınavlar.",
    requirements: "İlkokul veya ortaokul öğrencisi."
  },
  {
    slug: "problem-cozme-teknikleri",
    title: "Problem Çözme Teknikleri",
    category: "İlköğretim",
    breadcrumb: "Eğitim > İlköğretim > Problem Çözme",
    image: "/images/ilkogretim.jpg",
    instructors: [
      {
        slug: "selmin-candan",
        name: "Selmin Candan",
        since: 2014,
        rating: 4.8,
        privatePrice: 900,
        groupPrice: 450,
        corporate: false,
        online: true,
        location: "İstanbul Anadolu Yakası",
        bio: "Matematik öğretmeni, problem çözme stratejileri uzmanı.",
        specialties: ["Problem Çözme"]
      },
      {
        slug: "senol-aslan",
        name: "Şenol Aslan",
        since: 2016,
        rating: 4.6,
        privatePrice: 750,
        groupPrice: 375,
        corporate: false,
        online: true,
        location: "Gaziantep",
        bio: "Gaziantep'te problem çözme ve matematik dersleri.",
        specialties: ["Problem Çözme"]
      }
    ],
    description: "Matematik problemlerini çözme stratejileri ve taktikleri.",
    whyTake: "Sınavlarda karşılaşılan problemleri kolayca çözmek.",
    employmentAreas: "Okul dersleri, LGS hazırlık.",
    requirements: "İlkokul veya ortaokul öğrencisi."
  },
  {
    slug: "paragraf-soru-cozumu",
    title: "Paragraf Soru Çözümü",
    category: "İlköğretim",
    breadcrumb: "Eğitim > İlköğretim > Paragraf",
    image: "/images/ilkogretim.jpg",
    instructors: [
      {
        slug: "tacettin-yildirim",
        name: "Tacettin Yıldırım",
        since: 2015,
        rating: 4.7,
        privatePrice: 800,
        groupPrice: 400,
        corporate: false,
        online: true,
        location: "İstanbul Anadolu Yakası",
        bio: "Türkçe öğretmeni, paragraf teknikleri.",
        specialties: ["Paragraf"]
      },
      {
        slug: "ummugulsum-varol",
        name: "Ümmü Gülsüm Varol",
        since: 2016,
        rating: 4.5,
        privatePrice: 650,
        groupPrice: 325,
        corporate: false,
        online: true,
        location: "Trabzon",
        bio: "Trabzon'da paragraf ve okuma anlama dersleri.",
        specialties: ["Paragraf"]
      }
    ],
    description: "Paragraf sorularını hızlı ve doğru çözme teknikleri.",
    whyTake: "Türkçe sınavlarında paragraf sorularını kaçırmamak.",
    employmentAreas: "Okul sınavları, LGS Türkçe.",
    requirements: "Ortaokul öğrencisi."
  },
  {
    slug: "deneme-sinavi-takibi",
    title: "Deneme Sınavı Takibi",
    category: "İlköğretim",
    breadcrumb: "Eğitim > İlköğretim > Deneme",
    image: "/images/ilkogretim.jpg",
    instructors: [
      {
        slug: "veysel-tuna",
        name: "Veysel Tuna",
        since: 2013,
        rating: 4.8,
        privatePrice: 950,
        groupPrice: 475,
        corporate: false,
        online: true,
        location: "İstanbul Anadolu Yakası",
        bio: "Rehber öğretmen, deneme sınavı analizi ve takip.",
        specialties: ["Deneme Takibi"]
      },
      {
        slug: "yasar-koksal",
        name: "Yaşar Köksal",
        since: 2015,
        rating: 4.6,
        privatePrice: 800,
        groupPrice: 400,
        corporate: false,
        online: true,
        location: "Malatya",
        bio: "Malatya'da deneme sınavı hazırlık ve değerlendirme.",
        specialties: ["Deneme Takibi"]
      }
    ],
    description: "Deneme sınavlarına hazırlık, sonuç analizi ve eksik konuların tespiti.",
    whyTake: "Sınav performansını artırmak için birebir takip.",
    employmentAreas: "LGS ve diğer sınavlar.",
    requirements: "Ortaokul öğrencisi."
  },
  {
    slug: "hizli-okuma-teknikleri",
    title: "Hızlı Okuma Teknikleri",
    category: "İlköğretim",
    breadcrumb: "Eğitim > İlköğretim > Hızlı Okuma",
    image: "/images/ilkogretim.jpg",
    instructors: [
      {
        slug: "zulfikar-demir",
        name: "Zülfikar Demir",
        since: 2014,
        rating: 4.7,
        privatePrice: 850,
        groupPrice: 425,
        corporate: false,
        online: true,
        location: "İstanbul Anadolu Yakası",
        bio: "Hızlı okuma eğitmeni, anlama teknikleri.",
        specialties: ["Hızlı Okuma"]
      },
      {
        slug: "aydan-oncu",
        name: "Aydan Öncü",
        since: 2016,
        rating: 4.5,
        privatePrice: 700,
        groupPrice: 350,
        corporate: false,
        online: true,
        location: "Diyarbakır",
        bio: "Diyarbakır'da hızlı okuma ve anlama dersleri.",
        specialties: ["Hızlı Okuma"]
      }
    ],
    description: "Okuma hızını artırma ve anlama kapasitesini geliştirme.",
    whyTake: "Sınavlarda zaman kazanmak ve daha çok soru çözmek.",
    employmentAreas: "Tüm derslerde okuma becerisi.",
    requirements: "İlkokul ve ortaokul öğrencileri."
  },
  {
    slug: "kodlama-ve-algoritma-ilkokul",
    title: "Kodlama ve Algoritma (İlkokul)",
    category: "İlköğretim",
    breadcrumb: "Eğitim > İlköğretim > Kodlama",
    image: "/images/ilkogretim.jpg",
    instructors: [
      {
        slug: "bekir-sitki-ozsan",
        name: "Bekir Sıtkı Özsan",
        since: 2015,
        rating: 4.8,
        privatePrice: 1000,
        groupPrice: 500,
        corporate: false,
        online: true,
        location: "İstanbul Anadolu Yakası",
        bio: "Bilişim öğretmeni, çocuklara kodlama eğitimi.",
        specialties: ["Kodlama"]
      },
      {
        slug: "canan-sema",
        name: "Canan Sema",
        since: 2016,
        rating: 4.6,
        privatePrice: 850,
        groupPrice: 425,
        corporate: false,
        online: true,
        location: "İzmir",
        bio: "İzmir'de ilkokul düzeyinde kodlama ve algoritma.",
        specialties: ["Kodlama"]
      }
    ],
    description: "İlkokul öğrencilerine yönelik kodlama temelleri ve algoritma mantığı.",
    whyTake: "Geleceğin dili kodlamayı erken yaşta öğrenin.",
    employmentAreas: "Okul projeleri, bilişim dersleri.",
    requirements: "İlkokul öğrencisi."
  },
  {
    slug: "robotik-kodlama-cocuk",
    title: "Robotik Kodlama (Çocuk)",
    category: "İlköğretim",
    breadcrumb: "Eğitim > İlköğretim > Robotik",
    image: "/images/ilkogretim.jpg",
    instructors: [
      {
        slug: "devrim-akar",
        name: "Devrim Akar",
        since: 2014,
        rating: 4.9,
        privatePrice: 1200,
        groupPrice: 600,
        corporate: false,
        online: true,
        location: "İstanbul Anadolu Yakası",
        bio: "Robotik eğitmeni, LEGO Mindstorms ve Arduino.",
        specialties: ["Robotik"]
      },
      {
        slug: "erkan-soyer",
        name: "Erkan Soyer",
        since: 2016,
        rating: 4.7,
        privatePrice: 1050,
        groupPrice: 525,
        corporate: false,
        online: true,
        location: "Eskişehir",
        bio: "Eskişehir'de robotik kodlama atölyeleri.",
        specialties: ["Robotik"]
      }
    ],
    description: "Çocuklar için robotik kodlama, eğlenceli projelerle öğrenme.",
    whyTake: "Teknolojiye ilgi duyan çocuklar için yaratıcı bir alan.",
    employmentAreas: "Okul kulüpleri, yarışmalar.",
    requirements: "İlkokul veya ortaokul öğrencisi."
  },
  {
    slug: "yabanci-dil-almanca",
    title: "Yabancı Dil (Almanca)",
    category: "İlköğretim",
    breadcrumb: "Eğitim > İlköğretim > Almanca",
    image: "/images/ilkogretim.jpg",
    instructors: [
      {
        slug: "fahriye-evren",
        name: "Fahriye Evren",
        since: 2014,
        rating: 4.8,
        privatePrice: 1100,
        groupPrice: 550,
        corporate: false,
        online: true,
        location: "İstanbul Avrupa Yakası",
        bio: "Almanca öğretmeni, çocuklara yönelik oyunlarla dil.",
        specialties: ["Almanca"]
      }
    ],
    description: "İlköğretim öğrencilerine Almanca temel dil eğitimi.",
    whyTake: "Yabancı dil becerisini erken yaşta geliştirmek.",
    employmentAreas: "Okul seçmeli dersleri, temel dil.",
    requirements: "İlkokul veya ortaokul öğrencisi."
  },
  {
    slug: "yabanci-dil-ispanyolca",
    title: "Yabancı Dil (İspanyolca)",
    category: "İlköğretim",
    breadcrumb: "Eğitim > İlköğretim > İspanyolca",
    image: "/images/ilkogretim.jpg",
    instructors: [
      {
        slug: "gaye-suer",
        name: "Gaye Süer",
        since: 2015,
        rating: 4.7,
        privatePrice: 1100,
        groupPrice: 550,
        corporate: false,
        online: true,
        location: "Ankara",
        bio: "İspanyolca öğretmeni, çocuklarla iletişimi güçlü.",
        specialties: ["İspanyolca"]
      }
    ],
    description: "İlköğretim öğrencilerine İspanyolca temel eğitim.",
    whyTake: "Dünya dillerinden birini erken yaşta öğrenin.",
    employmentAreas: "Okul seçmeli dersleri, kültürel gelişim.",
    requirements: "İlkokul veya ortaokul öğrencisi."
  },
  {
    slug: "din-kulturu-ozel-dersi",
    title: "Din Kültürü Özel Dersi",
    category: "İlköğretim",
    breadcrumb: "Eğitim > İlköğretim > Din Kültürü",
    image: "/images/ilkogretim.jpg",
    instructors: [
      {
        slug: "hamit-ozkul",
        name: "Hamit Özkul",
        since: 2015,
        rating: 4.6,
        privatePrice: 700,
        groupPrice: 350,
        corporate: false,
        online: true,
        location: "İstanbul Avrupa Yakası",
        bio: "Din kültürü öğretmeni, ortaokul müfredatı.",
        specialties: ["Din Kültürü"]
      },
      {
        slug: "irmak-bilge",
        name: "Irmak Bilge",
        since: 2016,
        rating: 4.5,
        privatePrice: 600,
        groupPrice: 300,
        corporate: false,
        online: true,
        location: "Konya",
        bio: "Konya'da din kültürü ve ahlak bilgisi dersleri.",
        specialties: ["Din Kültürü"]
      }
    ],
    description: "Din kültürü ve ahlak bilgisi derslerine yardımcı.",
    whyTake: "Okul derslerinde başarıyı artırmak.",
    employmentAreas: "Ortaokul müfredatı.",
    requirements: "Ortaokul öğrencisi."
  },
  {
    slug: "tarih-ozel-dersi",
    title: "Tarih Özel Dersi",
    category: "İlköğretim",
    breadcrumb: "Eğitim > İlköğretim > Tarih",
    image: "/images/ilkogretim.jpg",
    instructors: [
      {
        slug: "ilknur-gungor",
        name: "İlknur Güngör",
        since: 2014,
        rating: 4.7,
        privatePrice: 750,
        groupPrice: 375,
        corporate: false,
        online: true,
        location: "İstanbul Avrupa Yakası",
        bio: "Tarih öğretmeni, sosyal bilgiler derslerine de yardım.",
        specialties: ["Tarih"]
      },
      {
        slug: "julide-ercan",
        name: "Jülide Ercan",
        since: 2016,
        rating: 4.5,
        privatePrice: 650,
        groupPrice: 325,
        corporate: false,
        online: true,
        location: "Bursa",
        bio: "Bursa'da tarih dersleri, LGS hazırlık.",
        specialties: ["Tarih"]
      }
    ],
    description: "Tarih derslerinde kronoloji, olaylar ve kavramlar.",
    whyTake: "Tarih dersini sevdirmek ve başarıyı artırmak.",
    employmentAreas: "Ortaokul sosyal bilgiler, LGS.",
    requirements: "Ortaokul öğrencisi."
  },
  {
    slug: "cografya-ozel-dersi",
    title: "Coğrafya Özel Dersi",
    category: "İlköğretim",
    breadcrumb: "Eğitim > İlköğretim > Coğrafya",
    image: "/images/ilkogretim.jpg",
    instructors: [
      {
        slug: "kemal-ozden",
        name: "Kemal Özden",
        since: 2015,
        rating: 4.6,
        privatePrice: 750,
        groupPrice: 375,
        corporate: false,
        online: true,
        location: "İstanbul Avrupa Yakası",
        bio: "Coğrafya öğretmeni, harita ve iklim konuları.",
        specialties: ["Coğrafya"]
      },
      {
        slug: "leman-sari",
        name: "Leman Sarı",
        since: 2016,
        rating: 4.5,
        privatePrice: 650,
        groupPrice: 325,
        corporate: false,
        online: true,
        location: "Antalya",
        bio: "Antalya'da coğrafya dersleri, görsel materyallerle.",
        specialties: ["Coğrafya"]
      }
    ],
    description: "Coğrafya derslerinde fiziki ve beşeri coğrafya.",
    whyTake: "Sosyal bilgiler dersinde coğrafya konularını pekiştirmek.",
    employmentAreas: "Ortaokul sosyal bilgiler.",
    requirements: "Ortaokul öğrencisi."
  },
  {
    slug: "fizik-ozel-dersi",
    title: "Fizik Özel Dersi",
    category: "İlköğretim",
    breadcrumb: "Eğitim > İlköğretim > Fizik",
    image: "/images/ilkogretim.jpg",
    instructors: [
      {
        slug: "mithat-can",
        name: "Mithat Can",
        since: 2014,
        rating: 4.8,
        privatePrice: 950,
        groupPrice: 475,
        corporate: false,
        online: true,
        location: "İstanbul Avrupa Yakası",
        bio: "Fizik öğretmeni, fen bilgisi derslerine destek.",
        specialties: ["Fizik"]
      },
      {
        slug: "nevin-terzi",
        name: "Nevin Terzi",
        since: 2016,
        rating: 4.6,
        privatePrice: 850,
        groupPrice: 425,
        corporate: false,
        online: true,
        location: "İzmir",
        bio: "İzmir'de fizik dersleri, LGS fen hazırlık.",
        specialties: ["Fizik"]
      }
    ],
    description: "Fizik konularını deneylerle ve örneklerle anlama.",
    whyTake: "Fen bilgisi dersinde fizik konularını kavramak.",
    employmentAreas: "Ortaokul fen bilgisi, LGS.",
    requirements: "Ortaokul öğrencisi."
  },
  {
    slug: "kimya-ozel-dersi",
    title: "Kimya Özel Dersi",
    category: "İlköğretim",
    breadcrumb: "Eğitim > İlköğretim > Kimya",
    image: "/images/ilkogretim.jpg",
    instructors: [
      {
        slug: "orhan-kemal-oz",
        name: "Orhan Kemal Öz",
        since: 2015,
        rating: 4.7,
        privatePrice: 950,
        groupPrice: 475,
        corporate: false,
        online: true,
        location: "İstanbul Avrupa Yakası",
        bio: "Kimya öğretmeni, fen bilgisi dersleri.",
        specialties: ["Kimya"]
      },
      {
        slug: "perihan-ayhan",
        name: "Perihan Ayhan",
        since: 2016,
        rating: 4.5,
        privatePrice: 850,
        groupPrice: 425,
        corporate: false,
        online: true,
        location: "Adana",
        bio: "Adana'da kimya dersleri, deneylerle öğrenme.",
        specialties: ["Kimya"]
      }
    ],
    description: "Kimya konularını periyodik tablo, reaksiyonlar ve deneylerle.",
    whyTake: "Fen bilgisi dersinde kimyayı sevmek.",
    employmentAreas: "Ortaokul fen bilgisi.",
    requirements: "Ortaokul öğrencisi."
  },
  {
    slug: "biyoloji-ozel-dersi",
    title: "Biyoloji Özel Dersi",
    category: "İlköğretim",
    breadcrumb: "Eğitim > İlköğretim > Biyoloji",
    image: "/images/ilkogretim.jpg",
    instructors: [
      {
        slug: "rahmi-saltuk",
        name: "Rahmi Saltuk",
        since: 2014,
        rating: 4.7,
        privatePrice: 900,
        groupPrice: 450,
        corporate: false,
        online: true,
        location: "İstanbul Avrupa Yakası",
        bio: "Biyoloji öğretmeni, canlılar ve ekosistem.",
        specialties: ["Biyoloji"]
      },
      {
        slug: "selcuk-ural",
        name: "Selçuk Ural",
        since: 2016,
        rating: 4.5,
        privatePrice: 800,
        groupPrice: 400,
        corporate: false,
        online: true,
        location: "Samsun",
        bio: "Samsun'da biyoloji dersleri, LGS hazırlık.",
        specialties: ["Biyoloji"]
      }
    ],
    description: "Biyoloji konuları, hücre, organlar, canlı sınıflandırması.",
    whyTake: "Fen bilgisi dersinde biyoloji konularını pekiştirmek.",
    employmentAreas: "Ortaokul fen bilgisi.",
    requirements: "Ortaokul öğrencisi."
  },
  {
    slug: "imam-hatip-dersleri",
    title: "İmam Hatip Dersleri",
    category: "İlköğretim",
    breadcrumb: "Eğitim > İlköğretim > İmam Hatip",
    image: "/images/ilkogretim.jpg",
    instructors: [
      {
        slug: "tulay-ekici",
        name: "Tülay Ekici",
        since: 2014,
        rating: 4.7,
        privatePrice: 800,
        groupPrice: 400,
        corporate: false,
        online: true,
        location: "İstanbul Avrupa Yakası",
        bio: "İmam hatip dersleri, Arapça ve dini bilgiler.",
        specialties: ["İmam Hatip"]
      },
      {
        slug: "ufuk-kilic",
        name: "Ufuk Kılıç",
        since: 2015,
        rating: 4.6,
        privatePrice: 700,
        groupPrice: 350,
        corporate: false,
        online: true,
        location: "Kayseri",
        bio: "Kayseri'de imam hatip müfredatı dersleri.",
        specialties: ["İmam Hatip"]
      }
    ],
    description: "İmam hatip okulları müfredatına uygun dersler.",
    whyTake: "Okul derslerinde başarı için takviye.",
    employmentAreas: "İmam hatip ortaokulu.",
    requirements: "İmam hatip ortaokulu öğrencisi."
  },
  {
    slug: "arapca-ozel-dersi",
    title: "Arapça Özel Dersi",
    category: "İlköğretim",
    breadcrumb: "Eğitim > İlköğretim > Arapça",
    image: "/images/ilkogretim.jpg",
    instructors: [
      {
        slug: "unal-tan",
        name: "Ünal Tan",
        since: 2014,
        rating: 4.8,
        privatePrice: 950,
        groupPrice: 475,
        corporate: false,
        online: true,
        location: "İstanbul Avrupa Yakası",
        bio: "Arapça öğretmeni, imam hatip okullarına yönelik.",
        specialties: ["Arapça"]
      },
      {
        slug: "vildan-gok",
        name: "Vildan Gök",
        since: 2015,
        rating: 4.6,
        privatePrice: 850,
        groupPrice: 425,
        corporate: false,
        online: true,
        location: "Gaziantep",
        bio: "Gaziantep'te Arapça dersleri, dil bilgisi ağırlıklı.",
        specialties: ["Arapça"]
      }
    ],
    description: "Arapça temel dil bilgisi, okuma ve yazma.",
    whyTake: "İmam hatip dersleri veya kişisel ilgi için.",
    employmentAreas: "İmam hatip ortaokulu, lise.",
    requirements: "Ortaokul öğrencisi."
  },
  {
    slug: "kuran-i-kerim-ogretimi",
    title: "Kur'an-ı Kerim Öğretimi",
    category: "İlköğretim",
    breadcrumb: "Eğitim > İlköğretim > Kur'an",
    image: "/images/ilkogretim.jpg",
    instructors: [
      {
        slug: "yuksel-onder",
        name: "Yüksel Önder",
        since: 2013,
        rating: 4.9,
        privatePrice: 800,
        groupPrice: 400,
        corporate: false,
        online: true,
        location: "İstanbul Avrupa Yakası",
        bio: "Kur'an-ı Kerim öğreticisi, tecvit dersleri.",
        specialties: ["Kur'an"]
      },
      {
        slug: "zerrin-akyol",
        name: "Zerrin Akyol",
        since: 2015,
        rating: 4.7,
        privatePrice: 700,
        groupPrice: 350,
        corporate: false,
        online: true,
        location: "Erzurum",
        bio: "Erzurum'da Kur'an-ı Kerim dersleri, elifba öğretimi.",
        specialties: ["Kur'an"]
      }
    ],
    description: "Kur'an-ı Kerim okuma, tecvit ve ezber dersleri.",
    whyTake: "Dini eğitim için temel beceriler.",
    employmentAreas: "Kur'an kursları, okul seçmeli dersler.",
    requirements: "İlkokul ve üzeri."
  },
  {
    slug: "degerler-egitimi",
    title: "Değerler Eğitimi",
    category: "İlköğretim",
    breadcrumb: "Eğitim > İlköğretim > Değerler",
    image: "/images/ilkogretim.jpg",
    instructors: [
      {
        slug: "abidin-ergin",
        name: "Abidin Ergin",
        since: 2015,
        rating: 4.6,
        privatePrice: 650,
        groupPrice: 325,
        corporate: false,
        online: true,
        location: "İstanbul Avrupa Yakası",
        bio: "Değerler eğitimi uzmanı, çocuklara etkinliklerle.",
        specialties: ["Değerler"]
      },
      {
        slug: "birsen-mutlu",
        name: "Birsen Mutlu",
        since: 2016,
        rating: 4.5,
        privatePrice: 550,
        groupPrice: 275,
        corporate: false,
        online: true,
        location: "Konya",
        bio: "Konya'da değerler eğitimi, hikayelerle öğretim.",
        specialties: ["Değerler"]
      }
    ],
    description: "Saygı, sevgi, sorumluluk gibi değerleri kazandırma.",
    whyTake: "Çocukların karakter gelişimine katkı.",
    employmentAreas: "Okul öncesi, ilkokul.",
    requirements: "İlkokul öğrencisi."
  },
  {
    slug: "resim-ve-gorsel-sanatlar",
    title: "Resim ve Görsel Sanatlar",
    category: "İlköğretim",
    breadcrumb: "Eğitim > İlköğretim > Resim",
    image: "/images/ilkogretim.jpg",
    instructors: [
      {
        slug: "celal-silay",
        name: "Celal Sılay",
        since: 2014,
        rating: 4.7,
        privatePrice: 800,
        groupPrice: 400,
        corporate: false,
        online: true,
        location: "İstanbul Avrupa Yakası",
        bio: "Görsel sanatlar öğretmeni, resim ve el işi.",
        specialties: ["Resim"]
      },
      {
        slug: "cagla-ozkan",
        name: "Çağla Özkan",
        since: 2016,
        rating: 4.5,
        privatePrice: 700,
        groupPrice: 350,
        corporate: false,
        online: true,
        location: "İzmir",
        bio: "İzmir'de resim dersleri, yetenek geliştirme.",
        specialties: ["Resim"]
      }
    ],
    description: "Resim teknikleri, boyama, çizim ve yaratıcılık.",
    whyTake: "Sanatsal yetenekleri keşfetmek ve geliştirmek.",
    employmentAreas: "Okul dersleri, hobi.",
    requirements: "İlkokul ve ortaokul öğrencisi."
  },
  {
    slug: "muzik-ve-enstruman-egitimi",
    title: "Müzik ve Enstrüman Eğitimi",
    category: "İlköğretim",
    breadcrumb: "Eğitim > İlköğretim > Müzik",
    image: "/images/ilkogretim.jpg",
    instructors: [
      {
        slug: "dogan-ertugrul",
        name: "Doğan Ertuğrul",
        since: 2013,
        rating: 4.9,
        privatePrice: 1200,
        groupPrice: 600,
        corporate: false,
        online: true,
        location: "İstanbul Avrupa Yakası",
        bio: "Müzik öğretmeni, piyano ve gitar dersleri.",
        specialties: ["Müzik"]
      },
      {
        slug: "ece-gunduz",
        name: "Ece Gündüz",
        since: 2015,
        rating: 4.7,
        privatePrice: 1050,
        groupPrice: 525,
        corporate: false,
        online: true,
        location: "Bursa",
        bio: "Bursa'da müzik ve enstrüman eğitimi, keman.",
        specialties: ["Müzik"]
      }
    ],
    description: "Müzik teorisi, enstrüman çalma ve şan dersleri.",
    whyTake: "Müzik yeteneğini geliştirmek ve hobi edinmek.",
    employmentAreas: "Okul müzik dersleri, kişisel gelişim.",
    requirements: "İlkokul ve üzeri."
  },
  {
    slug: "satranc-ve-akil-oyunlari",
    title: "Satranç ve Akıl Oyunları",
    category: "İlköğretim",
    breadcrumb: "Eğitim > İlköğretim > Satranç",
    image: "/images/ilkogretim.jpg",
    instructors: [
      {
        slug: "fuat-anil",
        name: "Fuat Anıl",
        since: 2014,
        rating: 4.7,
        privatePrice: 750,
        groupPrice: 375,
        corporate: false,
        online: true,
        location: "İstanbul Avrupa Yakası",
        bio: "Satranç antrenörü, çocuklara strateji oyunları.",
        specialties: ["Satranç"]
      },
      {
        slug: "gonul-ozcan",
        name: "Gönül Özcan",
        since: 2016,
        rating: 4.5,
        privatePrice: 650,
        groupPrice: 325,
        corporate: false,
        online: true,
        location: "Eskişehir",
        bio: "Eskişehir'de akıl oyunları ve satranç dersleri.",
        specialties: ["Satranç"]
      }
    ],
    description: "Satranç ve akıl oyunları ile zihinsel gelişim.",
    whyTake: "Stratejik düşünme ve problem çözme becerileri.",
    employmentAreas: "Okul kulüpleri, turnuvalar.",
    requirements: "İlkokul ve ortaokul öğrencisi."
  },
  {
    slug: "odev-ve-sinav-yardimi",
    title: "Ödev ve Sınav Yardımı",
    category: "İlköğretim",
    breadcrumb: "Eğitim > İlköğretim > Ödev",
    image: "/images/ilkogretim.jpg",
    instructors: [
      {
        slug: "hakan-ozguven",
        name: "Hakan Özgüven",
        since: 2015,
        rating: 4.6,
        privatePrice: 800,
        groupPrice: 400,
        corporate: false,
        online: true,
        location: "İstanbul Avrupa Yakası",
        bio: "Tüm derslerde ödev ve sınavlara yardım.",
        specialties: ["Ödev Yardımı"]
      },
      {
        slug: "iclal-kunt",
        name: "İclal Kunt",
        since: 2016,
        rating: 4.5,
        privatePrice: 700,
        groupPrice: 350,
        corporate: false,
        online: true,
        location: "Ankara",
        bio: "Ankara'da ödev ve sınav hazırlık desteği.",
        specialties: ["Ödev Yardımı"]
      }
    ],
    description: "Ödevlerde rehberlik, sınavlara hazırlık ve konu tekrarı.",
    whyTake: "Okul başarısını artırmak için ek destek.",
    employmentAreas: "İlkokul ve ortaokul tüm dersler.",
    requirements: "İlkokul veya ortaokul öğrencisi."
  }
];