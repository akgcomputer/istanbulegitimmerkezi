// src/data/courses-genel.js

export const courses = [

  // ========== DİREKSİYON KURSLARI ==========
  {
    slug: "b-sinifi-direksiyon-egitimi",
    title: "B Sınıfı Direksiyon Eğitimi",
    category: "Direksiyon",
    breadcrumb: "Direksiyon > B Sınıfı",
    image: "/images/populer-egitimler.jpg",
    instructors: [
      {
        slug: "ibrahim-ethem-korkmaz",
        name: "İbrahim Ethem Korkmaz",
        since: 2012,
        rating: 4.7,
        privatePrice: 2500,
        groupPrice: 1250,
        corporate: true,
        online: false,
        location: "İstanbul Avrupa Yakası",
        bio: "20 yıllık sürücü kursu eğitmeni, binlerce başarılı öğrenci.",
        specialties: ["B Sınıfı Direksiyon Eğitimi"]
      }
    ],
    description: "B sınıfı ehliyet için direksiyon eğitimi, sınav parkuru ve trafikte pratik sürüş.",
    whyTake: "Ehliyet almak isteyenler için birebir uygulamalı eğitim.",
    employmentAreas: "Özel araç kullanımı, hafif ticari araçlar.",
    requirements: "18 yaşını doldurmuş olmak, sağlık raporu."
  },
  {
    slug: "otomatik-vites-direksiyon-egitimi",
    title: "Otomatik Vites Direksiyon Eğitimi",
    category: "Direksiyon",
    breadcrumb: "Direksiyon > Otomatik Vites",
    image: "/images/populer-egitimler.jpg",
    instructors: [
      {
        slug: "sukran-erdag",
        name: "Şükran Erdağ",
        since: 2014,
        rating: 4.6,
        privatePrice: 2300,
        groupPrice: 1150,
        corporate: false,
        online: false,
        location: "Ankara",
        bio: "Kadın sürücü adaylarına özel, sabırlı ve anlayışlı eğitmen.",
        specialties: ["Otomatik Vites Direksiyon Eğitimi"]
      }
    ],
    description: "Otomatik vites araçlarla direksiyon eğitimi, şehir içi ve sınav parkuru.",
    whyTake: "Otomatik vites araç kullanmayı tercih edenler için ideal.",
    employmentAreas: "Binek otomobil kullanımı.",
    requirements: "18 yaş, sağlık raporu."
  },
  {
    slug: "manuel-vites-direksiyon-egitimi",
    title: "Manuel Vites Direksiyon Eğitimi",
    category: "Direksiyon",
    breadcrumb: "Direksiyon > Manuel Vites",
    image: "/images/populer-egitimler.jpg",
    instructors: [
      {
        slug: "cahit-sonmez",
        name: "Cahit Sönmez",
        since: 2011,
        rating: 4.8,
        privatePrice: 2400,
        groupPrice: 1200,
        corporate: true,
        online: false,
        location: "İstanbul Avrupa Yakası",
        bio: "30 yıllık eğitmen, her türlü araçla sürüş teknikleri.",
        specialties: ["Manuel Vites Direksiyon Eğitimi"]
      }
    ],
    description: "Manuel vites araçlarla kalkış, vites geçişleri ve rampa teknikleri.",
    whyTake: "Her türlü aracı kullanabilme becerisi kazanın.",
    employmentAreas: "Her türlü manuel araç.",
    requirements: "18 yaş, sağlık raporu."
  },
  {
    slug: "ileri-surus-teknikleri",
    title: "İleri Sürüş Teknikleri",
    category: "Direksiyon",
    breadcrumb: "Direksiyon > İleri Sürüş",
    image: "/images/populer-egitimler.jpg",
    instructors: [
      {
        slug: "pembe-nur-yavuz",
        name: "Pembe Nur Yavuz",
        since: 2013,
        rating: 4.9,
        privatePrice: 3200,
        groupPrice: 1600,
        corporate: true,
        online: false,
        location: "İzmir",
        bio: "Yarış pilotu, güvenli ve performanslı sürüş eğitmeni.",
        specialties: ["İleri Sürüş Teknikleri"]
      }
    ],
    description: "Kaygan zemin kontrolü, savrulma düzeltme, acil fren gibi ileri teknikler.",
    whyTake: "Sürüş güvenliğinizi en üst seviyeye çıkarın.",
    employmentAreas: "Güvenli sürüş, pist sürüşü.",
    requirements: "En az 2 yıl aktif sürüş deneyimi."
  },
  {
    slug: "direksiyon-sinavina-hazirlik",
    title: "Direksiyon Sınavına Hazırlık",
    category: "Direksiyon",
    breadcrumb: "Direksiyon > Sınav Hazırlık",
    image: "/images/populer-egitimler.jpg",
    instructors: [
      {
        slug: "rifki-aydin",
        name: "Rıfkı Aydın",
        since: 2015,
        rating: 4.5,
        privatePrice: 2200,
        groupPrice: 1100,
        corporate: false,
        online: false,
        location: "İstanbul Avrupa Yakası",
        bio: "Sınav odaklı eğitim, yüksek başarı oranı.",
        specialties: ["Direksiyon Sınavına Hazırlık"]
      }
    ],
    description: "Ehliyet sınavına yönelik parkur ve trafik uygulamaları.",
    whyTake: "Sınavda başarılı olmak için birebir destek.",
    employmentAreas: "Sınav geçişi.",
    requirements: "Teorik sınava hak kazanmış olmak."
  },
  {
    slug: "ozel-direksiyon-dersi-bayan",
    title: "Özel Direksiyon Dersi (Bayan)",
    category: "Direksiyon",
    breadcrumb: "Direksiyon > Bayan Eğitmen",
    image: "/images/populer-egitimler.jpg",
    instructors: [
      {
        slug: "naciye-gundogdu",
        name: "Naciye Gündoğdu",
        since: 2016,
        rating: 4.7,
        privatePrice: 2600,
        groupPrice: 1300,
        corporate: false,
        online: false,
        location: "Bursa",
        bio: "Bayan sürücü adaylarına özel, güler yüzlü eğitmen.",
        specialties: ["Özel Direksiyon Dersi (Bayan)"]
      }
    ],
    description: "Bayan eğitmen eşliğinde özel direksiyon dersi.",
    whyTake: "Bayan sürücüler için daha rahat bir ortam.",
    employmentAreas: "Binek araç kullanımı.",
    requirements: "18 yaş, sağlık raporu."
  },
  {
    slug: "a-sinifi-motosiklet-egitimi",
    title: "A Sınıfı Motosiklet Eğitimi",
    category: "Direksiyon",
    breadcrumb: "Direksiyon > A Sınıfı",
    image: "/images/populer-egitimler.jpg",
    instructors: [
      {
        slug: "timur-kunt",
        name: "Timur Kunt",
        since: 2010,
        rating: 4.9,
        privatePrice: 3000,
        groupPrice: 1500,
        corporate: true,
        online: false,
        location: "İstanbul Avrupa Yakası",
        bio: "Motosiklet eğitmeni, pist ve trafik deneyimi.",
        specialties: ["A Sınıfı Motosiklet Eğitimi"]
      }
    ],
    description: "Motosiklet kullanma teknikleri, denge, viraj ve trafikte sürüş.",
    whyTake: "Özgürce motosiklet sürmeyi öğrenin.",
    employmentAreas: "Motosiklet kullanımı.",
    requirements: "18 yaş, motosiklet ehliyeti başvurusu."
  },
  {
    slug: "d-sinifi-direksiyon-egitimi",
    title: "D Sınıfı (Minibüs) Direksiyon Eğitimi",
    category: "Direksiyon",
    breadcrumb: "Direksiyon > D Sınıfı",
    image: "/images/populer-egitimler.jpg",
    instructors: [
      {
        slug: "canan-ergin",
        name: "Canan Ergin",
        since: 2012,
        rating: 4.8,
        privatePrice: 3500,
        groupPrice: 1750,
        corporate: true,
        online: false,
        location: "Antalya",
        bio: "Minibüs ve otobüs eğitmeni, profesyonel sürücü yetiştirme.",
        specialties: ["D Sınıfı (Minibüs) Direksiyon Eğitimi"]
      }
    ],
    description: "Minibüs kullanma teknikleri, yolcu taşımacılığı ve sınav hazırlık.",
    whyTake: "Profesyonel şoförlük kariyeri için.",
    employmentAreas: "Minibüs şoförlüğü, servis araçları.",
    requirements: "B sınıfı ehliyet, psikoteknik rapor."
  },
  {
    slug: "e-sinifi-kamyon-direksiyon-egitimi",
    title: "E Sınıfı (Kamyon) Direksiyon Eğitimi",
    category: "Direksiyon",
    breadcrumb: "Direksiyon > E Sınıfı",
    image: "/images/populer-egitimler.jpg",
    instructors: [
      {
        slug: "halis-ozturk",
        name: "Halis Öztürk",
        since: 2008,
        rating: 5.0,
        privatePrice: 4200,
        groupPrice: 2100,
        corporate: true,
        online: false,
        location: "İstanbul Avrupa Yakası",
        bio: "Uzun yol şoförü, kamyon ve TIR eğitmeni.",
        specialties: ["E Sınıfı (Kamyon) Direksiyon Eğitimi"]
      }
    ],
    description: "Kamyon ve TIR kullanma teknikleri, manevra, yüklü sürüş.",
    whyTake: "Ağır vasıta sürücüsü olmak için.",
    employmentAreas: "Kamyon şoförlüğü, lojistik.",
    requirements: "C sınıfı ehliyet, psikoteknik rapor."
  },
  {
    slug: "savunmaci-surus-teknikleri",
    title: "Savunmacı Sürüş Teknikleri",
    category: "Direksiyon",
    breadcrumb: "Direksiyon > Savunmacı Sürüş",
    image: "/images/populer-egitimler.jpg",
    instructors: [
      {
        slug: "sevgi-alp",
        name: "Sevgi Alp",
        since: 2014,
        rating: 4.7,
        privatePrice: 3400,
        groupPrice: 1700,
        corporate: true,
        online: false,
        location: "Eskişehir",
        bio: "Güvenli sürüş eğitmeni, risk yönetimi uzmanı.",
        specialties: ["Savunmacı Sürüş Teknikleri"]
      }
    ],
    description: "Tehlikeleri önceden görme, kaçınma manevraları ve güvenli takip.",
    whyTake: "Trafikte can güvenliğinizi artırın.",
    employmentAreas: "Tüm sürücüler için ileri güvenlik.",
    requirements: "En az 3 yıl aktif sürüş deneyimi."
  },

  // ========== DANS KURSLARI ==========
  {
    slug: "salsa-egitimi",
    title: "Salsa Eğitimi",
    category: "Dans",
    breadcrumb: "Dans > Salsa",
    image: "/images/populer-egitimler.jpg",
    instructors: [
      {
        slug: "akgun-tansel",
        name: "Akgün Tansel",
        since: 2013,
        rating: 4.7,
        privatePrice: 2200,
        groupPrice: 1100,
        corporate: true,
        online: false,
        location: "İstanbul Avrupa Yakası",
        bio: "Latin dansları eğitmeni, salsa ve bachata ustası.",
        specialties: ["Salsa Eğitimi"]
      }
    ],
    description: "Salsa temel adımları, figürler ve partnerle dans.",
    whyTake: "Eğlenceli bir aktiviteyle sosyalleşin ve formda kalın.",
    employmentAreas: "Dans kursları, etkinlikler.",
    requirements: "Ön koşul yok."
  },
  {
    slug: "tango-egitimi",
    title: "Tango Eğitimi",
    category: "Dans",
    breadcrumb: "Dans > Tango",
    image: "/images/populer-egitimler.jpg",
    instructors: [
      {
        slug: "berrin-aksu",
        name: "Berrin Aksu",
        since: 2012,
        rating: 4.8,
        privatePrice: 2400,
        groupPrice: 1200,
        corporate: false,
        online: false,
        location: "Ankara",
        bio: "Tutkulu tango eğitmeni, gösteri ve yarışma deneyimi.",
        specialties: ["Tango Eğitimi"]
      }
    ],
    description: "Arjantin tangosu temel teknikleri, yürüyüş ve figürler.",
    whyTake: "Zarif ve romantik bir dans öğrenin.",
    employmentAreas: "Dans gösterileri, sosyal danslar.",
    requirements: "Ön koşul yok."
  },
  {
    slug: "bachata-egitimi",
    title: "Bachata Eğitimi",
    category: "Dans",
    breadcrumb: "Dans > Bachata",
    image: "/images/populer-egitimler.jpg",
    instructors: [
      {
        slug: "cuneyt-ozdemir",
        name: "Cüneyt Özdemir",
        since: 2014,
        rating: 4.6,
        privatePrice: 2200,
        groupPrice: 1100,
        corporate: true,
        online: false,
        location: "İstanbul Avrupa Yakası",
        bio: "Bachata ve sensual bachata eğitmeni.",
        specialties: ["Bachata Eğitimi"]
      }
    ],
    description: "Bachata temel adımları, romantik ve hareketli figürler.",
    whyTake: "Latin ritimleriyle eğlenin.",
    employmentAreas: "Dans kursları, gece kulüpleri.",
    requirements: "Ön koşul yok."
  },
  {
    slug: "zumba-egitimi",
    title: "Zumba Eğitimi",
    category: "Dans",
    breadcrumb: "Dans > Zumba",
    image: "/images/populer-egitimler.jpg",
    instructors: [
      {
        slug: "deniz-sari",
        name: "Deniz Sarı",
        since: 2015,
        rating: 4.5,
        privatePrice: 1800,
        groupPrice: 900,
        corporate: true,
        online: false,
        location: "İzmir",
        bio: "Zumba eğitmeni, grup dersleri ve fitness.",
        specialties: ["Zumba Eğitimi"]
      }
    ],
    description: "Eğlenceli müziklerle dans ederek kalori yakın.",
    whyTake: "Spor yaparken keyif alın.",
    employmentAreas: "Fitness salonları, dans stüdyoları.",
    requirements: "Ön koşul yok."
  },
  {
    slug: "modern-dans",
    title: "Modern Dans",
    category: "Dans",
    breadcrumb: "Dans > Modern Dans",
    image: "/images/populer-egitimler.jpg",
    instructors: [
      {
        slug: "ekin-yalcin",
        name: "Ekin Yalçın",
        since: 2013,
        rating: 4.7,
        privatePrice: 2300,
        groupPrice: 1150,
        corporate: false,
        online: false,
        location: "İstanbul Avrupa Yakası",
        bio: "Modern dans ve çağdaş dans eğitmeni, koreograf.",
        specialties: ["Modern Dans"]
      }
    ],
    description: "Modern dans teknikleri, serbest hareket ve yaratıcılık.",
    whyTake: "Kendinizi ifade etmenin özgür yolunu keşfedin.",
    employmentAreas: "Dans toplulukları, sahne sanatları.",
    requirements: "Temel dans bilgisi avantajdır."
  },
  {
    slug: "bale-yetiskin-baslangic",
    title: "Bale (Yetişkin Başlangıç)",
    category: "Dans",
    breadcrumb: "Dans > Bale",
    image: "/images/populer-egitimler.jpg",
    instructors: [
      {
        slug: "fahriye-sayar",
        name: "Fahriye Sayar",
        since: 2011,
        rating: 4.9,
        privatePrice: 2700,
        groupPrice: 1350,
        corporate: true,
        online: false,
        location: "Bursa",
        bio: "Klasik bale eğitmeni, konservatuar mezunu.",
        specialties: ["Bale (Yetişkin Başlangıç)"]
      }
    ],
    description: "Yetişkinler için bale temel duruş, esneme ve barre çalışmaları.",
    whyTake: "Duruşunuzu düzeltin, zarafet kazanın.",
    employmentAreas: "Bale kursları, kişisel gelişim.",
    requirements: "Ön koşul yok."
  },
  {
    slug: "hip-hop-dans",
    title: "Hip-Hop Dans",
    category: "Dans",
    breadcrumb: "Dans > Hip-Hop",
    image: "/images/populer-egitimler.jpg",
    instructors: [
      {
        slug: "gokhan-anil",
        name: "Gökhan Anıl",
        since: 2014,
        rating: 4.7,
        privatePrice: 2100,
        groupPrice: 1050,
        corporate: false,
        online: false,
        location: "İstanbul Avrupa Yakası",
        bio: "Hip-hop ve sokak dansları eğitmeni, koreograf.",
        specialties: ["Hip-Hop Dans"]
      }
    ],
    description: "Hip-hop temel adımları, popping, locking ve serbest stil.",
    whyTake: "Enerjik ve modern bir dans öğrenin.",
    employmentAreas: "Dans stüdyoları, video klipler.",
    requirements: "Ön koşul yok."
  },
  {
    slug: "oryantal-dans",
    title: "Oryantal Dans",
    category: "Dans",
    breadcrumb: "Dans > Oryantal",
    image: "/images/populer-egitimler.jpg",
    instructors: [
      {
        slug: "hulya-surmen",
        name: "Hülya Sürmen",
        since: 2012,
        rating: 4.8,
        privatePrice: 2000,
        groupPrice: 1000,
        corporate: false,
        online: false,
        location: "Antalya",
        bio: "Profesyonel oryantal dansçı, 15 yıllık deneyim.",
        specialties: ["Oryantal Dans"]
      }
    ],
    description: "Göbek dansı temel hareketleri, izolasyonlar ve figürler.",
    whyTake: "Kadınsı enerjinizi keşfedin, vücut kontrolü kazanın.",
    employmentAreas: "Gösteri sanatları, gece kulüpleri.",
    requirements: "Ön koşul yok."
  },
  {
    slug: "halk-oyunlari",
    title: "Halk Oyunları",
    category: "Dans",
    breadcrumb: "Dans > Halk Oyunları",
    image: "/images/populer-egitimler.jpg",
    instructors: [
      {
        slug: "ilhan-ozsan",
        name: "İlhan Özsan",
        since: 2010,
        rating: 4.8,
        privatePrice: 1900,
        groupPrice: 950,
        corporate: true,
        online: false,
        location: "Eskişehir",
        bio: "Türk halk oyunları eğitmeni, ekib lideri.",
        specialties: ["Halk Oyunları"]
      }
    ],
    description: "Yöresel halk oyunları figürleri ve ritim çalışmaları.",
    whyTake: "Kültürel mirasımızı yaşatın, eğlenin.",
    employmentAreas: "Halk oyunları ekipleri, festivaller.",
    requirements: "Ön koşul yok."
  },
  {
    slug: "cocuklar-icin-dans",
    title: "Çocuklar İçin Dans",
    category: "Dans",
    breadcrumb: "Dans > Çocuk",
    image: "/images/populer-egitimler.jpg",
    instructors: [
      {
        slug: "julide-okay",
        name: "Jülide Okay",
        since: 2016,
        rating: 4.6,
        privatePrice: 1800,
        groupPrice: 900,
        corporate: false,
        online: false,
        location: "İstanbul Avrupa Yakası",
        bio: "Çocuk dans eğitmeni, yaratıcı drama sertifikalı.",
        specialties: ["Çocuklar İçin Dans"]
      }
    ],
    description: "Çocuklara özel eğlenceli dans dersleri, ritim ve koordinasyon.",
    whyTake: "Çocuğunuzun fiziksel ve sosyal gelişimine katkı.",
    employmentAreas: "Çocuk dans kursları, okul etkinlikleri.",
    requirements: "4-12 yaş arası."
  },
  {
    slug: "break-dans",
    title: "Break Dans",
    category: "Dans",
    breadcrumb: "Dans > Break",
    image: "/images/populer-egitimler.jpg",
    instructors: [
      {
        slug: "kerim-cali",
        name: "Kerim Çalı",
        since: 2013,
        rating: 4.7,
        privatePrice: 2300,
        groupPrice: 1150,
        corporate: false,
        online: false,
        location: "Adana",
        bio: "Break dansçı, akrobasi ve footwork uzmanı.",
        specialties: ["Break Dans"]
      }
    ],
    description: "Break dans temel hareketleri, power move'lar ve stil.",
    whyTake: "Akr obatik ve enerjik bir dans öğrenin.",
    employmentAreas: "Sokak dansları, yarışmalar.",
    requirements: "Fiziksel kondisyon."
  },
  {
    slug: "ciftler-icin-dans-kursu",
    title: "Çiftler İçin Dans Kursu",
    category: "Dans",
    breadcrumb: "Dans > Çiftler",
    image: "/images/populer-egitimler.jpg",
    instructors: [
      {
        slug: "leman-ertem",
        name: "Leman Ertem",
        since: 2012,
        rating: 4.8,
        privatePrice: 2600,
        groupPrice: 1300,
        corporate: false,
        online: false,
        location: "İstanbul Avrupa Yakası",
        bio: "Çift dansları eğitmeni, salsa, tango ve bachata.",
        specialties: ["Çiftler İçin Dans Kursu"]
      }
    ],
    description: "Çiftler için özel dans dersleri, uyum ve iletişim.",
    whyTake: "Partnerinizle birlikte kaliteli zaman geçirin.",
    employmentAreas: "Düğün dansı, sosyal etkinlikler.",
    requirements: "Çift olarak katılım."
  },

  // ========== MÜZİK & ENSTRÜMAN KURSLARI ==========
  {
    slug: "piyano-egitimi",
    title: "Piyano Eğitimi",
    category: "Müzik",
    breadcrumb: "Müzik > Piyano",
    image: "/images/populer-egitimler.jpg",
    instructors: [
      {
        slug: "adnan-sarigul",
        name: "Adnan Sarıgül",
        since: 2010,
        rating: 4.9,
        privatePrice: 3200,
        groupPrice: 1600,
        corporate: true,
        online: true,
        location: "İstanbul Avrupa Yakası",
        bio: "Konservatuar mezunu, klasik ve modern piyano eğitmeni.",
        specialties: ["Piyano Eğitimi"]
      }
    ],
    description: "Piyano temel teknikleri, nota okuma, eser çalma.",
    whyTake: "Müziğin büyülü dünyasına adım atın.",
    employmentAreas: "Sanat, eğitim, sahne.",
    requirements: "Ön koşul yok, her yaşa uygun."
  },
  {
    slug: "keman-egitimi",
    title: "Keman Eğitimi",
    category: "Müzik",
    breadcrumb: "Müzik > Keman",
    image: "/images/populer-egitimler.jpg",
    instructors: [
      {
        slug: "birsen-erol",
        name: "Birsen Erol",
        since: 2011,
        rating: 4.8,
        privatePrice: 2900,
        groupPrice: 1450,
        corporate: false,
        online: true,
        location: "Ankara",
        bio: "Keman sanatçısı, orkestra deneyimi, pedagojik eğitim.",
        specialties: ["Keman Eğitimi"]
      }
    ],
    description: "Keman tutuşu, yay teknikleri, gamlar ve eserler.",
    whyTake: "Kemanın hüzünlü ve zarif sesini keşfedin.",
    employmentAreas: "Orkestra, oda müziği, solo performans.",
    requirements: "Ön koşul yok."
  },
  {
    slug: "gitar-klasik-egitimi",
    title: "Gitar (Klasik) Eğitimi",
    category: "Müzik",
    breadcrumb: "Müzik > Klasik Gitar",
    image: "/images/populer-egitimler.jpg",
    instructors: [
      {
        slug: "cengiz-tumer",
        name: "Cengiz Tümer",
        since: 2012,
        rating: 4.7,
        privatePrice: 2500,
        groupPrice: 1250,
        corporate: true,
        online: true,
        location: "İstanbul Avrupa Yakası",
        bio: "Klasik gitar eğitmeni, konserler ve masterclass.",
        specialties: ["Gitar (Klasik) Eğitimi"]
      }
    ],
    description: "Klasik gitar tekniği, nota, arpej ve repertuvar.",
    whyTake: "Klasik gitarın sıcak tınısıyla tanışın.",
    employmentAreas: "Sanat, eğitim, sahne.",
    requirements: "Ön koşul yok."
  },
  {
    slug: "gitar-elektro-egitimi",
    title: "Gitar (Elektro) Eğitimi",
    category: "Müzik",
    breadcrumb: "Müzik > Elektro Gitar",
    image: "/images/populer-egitimler.jpg",
    instructors: [
      {
        slug: "cetin-koroglu",
        name: "Çetin Köroğlu",
        since: 2013,
        rating: 4.8,
        privatePrice: 2800,
        groupPrice: 1400,
        corporate: false,
        online: true,
        location: "İzmir",
        bio: "Rock ve metal gitarist, teknik ve doğaçlama.",
        specialties: ["Gitar (Elektro) Eğitimi"]
      }
    ],
    description: "Elektro gitar teknikleri, distortion, solo ve ritim.",
    whyTake: "Rock ve metal müziğin gücünü hissedin.",
    employmentAreas: "Müzik grupları, stüdyo kayıtları.",
    requirements: "Temel gitar bilgisi önerilir."
  },
  {
    slug: "baglama-egitimi",
    title: "Bağlama Eğitimi",
    category: "Müzik",
    breadcrumb: "Müzik > Bağlama",
    image: "/images/populer-egitimler.jpg",
    instructors: [
      {
        slug: "devrim-ince",
        name: "Devrim İnce",
        since: 2010,
        rating: 4.9,
        privatePrice: 2300,
        groupPrice: 1150,
        corporate: true,
        online: true,
        location: "İstanbul Avrupa Yakası",
        bio: "Halk müziği sanatçısı, bağlama ustası.",
        specialties: ["Bağlama Eğitimi"]
      }
    ],
    description: "Bağlama düzeni, tezene vuruşları, türkü dağarcığı.",
    whyTake: "Türk halk müziğinin vazgeçilmez enstrümanını öğrenin.",
    employmentAreas: "Halk müziği icrası, korolar.",
    requirements: "Ön koşul yok."
  },
  {
    slug: "ud-egitimi",
    title: "Ud Eğitimi",
    category: "Müzik",
    breadcrumb: "Müzik > Ud",
    image: "/images/populer-egitimler.jpg",
    instructors: [
      {
        slug: "emine-sozer",
        name: "Emine Sözer",
        since: 2012,
        rating: 4.7,
        privatePrice: 2700,
        groupPrice: 1350,
        corporate: false,
        online: true,
        location: "Bursa",
        bio: "Türk sanat müziği icracısı, ud eğitmeni.",
        specialties: ["Ud Eğitimi"]
      }
    ],
    description: "Ud tutuşu, mızrap teknikleri, makamlar ve taksim.",
    whyTake: "Klasik Türk müziğinin derinliğini keşfedin.",
    employmentAreas: "Sanat müziği toplulukları, solo icra.",
    requirements: "Ön koşul yok."
  },
  {
    slug: "ney-egitimi",
    title: "Ney Eğitimi",
    category: "Müzik",
    breadcrumb: "Müzik > Ney",
    image: "/images/populer-egitimler.jpg",
    instructors: [
      {
        slug: "fuat-kabak",
        name: "Fuat Kabak",
        since: 2009,
        rating: 5.0,
        privatePrice: 3100,
        groupPrice: 1550,
        corporate: true,
        online: true,
        location: "İstanbul Avrupa Yakası",
        bio: "Neyzen, tasavvuf müziği icracısı.",
        specialties: ["Ney Eğitimi"]
      }
    ],
    description: "Ney üfleme teknikleri, ses kontrolü, üflemeli eserler.",
    whyTake: "Manevi bir yolculuğa çıkın, neyin büyüsünü yaşayın.",
    employmentAreas: "Tasavvuf müziği, konserler.",
    requirements: "Ön koşul yok, sabır ve nefes kontrolü."
  },
  {
    slug: "flut-egitimi",
    title: "Flüt Eğitimi",
    category: "Müzik",
    breadcrumb: "Müzik > Flüt",
    image: "/images/populer-egitimler.jpg",
    instructors: [
      {
        slug: "gulser-ozcan",
        name: "Gülser Özcan",
        since: 2014,
        rating: 4.6,
        privatePrice: 2400,
        groupPrice: 1200,
        corporate: false,
        online: true,
        location: "Antalya",
        bio: "Flüt sanatçısı, orkestra ve oda müziği deneyimi.",
        specialties: ["Flüt Eğitimi"]
      }
    ],
    description: "Flüt temel pozisyonlar, nefes, gamlar ve etütler.",
    whyTake: "Flütün parlak ve neşeli sesiyle tanışın.",
    employmentAreas: "Orkestra, müzik okulları.",
    requirements: "Ön koşul yok."
  },
  {
    slug: "klarnet-egitimi",
    title: "Klarnet Eğitimi",
    category: "Müzik",
    breadcrumb: "Müzik > Klarnet",
    image: "/images/populer-egitimler.jpg",
    instructors: [
      {
        slug: "hakki-suer",
        name: "Hakkı Süer",
        since: 2011,
        rating: 4.8,
        privatePrice: 2900,
        groupPrice: 1450,
        corporate: true,
        online: true,
        location: "İstanbul Avrupa Yakası",
        bio: "Klarnet virtüözü, roman müziği ve klasik batı müziği.",
        specialties: ["Klarnet Eğitimi"]
      }
    ],
    description: "Klarnet ağızlık, kamış, parmak pozisyonları ve eserler.",
    whyTake: "Klarnetin coşkulu ve etkileyici tınısını öğrenin.",
    employmentAreas: "Orkestra, eğlence sektörü.",
    requirements: "Ön koşul yok."
  },
  {
    slug: "bateri-egitimi",
    title: "Bateri Eğitimi",
    category: "Müzik",
    breadcrumb: "Müzik > Bateri",
    image: "/images/populer-egitimler.jpg",
    instructors: [
      {
        slug: "isik-arslan",
        name: "Işık Arslan",
        since: 2012,
        rating: 4.9,
        privatePrice: 3000,
        groupPrice: 1500,
        corporate: true,
        online: false,
        location: "Eskişehir",
        bio: "Davulcu, rock ve caz gruplarında çalmış.",
        specialties: ["Bateri Eğitimi"]
      }
    ],
    description: "Bateri temel vuruşlar, ritim kalıpları, el-ayak koordinasyonu.",
    whyTake: "Müziğin ritmini hissedin, enerjinizi boşaltın.",
    employmentAreas: "Müzik grupları, stüdyo müzisyenliği.",
    requirements: "Ön koşul yok, ritim duygusu avantaj."
  },
  {
    slug: "san-egitimi",
    title: "Şan Eğitimi (Vokal Teknikleri)",
    category: "Müzik",
    breadcrumb: "Müzik > Şan",
    image: "/images/populer-egitimler.jpg",
    instructors: [
      {
        slug: "izzet-bayar",
        name: "İzzet Bayar",
        since: 2010,
        rating: 5.0,
        privatePrice: 3300,
        groupPrice: 1650,
        corporate: true,
        online: true,
        location: "İstanbul Avrupa Yakası",
        bio: "Şan pedagogu, opera sanatçısı.",
        specialties: ["Şan Eğitimi (Vokal Teknikleri)"]
      }
    ],
    description: "Nefes kontrolü, ses rezonansı, artikülasyon ve yorum.",
    whyTake: "Sesinizi doğru kullanmayı öğrenin, korolarda veya solist olun.",
    employmentAreas: "Sahne sanatları, korolar, müzikaller.",
    requirements: "Ön koşul yok, istekli olmak."
  },
  {
    slug: "cello-egitimi",
    title: "Çello Eğitimi",
    category: "Müzik",
    breadcrumb: "Müzik > Çello",
    image: "/images/populer-egitimler.jpg",
    instructors: [
      {
        slug: "jale-ates",
        name: "Jale Ateş",
        since: 2012,
        rating: 4.8,
        privatePrice: 3400,
        groupPrice: 1700,
        corporate: false,
        online: true,
        location: "Konya",
        bio: "Çello sanatçısı, oda müziği ve orkestra deneyimi.",
        specialties: ["Çello Eğitimi"]
      }
    ],
    description: "Çello duruşu, yay tekniği, parmak pozisyonları.",
    whyTake: "Çellonun derin ve sıcak sesini keşfedin.",
    employmentAreas: "Orkestra, solo performans.",
    requirements: "Ön koşul yok."
  },
  {
    slug: "yan-flut-egitimi",
    title: "Yan Flüt Eğitimi",
    category: "Müzik",
    breadcrumb: "Müzik > Yan Flüt",
    image: "/images/populer-egitimler.jpg",
    instructors: [
      {
        slug: "kadir-ipek",
        name: "Kadir İpek",
        since: 2013,
        rating: 4.7,
        privatePrice: 2600,
        groupPrice: 1300,
        corporate: true,
        online: true,
        location: "İstanbul Avrupa Yakası",
        bio: "Yan flüt eğitmeni, bando ve orkestra şefliği.",
        specialties: ["Yan Flüt Eğitimi"]
      }
    ],
    description: "Yan flüt tutuş, üfleme, gamlar ve eserler.",
    whyTake: "Flüt ailesinin parlak üyesini öğrenin.",
    employmentAreas: "Bando, orkestra, müzik okulları.",
    requirements: "Ön koşul yok."
  },
  {
    slug: "muzik-teorisi-ve-solfej",
    title: "Müzik Teorisi ve Solfej",
    category: "Müzik",
    breadcrumb: "Müzik > Teori",
    image: "/images/populer-egitimler.jpg",
    instructors: [
      {
        slug: "lale-basar",
        name: "Lale Başar",
        since: 2011,
        rating: 4.8,
        privatePrice: 2200,
        groupPrice: 1100,
        corporate: false,
        online: true,
        location: "Adana",
        bio: "Müzik teorisyeni, konservatuar öğretim görevlisi.",
        specialties: ["Müzik Teorisi ve Solfej"]
      }
    ],
    description: "Nota okuma, aralıklar, akorlar, dikte ve solfej.",
    whyTake: "Müziğin teorik temellerini sağlam atın.",
    employmentAreas: "Müzik eğitimi, bestecilik, aranjörlük.",
    requirements: "Ön koşul yok."
  },
  {
    slug: "org-egitimi",
    title: "Org Eğitimi",
    category: "Müzik",
    breadcrumb: "Müzik > Org",
    image: "/images/populer-egitimler.jpg",
    instructors: [
      {
        slug: "mahmut-tuzun",
        name: "Mahmut Tüzün",
        since: 2012,
        rating: 4.6,
        privatePrice: 2500,
        groupPrice: 1250,
        corporate: true,
        online: true,
        location: "İstanbul Avrupa Yakası",
        bio: "Org ve klavye eğitmeni, kilise müziği.",
        specialties: ["Org Eğitimi"]
      }
    ],
    description: "Org tuşeleri, registrasyon, bas ve akor eşlik.",
    whyTake: "Klavye enstrümanlarına giriş yapın.",
    employmentAreas: "İbadethaneler, müzik grupları.",
    requirements: "Ön koşul yok."
  },
  {
    slug: "kanun-egitimi",
    title: "Kanun Eğitimi",
    category: "Müzik",
    breadcrumb: "Müzik > Kanun",
    image: "/images/populer-egitimler.jpg",
    instructors: [
      {
        slug: "nalan-ergen",
        name: "Nalan Ergen",
        since: 2013,
        rating: 4.7,
        privatePrice: 2800,
        groupPrice: 1400,
        corporate: false,
        online: true,
        location: "Gaziantep",
        bio: "Kanun icracısı, Türk sanat müziği topluluğu üyesi.",
        specialties: ["Kanun Eğitimi"]
      }
    ],
    description: "Kanun mızrap tekniği, mandal ayarları, makamlar.",
    whyTake: "Türk müziğinin parlak enstrümanını öğrenin.",
    employmentAreas: "Sanat müziği koroları, solo icra.",
    requirements: "Ön koşul yok."
  },
  {
    slug: "muzik-prodüksiyon-ableton",
    title: "Müzik Prodüksiyon (Ableton)",
    category: "Müzik",
    breadcrumb: "Müzik > Prodüksiyon",
    image: "/images/populer-egitimler.jpg",
    instructors: [
      {
        slug: "orhan-yener",
        name: "Orhan Yener",
        since: 2014,
        rating: 4.9,
        privatePrice: 4200,
        groupPrice: 2100,
        corporate: true,
        online: true,
        location: "İstanbul Avrupa Yakası",
        bio: "Prodüktör, DJ, Ableton sertifikalı eğitmen.",
        specialties: ["Müzik Prodüksiyon (Ableton)"]
      }
    ],
    description: "Ableton Live ile beat yapımı, kayıt, mix ve mastering.",
    whyTake: "Kendi müziğinizi üretin, profesyonel yazılımları öğrenin.",
    employmentAreas: "Stüdyo, canlı performans, remix.",
    requirements: "Temel bilgisayar bilgisi, müzik kulağı."
  },
  {
    slug: "cocuklar-icin-muzik-egitimi",
    title: "Çocuklar İçin Müzik Eğitimi",
    category: "Müzik",
    breadcrumb: "Müzik > Çocuk",
    image: "/images/populer-egitimler.jpg",
    instructors: [
      {
        slug: "ozcan-mutlu",
        name: "Özcan Mutlu",
        since: 2015,
        rating: 4.6,
        privatePrice: 2100,
        groupPrice: 1050,
        corporate: false,
        online: false,
        location: "Samsun",
        bio: "Okul öncesi müzik eğitmeni, orff sertifikalı.",
        specialties: ["Çocuklar İçin Müzik Eğitimi"]
      }
    ],
    description: "Çocuklara özel ritim, şarkı ve enstrüman tanıtımı.",
    whyTake: "Çocuğunuzun müzik yeteneğini erken keşfedin.",
    employmentAreas: "Anaokulları, müzik kursları.",
    requirements: "3-7 yaş arası."
  },
  {
    slug: "ses-kayit-teknikleri",
    title: "Ses Kayıt Teknikleri",
    category: "Müzik",
    breadcrumb: "Müzik > Kayıt",
    image: "/images/populer-egitimler.jpg",
    instructors: [
      {
        slug: "perran-ece",
        name: "Perran Ece",
        since: 2012,
        rating: 4.8,
        privatePrice: 3800,
        groupPrice: 1900,
        corporate: true,
        online: true,
        location: "İstanbul Anadolu Yakası",
        bio: "Ses mühendisi, stüdyo sahibi, birçok albüm kaydı.",
        specialties: ["Ses Kayıt Teknikleri"]
      }
    ],
    description: "Mikrofon yerleşimi, ses kartı kullanımı, kayıt yazılımları.",
    whyTake: "Profesyonel stüdyo ortamında kayıt yapmayı öğrenin.",
    employmentAreas: "Stüdyo, canlı ses, post prodüksiyon.",
    requirements: "Temel müzik bilgisi."
  },
  {
    slug: "tambur-egitimi",
    title: "Tambur Eğitimi",
    category: "Müzik",
    breadcrumb: "Müzik > Tambur",
    image: "/images/populer-egitimler.jpg",
    instructors: [
      {
        slug: "rasim-onder",
        name: "Rasim Önder",
        since: 2011,
        rating: 4.8,
        privatePrice: 2700,
        groupPrice: 1350,
        corporate: false,
        online: true,
        location: "Trabzon",
        bio: "Klasik Türk müziği tamburisi, icra ve eğitim.",
        specialties: ["Tambur Eğitimi"]
      }
    ],
    description: "Tambur düzeni, mızrap vuruşları, taksim ve saz semaisi.",
    whyTake: "Osmanlıdan günümüze uzanan köklü bir enstrümanı öğrenin.",
    employmentAreas: "Türk sanat müziği toplulukları.",
    requirements: "Ön koşul yok."
  },

  // ========== TİYATRO & OYUNCULUK KURSLARI ==========
  {
    slug: "temel-oyunculuk-egitimi",
    title: "Temel Oyunculuk Eğitimi",
    category: "Tiyatro",
    breadcrumb: "Tiyatro > Temel Oyunculuk",
    image: "/images/populer-egitimler.jpg",
    instructors: [
      {
        slug: "sabri-ozsahin",
        name: "Sabri Özşahin",
        since: 2010,
        rating: 4.9,
        privatePrice: 3200,
        groupPrice: 1600,
        corporate: true,
        online: false,
        location: "İstanbul Anadolu Yakası",
        bio: "Tiyatro oyuncusu ve yönetmen, 20 yıllık deneyim.",
        specialties: ["Temel Oyunculuk Eğitimi"]
      }
    ],
    description: "Oyunculuk temel teknikleri, rol yapma, doğaçlama.",
    whyTake: "Sahne tozu yemek isteyenler için başlangıç.",
    employmentAreas: "Tiyatro, dizi, sinema.",
    requirements: "Ön koşul yok."
  },
  {
    slug: "ileri-oyunculuk-teknikleri",
    title: "İleri Oyunculuk Teknikleri",
    category: "Tiyatro",
    breadcrumb: "Tiyatro > İleri Oyunculuk",
    image: "/images/populer-egitimler.jpg",
    instructors: [
      {
        slug: "sukriye-donmez",
        name: "Şükriye Dönmez",
        since: 2011,
        rating: 4.9,
        privatePrice: 3800,
        groupPrice: 1900,
        corporate: false,
        online: false,
        location: "Ankara",
        bio: "Devlet tiyatrosu sanatçısı, oyunculuk koçu.",
        specialties: ["İleri Oyunculuk Teknikleri"]
      }
    ],
    description: "Karakter analizi, duygu aktarımı, metin çözümleme.",
    whyTake: "Profesyonel oyunculuk kariyeri için ileri adım.",
    employmentAreas: "Tiyatro, sinema, dizi.",
    requirements: "Temel oyunculuk eğitimi almış olmak."
  },
  {
    slug: "stanislavski-metodu",
    title: "Stanislavski Metodu",
    category: "Tiyatro",
    breadcrumb: "Tiyatro > Stanislavski",
    image: "/images/populer-egitimler.jpg",
    instructors: [
      {
        slug: "tayfun-batur",
        name: "Tayfun Batur",
        since: 2012,
        rating: 4.8,
        privatePrice: 3500,
        groupPrice: 1750,
        corporate: true,
        online: false,
        location: "İstanbul Anadolu Yakası",
        bio: "Stanislavski sistemi üzerine uzmanlaşmış oyuncu ve eğitmen.",
        specialties: ["Stanislavski Metodu"]
      }
    ],
    description: "Stanislavski'nin duygu belleği, fiziksel aksiyon ve alt metin çalışmaları.",
    whyTake: "Gerçekçi oyunculuğun temellerini öğrenin.",
    employmentAreas: "Tiyatro, sinema.",
    requirements: "Temel oyunculuk bilgisi."
  },
  {
    slug: "dograma-tiyatro",
    title: "Doğaçlama Tiyatro",
    category: "Tiyatro",
    breadcrumb: "Tiyatro > Doğaçlama",
    image: "/images/populer-egitimler.jpg",
    instructors: [
      {
        slug: "ulku-akin",
        name: "Ülkü Akın",
        since: 2013,
        rating: 4.7,
        privatePrice: 2800,
        groupPrice: 1400,
        corporate: false,
        online: true,
        location: "İzmir",
        bio: "Doğaçlama tiyatro oyuncusu, sahne sanatları eğitmeni.",
        specialties: ["Doğaçlama Tiyatro"]
      }
    ],
    description: "Anlık yaratıcılık, sahnede anında tepki verme ve oyun kurma.",
    whyTake: "Reaksiyon yeteneğinizi geliştirin, eğlenin.",
    employmentAreas: "Doğaçlama gösterileri, takım çalışması.",
    requirements: "Ön koşul yok."
  },
  {
    slug: "cocuklar-icin-tiyatro",
    title: "Çocuklar İçin Tiyatro",
    category: "Tiyatro",
    breadcrumb: "Tiyatro > Çocuk",
    image: "/images/populer-egitimler.jpg",
    instructors: [
      {
        slug: "veysel-eris",
        name: "Veysel Eriş",
        since: 2015,
        rating: 4.6,
        privatePrice: 2300,
        groupPrice: 1150,
        corporate: false,
        online: false,
        location: "İstanbul Anadolu Yakası",
        bio: "Çocuk tiyatrosu oyuncusu, drama eğitmeni.",
        specialties: ["Çocuklar İçin Tiyatro"]
      }
    ],
    description: "Çocuklara özel yaratıcı drama, rol yapma ve sahne çalışmaları.",
    whyTake: "Çocuğunuzun özgüvenini ve ifade yeteneğini geliştirin.",
    employmentAreas: "Okullar, tiyatro kursları.",
    requirements: "4-12 yaş arası."
  },
  {
    slug: "kamera-onu-oyunculuk",
    title: "Kamera Önü Oyunculuk",
    category: "Tiyatro",
    breadcrumb: "Tiyatro > Kamera",
    image: "/images/populer-egitimler.jpg",
    instructors: [
      {
        slug: "yildiz-ipek",
        name: "Yıldız İpek",
        since: 2012,
        rating: 4.9,
        privatePrice: 4200,
        groupPrice: 2100,
        corporate: true,
        online: true,
        location: "Bursa",
        bio: "Sinema ve dizi oyuncusu, kamera önü oyunculuk koçu.",
        specialties: ["Kamera Önü Oyunculuk"]
      }
    ],
    description: "Kamera karşısında doğal oyunculuk, çekim ölçekleri, duygu aktarımı.",
    whyTake: "Dizi ve film sektörüne hazırlanın.",
    employmentAreas: "Dizi, sinema, reklam.",
    requirements: "Temel oyunculuk eğitimi."
  },
  {
    slug: "seslendirme-ve-dublaj",
    title: "Seslendirme ve Dublaj",
    category: "Tiyatro",
    breadcrumb: "Tiyatro > Seslendirme",
    image: "/images/populer-egitimler.jpg",
    instructors: [
      {
        slug: "zekiye-ozkan",
        name: "Zekiye Özkan",
        since: 2013,
        rating: 4.8,
        privatePrice: 3600,
        groupPrice: 1800,
        corporate: true,
        online: true,
        location: "İstanbul Anadolu Yakası",
        bio: "Seslendirme sanatçısı, dublaj yönetmeni.",
        specialties: ["Seslendirme ve Dublaj"]
      }
    ],
    description: "Ses tonu, vurgu, karaktere uygun seslendirme teknikleri.",
    whyTake: "Radyo, dublaj, sesli kitap gibi alanlarda kariyer yapın.",
    employmentAreas: "Dublaj stüdyoları, radyo, reklam.",
    requirements: "Temel diksiyon bilgisi."
  },
  {
    slug: "fiziksel-tiyatro",
    title: "Fiziksel Tiyatro",
    category: "Tiyatro",
    breadcrumb: "Tiyatro > Fiziksel",
    image: "/images/populer-egitimler.jpg",
    instructors: [
      {
        slug: "aysenur-sen",
        name: "Aysenur Şen",
        since: 2014,
        rating: 4.7,
        privatePrice: 3000,
        groupPrice: 1500,
        corporate: false,
        online: false,
        location: "Antalya",
        bio: "Mim sanatçısı, hareket tiyatrosu eğitmeni.",
        specialties: ["Fiziksel Tiyatro"]
      }
    ],
    description: "Beden dili, jest ve mimikler, hareketle anlatım.",
    whyTake: "Sözsüz oyunculuk yeteneğinizi geliştirin.",
    employmentAreas: "Sokak tiyatrosu, pandomim, çağdaş dans.",
    requirements: "Fiziksel esneklik."
  },
  {
    slug: "dramatik-yazarlik",
    title: "Dramatik Yazarlık",
    category: "Tiyatro",
    breadcrumb: "Tiyatro > Yazarlık",
    image: "/images/populer-egitimler.jpg",
    instructors: [
      {
        slug: "bayram-kilic",
        name: "Bayram Kılıç",
        since: 2011,
        rating: 4.8,
        privatePrice: 3400,
        groupPrice: 1700,
        corporate: true,
        online: true,
        location: "İstanbul Anadolu Yakası",
        bio: "Oyun yazarı, senarist, dramaturg.",
        specialties: ["Dramatik Yazarlık"]
      }
    ],
    description: "Oyun yapısı, karakter yaratma, diyalog yazımı, sahneleme.",
    whyTake: "Kendi oyununuzu yazın, sahneye taşıyın.",
    employmentAreas: "Tiyatro, dizi/film senaristliği.",
    requirements: "Temel yazma becerisi."
  },
  {
    slug: "reji-ve-yonetmenlik",
    title: "Reji ve Yönetmenlik",
    category: "Tiyatro",
    breadcrumb: "Tiyatro > Yönetmenlik",
    image: "/images/populer-egitimler.jpg",
    instructors: [
      {
        slug: "ceyda-ozer",
        name: "Ceyda Özer",
        since: 2012,
        rating: 4.9,
        privatePrice: 4000,
        groupPrice: 2000,
        corporate: true,
        online: true,
        location: "Eskişehir",
        bio: "Tiyatro yönetmeni, sahne tasarımcısı.",
        specialties: ["Reji ve Yönetmenlik"]
      }
    ],
    description: "Oyun sahneleme, oyuncu yönetimi, ışık-dekor tasarımı.",
    whyTake: "Kendi tiyatro topluluğunuzu kurun veya profesyonel yönetmen olun.",
    employmentAreas: "Tiyatrolar, prodüksiyon şirketleri.",
    requirements: "Tiyatro bilgisi, tercihen oyunculuk deneyimi."
  },
  {
    slug: "muzikal-tiyatro",
    title: "Müzikal Tiyatro",
    category: "Tiyatro",
    breadcrumb: "Tiyatro > Müzikal",
    image: "/images/populer-egitimler.jpg",
    instructors: [
      {
        slug: "dogan-tekin",
        name: "Doğan Tekin",
        since: 2013,
        rating: 4.8,
        privatePrice: 3700,
        groupPrice: 1850,
        corporate: false,
        online: false,
        location: "İstanbul Anadolu Yakası",
        bio: "Müzikal oyuncusu, şan ve dans eğitmeni.",
        specialties: ["Müzikal Tiyatro"]
      }
    ],
    description: "Şarkı söyleme, dans ve oyunculuğu birleştiren müzikal performans.",
    whyTake: "Broadway tarzı müzikallerde rol alın.",
    employmentAreas: "Müzikal tiyatrolar, turne grupları.",
    requirements: "Şan ve dans temel bilgisi avantaj."
  },
  {
    slug: "gencler-icin-tiyatro-atolyesi",
    title: "Gençler İçin Tiyatro Atölyesi",
    category: "Tiyatro",
    breadcrumb: "Tiyatro > Genç",
    image: "/images/populer-egitimler.jpg",
    instructors: [
      {
        slug: "esin-arda",
        name: "Esin Arda",
        since: 2015,
        rating: 4.6,
        privatePrice: 2600,
        groupPrice: 1300,
        corporate: false,
        online: false,
        location: "Adana",
        bio: "Gençlik tiyatrosu eğitmeni, drama terapisti.",
        specialties: ["Gençler İçin Tiyatro Atölyesi"]
      }
    ],
    description: "Gençlere özel tiyatro çalışmaları, özgüven ve ifade becerisi.",
    whyTake: "Gençlerin sosyalleşmesi ve kendini keşfetmesi için ideal.",
    employmentAreas: "Okullar, gençlik merkezleri.",
    requirements: "12-18 yaş arası."
  },

  // ========== KİŞİSEL GELİŞİM KURSLARI ==========
  {
    slug: "nlp-egitimi",
    title: "NLP (Neuro Linguistic Programming) Eğitimi",
    category: "Kişisel Gelişim",
    breadcrumb: "Kişisel Gelişim > NLP",
    image: "/images/populer-egitimler.jpg",
    instructors: [
      {
        slug: "ferhat-anil",
        name: "Ferhat Anıl",
        since: 2010,
        rating: 4.9,
        privatePrice: 3800,
        groupPrice: 1900,
        corporate: true,
        online: true,
        location: "İstanbul Anadolu Yakası",
        bio: "NLP master practitioner, koç ve eğitmen.",
        specialties: ["NLP"]
      }
    ],
    description: "NLP teknikleri ile iletişim, ikna, hedef belirleme ve değişim.",
    whyTake: "Kişisel ve profesyonel hayatınızda fark yaratın.",
    employmentAreas: "Koçluk, eğitim, insan kaynakları.",
    requirements: "Ön koşul yok."
  },
  {
    slug: "hafiza-teknikleri",
    title: "Hafıza Teknikleri",
    category: "Kişisel Gelişim",
    breadcrumb: "Kişisel Gelişim > Hafıza",
    image: "/images/populer-egitimler.jpg",
    instructors: [
      {
        slug: "gulay-ozbay",
        name: "Gülay Özbay",
        since: 2012,
        rating: 4.8,
        privatePrice: 2700,
        groupPrice: 1350,
        corporate: true,
        online: true,
        location: "Ankara",
        bio: "Hafıza teknikleri uzmanı, yazar.",
        specialties: ["Hafıza Teknikleri"]
      }
    ],
    description: "Bilgileri kolay ezberleme, zihin haritaları, hızlı okuma.",
    whyTake: "Öğrenme kapasitenizi artırın, sınavlarda başarılı olun.",
    employmentAreas: "Eğitim, akademik çalışmalar.",
    requirements: "Ön koşul yok."
  },
  {
    slug: "etkili-iletisim-becerileri",
    title: "Etkili İletişim Becerileri",
    category: "Kişisel Gelişim",
    breadcrumb: "Kişisel Gelişim > İletişim",
    image: "/images/populer-egitimler.jpg",
    instructors: [
      {
        slug: "huseyin-caglar",
        name: "Hüseyin Çağlar",
        since: 2013,
        rating: 4.7,
        privatePrice: 2900,
        groupPrice: 1450,
        corporate: true,
        online: true,
        location: "İstanbul Anadolu Yakası",
        bio: "İletişim danışmanı, eğitimci.",
        specialties: ["Etkili İletişim Becerileri"]
      }
    ],
    description: "Sözlü ve sözsüz iletişim, aktif dinleme, empati ve geri bildirim.",
    whyTake: "İş ve özel hayatınızda ilişkilerinizi güçlendirin.",
    employmentAreas: "Yöneticilik, satış, müşteri hizmetleri.",
    requirements: "Ön koşul yok."
  },
  {
    slug: "ozguven-ve-motivasyon",
    title: "Özgüven ve Motivasyon",
    category: "Kişisel Gelişim",
    breadcrumb: "Kişisel Gelişim > Özgüven",
    image: "/images/populer-egitimler.jpg",
    instructors: [
      {
        slug: "ipek-tansel",
        name: "İpek Tansel",
        since: 2014,
        rating: 4.7,
        privatePrice: 2800,
        groupPrice: 1400,
        corporate: false,
        online: true,
        location: "İzmir",
        bio: "Kişisel gelişim uzmanı, yaşam koçu.",
        specialties: ["Özgüven ve Motivasyon"]
      }
    ],
    description: "Kendine güven, içsel motivasyon, başarı odaklı düşünce.",
    whyTake: "Hayallerinize ulaşmak için gereken gücü keşfedin.",
    employmentAreas: "Her alanda kişisel gelişim.",
    requirements: "Ön koşul yok."
  },
  {
    slug: "zaman-yonetimi",
    title: "Zaman Yönetimi",
    category: "Kişisel Gelişim",
    breadcrumb: "Kişisel Gelişim > Zaman",
    image: "/images/populer-egitimler.jpg",
    instructors: [
      {
        slug: "kamil-soyer",
        name: "Kamil Soyer",
        since: 2012,
        rating: 4.6,
        privatePrice: 2500,
        groupPrice: 1250,
        corporate: true,
        online: true,
        location: "İstanbul Anadolu Yakası",
        bio: "Verimlilik danışmanı, eğitimci.",
        specialties: ["Zaman Yönetimi"]
      }
    ],
    description: "Planlama, önceliklendirme, erteleme ile başa çıkma.",
    whyTake: "Daha verimli ve dengeli bir yaşam sürün.",
    employmentAreas: "İş hayatı, öğrencilik, girişimcilik.",
    requirements: "Ön koşul yok."
  },
  {
    slug: "stres-yonetimi",
    title: "Stres Yönetimi",
    category: "Kişisel Gelişim",
    breadcrumb: "Kişisel Gelişim > Stres",
    image: "/images/populer-egitimler.jpg",
    instructors: [
      {
        slug: "mujde-can",
        name: "Müjde Can",
        since: 2013,
        rating: 4.7,
        privatePrice: 2700,
        groupPrice: 1350,
        corporate: true,
        online: true,
        location: "Bursa",
        bio: "Psikolog, stres yönetimi uzmanı.",
        specialties: ["Stres Yönetimi"]
      }
    ],
    description: "Stres kaynakları, başa çıkma teknikleri, gevşeme egzersizleri.",
    whyTake: "Daha sakin ve huzurlu bir hayat için.",
    employmentAreas: "Kurumsal danışmanlık, bireysel koçluk.",
    requirements: "Ön koşul yok."
  },
  {
    slug: "liderlik-ve-takim-calismasi",
    title: "Liderlik ve Takım Çalışması",
    category: "Kişisel Gelişim",
    breadcrumb: "Kişisel Gelişim > Liderlik",
    image: "/images/populer-egitimler.jpg",
    instructors: [
      {
        slug: "naim-ozgen",
        name: "Naim Özgen",
        since: 2011,
        rating: 4.9,
        privatePrice: 3400,
        groupPrice: 1700,
        corporate: true,
        online: true,
        location: "İstanbul Anadolu Yakası",
        bio: "Yönetici koçu, liderlik eğitmeni.",
        specialties: ["Liderlik ve Takım Çalışması"]
      }
    ],
    description: "Liderlik stilleri, takım motivasyonu, çatışma yönetimi.",
    whyTake: "Takımınızı başarıya taşıyacak beceriler edinin.",
    employmentAreas: "Yöneticilik, proje liderliği.",
    requirements: "Takım çalışması deneyimi avantaj."
  },
  {
    slug: "hedef-belirleme-ve-basari",
    title: "Hedef Belirleme ve Başarı",
    category: "Kişisel Gelişim",
    breadcrumb: "Kişisel Gelişim > Hedef",
    image: "/images/populer-egitimler.jpg",
    instructors: [
      {
        slug: "nurcan-ertem",
        name: "Nurcan Ertem",
        since: 2014,
        rating: 4.7,
        privatePrice: 2800,
        groupPrice: 1400,
        corporate: false,
        online: true,
        location: "Antalya",
        bio: "Başarı koçu, mentor.",
        specialties: ["Hedef Belirleme ve Başarı"]
      }
    ],
    description: "Akıllı hedefler, aksiyon planı, motivasyon ve takip.",
    whyTake: "Hayallerinizi gerçekleştirmek için planlı adımlar atın.",
    employmentAreas: "Her alanda kişisel ve profesyonel hedefler.",
    requirements: "Ön koşul yok."
  },
  {
    slug: "duygusal-zeka-egitimi",
    title: "Duygusal Zeka Eğitimi",
    category: "Kişisel Gelişim",
    breadcrumb: "Kişisel Gelişim > Duygusal Zeka",
    image: "/images/populer-egitimler.jpg",
    instructors: [
      {
        slug: "oguz-karaca",
        name: "Oğuz Karaca",
        since: 2012,
        rating: 4.8,
        privatePrice: 3100,
        groupPrice: 1550,
        corporate: true,
        online: true,
        location: "İstanbul Anadolu Yakası",
        bio: "Duygusal zeka uzmanı, psikolojik danışman.",
        specialties: ["Duygusal Zeka Eğitimi"]
      }
    ],
    description: "Duyguları tanıma, yönetme, empati ve sosyal beceriler.",
    whyTake: "İlişkilerinizde ve iş hayatınızda daha başarılı olun.",
    employmentAreas: "İnsan kaynakları, yöneticilik, eğitim.",
    requirements: "Ön koşul yok."
  },
  {
    slug: "farkindalik-mindfulness",
    title: "Farkındalık (Mindfulness)",
    category: "Kişisel Gelişim",
    breadcrumb: "Kişisel Gelişim > Farkındalık",
    image: "/images/populer-egitimler.jpg",
    instructors: [
      {
        slug: "ozgur-ikiz",
        name: "Özgür İkiz",
        since: 2013,
        rating: 4.7,
        privatePrice: 2900,
        groupPrice: 1450,
        corporate: false,
        online: true,
        location: "Eskişehir",
        bio: "Mindfulness eğitmeni, yoga terapisti.",
        specialties: ["Farkındalık (Mindfulness)"]
      }
    ],
    description: "Anı yaşama, nefes farkındalığı, meditasyon ve zihin sakinliği.",
    whyTake: "Stres azaltma, odaklanma ve iç huzur.",
    employmentAreas: "Kişisel gelişim, terapi, kurumsal eğitim.",
    requirements: "Ön koşul yok."
  },

  // ========== ÇOCUK GELİŞİMİ KURSLARI ==========
  {
    slug: "0-3-yas-cocuk-gelisimi",
    title: "0-3 Yaş Çocuk Gelişimi",
    category: "Çocuk Gelişimi",
    breadcrumb: "Çocuk Gelişimi > 0-3 Yaş",
    image: "/images/populer-egitimler.jpg",
    instructors: [
      {
        slug: "pakize-erdem",
        name: "Pakize Erdem",
        since: 2011,
        rating: 4.9,
        privatePrice: 2800,
        groupPrice: 1400,
        corporate: true,
        online: true,
        location: "İstanbul Anadolu Yakası",
        bio: "Çocuk gelişimi uzmanı, pedagog.",
        specialties: ["0-3 Yaş Çocuk Gelişimi"]
      }
    ],
    description: "Bebeklik döneminde fiziksel, bilişsel ve duygusal gelişim.",
    whyTake: "Ebeveynler ve eğitimciler için temel bilgiler.",
    employmentAreas: "Anaokulları, kreşler, aile danışmanlığı.",
    requirements: "Ön koşul yok."
  },
  {
    slug: "okul-oncesi-egitimi",
    title: "Okul Öncesi Eğitimi",
    category: "Çocuk Gelişimi",
    breadcrumb: "Çocuk Gelişimi > Okul Öncesi",
    image: "/images/populer-egitimler.jpg",
    instructors: [
      {
        slug: "rahmiye-yucel",
        name: "Rahmiye Yücel",
        since: 2012,
        rating: 4.8,
        privatePrice: 2500,
        groupPrice: 1250,
        corporate: true,
        online: true,
        location: "Ankara",
        bio: "Okul öncesi eğitimci, oyun terapisti.",
        specialties: ["Okul Öncesi Eğitimi"]
      }
    ],
    description: "3-6 yaş çocukların gelişim özellikleri ve eğitim yöntemleri.",
    whyTake: "Çocuğunuzu okula hazırlamak için rehberlik.",
    employmentAreas: "Anaokulları, etüt merkezleri.",
    requirements: "Ön koşul yok."
  },
  {
    slug: "oyun-terapisi",
    title: "Oyun Terapisi",
    category: "Çocuk Gelişimi",
    breadcrumb: "Çocuk Gelişimi > Oyun Terapisi",
    image: "/images/populer-egitimler.jpg",
    instructors: [
      {
        slug: "saadet-kurban",
        name: "Saadet Kurban",
        since: 2013,
        rating: 4.9,
        privatePrice: 3400,
        groupPrice: 1700,
        corporate: false,
        online: true,
        location: "İstanbul Anadolu Yakası",
        bio: "Oyun terapisti, çocuk psikoloğu.",
        specialties: ["Oyun Terapisi"]
      }
    ],
    description: "Oyun yoluyla çocukların duygusal sorunlarını anlama ve çözme.",
    whyTake: "Çocuklarla iletişim kurmanın etkili yolu.",
    employmentAreas: "Psikolojik danışmanlık, rehabilitasyon.",
    requirements: "Psikoloji veya çocuk gelişimi altyapısı önerilir."
  },
  {
    slug: "cocuklarda-davranis-yonetimi",
    title: "Çocuklarda Davranış Yönetimi",
    category: "Çocuk Gelişimi",
    breadcrumb: "Çocuk Gelişimi > Davranış",
    image: "/images/populer-egitimler.jpg",
    instructors: [
      {
        slug: "seher-toprak",
        name: "Seher Toprak",
        since: 2014,
        rating: 4.7,
        privatePrice: 2900,
        groupPrice: 1450,
        corporate: true,
        online: true,
        location: "İzmir",
        bio: "Aile danışmanı, davranış uzmanı.",
        specialties: ["Çocuklarda Davranış Yönetimi"]
      }
    ],
    description: "Problem davranışlarla baş etme, olumlu disiplin yöntemleri.",
    whyTake: "Ebeveynler için pratik çözümler.",
    employmentAreas: "Aile eğitimi, okul danışmanlığı.",
    requirements: "Ön koşul yok."
  },
  {
    slug: "dikkat-eksikligi-ve-hiperaktivite",
    title: "Dikkat Eksikliği ve Hiperaktivite",
    category: "Çocuk Gelişimi",
    breadcrumb: "Çocuk Gelişimi > DEHB",
    image: "/images/populer-egitimler.jpg",
    instructors: [
      {
        slug: "selman-oz",
        name: "Selman Öz",
        since: 2012,
        rating: 4.9,
        privatePrice: 3600,
        groupPrice: 1800,
        corporate: true,
        online: true,
        location: "İstanbul Anadolu Yakası",
        bio: "Çocuk psikiyatristi, DEHB uzmanı.",
        specialties: ["Dikkat Eksikliği ve Hiperaktivite"]
      }
    ],
    description: "DEHB belirtileri, tanı, eğitsel yaklaşımlar ve aile desteği.",
    whyTake: "DEHB'li çocuklara doğru yaklaşımı öğrenin.",
    employmentAreas: "Psikiyatri, özel eğitim.",
    requirements: "Ön koşul yok."
  },
  {
    slug: "ozel-egitim-ve-rehabilitasyon",
    title: "Özel Eğitim ve Rehabilitasyon",
    category: "Çocuk Gelişimi",
    breadcrumb: "Çocuk Gelişimi > Özel Eğitim",
    image: "/images/populer-egitimler.jpg",
    instructors: [
      {
        slug: "sevda-yildirim",
        name: "Sevda Yıldırım",
        since: 2011,
        rating: 4.9,
        privatePrice: 3800,
        groupPrice: 1900,
        corporate: true,
        online: false,
        location: "Bursa",
        bio: "Özel eğitim uzmanı, fizyoterapist.",
        specialties: ["Özel Eğitim ve Rehabilitasyon"]
      }
    ],
    description: "Özel gereksinimli çocuklara yönelik eğitim ve rehabilitasyon teknikleri.",
    whyTake: "Bu alanda çalışan veya çalışmak isteyenler için.",
    employmentAreas: "Rehabilitasyon merkezleri, özel okullar.",
    requirements: "Özel eğitim altyapısı önerilir."
  },
  {
    slug: "cocuklarda-zeka-gelisimi",
    title: "Çocuklarda Zeka Gelişimi",
    category: "Çocuk Gelişimi",
    breadcrumb: "Çocuk Gelişimi > Zeka",
    image: "/images/populer-egitimler.jpg",
    instructors: [
      {
        slug: "sultan-dincer",
        name: "Sultan Dinçer",
        since: 2013,
        rating: 4.8,
        privatePrice: 3200,
        groupPrice: 1600,
        corporate: false,
        online: true,
        location: "İstanbul Anadolu Yakası",
        bio: "Zeka gelişimi uzmanı, pedagog.",
        specialties: ["Çocuklarda Zeka Gelişimi"]
      }
    ],
    description: "Zeka oyunları, bilişsel gelişim etkinlikleri ve erken eğitim.",
    whyTake: "Çocuğunuzun potansiyelini en üst düzeye çıkarın.",
    employmentAreas: "Eğitim danışmanlığı, zeka kulüpleri.",
    requirements: "Ön koşul yok."
  },
  {
    slug: "cocuklarda-dil-gelisimi",
    title: "Çocuklarda Dil Gelişimi",
    category: "Çocuk Gelişimi",
    breadcrumb: "Çocuk Gelişimi > Dil",
    image: "/images/populer-egitimler.jpg",
    instructors: [
      {
        slug: "saziye-kunt",
        name: "Şaziye Kunt",
        since: 2014,
        rating: 4.7,
        privatePrice: 2800,
        groupPrice: 1400,
        corporate: false,
        online: true,
        location: "Antalya",
        bio: "Dil ve konuşma terapisti.",
        specialties: ["Çocuklarda Dil Gelişimi"]
      }
    ],
    description: "Dil edinimi aşamaları, konuşma bozuklukları ve destek yöntemleri.",
    whyTake: "Çocuğunuzun iletişim becerilerini destekleyin.",
    employmentAreas: "Dil ve konuşma terapisi, eğitim.",
    requirements: "Ön koşul yok."
  },
  {
    slug: "cocuk-resimleri-analizi",
    title: "Çocuk Resimleri Analizi",
    category: "Çocuk Gelişimi",
    breadcrumb: "Çocuk Gelişimi > Resim Analizi",
    image: "/images/populer-egitimler.jpg",
    instructors: [
      {
        slug: "ufuk-yilmaz",
        name: "Ufuk Yılmaz",
        since: 2013,
        rating: 4.6,
        privatePrice: 2700,
        groupPrice: 1350,
        corporate: false,
        online: true,
        location: "İstanbul Anadolu Yakası",
        bio: "Sanat terapisti, çocuk psikoloğu.",
        specialties: ["Çocuk Resimleri Analizi"]
      }
    ],
    description: "Çocukların resimlerinden duygu ve düşüncelerini anlama.",
    whyTake: "Ebeveynler ve eğitimciler için önemli bir araç.",
    employmentAreas: "Psikolojik danışmanlık, sanat terapisi.",
    requirements: "Ön koşul yok."
  },
  {
    slug: "aile-danismanligi-ve-cocuk",
    title: "Aile Danışmanlığı ve Çocuk",
    category: "Çocuk Gelişimi",
    breadcrumb: "Çocuk Gelişimi > Aile Danışmanlığı",
    image: "/images/populer-egitimler.jpg",
    instructors: [
      {
        slug: "umit-acar",
        name: "Ümit Acar",
        since: 2012,
        rating: 4.8,
        privatePrice: 3500,
        groupPrice: 1750,
        corporate: true,
        online: true,
        location: "Konya",
        bio: "Aile danışmanı, psikoterapist.",
        specialties: ["Aile Danışmanlığı ve Çocuk"]
      }
    ],
    description: "Aile içi iletişim, ebeveyn-çocuk ilişkisi, sorun çözme.",
    whyTake: "Sağlıklı aile ortamı için profesyonel destek.",
    employmentAreas: "Aile danışma merkezleri, psikolojik danışmanlık.",
    requirements: "Ön koşul yok."
  },

  // ========== GÜZEL KONUŞMA & DİKSİYON KURSLARI ==========
  {
    slug: "diksiyon-ve-etkili-konusma",
    title: "Diksiyon ve Etkili Konuşma",
    category: "Diksiyon",
    breadcrumb: "Diksiyon > Temel",
    image: "/images/populer-egitimler.jpg",
    instructors: [
      {
        slug: "vahit-ergin",
        name: "Vahit Ergin",
        since: 2012,
        rating: 4.8,
        privatePrice: 2600,
        groupPrice: 1300,
        corporate: true,
        online: true,
        location: "İstanbul Anadolu Yakası",
        bio: "Diksiyon eğitmeni, tiyatro sanatçısı.",
        specialties: ["Diksiyon ve Etkili Konuşma"]
      }
    ],
    description: "Doğru nefes, vurgu, tonlama ve beden dili.",
    whyTake: "Konuşmalarınızda etkileyici ve anlaşılır olun.",
    employmentAreas: "Herkes için kişisel gelişim.",
    requirements: "Ön koşul yok."
  },
  {
    slug: "topluluk-onunde-konusma",
    title: "Topluluk Önünde Konuşma",
    category: "Diksiyon",
    breadcrumb: "Diksiyon > Topluluk",
    image: "/images/populer-egitimler.jpg",
    instructors: [
      {
        slug: "yasar-akalin",
        name: "Yaşar Akalın",
        since: 2013,
        rating: 4.8,
        privatePrice: 2900,
        groupPrice: 1450,
        corporate: true,
        online: true,
        location: "Ankara",
        bio: "Hitabet uzmanı, iletişim koçu.",
        specialties: ["Topluluk Önünde Konuşma"]
      }
    ],
    description: "Sunum teknikleri, heyecan kontrolü, dinleyiciyi etkileme.",
    whyTake: "İş toplantıları, konferanslar ve sosyal ortamlarda özgüvenli konuşun.",
    employmentAreas: "Yöneticiler, öğretmenler, satış profesyonelleri.",
    requirements: "Ön koşul yok."
  },
  {
    slug: "ses-ve-nefes-teknikleri",
    title: "Ses ve Nefes Teknikleri",
    category: "Diksiyon",
    breadcrumb: "Diksiyon > Ses Nefes",
    image: "/images/populer-egitimler.jpg",
    instructors: [
      {
        slug: "yeliz-sonmez",
        name: "Yeliz Sönmez",
        since: 2014,
        rating: 4.7,
        privatePrice: 2800,
        groupPrice: 1400,
        corporate: false,
        online: true,
        location: "İstanbul Anadolu Yakası",
        bio: "Ses koçu, şan eğitmeni.",
        specialties: ["Ses ve Nefes Teknikleri"]
      }
    ],
    description: "Diyafram nefesi, ses rezonansı, ses hijyeni.",
    whyTake: "Sesinizi doğru kullanarak güçlü ve etkili konuşun.",
    employmentAreas: "Spikerler, öğretmenler, şarkıcılar.",
    requirements: "Ön koşul yok."
  },
  {
    slug: "hitabet-sanati",
    title: "Hitabet Sanatı",
    category: "Diksiyon",
    breadcrumb: "Diksiyon > Hitabet",
    image: "/images/populer-egitimler.jpg",
    instructors: [
      {
        slug: "zafer-akyuz",
        name: "Zafer Akyüz",
        since: 2011,
        rating: 4.9,
        privatePrice: 3100,
        groupPrice: 1550,
        corporate: true,
        online: true,
        location: "İzmir",
        bio: "Hitabetçi, yazar, siyaset iletişimcisi.",
        specialties: ["Hitabet Sanatı"]
      }
    ],
    description: "İkna edici konuşma, retorik, kitleleri etkileme.",
    whyTake: "Liderler ve konuşmacılar için ileri düzey teknikler.",
    employmentAreas: "Siyaset, iş dünyası, akademi.",
    requirements: "Temel diksiyon bilgisi."
  },
  {
    slug: "spikerlik-egitimi",
    title: "Spikerlik Eğitimi",
    category: "Diksiyon",
    breadcrumb: "Diksiyon > Spikerlik",
    image: "/images/populer-egitimler.jpg",
    instructors: [
      {
        slug: "abidin-tosun",
        name: "Abidin Tosun",
        since: 2010,
        rating: 5.0,
        privatePrice: 3800,
        groupPrice: 1900,
        corporate: true,
        online: true,
        location: "İstanbul Anadolu Yakası",
        bio: "TV spikeri, haber sunucusu.",
        specialties: ["Spikerlik Eğitimi"]
      }
    ],
    description: "Haber okuma, kamera önü duruş, diksiyon ve akıcılık.",
    whyTake: "Medya sektöründe kariyer hedefleyenler için.",
    employmentAreas: "Televizyon, radyo, dijital platformlar.",
    requirements: "Temel diksiyon bilgisi."
  },
  {
    slug: "radyo-ve-tv-sunuculugu",
    title: "Radyo ve TV Sunuculuğu",
    category: "Diksiyon",
    breadcrumb: "Diksiyon > Sunuculuk",
    image: "/images/populer-egitimler.jpg",
    instructors: [
      {
        slug: "aysil-ozgen",
        name: "Ayşıl Özgen",
        since: 2012,
        rating: 4.9,
        privatePrice: 4200,
        groupPrice: 2100,
        corporate: true,
        online: true,
        location: "Bursa",
        bio: "Radyo programcısı, TV sunucusu.",
        specialties: ["Radyo ve TV Sunuculuğu"]
      }
    ],
    description: "Mikrofon kullanımı, program akışı, canlı yayın teknikleri.",
    whyTake: "Radyo veya televizyon dünyasında yer alın.",
    employmentAreas: "Radyo, TV, podcast.",
    requirements: "Temel diksiyon bilgisi."
  },
  {
    slug: "beden-dili-ve-diksiyon",
    title: "Beden Dili ve Diksiyon",
    category: "Diksiyon",
    breadcrumb: "Diksiyon > Beden Dili",
    image: "/images/populer-egitimler.jpg",
    instructors: [
      {
        slug: "behzat-kaya",
        name: "Behzat Kaya",
        since: 2013,
        rating: 4.7,
        privatePrice: 2700,
        groupPrice: 1350,
        corporate: true,
        online: true,
        location: "İstanbul Anadolu Yakası",
        bio: "Beden dili uzmanı, iletişim eğitmeni.",
        specialties: ["Beden Dili ve Diksiyon"]
      }
    ],
    description: "Duruş, jest, mimikler ve sözsüz iletişim.",
    whyTake: "Konuşmanızı beden dilinizle destekleyin.",
    employmentAreas: "Herkes için etkili iletişim.",
    requirements: "Ön koşul yok."
  },
  {
    slug: "seslendirme-teknikleri",
    title: "Seslendirme Teknikleri",
    category: "Diksiyon",
    breadcrumb: "Diksiyon > Seslendirme",
    image: "/images/populer-egitimler.jpg",
    instructors: [
      {
        slug: "berna-ozcan",
        name: "Berna Özcan",
        since: 2014,
        rating: 4.8,
        privatePrice: 3400,
        groupPrice: 1700,
        corporate: false,
        online: true,
        location: "Antalya",
        bio: "Seslendirme sanatçısı, dublaj eğitmeni.",
        specialties: ["Seslendirme Teknikleri"]
      }
    ],
    description: "Ses tonu ayarlama, karakter yaratma, dublaj çalışmaları.",
    whyTake: "Reklam, dizi, belgesel seslendirmeleri için.",
    employmentAreas: "Seslendirme stüdyoları, dublaj.",
    requirements: "Temel diksiyon bilgisi."
  },
  {
    slug: "is-hayatinda-etkili-konusma",
    title: "İş Hayatında Etkili Konuşma",
    category: "Diksiyon",
    breadcrumb: "Diksiyon > İş Konuşması",
    image: "/images/populer-egitimler.jpg",
    instructors: [
      {
        slug: "caner-demir",
        name: "Caner Demir",
        since: 2013,
        rating: 4.7,
        privatePrice: 2800,
        groupPrice: 1400,
        corporate: true,
        online: true,
        location: "İstanbul Anadolu Yakası",
        bio: "İletişim danışmanı, kurumsal eğitmen.",
        specialties: ["İş Hayatında Etkili Konuşma"]
      }
    ],
    description: "Sunum, toplantı yönetimi, müşteri görüşmeleri.",
    whyTake: "Kariyerinizde iletişim becerilerinizle fark yaratın.",
    employmentAreas: "Profesyoneller, yöneticiler, satışçılar.",
    requirements: "Ön koşul yok."
  },
  {
    slug: "aksan-ve-tonlama-duzeltme",
    title: "Aksan ve Tonlama Düzeltme",
    category: "Diksiyon",
    breadcrumb: "Diksiyon > Aksan Düzeltme",
    image: "/images/populer-egitimler.jpg",
    instructors: [
      {
        slug: "dilek-ozsoy",
        name: "Dilek Özsoy",
        since: 2015,
        rating: 4.6,
        privatePrice: 2600,
        groupPrice: 1300,
        corporate: false,
        online: true,
        location: "Eskişehir",
        bio: "Diksiyon eğitmeni, konuşma terapisti.",
        specialties: ["Aksan ve Tonlama Düzeltme"]
      }
    ],
    description: "Bölgesel aksanları düzeltme, doğru vurgu ve tonlama.",
    whyTake: "Standart Türkçe ile daha anlaşılır konuşun.",
    employmentAreas: "Herkes için.",
    requirements: "Ön koşul yok."
  },

  // ========== FOTOĞRAFÇILIK KURSLARI ==========
  {
    slug: "temel-fotografcilik",
    title: "Temel Fotoğrafçılık",
    category: "Fotoğrafçılık",
    breadcrumb: "Fotoğrafçılık > Temel",
    image: "/images/populer-egitimler.jpg",
    instructors: [
      {
        slug: "erdal-gumus",
        name: "Erdal Gümüş",
        since: 2012,
        rating: 4.8,
        privatePrice: 2500,
        groupPrice: 1250,
        corporate: true,
        online: true,
        location: "İstanbul Anadolu Yakası",
        bio: "Fotoğraf sanatçısı, sergi sahibi.",
        specialties: ["Temel Fotoğrafçılık"]
      }
    ],
    description: "Enstantane, diyafram, ISO, kompozisyon ve ışık kullanımı.",
    whyTake: "Fotoğrafçılığa sağlam bir başlangıç yapın.",
    employmentAreas: "Hobi, profesyonel kariyer.",
    requirements: "Herhangi bir fotoğraf makinesi."
  },
  {
    slug: "portre-fotografciligi",
    title: "Portre Fotoğrafçılığı",
    category: "Fotoğrafçılık",
    breadcrumb: "Fotoğrafçılık > Portre",
    image: "/images/populer-egitimler.jpg",
    instructors: [
      {
        slug: "fatos-yalcin",
        name: "Fatoş Yalçın",
        since: 2013,
        rating: 4.9,
        privatePrice: 2900,
        groupPrice: 1450,
        corporate: false,
        online: true,
        location: "Ankara",
        bio: "Portre fotoğrafçısı, dergi çekimleri.",
        specialties: ["Portre Fotoğrafçılığı"]
      }
    ],
    description: "Işık ayarları, poz verme yönlendirme, stüdyo ekipmanları.",
    whyTake: "İnsan fotoğrafçılığında uzmanlaşın.",
    employmentAreas: "Stüdyo, düğün, moda.",
    requirements: "Temel fotoğraf bilgisi."
  },
  {
    slug: "manzara-ve-doga-fotografciligi",
    title: "Manzara ve Doğa Fotoğrafçılığı",
    category: "Fotoğrafçılık",
    breadcrumb: "Fotoğrafçılık > Manzara",
    image: "/images/populer-egitimler.jpg",
    instructors: [
      {
        slug: "gurkan-tan",
        name: "Gürkan Tan",
        since: 2011,
        rating: 4.9,
        privatePrice: 2800,
        groupPrice: 1400,
        corporate: true,
        online: true,
        location: "İstanbul Anadolu Yakası",
        bio: "Doğa fotoğrafçısı, uluslararası ödüller.",
        specialties: ["Manzara ve Doğa Fotoğrafçılığı"]
      }
    ],
    description: "Doğal ışık, kompozisyon, uzun pozlama, filtre kullanımı.",
    whyTake: "Doğanın güzelliklerini kareleyin.",
    employmentAreas: "Seyahat, belgesel, stok fotoğrafçılık.",
    requirements: "Temel fotoğraf bilgisi."
  },
  {
    slug: "dugun-ve-etkinlik-fotografciligi",
    title: "Düğün ve Etkinlik Fotoğrafçılığı",
    category: "Fotoğrafçılık",
    breadcrumb: "Fotoğrafçılık > Düğün",
    image: "/images/populer-egitimler.jpg",
    instructors: [
      {
        slug: "handan-kunt",
        name: "Handan Kunt",
        since: 2012,
        rating: 4.8,
        privatePrice: 3400,
        groupPrice: 1700,
        corporate: false,
        online: true,
        location: "İzmir",
        bio: "Düğün fotoğrafçısı, albüm tasarımcısı.",
        specialties: ["Düğün ve Etkinlik Fotoğrafçılığı"]
      }
    ],
    description: "Anı yakalama, flaş kullanımı, hızlı çekim, kurgu.",
    whyTake: "Düğün ve organizasyon sektöründe çalışın.",
    employmentAreas: "Düğün fotoğrafçılığı, kurumsal etkinlikler.",
    requirements: "Temel fotoğraf bilgisi, portfolyo."
  },
  {
    slug: "adobe-lightroom-ve-photoshop",
    title: "Adobe Lightroom ve Photoshop",
    category: "Fotoğrafçılık",
    breadcrumb: "Fotoğrafçılık > Post-Prodüksiyon",
    image: "/images/populer-egitimler.jpg",
    instructors: [
      {
        slug: "irmak-sozer",
        name: "Irmak Sözer",
        since: 2014,
        rating: 4.7,
        privatePrice: 3100,
        groupPrice: 1550,
        corporate: true,
        online: true,
        location: "İstanbul Anadolu Yakası",
        bio: "Dijital görüntü uzmanı, retouşçu.",
        specialties: ["Adobe Lightroom ve Photoshop"]
      }
    ],
    description: "RAW geliştirme, renk düzeltme, rötuş ve efektler.",
    whyTake: "Fotoğraflarınızı profesyonelce düzenleyin.",
    employmentAreas: "Fotoğrafçılık, grafik tasarım.",
    requirements: "Temel bilgisayar bilgisi."
  }
];