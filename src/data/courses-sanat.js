// src/data/courses-sanat.js

export const courses = [
  // ===== SANAT KURSLARI =====
{
  slug: "animasyon-dersi",
  title: "Animasyon Dersi",
  category: "Sanat Eğitimi",
  breadcrumb: "Sanat Eğitimi > Animasyon",
  image: "/images/sanat.jpg",
  instructors: [
    {
      slug: "kadir-ozguner",
      name: "Kadir Özgüner",
      since: 2014,
      rating: 4.8,
      privatePrice: 2250,
      groupPrice: 1125,
      corporate: true,
      online: true,
      location: "İstanbul Anadolu Yakası",
      bio: "Animasyon alanında 9 yıllık deneyim, birçok projede yer almış.",
      specialties: ["Animasyon"]
    },
    {
      slug: "nurcan-altin",
      name: "Nurcan Altın",
      since: 2016,
      rating: 4.6,
      privatePrice: 1950,
      groupPrice: 975,
      corporate: false,
      online: true,
      location: "Eskişehir",
      bio: "Eskişehir'de animasyon dersleri, genç yeteneklere eğitim.",
      specialties: ["Animasyon"]
    }
  ],
  description: "Animasyon dersleri, temel animasyon tekniklerinden ileri seviyeye kadar her seviyede özel ders imkanı.",
  whyTake: "Kendi animasyonlarınızı oluşturarak yaratıcılığınızı konuşturun.",
  employmentAreas: "Animasyon stüdyoları, oyun sektörü, reklam ajansları.",
  requirements: "Temel çizim bilgisi avantajdır."
},
{
  slug: "cam-isleme-dersi",
  title: "Cam İşleme Dersi",
  category: "Sanat Eğitimi",
  breadcrumb: "Sanat Eğitimi > Cam İşleme",
  image: "/images/sanat.jpg",
  instructors: [
    {
      slug: "yavuz-burcak",
      name: "Yavuz Burçak",
      since: 2013,
      rating: 4.9,
      privatePrice: 2400,
      groupPrice: 1200,
      corporate: true,
      online: false,
      location: "İstanbul Anadolu Yakası",
      bio: "Cam işleme ustası, 10 yıllık deneyim, atölye çalışmaları.",
      specialties: ["Cam İşleme"]
    },
    {
      slug: "gulser-koroglu",
      name: "Gülser Köroğlu",
      since: 2016,
      rating: 4.6,
      privatePrice: 1800,
      groupPrice: 900,
      corporate: false,
      online: false,
      location: "Eskişehir",
      bio: "Eskişehir'de cam işleme atölyesi, geleneksel teknikler.",
      specialties: ["Cam İşleme"]
    }
  ],
  description: "Cam işleme dersleri, sıcak cam, soğuk cam teknikleri ve tasarım.",
  whyTake: "El becerilerinizi geliştirerek özgün cam objeler yaratın.",
  employmentAreas: "Cam atölyeleri, tasarım stüdyoları, kişisel üretim.",
  requirements: "Hiçbir ön koşul yoktur, el becerisi avantajdır."
},
{
  slug: "cizim-dersi",
  title: "Çizim Dersi",
  category: "Sanat Eğitimi",
  breadcrumb: "Sanat Eğitimi > Çizim",
  image: "/images/sanat.jpg",
  instructors: [
    {
      slug: "turgay-poyrazoglu",
      name: "Turgay Poyrazoğlu",
      since: 2015,
      rating: 4.7,
      privatePrice: 1750,
      groupPrice: 875,
      corporate: true,
      online: true,
      location: "İstanbul Anadolu Yakası",
      bio: "Çizim ve illüstrasyon alanında 8 yıllık deneyim.",
      specialties: ["Çizim"]
    },
    {
      slug: "sukran-eroglu",
      name: "Şükran Eroğlu",
      since: 2017,
      rating: 4.5,
      privatePrice: 1650,
      groupPrice: 825,
      corporate: false,
      online: true,
      location: "İzmir",
      bio: "İzmir'de çizim dersleri, karakalem ve dijital çizim.",
      specialties: ["Çizim"]
    }
  ],
  description: "Çizim dersleri, temel çizim tekniklerinden ileri seviyeye kadar.",
  whyTake: "Sanatsal yeteneklerinizi geliştirin ve kendi tarzınızı oluşturun.",
  employmentAreas: "İllüstrasyon, tasarım, sanat çalışmaları.",
  requirements: "Hiçbir ön koşul yoktur."
},
{
  slug: "hali-kilim-dokuma-dersi",
  title: "Halı & Kilim Dokuma Dersi",
  category: "Sanat Eğitimi",
  breadcrumb: "Sanat Eğitimi > Halı & Kilim",
  image: "/images/sanat.jpg",
  instructors: [
    {
      slug: "emin-akpinar",
      name: "Emin Akpınar",
      since: 2012,
      rating: 5.0,
      privatePrice: 2800,
      groupPrice: 1400,
      corporate: true,
      online: false,
      location: "İstanbul Anadolu Yakası",
      bio: "Geleneksel halı dokuma ustası, 11 yıllık deneyim.",
      specialties: ["Halı & Kilim Dokuma"]
    },
    {
      slug: "asiye-dundar",
      name: "Asiye Dündar",
      since: 2015,
      rating: 4.8,
      privatePrice: 2100,
      groupPrice: 1050,
      corporate: false,
      online: false,
      location: "Konya",
      bio: "Konya'da halı dokuma eğitmeni, yöresel desenler.",
      specialties: ["Halı & Kilim Dokuma"]
    }
  ],
  description: "Halı ve kilim dokuma dersleri, geleneksel teknikler ve modern tasarımlar.",
  whyTake: "El sanatlarına ilgi duyanlar için eşsiz bir beceri.",
  employmentAreas: "Halı atölyeleri, kültürel miras projeleri, kişisel üretim.",
  requirements: "Hiçbir ön koşul yoktur, sabır ve el becerisi önemlidir."
},
{
  slug: "heykel-dersi",
  title: "Heykel Dersi",
  category: "Sanat Eğitimi",
  breadcrumb: "Sanat Eğitimi > Heykel",
  image: "/images/sanat.jpg",
  instructors: [
    {
      slug: "gungor-toprak",
      name: "Güngör Toprak",
      since: 2011,
      rating: 5.0,
      privatePrice: 3200,
      groupPrice: 1600,
      corporate: true,
      online: false,
      location: "İstanbul Anadolu Yakası",
      bio: "Heykel sanatçısı, 12 yıllık deneyim, birçok sergi.",
      specialties: ["Heykel"]
    },
    {
      slug: "nursen-karadag",
      name: "Nurşen Karadağ",
      since: 2014,
      rating: 4.8,
      privatePrice: 2600,
      groupPrice: 1300,
      corporate: true,
      online: false,
      location: "Ankara",
      bio: "Ankara'da heykel atölyesi, taş ve ahşap heykel.",
      specialties: ["Heykel"]
    }
  ],
  description: "Heykel dersleri, kil, taş, ahşap gibi malzemelerle şekillendirme.",
  whyTake: "Üç boyutlu sanatın inceliklerini öğrenin.",
  employmentAreas: "Sanat stüdyoları, restorasyon, kişisel sanat çalışmaları.",
  requirements: "Temel el becerisi ve sanat ilgisi."
},
{
  slug: "kaligrafi-dersi",
  title: "Kaligrafi Dersi",
  category: "Sanat Eğitimi",
  breadcrumb: "Sanat Eğitimi > Kaligrafi",
  image: "/images/sanat.jpg",
  instructors: [
    {
      slug: "zeki-altindag",
      name: "Zeki Altındağ",
      since: 2015,
      rating: 4.7,
      privatePrice: 1700,
      groupPrice: 850,
      corporate: true,
      online: true,
      location: "İstanbul Avrupa Yakası",
      bio: "Kaligrafi sanatçısı, 8 yıllık deneyim, klasik ve modern stiller.",
      specialties: ["Kaligrafi"]
    },
    {
      slug: "mahmut-sozer",
      name: "Mahmut Sözer",
      since: 2016,
      rating: 4.5,
      privatePrice: 1550,
      groupPrice: 775,
      corporate: false,
      online: true,
      location: "Bursa",
      bio: "Bursa'da kaligrafi dersleri, el yazısı güzelleştirme.",
      specialties: ["Kaligrafi"]
    }
  ],
  description: "Kaligrafi dersleri, güzel yazı sanatının incelikleri.",
  whyTake: "El yazınızı güzelleştirin ve sanatsal yazılar oluşturun.",
  employmentAreas: "Davetiye tasarımı, grafik tasarım, sanat çalışmaları.",
  requirements: "Hiçbir ön koşul yoktur."
},
{
  slug: "karakalem-dersi",
  title: "Karakalem Dersi",
  category: "Sanat Eğitimi",
  breadcrumb: "Sanat Eğitimi > Karakalem",
  image: "/images/sanat.jpg",
  instructors: [
    {
      slug: "gonul-alkan",
      name: "Gönül Alkan",
      since: 2015,
      rating: 4.6,
      privatePrice: 1600,
      groupPrice: 800,
      corporate: true,
      online: true,
      location: "İstanbul Avrupa Yakası",
      bio: "Karakalem ve resim eğitmeni, 8 yıllık deneyim.",
      specialties: ["Karakalem"]
    },
    {
      slug: "irfan-bozkurt",
      name: "İrfan Bozkurt",
      since: 2017,
      rating: 4.4,
      privatePrice: 1500,
      groupPrice: 750,
      corporate: false,
      online: true,
      location: "Antalya",
      bio: "Antalya'da karakalem dersleri, portre ve figür çizimi.",
      specialties: ["Karakalem"]
    }
  ],
  description: "Karakalem dersleri, temel çizim teknikleri, ışık-gölge, perspektif.",
  whyTake: "Sanatın temelini oluşturan karakalem ile başlayın.",
  employmentAreas: "Sanat çalışmaları, tasarım, illüstrasyon.",
  requirements: "Hiçbir ön koşul yoktur."
},
{
  slug: "oyun-yazimi-dersi",
  title: "Oyun Yazımı Dersi",
  category: "Sanat Eğitimi",
  breadcrumb: "Sanat Eğitimi > Oyun Yazımı",
  image: "/images/sanat.jpg",
  instructors: [
    {
      slug: "jale-ertem",
      name: "Jale Ertem",
      since: 2012,
      rating: 5.0,
      privatePrice: 3600,
      groupPrice: 1800,
      corporate: true,
      online: true,
      location: "İstanbul Avrupa Yakası",
      bio: "Tiyatro yazarı ve oyun yazımı eğitmeni, 11 yıllık deneyim.",
      specialties: ["Oyun Yazımı"]
    },
    {
      slug: "hakan-korkmazel",
      name: "Hakan Korkmazel",
      since: 2014,
      rating: 4.8,
      privatePrice: 3150,
      groupPrice: 1575,
      corporate: true,
      online: true,
      location: "İzmir",
      bio: "İzmir'de oyun yazımı atölyeleri, senaryo yazarlığı.",
      specialties: ["Oyun Yazımı"]
    }
  ],
  description: "Oyun yazımı dersleri, dramaturji, karakter oluşturma, diyalog yazımı.",
  whyTake: "Kendi oyununuzu yazmak için gereken tüm beceriler.",
  employmentAreas: "Tiyatro, dizi/film sektörü, oyun stüdyoları.",
  requirements: "Yazma isteği ve yaratıcılık."
},
{
  slug: "resim-dersi",
  title: "Resim Dersi",
  category: "Sanat Eğitimi",
  breadcrumb: "Sanat Eğitimi > Resim",
  image: "/images/sanat.jpg",
  instructors: [
    {
      slug: "ulku-oztekin",
      name: "Ülkü Öztekin",
      since: 2014,
      rating: 4.8,
      privatePrice: 2100,
      groupPrice: 1050,
      corporate: true,
      online: true,
      location: "İstanbul Avrupa Yakası",
      bio: "Resim eğitmeni, yağlıboya ve akrilik teknikleri.",
      specialties: ["Resim"]
    },
    {
      slug: "fikret-dolgun",
      name: "Fikret Dolgun",
      since: 2016,
      rating: 4.6,
      privatePrice: 1850,
      groupPrice: 925,
      corporate: false,
      online: true,
      location: "Muğla",
      bio: "Muğla'da resim dersleri, doğa manzaraları ve soyut çalışmalar.",
      specialties: ["Resim"]
    }
  ],
  description: "Resim dersleri, yağlıboya, suluboya, akrilik gibi farklı teknikler.",
  whyTake: "Sanatsal ifadenizi geliştirin ve kendi eserlerinizi yaratın.",
  employmentAreas: "Sanat galerileri, kişisel sergiler, sanat terapisi.",
  requirements: "Hiçbir ön koşul yoktur."
},
{
  slug: "seramik-dersi",
  title: "Seramik Dersi",
  category: "Sanat Eğitimi",
  breadcrumb: "Sanat Eğitimi > Seramik",
  image: "/images/sanat.jpg",
  instructors: [
    {
      slug: "necla-alp",
      name: "Necla Alp",
      since: 2013,
      rating: 4.9,
      privatePrice: 2300,
      groupPrice: 1150,
      corporate: true,
      online: false,
      location: "İstanbul Avrupa Yakası",
      bio: "Seramik sanatçısı, 10 yıllık deneyim, çark ve şekillendirme.",
      specialties: ["Seramik"]
    },
    {
      slug: "galip-celik",
      name: "Galip Çelik",
      since: 2015,
      rating: 4.7,
      privatePrice: 1900,
      groupPrice: 950,
      corporate: false,
      online: false,
      location: "Kütahya",
      bio: "Kütahya'da seramik ve çini eğitmeni, geleneksel desenler.",
      specialties: ["Seramik"]
    }
  ],
  description: "Seramik dersleri, çarkta şekillendirme, el yapımı seramikler ve sırlama.",
  whyTake: "Toprağa şekil vererek özgün objeler yaratın.",
  employmentAreas: "Seramik atölyeleri, çini fabrikaları, kişisel üretim.",
  requirements: "El becerisi ve yaratıcılık."
},
{
  slug: "sinema-dersi",
  title: "Sinema Dersi",
  category: "Sanat Eğitimi",
  breadcrumb: "Sanat Eğitimi > Sinema",
  image: "/images/sanat.jpg",
  instructors: [
    {
      slug: "rezzan-kilic",
      name: "Rezzan Kılıç",
      since: 2011,
      rating: 5.0,
      privatePrice: 4200,
      groupPrice: 2100,
      corporate: true,
      online: true,
      location: "İstanbul Avrupa Yakası",
      bio: "Yönetmen ve sinema eğitmeni, 12 yıllık deneyim, film atölyeleri.",
      specialties: ["Sinema"]
    },
    {
      slug: "enver-gungor",
      name: "Enver Güngör",
      since: 2013,
      rating: 4.9,
      privatePrice: 3800,
      groupPrice: 1900,
      corporate: true,
      online: true,
      location: "Adana",
      bio: "Adana'da sinema dersleri, senaryo ve kurgu.",
      specialties: ["Sinema"]
    }
  ],
  description: "Sinema dersleri, senaryo yazımı, yönetmenlik, kurgu ve kamera teknikleri.",
  whyTake: "Kendi filminizi çekmek için gereken tüm bilgiler.",
  employmentAreas: "Film sektörü, dizi yapımı, reklamcılık.",
  requirements: "Sinemaya ilgi ve yaratıcılık."
}
];