// src/data/courses-bilisim.js
export const courses = [

    // ===== İst And Yakası =====
  {
    slug: "python-ile-sifirdan-ileri-seviye-programlama",
    title: "Python ile Sıfırdan İleri Seviye Programlama",
    category: "Yazılım",
    breadcrumb: "Bilişim Eğitimi > Yazılım",
    image: "/images/python-egitimi.jpg",
    instructors: [
      {
        slug: "mehmet-ali-ozturk",
        name: "Mehmet Ali Öztürk",
        since: 2015,
        rating: 4.7,
        privatePrice: 825,
        groupPrice: 450,
        corporate: true,
        online: true,
        location: "İstanbul Anadolu Yakası",
        bio: "Uzman yazılım eğitmeni, 8 yıllık deneyim.",
        specialties: ["Python", "C#", "Java"]
      },
      {
        slug: "can-yavuz-15",
        name: "Can Yavuz",
        since: 2014,
        rating: 4.9,
        privatePrice: 2250,
        groupPrice: 1200,
        corporate: true,
        online: true,
        location: "İstanbul Anadolu Yakası",
        bio: "Full stack developer, 9 yıllık tecrübe.",
        specialties: ["Python", "Java", "Siber Güvenlik"]
      },
      {
        slug: "merve-aydogan-17",
        name: "Merve Aydoğan",
        since: 2017,
        rating: 4.6,
        privatePrice: 1125,
        groupPrice: 600,
        corporate: true,
        online: true,
        location: "İstanbul Anadolu Yakası",
        bio: "Yapay zeka ve web geliştirme uzmanı.",
        specialties: ["Python", "JavaScript", "Yapay Zeka"]
      },
      {
        slug: "tolga-gunes-26",
        name: "Tolga Güneş",
        since: 2016,
        rating: 4.8,
        privatePrice: 1500,
        groupPrice: 800,
        corporate: true,
        online: true,
        location: "İstanbul Anadolu Yakası",
        bio: "Yazılım eğitmeni, full stack developer.",
        specialties: ["Python", "Java", "Web Geliştirme"]
      }
    ],
    description: "Sıfırdan başlayarak Python programlamayı ileri seviyede öğrenin. Gerçek projelerle pekiştirin.",
    whyTake: "En popüler programlama dili olan Python ile kariyer fırsatlarınızı artırın.",
    employmentAreas: "Yazılım geliştirici, veri analisti, yapay zeka mühendisi.",
    requirements: "Temel bilgisayar bilgisi yeterlidir."
  },
  {
    slug: "java-ile-nesne-tabanli-programlama",
    title: "Java ile Nesne Tabanlı Programlama Kursu",
    category: "Yazılım",
    breadcrumb: "Bilişim Eğitimi > Yazılım",
    image: "/images/javadeveloper.jpg",
    instructors: [
      {
        slug: "ali-ozturk-1",
        name: "Ali Öztürk",
        since: 2015,
        rating: 4.7,
        privatePrice: 825,
        groupPrice: 450,
        corporate: true,
        online: true,
        location: "İstanbul Anadolu Yakası",
        bio: "Uzman yazılım eğitmeni, 8 yıllık deneyim.",
        specialties: ["Python", "C#", "Java"]
      },
      {
        slug: "can-yavuz-15",
        name: "Can Yavuz",
        since: 2014,
        rating: 4.9,
        privatePrice: 2250,
        groupPrice: 1200,
        corporate: true,
        online: true,
        location: "İstanbul Anadolu Yakası",
        bio: "Full stack developer, 9 yıllık tecrübe.",
        specialties: ["Python", "Java", "Siber Güvenlik"]
      },
      {
        slug: "merve-aydogan-17",
        name: "Merve Aydoğan",
        since: 2017,
        rating: 4.6,
        privatePrice: 1125,
        groupPrice: 600,
        corporate: true,
        online: true,
        location: "İstanbul Anadolu Yakası",
        bio: "Yapay zeka ve web geliştirme uzmanı.",
        specialties: ["Python", "JavaScript", "Yapay Zeka"]
      }
    ],
    description: "Java ile nesne tabanlı programlamayı öğrenin, kurumsal uygulamalar geliştirin.",
    whyTake: "Java, kurumsal dünyanın en çok tercih edilen dili.",
    employmentAreas: "Java developer, backend developer, android developer.",
    requirements: "Temel programlama bilgisi avantajdır."
  },
  {
    slug: "net-developer-ile-kurumsal-uygulamalar",
    title: ".NET Developer ile Kurumsal Uygulamalar",
    category: "Yazılım",
    breadcrumb: "Bilişim Eğitimi > Yazılım",
    image: "/images/net-developer.jpg",
    instructors: [
      {
        slug: "ali-ozturk-1",
        name: "Ali Öztürk",
        since: 2015,
        rating: 4.7,
        privatePrice: 825,
        groupPrice: 450,
        corporate: true,
        online: true,
        location: "İstanbul Anadolu Yakası",
        bio: "Uzman yazılım eğitmeni, 8 yıllık deneyim.",
        specialties: ["Python", "C#", "Java"]
      }
    ],
    description: ".NET platformu ile kurumsal ölçekte uygulamalar geliştirin.",
    whyTake: "Microsoft teknolojileri ile güçlü kariyer.",
    employmentAreas: ".NET developer, backend developer.",
    requirements: "Temel C# bilgisi."
  },
  {
    slug: "csharp-ile-windows-form-ve-mssql",
    title: "C# ile Windows Form ve MSSQL Uygulama Geliştirme",
    category: "Yazılım",
    breadcrumb: "Bilişim Eğitimi > Yazılım",
    image: "/images/csharp-egitimi.jpg", // Varsayılan bir resim
    instructors: [
      {
        slug: "ali-ozturk-1",
        name: "Ali Öztürk",
        since: 2015,
        rating: 4.7,
        privatePrice: 825,
        groupPrice: 450,
        corporate: true,
        online: true,
        location: "İstanbul Anadolu Yakası",
        bio: "Uzman yazılım eğitmeni, 8 yıllık deneyim.",
        specialties: ["Python", "C#", "Java"]
      }
    ],
    description: "Windows Form ve MSSQL ile masaüstü uygulamalar geliştirin.",
    whyTake: "Masaüstü uygulama geliştirme becerisi kazanın.",
    employmentAreas: "Masaüstü uygulama geliştirici.",
    requirements: "Temel C# bilgisi."
  },
  {
    slug: "net-core-ile-mikroservis-mimarisi",
    title: ".NET Core ile Mikroservis Mimarisi",
    category: "Yazılım",
    breadcrumb: "Bilişim Eğitimi > Yazılım",
    image: "/images/net-core.jpg",
    instructors: [
      {
        slug: "mehmet-kaya-2",
        name: "Mehmet Kaya",
        since: 2014,
        rating: 4.8,
        privatePrice: 1275,
        groupPrice: 650,
        corporate: true,
        online: true,
        location: "İstanbul Anadolu Yakası",
        bio: "Mikroservis mimarisi uzmanı, 9 yıllık deneyim.",
        specialties: [".NET Core", "C#", "Mikroservis"]
      }
    ],
    description: "Modern yazılım mimarilerinden mikroservisleri .NET Core ile öğrenin.",
    whyTake: "Ölçeklenebilir ve esnek sistemler tasarlayın.",
    employmentAreas: "Backend developer, sistem mimarı.",
    requirements: "İleri seviye C# bilgisi."
  },
  {
    slug: "ileri-seviye-net-core-ve-web-api",
    title: "İleri Seviye .NET Core ve Web API Geliştirme",
    category: "Yazılım",
    breadcrumb: "Bilişim Eğitimi > Yazılım",
    image: "/images/net-core.jpg",
    instructors: [
      {
        slug: "mehmet-kaya-2",
        name: "Mehmet Kaya",
        since: 2014,
        rating: 4.8,
        privatePrice: 1275,
        groupPrice: 650,
        corporate: true,
        online: true,
        location: "İstanbul Anadolu Yakası",
        bio: "Mikroservis mimarisi uzmanı, 9 yıllık deneyim.",
        specialties: [".NET Core", "C#", "Web API"]
      }
    ],
    description: "RESTful API'ler geliştirerek modern web servisleri oluşturun.",
    whyTake: "Backend geliştirmede uzmanlaşın.",
    employmentAreas: "Backend developer, API developer.",
    requirements: "Orta seviye .NET Core bilgisi."
  },
  {
    slug: "csharp-ile-kurumsal-masaustu-uygulamalari",
    title: "C# ile Kurumsal Masaüstü Uygulamaları",
    category: "Yazılım",
    breadcrumb: "Bilişim Eğitimi > Yazılım",
    image: "/images/net-core.jpg",
    instructors: [
      {
        slug: "mehmet-kaya-2",
        name: "Mehmet Kaya",
        since: 2014,
        rating: 4.8,
        privatePrice: 1275,
        groupPrice: 650,
        corporate: true,
        online: true,
        location: "İstanbul Anadolu Yakası",
        bio: "Mikroservis mimarisi uzmanı, 9 yıllık deneyim.",
        specialties: ["C#", "Windows Forms", "MSSQL"]
      }
    ],
    description: "Kurumsal düzeyde masaüstü uygulamalar geliştirin.",
    whyTake: "İş dünyasının ihtiyaç duyduğu uygulamaları yapın.",
    employmentAreas: "Masaüstü uygulama geliştirici.",
    requirements: "Temel C# bilgisi."
  },
  {
    slug: "sql-ile-veritabani-yonetimi-ve-optimizasyon",
    title: "SQL ile Veritabanı Yönetimi ve Optimizasyon",
    category: "Veritabanı",
    breadcrumb: "Bilişim Eğitimi > Veritabanı",
    image: "/images/sql-egitimi.jpg",
    instructors: [
      {
        slug: "mehmet-kaya-2",
        name: "Mehmet Kaya",
        since: 2014,
        rating: 4.8,
        privatePrice: 1275,
        groupPrice: 650,
        corporate: true,
        online: true,
        location: "İstanbul Anadolu Yakası",
        bio: "Veritabanı uzmanı, 9 yıllık deneyim.",
        specialties: ["SQL", "MSSQL", "Optimizasyon"]
      }
    ],
    description: "SQL ile veritabanı yönetimi, sorgu optimizasyonu ve performans artırma tekniklerini öğrenin.",
    whyTake: "Veritabanı yönetimi her yazılımcının ihtiyacı.",
    employmentAreas: "Veritabanı yöneticisi, backend developer.",
    requirements: "Temel SQL bilgisi."
  },
  {
    slug: "adobe-illustrator-ile-vektorel-tasarim",
    title: "Adobe Illustrator ile Vektörel Tasarım",
    category: "Grafik Tasarım",
    breadcrumb: "Bilişim Eğitimi > Grafik Tasarım",
    image: "/images/illustrator.jpg",
    instructors: [
      {
        slug: "aysenur-demir-4",
        name: "Ayşenur Demir",
        since: 2016,
        rating: 4.7,
        privatePrice: 750,
        groupPrice: 400,
        corporate: true,
        online: true,
        location: "İstanbul Anadolu Yakası",
        bio: "Grafik tasarımcı, 7 yıllık deneyim.",
        specialties: ["Illustrator", "Photoshop", "Figma"]
      }
    ],
    description: "Adobe Illustrator ile vektörel grafikler, logo ve illüstrasyonlar oluşturun.",
    whyTake: "Profesyonel tasarımlar yapın.",
    employmentAreas: "Grafik tasarımcı, illüstratör.",
    requirements: "Temel tasarım bilgisi."
  },
  {
    slug: "figma-ile-ui-ux-tasarim-kursu",
    title: "Figma ile UI/UX Tasarım Kursu",
    category: "Grafik Tasarım",
    breadcrumb: "Bilişim Eğitimi > Grafik Tasarım",
    image: "/images/figma.jpg",
    instructors: [
      {
        slug: "aysenur-demir-4",
        name: "Ayşenur Demir",
        since: 2016,
        rating: 4.7,
        privatePrice: 750,
        groupPrice: 400,
        corporate: true,
        online: true,
        location: "İstanbul Anadolu Yakası",
        bio: "Grafik tasarımcı, 7 yıllık deneyim.",
        specialties: ["Illustrator", "Photoshop", "Figma"]
      }
    ],
    description: "Figma ile kullanıcı arayüzü ve deneyimi tasarlayın.",
    whyTake: "Modern UI/UX araçlarını öğrenin.",
    employmentAreas: "UI/UX tasarımcı, ürün tasarımcısı.",
    requirements: "Temel tasarım bilgisi."
  },

  // ===== İSt Avr Yakası =====
// 1. Yapay Zeka Destekli Kodlama/Mobil Eğitimi (Eğitmen: Ali Öztürk)
{
  slug: "yapay-zeka-destekli-mobil-uygulama-gelistirme",
  title: "Yapay Zeka Destekli Mobil Uygulama Geliştirme",
  category: "Mobil",
  breadcrumb: "Bilişim Eğitimi > Mobil",
  image: "/images/android-ios.jpg",
  instructors: [
    {
      slug: "mehmet-ali-ozturk",
      name: "Mehmet-Ali Öztürk",
      since: 2016,
      rating: 4.7,
      privatePrice: 1125,
      groupPrice: 560,
      corporate: true,
      online: true,
      location: "İstanbul Avrupa Yakası",
      bio: "Mobil ve yapay zeka alanında 7 yıllık deneyim, birçok başarılı proje.",
      specialties: ["Yapay Zeka", "Mobil Geliştirme", "Python"]
    }
  ],
  description: "Yapay zeka teknolojilerini kullanarak mobil uygulamalar geliştirmeyi öğrenin.",
  whyTake: "Mobil uygulama pazarında yapay zeka ile fark yaratın.",
  employmentAreas: "Mobil geliştirici, yapay zeka mühendisi.",
  requirements: "Temel programlama bilgisi."
},

// 2. e-ticaret ve dijital pazarlama (Eğitmen: Ayşe Demir)
{
  slug: "e-ticaret-ve-dijital-pazarlama-uzmanlik",
  title: "E-Ticaret ve Dijital Pazarlama Uzmanlık Eğitimi",
  category: "Dijital Pazarlama",
  breadcrumb: "Bilişim Eğitimi > Pazarlama",
  image: "/images/eticaret.jpg",
  instructors: [
    {
      slug: "ayse-demir-43",
      name: "Ayşe Demir",
      since: 2014,
      rating: 4.8,
      privatePrice: 3000,
      groupPrice: 1500,
      corporate: true,
      online: true,
      location: "İstanbul Avrupa Yakası",
      bio: "Dijital pazarlama uzmanı, 8 yıllık ajans deneyimi.",
      specialties: ["E-Ticaret", "Dijital Pazarlama", "SEO"]
    }
  ],
  description: "E-ticaret siteleri kurulumu ve dijital pazarlama stratejileri.",
  whyTake: "Online satışlarınızı katlamak için gereken tüm bilgiler.",
  employmentAreas: "Dijital pazarlama uzmanı, e-ticaret yöneticisi.",
  requirements: "Temel bilgisayar kullanımı."
},
{
  slug: "google-ads-ve-meta-reklam-yonetimi",
  title: "Google Ads ve Meta Reklam Yönetimi Eğitimi",
  category: "Dijital Pazarlama",
  breadcrumb: "Bilişim Eğitimi > Pazarlama",
  image: "/images/ads.jpg",
  instructors: [
    {
      slug: "ayse-demir-43",
      name: "Ayşe Demir",
      since: 2014,
      rating: 4.8,
      privatePrice: 3000,
      groupPrice: 1500,
      corporate: true,
      online: true,
      location: "İstanbul Avrupa Yakası",
      bio: "Dijital pazarlama uzmanı, 8 yıllık ajans deneyimi.",
      specialties: ["Google Ads", "Meta Reklam", "E-Ticaret"]
    }
  ],
  description: "Google ve Meta reklam platformlarında uzmanlaşın.",
  whyTake: "Reklam bütçelerini etkin yöneterek yüksek dönüşüm alın.",
  employmentAreas: "Reklam uzmanı, performans pazarlamacısı.",
  requirements: "Temel dijital pazarlama bilgisi."
},
{
  slug: "seo-ile-organik-trafik-ve-satis-artirma",
  title: "SEO ile Organik Trafik ve Satış Artırma",
  category: "Dijital Pazarlama",
  breadcrumb: "Bilişim Eğitimi > Pazarlama",
  image: "/images/google-seo.jpg",
  instructors: [
    {
      slug: "ayse-demir-43",
      name: "Ayşe Demir",
      since: 2014,
      rating: 4.8,
      privatePrice: 3000,
      groupPrice: 1500,
      corporate: true,
      online: true,
      location: "İstanbul Avrupa Yakası",
      bio: "Dijital pazarlama uzmanı, 8 yıllık ajans deneyimi.",
      specialties: ["SEO", "İçerik Pazarlama", "Analitik"]
    }
  ],
  description: "Arama motorlarında üst sıralara çıkarak organik trafik elde edin.",
  whyTake: "Uzun vadeli ve sürdürülebilir ziyaretçi kazanın.",
  employmentAreas: "SEO uzmanı, içerik pazarlamacısı.",
  requirements: "Temel SEO kavramları."
},

// 3. ZBRUSH İLE 3D MODELLEME (Eğitmen: Mehmet Kaya)
{
  slug: "zbrush-ile-dijital-heykel-ve-3d-modelleme",
  title: "ZBrush ile Dijital Heykel ve 3D Modelleme",
  category: "3D Tasarım",
  breadcrumb: "Bilişim Eğitimi > 3D Tasarım",
  image: "/images/zbrush.jpg",
  instructors: [
    {
      slug: "mehmet-kaya-44",
      name: "Mehmet Kaya",
      since: 2015,
      rating: 4.9,
      privatePrice: 3000,
      groupPrice: 1500,
      corporate: true,
      online: true,
      location: "İstanbul Avrupa Yakası",
      bio: "3D modelleme uzmanı, oyun ve film sektöründe 8 yıl.",
      specialties: ["ZBrush", "3D Modelleme", "Dijital Heykel"]
    }
  ],
  description: "ZBrush ile organik ve inorganik modeller oluşturun.",
  whyTake: "Karakter ve yaratık tasarımında profesyonel seviyeye ulaşın.",
  employmentAreas: "3D modelci, karakter tasarımcısı.",
  requirements: "Temel 3D bilgisi avantajdır."
},

// 4. Bilgisayar Yüksek Mühendisinden Yazılım ve Algoritma (Eğitmen: Fatma Yıldız)
{
  slug: "ileri-seviye-algoritma-ve-veri-yapilari",
  title: "İleri Seviye Algoritma ve Veri Yapıları Eğitimi",
  category: "Yazılım",
  breadcrumb: "Bilişim Eğitimi > Yazılım",
  image: "/images/web-tasarim.jpg",
  instructors: [
    {
      slug: "fatma-yildiz-45",
      name: "Fatma Yıldız",
      since: 2013,
      rating: 4.9,
      privatePrice: 4500,
      groupPrice: 2250,
      corporate: true,
      online: true,
      location: "İstanbul Avrupa Yakası",
      bio: "Yüksek mühendis, algoritma yarışmalarında derece.",
      specialties: ["Algoritma", "Veri Yapıları", "C++"]
    }
  ],
  description: "Karmaşık algoritmalar ve veri yapılarını derinlemesine öğrenin.",
  whyTake: "Teknik mülakatlarda ve yazılım geliştirmede fark yaratın.",
  employmentAreas: "Yazılım mühendisi, algoritma uzmanı.",
  requirements: "Temel programlama bilgisi."
},
{
  slug: "yazilim-mimarisi-ve-tasarim-desenleri",
  title: "Yazılım Mimarisi ve Tasarım Desenleri",
  category: "Yazılım",
  breadcrumb: "Bilişim Eğitimi > Yazılım",
  image: "/images/yazilim.jpg",
  instructors: [
    {
      slug: "fatma-yildiz-45",
      name: "Fatma Yıldız",
      since: 2013,
      rating: 4.9,
      privatePrice: 4500,
      groupPrice: 2250,
      corporate: true,
      online: true,
      location: "İstanbul Avrupa Yakası",
      bio: "Yüksek mühendis, büyük ölçekli sistem tasarımı.",
      specialties: ["Mimari", "Tasarım Desenleri", "UML"]
    }
  ],
  description: "Yazılım mimarileri ve tasarım desenlerini örneklerle kavrayın.",
  whyTake: "Sürdürülebilir ve esnek yazılımlar geliştirin.",
  employmentAreas: "Yazılım mimarı, kıdemli geliştirici.",
  requirements: "Nesne tabanlı programlama bilgisi."
},

// 5. Java dersleri (Eğitmen: Zeynep Çelik)
{
  slug: "java-ile-nesne-tabanli-programlama-kursu-2",
  title: "Java ile Nesne Tabanlı Programlama Kursu",
  category: "Yazılım",
  breadcrumb: "Bilişim Eğitimi > Yazılım",
  image: "/images/javadeveloper.jpg",
  instructors: [
    {
      slug: "zeynep-celik-46",
      name: "Zeynep Çelik",
      since: 2017,
      rating: 4.6,
      privatePrice: 900,
      groupPrice: 450,
      corporate: true,
      online: true,
      location: "İstanbul Avrupa Yakası",
      bio: "Java ve Spring Boot eğitmeni, 6 yıllık deneyim.",
      specialties: ["Java", "OOP", "Spring"]
    }
  ],
  description: "Java ile nesne tabanlı programlamayı sıfırdan öğrenin.",
  whyTake: "Kurumsal yazılım dünyasının temel dili.",
  employmentAreas: "Java developer, backend developer.",
  requirements: "Temel programlama mantığı."
},
{
  slug: "java-spring-boot-ile-backend-gelistirme",
  title: "Java Spring Boot ile Backend Geliştirme",
  category: "Yazılım",
  breadcrumb: "Bilişim Eğitimi > Yazılım",
  image: "/images/bilisim.jpg",
  instructors: [
    {
      slug: "zeynep-celik-46",
      name: "Zeynep Çelik",
      since: 2017,
      rating: 4.6,
      privatePrice: 900,
      groupPrice: 450,
      corporate: true,
      online: true,
      location: "İstanbul Avrupa Yakası",
      bio: "Java ve Spring Boot eğitmeni, 6 yıllık deneyim.",
      specialties: ["Spring Boot", "REST API", "JPA"]
    }
  ],
  description: "Spring Boot ile modern backend servisleri geliştirin.",
  whyTake: "Java dünyasının en popüler framework'ü.",
  employmentAreas: "Backend developer, Java developer.",
  requirements: "Java ve OOP bilgisi."
},

// 6. Revit architecture (Eğitmen: Mustafa Arslan)
{
  slug: "revit-architecture-ile-bim-modelleme",
  title: "Revit Architecture ile BIM Modelleme",
  category: "Mimari Tasarım",
  breadcrumb: "Bilişim Eğitimi > Mimari",
  image: "/images/revit.jpg",
  instructors: [
    {
      slug: "mustafa-arslan-47",
      name: "Mustafa Arslan",
      since: 2016,
      rating: 4.7,
      privatePrice: 1500,
      groupPrice: 750,
      corporate: true,
      online: true,
      location: "İstanbul Avrupa Yakası",
      bio: "Mimar ve BIM uzmanı, 7 yıllık proje deneyimi.",
      specialties: ["Revit", "BIM", "Autocad"]
    }
  ],
  description: "Revit Architecture ile yapı bilgi modellemesi yapın.",
  whyTake: "Mimari projelerde BIM standardını uygulayın.",
  employmentAreas: "BIM uzmanı, mimari tasarımcı.",
  requirements: "Temel mimarlık bilgisi."
},

// 7. Sistem, Ağ, Yazılım ve Güvenlik (Eğitmen: Elif Kara)
{
  slug: "ccna-ile-ag-temelleri-ve-yonlendirme",
  title: "CCNA ile Ağ Temelleri ve Yönlendirme",
  category: "Ağ",
  breadcrumb: "Bilişim Eğitimi > Ağ",
  image: "/images/ccna.jpg",
  instructors: [
    {
      slug: "elif-kara-48",
      name: "Elif Kara",
      since: 2015,
      rating: 4.8,
      privatePrice: 750,
      groupPrice: 375,
      corporate: true,
      online: true,
      location: "İstanbul Avrupa Yakası",
      bio: "Sistem ve ağ uzmanı, CCNA/CCNP sertifikalı.",
      specialties: ["CCNA", "Ağ Güvenliği", "Routing"]
    }
  ],
  description: "Cisco ağ cihazlarıyla ağ temellerini öğrenin.",
  whyTake: "Sektörün en geçerli sertifikasına hazırlık.",
  employmentAreas: "Ağ uzmanı, sistem yöneticisi.",
  requirements: "Temel ağ bilgisi."
},
{
  slug: "mcse-ile-windows-server-yonetimi",
  title: "MCSE ile Windows Server Yönetimi",
  category: "Sistem",
  breadcrumb: "Bilişim Eğitimi > Sistem",
  image: "/images/yazilim.jpg",
  instructors: [
    {
      slug: "elif-kara-48",
      name: "Elif Kara",
      since: 2015,
      rating: 4.8,
      privatePrice: 750,
      groupPrice: 375,
      corporate: true,
      online: true,
      location: "İstanbul Avrupa Yakası",
      bio: "Sistem ve ağ uzmanı, MCSE sertifikalı.",
      specialties: ["Windows Server", "Active Directory", "MCSE"]
    }
  ],
  description: "Windows Server kurulumu, yönetimi ve güvenliği.",
  whyTake: "Kurumsal sistemlerin vazgeçilmezi.",
  employmentAreas: "Sistem yöneticisi, IT uzmanı.",
  requirements: "Temel Windows bilgisi."
},
{
  slug: "mcsd-ile-yazilim-gelistirme-sertifikasi",
  title: "MCSD ile Yazılım Geliştirme Sertifikası",
  category: "Yazılım",
  breadcrumb: "Bilişim Eğitimi > Yazılım",
  image: "/images/yazilim.jpg",
  instructors: [
    {
      slug: "elif-kara-48",
      name: "Elif Kara",
      since: 2015,
      rating: 4.8,
      privatePrice: 750,
      groupPrice: 375,
      corporate: true,
      online: true,
      location: "İstanbul Avrupa Yakası",
      bio: "Sistem ve ağ uzmanı, aynı zamanda yazılım geliştirme.",
      specialties: ["MCSD", "C#", ".NET"]
    }
  ],
  description: "Microsoft yazılım geliştirme sertifikasına hazırlık.",
  whyTake: "Microsoft teknolojilerinde uzmanlaşın.",
  employmentAreas: ".NET developer, yazılım uzmanı.",
  requirements: "Temel C# bilgisi."
},

// 8. Excel/VBA (Eğitmen: Can Yavuz)
{
  slug: "excel-vba-ile-makro-programlama-ve-otomasyon",
  title: "Excel VBA ile Makro Programlama ve Otomasyon",
  category: "Ofis",
  breadcrumb: "Bilişim Eğitimi > Ofis",
  image: "/images/excel.jpg",
  instructors: [
    {
      slug: "can-yavuz-49",
      name: "Can Yavuz",
      since: 2018,
      rating: 4.6,
      privatePrice: 1875,
      groupPrice: 935,
      corporate: true,
      online: true,
      location: "İstanbul Avrupa Yakası",
      bio: "Excel uzmanı, VBA ile otomasyon projeleri.",
      specialties: ["Excel", "VBA", "Makro"]
    }
  ],
  description: "Excel'de VBA ile tekrarlayan işlemleri otomatikleştirin.",
  whyTake: "İş hayatında verimliliğinizi katlayın.",
  employmentAreas: "Ofis çalışanı, raporlama uzmanı.",
  requirements: "Temel Excel bilgisi."
},
{
  slug: "ileri-duzey-excel-ve-veri-analizi",
  title: "İleri Düzey Excel ve Veri Analizi",
  category: "Ofis",
  breadcrumb: "Bilişim Eğitimi > Ofis",
  image: "/images/excel2.jpg",
  instructors: [
    {
      slug: "can-yavuz-49",
      name: "Can Yavuz",
      since: 2018,
      rating: 4.6,
      privatePrice: 1875,
      groupPrice: 935,
      corporate: true,
      online: true,
      location: "İstanbul Avrupa Yakası",
      bio: "Excel uzmanı, veri analizi ve dashboard.",
      specialties: ["Excel", "Veri Analizi", "Dashboard"]
    }
  ],
  description: "İleri Excel formülleri, pivot tablolar ve veri analizi.",
  whyTake: "Veriyi anlamlandırarak karar süreçlerine katkı.",
  employmentAreas: "Veri analisti, raporlama uzmanı.",
  requirements: "Orta düzey Excel bilgisi."
},

// 9. Çocuklar İçin Yapay Zeka (Eğitmen: Merve Aydoğan)
{
  slug: "cocuklar-icin-yapay-zeka-ve-etik-kullanim",
  title: "Çocuklar İçin Yapay Zeka ve Etik Kullanım",
  category: "Çocuk Eğitimi",
  breadcrumb: "Bilişim Eğitimi > Çocuk",
  image: "/images/yapay-zeka.jpg",
  instructors: [
    {
      slug: "merve-aydogan-50",
      name: "Merve Aydoğan",
      since: 2019,
      rating: 4.7,
      privatePrice: 1500,
      groupPrice: 750,
      corporate: true,
      online: true,
      location: "İstanbul Avrupa Yakası",
      bio: "Çocuklara yönelik kodlama ve yapay zeka eğitmeni.",
      specialties: ["Yapay Zeka", "Çocuk Eğitimi", "Scratch"]
    }
  ],
  description: "Çocuklara yapay zekanın temellerini ve güvenli kullanımını öğretin.",
  whyTake: "Geleceğin teknolojilerine erken yaşta hazırlık.",
  employmentAreas: "Eğitmen, çocuk gelişim uzmanı.",
  requirements: "7-17 yaş arası çocuklar."
},

// 10. C#, ASP.NET, Excel, SQL, Python, Power BI (Eğitmen: Kemal Şahin)
{
  slug: "aspnet-core-ile-web-gelistirme",
  title: "ASP.NET Core ile Web Geliştirme",
  category: "Yazılım",
  breadcrumb: "Bilişim Eğitimi > Yazılım",
  image: "/images/net-developer.jpg",
  instructors: [
    {
      slug: "kemal-sahin-51",
      name: "Kemal Şahin",
      since: 2014,
      rating: 4.8,
      privatePrice: 1500,
      groupPrice: 750,
      corporate: true,
      online: true,
      location: "İstanbul Avrupa Yakası",
      bio: "Full stack developer, çoklu teknoloji uzmanı.",
      specialties: ["ASP.NET", "C#", "SQL"]
    }
  ],
  description: "ASP.NET Core ile modern web uygulamaları geliştirin.",
  whyTake: "Microsoft ekosisteminde backend uzmanlığı.",
  employmentAreas: "Backend developer, full stack developer.",
  requirements: "Temel C# bilgisi."
},
{
  slug: "power-bi-ile-veri-gorsellestirme-ve-raporlama",
  title: "Power BI ile Veri Görselleştirme ve Raporlama",
  category: "Veri",
  breadcrumb: "Bilişim Eğitimi > Veri",
  image: "/images/powerbi.jpg",
  instructors: [
    {
      slug: "kemal-sahin-51",
      name: "Kemal Şahin",
      since: 2014,
      rating: 4.8,
      privatePrice: 1500,
      groupPrice: 750,
      corporate: true,
      online: true,
      location: "İstanbul Avrupa Yakası",
      bio: "Full stack developer, veri analizi ve BI uzmanı.",
      specialties: ["Power BI", "SQL", "Veri Görselleştirme"]
    }
  ],
  description: "Power BI ile interaktif raporlar ve dashboardlar oluşturun.",
  whyTake: "İş zekası araçlarıyla veriyi görselleştirin.",
  employmentAreas: "BI uzmanı, veri analisti.",
  requirements: "Temel SQL ve veri bilgisi."
},
{
  slug: "csharp-ile-kurumsal-uygulama-gelistirme-2",
  title: "C# ile Kurumsal Uygulama Geliştirme",
  category: "Yazılım",
  breadcrumb: "Bilişim Eğitimi > Yazılım",
  image: "/images/bilisim.jpg",
  instructors: [
    {
      slug: "kemal-sahin-51",
      name: "Kemal Şahin",
      since: 2014,
      rating: 4.8,
      privatePrice: 1500,
      groupPrice: 750,
      corporate: true,
      online: true,
      location: "İstanbul Avrupa Yakası",
      bio: "Full stack developer, C# ve .NET uzmanı.",
      specialties: ["C#", ".NET", "Nesne Tabanlı Programlama"]
    }
  ],
  description: "C# ile kurumsal ölçekte masaüstü ve web uygulamaları geliştirin.",
  whyTake: "En güçlü .NET dili ile profesyonel projeler.",
  employmentAreas: ".NET developer, yazılım mühendisi.",
  requirements: "Temel programlama bilgisi."
},

// 11. Python Görüntü İşleme (Eğitmen: Sibel Yıldız)
{
  slug: "python-ile-goruntu-isleme-ve-opencv-uzmanligi",
  title: "Python ile Görüntü İşleme ve OpenCV Uzmanlığı",
  category: "Yapay Zeka",
  breadcrumb: "Bilişim Eğitimi > Yapay Zeka",
  image: "/images/yapay-zeka.jpg",
  instructors: [
    {
      slug: "sibel-yildiz-52",
      name: "Sibel Yıldız",
      since: 2015,
      rating: 4.9,
      privatePrice: 18000,
      groupPrice: 9000,
      corporate: true,
      online: true,
      location: "İstanbul Avrupa Yakası",
      bio: "Görüntü işleme uzmanı, bilgisayarlı görü projeleri.",
      specialties: ["Python", "OpenCV", "Görüntü İşleme"]
    }
  ],
  description: "OpenCV ile gerçek zamanlı görüntü işleme uygulamaları geliştirin.",
  whyTake: "Yapay zeka ve görüntü işleme alanında derinlemesine bilgi.",
  employmentAreas: "Görüntü işleme mühendisi, yapay zeka uzmanı.",
  requirements: "İleri düzey Python bilgisi."
},
{
  slug: "yapay-zeka-ile-gercek-zamanli-nesne-tespiti",
  title: "Yapay Zeka ile Gerçek Zamanlı Nesne Tespiti",
  category: "Yapay Zeka",
  breadcrumb: "Bilişim Eğitimi > Yapay Zeka",
  image: "/images/yapay-zeka.jpg",
  instructors: [
    {
      slug: "sibel-yildiz-52",
      name: "Sibel Yıldız",
      since: 2015,
      rating: 4.9,
      privatePrice: 18000,
      groupPrice: 9000,
      corporate: true,
      online: true,
      location: "İstanbul Avrupa Yakası",
      bio: "Görüntü işleme uzmanı, derin öğrenme modelleri.",
      specialties: ["Derin Öğrenme", "Nesne Tespiti", "YOLO"]
    }
  ],
  description: "Yapay zeka ile nesne tespiti, takibi ve tanıma sistemleri kurun.",
  whyTake: "Otonom sistemler ve güvenlik uygulamaları için kritik beceri.",
  employmentAreas: "Yapay zeka mühendisi, görüntü işleme uzmanı.",
  requirements: "Python ve temel derin öğrenme bilgisi."
},

// 12. C/Java/Python/Unity (Eğitmen: Hakan Aydın)
{
  slug: "c-programlama-ile-sistem-programlama",
  title: "C Programlama ile Sistem Programlama",
  category: "Yazılım",
  breadcrumb: "Bilişim Eğitimi > Yazılım",
  image: "/images/yazilim.jpg",
  instructors: [
    {
      slug: "hakan-aydin-53",
      name: "Hakan Aydın",
      since: 2013,
      rating: 4.7,
      privatePrice: 1500,
      groupPrice: 750,
      corporate: true,
      online: true,
      location: "İstanbul Avrupa Yakası",
      bio: "Gömülü sistemler ve C uzmanı, 10 yıllık deneyim.",
      specialties: ["C", "Sistem Programlama", "Gömülü Sistemler"]
    }
  ],
  description: "C dili ile işletim sistemleri ve donanım yakın programlama.",
  whyTake: "Sistem yazılımı ve gömülü sistemler için temel.",
  employmentAreas: "Gömülü yazılım mühendisi, sistem programcısı.",
  requirements: "Temel algoritma bilgisi."
},
{
  slug: "unity-ile-oyun-gelistirme-3",
  title: "Unity ile Oyun Geliştirme",
  category: "Oyun",
  breadcrumb: "Bilişim Eğitimi > Oyun",
  image: "/images/unity.jpg",
  instructors: [
    {
      slug: "hakan-aydin-53",
      name: "Hakan Aydın",
      since: 2013,
      rating: 4.7,
      privatePrice: 1500,
      groupPrice: 750,
      corporate: true,
      online: true,
      location: "İstanbul Avrupa Yakası",
      bio: "Oyun geliştirici, Unity ve C# uzmanı.",
      specialties: ["Unity", "C#", "Oyun Geliştirme"]
    }
  ],
  description: "Unity ile 2D/3D oyunlar yapın, mekanikler geliştirin.",
  whyTake: "Oyun sektörüne adım atmanın en hızlı yolu.",
  employmentAreas: "Oyun geliştirici, Unity developer.",
  requirements: "Temel C# bilgisi."
},

// 13. C/C++, Python, Matlab, Java, Gömülü (Eğitmen: Gizem Korkmaz)
{
  slug: "gomulu-sistemler-ve-mikrodenetleyici-programlama",
  title: "Gömülü Sistemler ve Mikrodenetleyici Programlama",
  category: "Gömülü Sistemler",
  breadcrumb: "Bilişim Eğitimi > Gömülü",
  image: "/images/yazilim.jpg",
  instructors: [
    {
      slug: "gizem-korkmaz-54",
      name: "Gizem Korkmaz",
      since: 2016,
      rating: 4.8,
      privatePrice: 3000,
      groupPrice: 1500,
      corporate: true,
      online: true,
      location: "İstanbul Avrupa Yakası",
      bio: "Gömülü sistem mühendisi, ARM ve FPGA projeleri.",
      specialties: ["Gömülü Sistemler", "C", "Mikrodenetleyici"]
    }
  ],
  description: "Mikrodenetleyiciler (ARM, PIC) ve gömülü yazılım geliştirme.",
  whyTake: "Donanım-yazılım birlikte çalışan sistemler tasarlayın.",
  employmentAreas: "Gömülü yazılım mühendisi, donanım uzmanı.",
  requirements: "Temel C ve elektronik bilgisi."
},
{
  slug: "matlab-ile-muhendislik-uygulamalari",
  title: "MATLAB ile Mühendislik Uygulamaları",
  category: "Mühendislik",
  breadcrumb: "Bilişim Eğitimi > Mühendislik",
  image: "/images/algoritma-ileri.jpg",
  instructors: [
    {
      slug: "gizem-korkmaz-54",
      name: "Gizem Korkmaz",
      since: 2016,
      rating: 4.8,
      privatePrice: 3000,
      groupPrice: 1500,
      corporate: true,
      online: true,
      location: "İstanbul Avrupa Yakası",
      bio: "Matlab uzmanı, sinyal işleme ve simülasyon.",
      specialties: ["MATLAB", "Simulink", "Sinyal İşleme"]
    }
  ],
  description: "MATLAB ile mühendislik problemlerini çözün, simülasyon yapın.",
  whyTake: "Akademik ve endüstriyel projelerde vazgeçilmez araç.",
  employmentAreas: "Araştırma mühendisi, simülasyon uzmanı.",
  requirements: "Temel matematik ve algoritma bilgisi."
},

// 14. Autocad mimari proje (Eğitmen: Burak Aslan)
{
  slug: "autocad-ile-mimari-proje-cizimi",
  title: "AutoCAD ile Mimari Proje Çizimi",
  category: "Mimari Tasarım",
  breadcrumb: "Bilişim Eğitimi > Mimari",
  image: "/images/autocad.jpg",
  instructors: [
    {
      slug: "burak-aslan-55",
      name: "Burak Aslan",
      since: 2015,
      rating: 4.6,
      privatePrice: 1500,
      groupPrice: 750,
      corporate: true,
      online: true,
      location: "İstanbul Avrupa Yakası",
      bio: "Mimar ve AutoCAD eğitmeni, 8 yıllık deneyim.",
      specialties: ["AutoCAD", "Mimari Çizim", "Proje Yönetimi"]
    }
  ],
  description: "AutoCAD ile 2D/3D mimari projeler çizin.",
  whyTake: "Mimarlık ve iç mimarlıkta temel araç.",
  employmentAreas: "Mimar, teknik ressam.",
  requirements: "Temel mimarlık bilgisi."
},
{
  slug: "3ds-max-ile-mimari-gorsellestirme",
  title: "3ds Max ile Mimari Görselleştirme",
  category: "3D Tasarım",
  breadcrumb: "Bilişim Eğitimi > 3D Tasarım",
  image: "/images/3ds-max.jpg",
  instructors: [
    {
      slug: "burak-aslan-55",
      name: "Burak Aslan",
      since: 2015,
      rating: 4.6,
      privatePrice: 1500,
      groupPrice: 750,
      corporate: true,
      online: true,
      location: "İstanbul Avrupa Yakası",
      bio: "Mimar, 3ds Max ve V-Ray uzmanı.",
      specialties: ["3ds Max", "V-Ray", "Görselleştirme"]
    }
  ],
  description: "3ds Max ile fotogerçekçi mimari görseller oluşturun.",
  whyTake: "Projelerinizi etkileyici sunumlarla anlatın.",
  employmentAreas: "3D görselleştirme uzmanı, mimari tasarımcı.",
  requirements: "Temel 3D modelleme bilgisi."
},

// 15. Bilgisayar Mühendisliği Proje (Eğitmen: İrem Yalçın)
{
  slug: "cpp-ile-nesne-tabanli-programlama",
  title: "C++ ile Nesne Tabanlı Programlama",
  category: "Yazılım",
  breadcrumb: "Bilişim Eğitimi > Yazılım",
  image: "/images/yazilim.jpg",
  instructors: [
    {
      slug: "irem-yalcin-56",
      name: "İrem Yalçın",
      since: 2017,
      rating: 4.7,
      privatePrice: 1500,
      groupPrice: 750,
      corporate: true,
      online: true,
      location: "İstanbul Avrupa Yakası",
      bio: "C++ ve algoritma uzmanı, akademik deneyim.",
      specialties: ["C++", "OOP", "Veri Yapıları"]
    }
  ],
  description: "C++ ile nesne tabanlı programlama ve ileri konular.",
  whyTake: "Performanslı yazılım geliştirme için C++.",
  employmentAreas: "C++ developer, oyun programcısı.",
  requirements: "Temel programlama bilgisi."
},
{
  slug: "html5-ve-css3-ile-web-tasarim-kursu-2",
  title: "HTML5 ve CSS3 ile Web Tasarım Kursu",
  category: "Web Tasarım",
  breadcrumb: "Bilişim Eğitimi > Web Tasarım",
  image: "/images/web-tasarim.jpg",
  instructors: [
    {
      slug: "irem-yalcin-56",
      name: "İrem Yalçın",
      since: 2017,
      rating: 4.7,
      privatePrice: 1500,
      groupPrice: 750,
      corporate: true,
      online: true,
      location: "İstanbul Avrupa Yakası",
      bio: "Frontend geliştirici, HTML/CSS uzmanı.",
      specialties: ["HTML5", "CSS3", "Responsive Tasarım"]
    }
  ],
  description: "Modern web siteleri için HTML5 ve CSS3 öğrenin.",
  whyTake: "Web geliştirmenin temel taşları.",
  employmentAreas: "Frontend developer, web tasarımcı.",
  requirements: "Temel bilgisayar kullanımı."
},

// 16. 7-17 YAŞ SCRATCH VE PYTHON (Eğitmen: Onur Şen)
{
  slug: "scratch-ile-cocuklar-icin-kodlama-egitimi-2",
  title: "Scratch ile Çocuklar İçin Kodlama Eğitimi",
  category: "Çocuk Eğitimi",
  breadcrumb: "Bilişim Eğitimi > Çocuk",
  image: "/images/scratch.jpg",
  instructors: [
    {
      slug: "onur-sen-57",
      name: "Onur Şen",
      since: 2018,
      rating: 4.8,
      privatePrice: 750,
      groupPrice: 375,
      corporate: true,
      online: true,
      location: "İstanbul Avrupa Yakası",
      bio: "Çocuklara kodlama eğitmeni, Scratch ve Python.",
      specialties: ["Scratch", "Çocuk Eğitimi", "Oyun Tasarımı"]
    }
  ],
  description: "Scratch ile çocuklar eğlenerek kodlama öğrensin.",
  whyTake: "7-17 yaş arasına uygun, yaratıcılığı geliştirir.",
  employmentAreas: "Eğitmen, çocuk gelişim uzmanı.",
  requirements: "7-17 yaş arası çocuklar."
},
{
  slug: "python-ile-gencler-icin-programlama",
  title: "Python ile Gençler İçin Programlama",
  category: "Çocuk Eğitimi",
  breadcrumb: "Bilişim Eğitimi > Çocuk",
  image: "/images/python-egitimi-2.jpg",
  instructors: [
    {
      slug: "onur-sen-57",
      name: "Onur Şen",
      since: 2018,
      rating: 4.8,
      privatePrice: 750,
      groupPrice: 375,
      corporate: true,
      online: true,
      location: "İstanbul Avrupa Yakası",
      bio: "Çocuklara kodlama eğitmeni, Scratch ve Python.",
      specialties: ["Python", "Gençler", "Algoritma"]
    }
  ],
  description: "Gençlere özel Python ile programlamaya giriş.",
  whyTake: "Geleceğin yazılımcıları için sağlam temel.",
  employmentAreas: "Eğitmen, gençlik koçu.",
  requirements: "10-17 yaş arası."
},

// 17. Adobe Indesign, Photoshop (Eğitmen: Ceren Aksoy)
{
  slug: "adobe-indesign-ile-mizanpaj-ve-yayincilik",
  title: "Adobe InDesign ile Mizanpaj ve Yayıncılık",
  category: "Grafik Tasarım",
  breadcrumb: "Bilişim Eğitimi > Grafik Tasarım",
  image: "/images/indesign.jpg",
  instructors: [
    {
      slug: "ceren-aksoy-58",
      name: "Ceren Aksoy",
      since: 2016,
      rating: 4.7,
      privatePrice: 1800,
      groupPrice: 900,
      corporate: true,
      online: true,
      location: "İstanbul Avrupa Yakası",
      bio: "Grafik tasarımcı, yayıncılık ve baskı deneyimi.",
      specialties: ["InDesign", "Mizanpaj", "Tipografi"]
    }
  ],
  description: "InDesign ile dergi, kitap, broşür tasarımı.",
  whyTake: "Profesyonel yayıncılık için olmazsa olmaz.",
  employmentAreas: "Grafik tasarımcı, yayıncı.",
  requirements: "Temel tasarım bilgisi."
},
{
  slug: "adobe-photoshop-ile-grafik-tasarim-kursu-3",
  title: "Adobe Photoshop ile Grafik Tasarım Kursu",
  category: "Grafik Tasarım",
  breadcrumb: "Bilişim Eğitimi > Grafik Tasarım",
  image: "/images/photoshop.jpg",
  instructors: [
    {
      slug: "ceren-aksoy-58",
      name: "Ceren Aksoy",
      since: 2016,
      rating: 4.7,
      privatePrice: 1800,
      groupPrice: 900,
      corporate: true,
      online: true,
      location: "İstanbul Avrupa Yakası",
      bio: "Grafik tasarımcı, Photoshop uzmanı.",
      specialties: ["Photoshop", "Fotoğraf Düzenleme", "Dijital Sanat"]
    }
  ],
  description: "Photoshop ile dijital sanat, fotoğraf düzenleme ve grafik tasarım.",
  whyTake: "Görsel iletişimin en güçlü aracı.",
  employmentAreas: "Grafik tasarımcı, fotoğrafçı.",
  requirements: "Temel bilgisayar bilgisi."
},

// 18. Grafik Tasarım Seti (Eğitmen: Dilara Özkan)
{
  slug: "grafik-tasarim-seti-photoshop-illustrator-indesign",
  title: "Grafik Tasarım Seti (Photoshop, Illustrator, InDesign)",
  category: "Grafik Tasarım",
  breadcrumb: "Bilişim Eğitimi > Grafik Tasarım",
  image: "/images/illustrator.jpg",
  instructors: [
    {
      slug: "dilara-ozkan-59",
      name: "Dilara Özkan",
      since: 2017,
      rating: 4.8,
      privatePrice: 1498.5,
      groupPrice: 749,
      corporate: true,
      online: true,
      location: "İstanbul Avrupa Yakası",
      bio: "Grafik tasarımcı, üç ana programda uzman.",
      specialties: ["Photoshop", "Illustrator", "InDesign"]
    }
  ],
  description: "Üç temel grafik programını tek bir eğitimle öğrenin.",
  whyTake: "Tüm grafik ihtiyaçlarınızı karşılayacak beceri seti.",
  employmentAreas: "Grafik tasarımcı, sanat yönetmeni.",
  requirements: "Temel tasarım bilgisi."
},

// 19. Oyun Tasarımı Unity (Eğitmen: Emre Can)
{
  slug: "unity-ile-oyun-gelistirme-ve-csharp-programlama",
  title: "Unity ile Oyun Geliştirme ve C# Programlama",
  category: "Oyun",
  breadcrumb: "Bilişim Eğitimi > Oyun",
  image: "/images/unity.jpg",
  instructors: [
    {
      slug: "emre-can-60",
      name: "Emre Can",
      since: 2018,
      rating: 4.6,
      privatePrice: 1125,
      groupPrice: 562,
      corporate: true,
      online: true,
      location: "İstanbul Avrupa Yakası",
      bio: "Unity oyun geliştirici, indie projeler.",
      specialties: ["Unity", "C#", "Oyun Tasarımı"]
    }
  ],
  description: "Unity ile oyun mekanikleri geliştirin, C# programlamayı öğrenin.",
  whyTake: "Hobi olarak başlayıp profesyonel oyun yapın.",
  employmentAreas: "Oyun geliştirici, Unity developer.",
  requirements: "Temel programlama mantığı."
},

// 20. Nebim V3 (Eğitmen: Ahmet Kılıç)
{
  slug: "nebim-v3-ile-erp-ve-uretim-yonetimi",
  title: "Nebim V3 ile ERP ve Üretim Yönetimi",
  category: "ERP",
  breadcrumb: "Bilişim Eğitimi > ERP",
  image: "/images/yazilim.jpg",
  instructors: [
    {
      slug: "ahmet-kilic-61",
      name: "Ahmet Kılıç",
      since: 2014,
      rating: 4.7,
      privatePrice: 1950,
      groupPrice: 975,
      corporate: true,
      online: true,
      location: "İstanbul Avrupa Yakası",
      bio: "Nebim uzmanı, tekstil ve üretim sektörü.",
      specialties: ["Nebim V3", "ERP", "Üretim Yönetimi"]
    }
  ],
  description: "Nebim V3 ile kurumsal kaynak planlaması ve üretim yönetimi.",
  whyTake: "Tekstil sektöründe aranan uzmanlık.",
  employmentAreas: "ERP uzmanı, Nebim danışmanı.",
  requirements: "Temel bilgisayar bilgisi."
},

// 21. SEO Özel Ders (Eğitmen: Esra Yılmaz)
{
  slug: "seo-uzmanligi-ve-google-siralama-teknikleri",
  title: "SEO Uzmanlığı ve Google Sıralama Teknikleri",
  category: "Dijital Pazarlama",
  breadcrumb: "Bilişim Eğitimi > Pazarlama",
  image: "/images/seo.jpg",
  instructors: [
    {
      slug: "esra-yilmaz-62",
      name: "Esra Yılmaz",
      since: 2015,
      rating: 4.9,
      privatePrice: 4500,
      groupPrice: 2250,
      corporate: true,
      online: true,
      location: "İstanbul Avrupa Yakası",
      bio: "SEO danışmanı, Google algoritmaları uzmanı.",
      specialties: ["SEO", "Dijital Pazarlama", "Analitik"]
    }
  ],
  description: "Google'da üst sıralara çıkmak için ileri SEO taktikleri.",
  whyTake: "Organik trafikle büyümek isteyen herkes için.",
  employmentAreas: "SEO uzmanı, dijital pazarlama yöneticisi.",
  requirements: "Temel SEO bilgisi."
},

// 22. Sıfırdan Uzmanlık Excel (Eğitmen: Murat Şahin)
{
  slug: "sifirdan-uzmanliga-excel-egitimi",
  title: "Sıfırdan Uzmanlığa Excel Eğitimi",
  category: "Ofis",
  breadcrumb: "Bilişim Eğitimi > Ofis",
  image: "/images/excel3.jpg",
  instructors: [
    {
      slug: "murat-sahin-63",
      name: "Murat Şahin",
      since: 2016,
      rating: 4.7,
      privatePrice: 1200,
      groupPrice: 600,
      corporate: true,
      online: true,
      location: "İstanbul Avrupa Yakası",
      bio: "Excel eğitmeni, ileri formüller ve VBA.",
      specialties: ["Excel", "Veri Analizi", "Dashboard"]
    }
  ],
  description: "Hiç bilmeyenden uzman seviyesine Excel öğrenin.",
  whyTake: "İş hayatında en çok kullanılan program.",
  employmentAreas: "Ofis çalışanı, muhasebe, raporlama.",
  requirements: "Temel bilgisayar kullanımı."
},

// 23. AP Computer Science (Eğitmen: Deniz Yıldız)
{
  slug: "ap-computer-science-a-hazirlik-kursu",
  title: "AP Computer Science A Hazırlık Kursu",
  category: "Akademik",
  breadcrumb: "Bilişim Eğitimi > Akademik",
  image: "/images/yazilim.jpg",
  instructors: [
    {
      slug: "deniz-yildiz-64",
      name: "Deniz Yıldız",
      since: 2017,
      rating: 4.8,
      privatePrice: 1500,
      groupPrice: 750,
      corporate: true,
      online: true,
      location: "İstanbul Avrupa Yakası",
      bio: "AP CS eğitmeni, bilgisayar bilimleri öğretmeni.",
      specialties: ["AP CS", "Java", "Algoritma"]
    }
  ],
  description: "AP Computer Science A sınavına yönelik kapsamlı hazırlık.",
  whyTake: "Üniversite başvurularında fark yaratın.",
  employmentAreas: "Öğrenci, akademik danışman.",
  requirements: "Temel programlama bilgisi."
},

// 24. Scratch, Unity, C# (Eğitmen: Berkay Öz)
{
  slug: "scratch-unity-ve-csharp-ile-oyun-gelistirme",
  title: "Scratch, Unity ve C# ile Oyun Geliştirme",
  category: "Oyun",
  breadcrumb: "Bilişim Eğitimi > Oyun",
  image: "/images/unity.jpg",
  instructors: [
    {
      slug: "berkay-oz-65",
      name: "Berkay Öz",
      since: 2018,
      rating: 4.6,
      privatePrice: 1500,
      groupPrice: 750,
      corporate: true,
      online: true,
      location: "İstanbul Avrupa Yakası",
      bio: "Oyun eğitmeni, çocuklara ve gençlere oyun yapımı.",
      specialties: ["Scratch", "Unity", "C#"]
    }
  ],
  description: "Scratch'ten Unity'ye, farklı seviyelerde oyun geliştirme.",
  whyTake: "Oyun yapımının temellerini eğlenerek öğrenin.",
  employmentAreas: "Oyun geliştirici, eğitmen.",
  requirements: "Yaşa göre değişir."
},

// 25. Profesyonel Yazılım Eğitimi (Eğitmen: Selin Aktaş)
{
  slug: "profesyonel-web-gelistirme-ve-yazilim-egitimi",
  title: "Profesyonel Web Geliştirme ve Yazılım Eğitimi",
  category: "Yazılım",
  breadcrumb: "Bilişim Eğitimi > Yazılım",
  image: "/images/web-tasarim.jpg",
  instructors: [
    {
      slug: "selin-aktas-66",
      name: "Selin Aktaş",
      since: 2015,
      rating: 4.8,
      privatePrice: 1800,
      groupPrice: 900,
      corporate: true,
      online: true,
      location: "İstanbul Avrupa Yakası",
      bio: "Full stack developer, yazılım danışmanı.",
      specialties: ["Web Geliştirme", "JavaScript", "Node.js"]
    }
  ],
  description: "Sıfırdan profesyonel seviyede web geliştirme eğitimi.",
  whyTake: "Kendi projelerinizi hayata geçirin.",
  employmentAreas: "Full stack developer, yazılım mühendisi.",
  requirements: "Temel programlama bilgisi."
},

// 26. C# .net SQL (Eğitmen: Okan Yalçın)
{
  slug: "csharp-net-ve-sql-ile-veritabanli-uygulama-gelistirme",
  title: "C# .NET ve SQL ile Veritabanlı Uygulama Geliştirme",
  category: "Yazılım",
  breadcrumb: "Bilişim Eğitimi > Yazılım",
  image: "/images/sql-egitimi.jpg",
  instructors: [
    {
      slug: "okan-yalcin-67",
      name: "Okan Yalçın",
      since: 2014,
      rating: 4.7,
      privatePrice: 2250,
      groupPrice: 1125,
      corporate: true,
      online: true,
      location: "İstanbul Avrupa Yakası",
      bio: "C# ve SQL uzmanı, masaüstü ve web projeleri.",
      specialties: ["C#", ".NET", "SQL"]
    }
  ],
  description: "C# ile veritabanlı uygulamalar geliştirin, SQL sorguları yazın.",
  whyTake: "Kurumsal projelerin temel bileşenleri.",
  employmentAreas: ".NET developer, veritabanı programcısı.",
  requirements: "Temel C# bilgisi."
},

// 27. Robotik Kodlama Yapay Zeka (Eğitmen: İlknur Eren)
{
  slug: "robotik-kodlama-ve-yapay-zeka-uygulamalari",
  title: "Robotik Kodlama ve Yapay Zeka Uygulamaları",
  category: "Robotik",
  breadcrumb: "Bilişim Eğitimi > Robotik",
  image: "/images/yapay-zeka.jpg",
  instructors: [
    {
      slug: "ilknur-eren-68",
      name: "İlknur Eren",
      since: 2016,
      rating: 4.8,
      privatePrice: 2250,
      groupPrice: 1125,
      corporate: true,
      online: true,
      location: "İstanbul Avrupa Yakası",
      bio: "Robotik ve yapay zeka eğitmeni, Arduino projeleri.",
      specialties: ["Robotik", "Arduino", "Yapay Zeka"]
    }
  ],
  description: "Robotik sistemler ve yapay zeka algoritmalarıyla projeler geliştirin.",
  whyTake: "Geleceğin teknolojilerine el atın.",
  employmentAreas: "Robotik mühendisi, yapay zeka uzmanı.",
  requirements: "Temel elektronik ve programlama bilgisi."
},

// 28. Dijital Pazarlama Kapsamlı (Eğitmen: Ebru Tuna)
{
  slug: "dijital-pazarlama-ve-web-tasarim-kapsamli-egitim",
  title: "Dijital Pazarlama ve Web Tasarım Kapsamlı Eğitim",
  category: "Dijital Pazarlama",
  breadcrumb: "Bilişim Eğitimi > Pazarlama",
  image: "/images/google-seo.jpg",
  instructors: [
    {
      slug: "ebru-tuna-69",
      name: "Ebru Tuna",
      since: 2015,
      rating: 4.7,
      privatePrice: 1800,
      groupPrice: 900,
      corporate: true,
      online: true,
      location: "İstanbul Avrupa Yakası",
      bio: "Dijital pazarlama ve web tasarım uzmanı.",
      specialties: ["Dijital Pazarlama", "Web Tasarım", "SEO"]
    }
  ],
  description: "Web tasarım, SEO, e-ticaret ve reklam yönetimi tek pakette.",
  whyTake: "Kendi işinizi kurmak veya uzmanlaşmak için.",
  employmentAreas: "Dijital pazarlama uzmanı, web tasarımcı.",
  requirements: "Temel bilgisayar bilgisi."
},

// 29. Sıfırdan Yazılım ve Veri Bilimi (Eğitmen: Yiğit Kaya)
{
  slug: "sifirdan-yazilim-ve-veri-bilimi-egitimi",
  title: "Sıfırdan Yazılım ve Veri Bilimi Eğitimi",
  category: "Veri Bilimi",
  breadcrumb: "Bilişim Eğitimi > Veri Bilimi",
  image: "/images/yazilim.jpg",
  instructors: [
    {
      slug: "yigit-kaya-70",
      name: "Yiğit Kaya",
      since: 2016,
      rating: 4.8,
      privatePrice: 1500,
      groupPrice: 750,
      corporate: true,
      online: true,
      location: "İstanbul Avrupa Yakası",
      bio: "Yazılım ve veri bilimi eğitmeni, Python uzmanı.",
      specialties: ["Python", "Veri Bilimi", "SQL"]
    }
  ],
  description: "Sıfırdan başlayarak yazılım ve veri bilimini öğrenin.",
  whyTake: "Veri çağında ihtiyaç duyulan tüm beceriler.",
  employmentAreas: "Veri bilimci, yazılım geliştirici.",
  requirements: "Temel matematik ve bilgisayar bilgisi."
},

// 30. Google Ads ve Meta Reklam Uzmanlığı (Eğitmen: Tuğba Demir)
{
  slug: "google-ads-ve-meta-reklam-yonetimi-uzmanligi",
  title: "Google Ads ve Meta Reklam Yönetimi Uzmanlığı",
  category: "Dijital Pazarlama",
  breadcrumb: "Bilişim Eğitimi > Pazarlama",
  image: "/images/google-seo.jpg",
  instructors: [
    {
      slug: "tugba-demir-71",
      name: "Tuğba Demir",
      since: 2014,
      rating: 4.9,
      privatePrice: 11250,
      groupPrice: 5625,
      corporate: true,
      online: true,
      location: "İstanbul Avrupa Yakası",
      bio: "Reklam ajansı kurucusu, büyük bütçeler yönetmiş.",
      specialties: ["Google Ads", "Meta Reklam", "E-Ticaret"]
    }
  ],
  description: "Google Ads ve Meta platformlarında reklam yönetimi uzmanlığı.",
  whyTake: "Reklam bütçelerini etkin yöneterek yüksek ROI alın.",
  employmentAreas: "Reklam uzmanı, medya planlamacı.",
  requirements: "Temel dijital pazarlama bilgisi."
},

// 31. Sıfırdan Uzmanlığa Programlama ve Yapay Zeka (Eğitmen: Çağla Aydın)
{
  slug: "sifirdan-uzmanliga-programlama-ve-yapay-zeka",
  title: "Sıfırdan Uzmanlığa Programlama ve Yapay Zeka",
  category: "Yapay Zeka",
  breadcrumb: "Bilişim Eğitimi > Yapay Zeka",
  image: "/images/yapay-zeka.jpg",
  instructors: [
    {
      slug: "cagla-aydin-72",
      name: "Çağla Aydın",
      since: 2015,
      rating: 4.8,
      privatePrice: 3750,
      groupPrice: 1875,
      corporate: true,
      online: true,
      location: "İstanbul Avrupa Yakası",
      bio: "Yapay zeka mühendisi, Python ve derin öğrenme.",
      specialties: ["Python", "Yapay Zeka", "Makine Öğrenmesi"]
    }
  ],
  description: "Programlama temellerinden ileri yapay zeka uygulamalarına kadar.",
  whyTake: "Yapay zeka alanında kariyer için eksiksiz eğitim.",
  employmentAreas: "Yapay zeka mühendisi, veri bilimci.",
  requirements: "Temel programlama mantığı."
},

// 32. AP Computer Science İleri (Eğitmen: Caner Akın)
{
  slug: "ap-computer-science-sinav-hazirlik-ileri",
  title: "AP Computer Science Sınav Hazırlık",
  category: "Akademik",
  breadcrumb: "Bilişim Eğitimi > Akademik",
  image: "/images/yazilim.jpg",
  instructors: [
    {
      slug: "caner-akin-73",
      name: "Caner Akın",
      since: 2016,
      rating: 4.7,
      privatePrice: 2625,
      groupPrice: 1312,
      corporate: true,
      online: true,
      location: "İstanbul Avrupa Yakası",
      bio: "AP CS eğitmeni, uluslararası müfredat.",
      specialties: ["AP CS", "Java", "Veri Yapıları"]
    }
  ],
  description: "AP Computer Science sınavına yönelik ileri düzey hazırlık.",
  whyTake: "Yüksek skorla üniversite avantajı.",
  employmentAreas: "Öğrenci, akademik danışman.",
  requirements: "AP CS temel bilgisi."
},

// 33. Dart Flutter (Eğitmen: Cem Yılmaz)
{
  slug: "flutter-ile-mobil-uygulama-gelistirme",
  title: "Flutter ile Mobil Uygulama Geliştirme",
  category: "Mobil",
  breadcrumb: "Bilişim Eğitimi > Mobil",
  image: "/images/android-ios.jpg",
  instructors: [
    {
      slug: "cem-yilmaz-74",
      name: "Cem Yılmaz",
      since: 2017,
      rating: 4.7,
      privatePrice: 1425,
      groupPrice: 712,
      corporate: true,
      online: true,
      location: "İstanbul Avrupa Yakası",
      bio: "Flutter geliştirici, cross-platform uygulamalar.",
      specialties: ["Flutter", "Dart", "Mobil"]
    }
  ],
  description: "Flutter ile iOS ve Android için tek kod tabanıyla uygulama geliştirin.",
  whyTake: "Hızlı ve modern mobil geliştirme.",
  employmentAreas: "Flutter developer, mobil geliştirici.",
  requirements: "Temel programlama bilgisi."
},
{
  slug: "dart-programlama-dili-ile-uygulama-gelistirme",
  title: "Dart Programlama Dili ile Uygulama Geliştirme",
  category: "Yazılım",
  breadcrumb: "Bilişim Eğitimi > Yazılım",
  image: "/images/yazilim.jpg",
  instructors: [
    {
      slug: "cem-yilmaz-74",
      name: "Cem Yılmaz",
      since: 2017,
      rating: 4.7,
      privatePrice: 1425,
      groupPrice: 712,
      corporate: true,
      online: true,
      location: "İstanbul Avrupa Yakası",
      bio: "Flutter ve Dart geliştirici.",
      specialties: ["Dart", "Flutter", "Mobil"]
    }
  ],
  description: "Dart dilini öğrenerek Flutter için sağlam temel oluşturun.",
  whyTake: "Modern ve güçlü bir dil.",
  employmentAreas: "Dart developer, mobil geliştirici.",
  requirements: "Temel programlama bilgisi."
},

// 34. AutoCAD Dersi (Eğitmen: Eren Çetin)
{
  slug: "autocad-ile-teknik-cizim-ve-projelendirme-2",
  title: "AutoCAD ile Teknik Çizim ve Projelendirme",
  category: "Mühendislik",
  breadcrumb: "Bilişim Eğitimi > Mühendislik",
  image: "/images/autocad.jpg",
  instructors: [
    {
      slug: "eren-cetin-75",
      name: "Eren Çetin",
      since: 2018,
      rating: 4.6,
      privatePrice: 900,
      groupPrice: 450,
      corporate: true,
      online: true,
      location: "İstanbul Avrupa Yakası",
      bio: "Makine mühendisi, AutoCAD eğitmeni.",
      specialties: ["AutoCAD", "Teknik Çizim", "Makine"]
    }
  ],
  description: "AutoCAD ile teknik resim ve proje çizimleri.",
  whyTake: "Mühendislik ve mimarlıkta temel araç.",
  employmentAreas: "Teknik ressam, mühendis.",
  requirements: "Temel teknik resim bilgisi."
},

// 35. Sektörel Yazılım (Eğitmen: Pınar Demir)
{
  slug: "sektorel-yazilim-gelistirme-ve-uygulamali-egitim",
  title: "Sektörel Yazılım Geliştirme ve Uygulamalı Eğitim",
  category: "Yazılım",
  breadcrumb: "Bilişim Eğitimi > Yazılım",
  image: "/images/code.jpg",
  instructors: [
    {
      slug: "pinar-demir-76",
      name: "Pınar Demir",
      since: 2016,
      rating: 4.7,
      privatePrice: 1500,
      groupPrice: 750,
      corporate: true,
      online: true,
      location: "İstanbul Avrupa Yakası",
      bio: "Sektörel yazılım geliştirici, iş analisti.",
      specialties: ["Yazılım", "İş Analizi", "Proje Yönetimi"]
    }
  ],
  description: "Gerçek sektör ihtiyaçlarına yönelik yazılım geliştirme eğitimi.",
  whyTake: "Teori değil, pratik ve işe yarar bilgi.",
  employmentAreas: "Yazılım geliştirici, iş analisti.",
  requirements: "Temel programlama bilgisi."
},

// 36. Corel Draw (Eğitmen: Gökhan Arslan)
{
  slug: "corel-draw-ile-vektorel-tasarim",
  title: "Corel Draw ile Vektörel Tasarım",
  category: "Grafik Tasarım",
  breadcrumb: "Bilişim Eğitimi > Grafik Tasarım",
  image: "/images/yazilim.jpg",
  instructors: [
    {
      slug: "gokhan-arslan-77",
      name: "Gökhan Arslan",
      since: 2017,
      rating: 4.6,
      privatePrice: 750,
      groupPrice: 375,
      corporate: true,
      online: true,
      location: "İstanbul Avrupa Yakası",
      bio: "Corel Draw uzmanı, tabela ve baskı tasarımı.",
      specialties: ["Corel Draw", "Vektörel", "Baskı"]
    }
  ],
  description: "Corel Draw ile logo, afiş ve vektörel grafikler oluşturun.",
  whyTake: "Özellikle baskı sektöründe yaygın kullanım.",
  employmentAreas: "Grafik tasarımcı, matbaacı.",
  requirements: "Temel tasarım bilgisi."
},

// 37. STM32, PCB, IOT (Eğitmen: Mert Yıldız)
{
  slug: "stm32-ile-gomulu-sistem-gelistirme",
  title: "STM32 ile Gömülü Sistem Geliştirme",
  category: "Gömülü Sistemler",
  breadcrumb: "Bilişim Eğitimi > Gömülü",
  image: "/images/yazilim.jpg",
  instructors: [
    {
      slug: "mert-yildiz-78",
      name: "Mert Yıldız",
      since: 2015,
      rating: 4.8,
      privatePrice: 1500,
      groupPrice: 750,
      corporate: true,
      online: true,
      location: "İstanbul Avrupa Yakası",
      bio: "Gömülü sistem mühendisi, STM32 uzmanı.",
      specialties: ["STM32", "Gömülü C", "Mikrodenetleyici"]
    }
  ],
  description: "STM32 tabanlı gömülü sistemler programlama ve tasarım.",
  whyTake: "Endüstriyel ve tüketici elektroniğinde yaygın.",
  employmentAreas: "Gömülü yazılım mühendisi.",
  requirements: "Temel C ve elektronik bilgisi."
},
{
  slug: "pcb-tasarimi-ve-uretimi-egitimi",
  title: "PCB Tasarımı ve Üretimi Eğitimi",
  category: "Gömülü Sistemler",
  breadcrumb: "Bilişim Eğitimi > Gömülü",
  image: "/images/yazilim.jpg",
  instructors: [
    {
      slug: "mert-yildiz-78",
      name: "Mert Yıldız",
      since: 2015,
      rating: 4.8,
      privatePrice: 1500,
      groupPrice: 750,
      corporate: true,
      online: true,
      location: "İstanbul Avrupa Yakası",
      bio: "Gömülü sistem mühendisi, PCB tasarımı.",
      specialties: ["PCB", "Altium", "Elektronik"]
    }
  ],
  description: "PCB tasarım araçlarıyla devre kartı tasarımı ve üretim süreçleri.",
  whyTake: "Kendi elektronik projelerinizi hayata geçirin.",
  employmentAreas: "Elektronik tasarımcı, PCB uzmanı.",
  requirements: "Temel elektronik bilgisi."
},
{
  slug: "iot-ile-nesnelerin-interneti-uygulamalari",
  title: "IoT ile Nesnelerin İnterneti Uygulamaları",
  category: "IoT",
  breadcrumb: "Bilişim Eğitimi > IoT",
  image: "/images/yazilim.jpg",
  instructors: [
    {
      slug: "mert-yildiz-78",
      name: "Mert Yıldız",
      since: 2015,
      rating: 4.8,
      privatePrice: 1500,
      groupPrice: 750,
      corporate: true,
      online: true,
      location: "İstanbul Avrupa Yakası",
      bio: "IoT uzmanı, sensör ve bulut entegrasyonu.",
      specialties: ["IoT", "ESP8266", "MQTT"]
    }
  ],
  description: "Nesnelerin interneti cihazları, sensörler ve bulut bağlantısı.",
  whyTake: "Akıllı ev, endüstri 4.0 projeleri için temel.",
  employmentAreas: "IoT geliştirici, sistem entegratörü.",
  requirements: "Temel elektronik ve programlama."
},

// 38. Yazılım Mühendisliği (Eğitmen: Ece Yücel)
{
  slug: "yazilim-muhendisligi-temelleri-ve-uygulamalari",
  title: "Yazılım Mühendisliği Temelleri ve Uygulamaları",
  category: "Yazılım",
  breadcrumb: "Bilişim Eğitimi > Yazılım",
  image: "/images/siber-guvenlik-egitimi-3.jpg",
  instructors: [
    {
      slug: "ece-yucel-79",
      name: "Ece Yücel",
      since: 2014,
      rating: 4.9,
      privatePrice: 7500,
      groupPrice: 3750,
      corporate: true,
      online: true,
      location: "İstanbul Avrupa Yakası",
      bio: "Yazılım mühendisi, akademisyen, proje yöneticisi.",
      specialties: ["Yazılım Mühendisliği", "Proje Yönetimi", "Mimari"]
    }
  ],
  description: "Yazılım mühendisliğinin tüm süreçlerini uygulamalı öğrenin.",
  whyTake: "Profesyonel yazılım geliştirme kariyeri için.",
  employmentAreas: "Yazılım mühendisi, proje yöneticisi.",
  requirements: "Temel programlama bilgisi."
},

// ===== Ankara =====

// 1. Mobil Uygulama Geliştirme (Flutter) - Daha önce yoktu
{
  slug: "flutter-ile-mobil-uygulama-gelistirme-ankara",
  title: "Flutter ile Mobil Uygulama Geliştirme",
  category: "Mobil",
  breadcrumb: "Bilişim Eğitimi > Mobil",
  image: "/images/android-ios.jpg",
  instructors: [
    {
      slug: "burak-guleryuz",
      name: "Burak Güleryüz",
      since: 2018,
      rating: 4.7,
      privatePrice: 1800,
      groupPrice: 900,
      corporate: false,
      online: true,
      location: "Ankara",
      bio: "Flutter ve Dart konusunda uzman, birçok mobil uygulama geliştirdi.",
      specialties: ["Flutter", "Dart", "Mobil Uygulama"]
    }
  ],
  description: "Flutter ile iOS ve Android için tek kod tabanıyla uygulama geliştirin.",
  whyTake: "Hızlı geliştirme ve güzel arayüzler için en popüler framework.",
  employmentAreas: "Mobil geliştirici, Flutter developer",
  requirements: "Temel programlama bilgisi."
},

// 2. Unity ile Oyun Geliştirme (İleri Seviye) - Daha önce yoktu
{
  slug: "unity-ileri-seviye-oyun-gelistirme-ankara",
  title: "Unity ile İleri Seviye Oyun Geliştirme",
  category: "Oyun",
  breadcrumb: "Bilişim Eğitimi > Oyun",
  image: "/images/unity.jpg",
  instructors: [
    {
      slug: "cansu-turan",
      name: "Cansu Turan",
      since: 2017,
      rating: 4.8,
      privatePrice: 2500,
      groupPrice: 1250,
      corporate: true,
      online: true,
      location: "Ankara",
      bio: "Oyun geliştirici, Unity ile 3D oyunlar yapıyor.",
      specialties: ["Unity", "C#", "3D Oyun"]
    }
  ],
  description: "Unity ile ileri seviye oyun mekanikleri, yapay zeka ve optimizasyon.",
  whyTake: "Profesyonel oyun geliştirme için gereken tüm ileri teknikler.",
  employmentAreas: "Oyun geliştirici, Unity developer",
  requirements: "Orta seviye Unity ve C# bilgisi."
},

// 3. Veri Bilimi ve Makine Öğrenmesi (Python) - Daha önce yoktu
{
  slug: "veri-bilimi-ve-makine-ogrenmesi-ankara",
  title: "Veri Bilimi ve Makine Öğrenmesi",
  category: "Veri Bilimi",
  breadcrumb: "Bilişim Eğitimi > Veri Bilimi",
  image: "/images/sql-egitimi.jpg",
  instructors: [
    {
      slug: "deniz-aydogan",
      name: "Deniz Aydoğan",
      since: 2016,
      rating: 4.9,
      privatePrice: 3500,
      groupPrice: 1750,
      corporate: true,
      online: true,
      location: "Ankara",
      bio: "Veri bilimci, makine öğrenmesi projelerinde danışman.",
      specialties: ["Python", "Makine Öğrenmesi", "Veri Analizi"]
    }
  ],
  description: "Python ile veri analizi, makine öğrenmesi ve model geliştirme.",
  whyTake: "Veri bilimi alanında kariyer yapmak için kapsamlı eğitim.",
  employmentAreas: "Veri bilimci, makine öğrenmesi mühendisi",
  requirements: "Temel Python ve istatistik bilgisi."
},

// 4. Siber Güvenlik ve Penetrasyon Testi - Daha önce yoktu
{
  slug: "siber-guvenlik-penetrasyon-testi-ankara",
  title: "Siber Güvenlik ve Penetrasyon Testi",
  category: "Siber Güvenlik",
  breadcrumb: "Bilişim Eğitimi > Güvenlik",
  image: "/images/siber-guvenlik-egitimi.jpg",
  instructors: [
    {
      slug: "emre-akyuz",
      name: "Emre Akyüz",
      since: 2015,
      rating: 4.8,
      privatePrice: 3200,
      groupPrice: 1600,
      corporate: false,
      online: true,
      location: "Ankara",
      bio: "Siber güvenlik uzmanı, CEH sertifikalı, etik hacker.",
      specialties: ["Penetrasyon Testi", "Ağ Güvenliği", "Linux"]
    }
  ],
  description: "Sistemlere sızma testleri, güvenlik açıkları ve savunma mekanizmaları.",
  whyTake: "Siber güvenlik alanında uzmanlaşarak yüksek talep gören bir meslek edinin.",
  employmentAreas: "Siber güvenlik uzmanı, penetrasyon testçisi",
  requirements: "Temel ağ ve Linux bilgisi."
},

// 5. DevOps ve CI/CD Süreçleri - Daha önce yoktu
{
  slug: "devops-ci-cd-ankara",
  title: "DevOps ve CI/CD Süreçleri",
  category: "DevOps",
  breadcrumb: "Bilişim Eğitimi > DevOps",
  image: "/images/devops.jpg",
  instructors: [
    {
      slug: "fatih-ozkan",
      name: "Fatih Özkan",
      since: 2016,
      rating: 4.7,
      privatePrice: 2800,
      groupPrice: 1400,
      corporate: true,
      online: true,
      location: "Ankara",
      bio: "DevOps mühendisi, Docker, Kubernetes ve Jenkins uzmanı.",
      specialties: ["Docker", "Kubernetes", "Jenkins", "AWS"]
    }
  ],
  description: "DevOps kültürü, sürekli entegrasyon ve dağıtım (CI/CD) araçları.",
  whyTake: "Yazılım teslimat süreçlerini hızlandırmak ve otomatikleştirmek için.",
  employmentAreas: "DevOps mühendisi, sistem yöneticisi",
  requirements: "Temel Linux ve yazılım geliştirme bilgisi."
},

// 6. Amazon Web Services (AWS) ile Bulut Bilişim - Daha önce yoktu
{
  slug: "aws-bulut-bilisim-ankara",
  title: "Amazon Web Services (AWS) ile Bulut Bilişim",
  category: "Bulut",
  breadcrumb: "Bilişim Eğitimi > Bulut",
  image: "/images/amazon.jpg",
  instructors: [
    {
      slug: "gizem-aydin",
      name: "Gizem Aydın",
      since: 2017,
      rating: 4.8,
      privatePrice: 3000,
      groupPrice: 1500,
      corporate: true,
      online: true,
      location: "Ankara",
      bio: "AWS çözüm mimarı, bulut projeleri yönetiyor.",
      specialties: ["AWS", "EC2", "S3", "Lambda"]
    }
  ],
  description: "AWS üzerinde sunucu, veritabanı, depolama ve sunucusuz mimariler.",
  whyTake: "Bulut bilişimde en çok tercih edilen platformda uzmanlaşın.",
  employmentAreas: "Bulut mühendisi, AWS uzmanı",
  requirements: "Temel sistem yönetimi bilgisi."
},

// 7. Docker ve Kubernetes ile Konteyner Yönetimi - Daha önce yoktu
{
  slug: "docker-kubernetes-konteyner-ankara",
  title: "Docker ve Kubernetes ile Konteyner Yönetimi",
  category: "DevOps",
  breadcrumb: "Bilişim Eğitimi > DevOps",
  image: "/images/bilisim.jpg",
  instructors: [
    {
      slug: "hasan-cevik",
      name: "Hasan Çevik",
      since: 2018,
      rating: 4.6,
      privatePrice: 2600,
      groupPrice: 1300,
      corporate: false,
      online: true,
      location: "Ankara",
      bio: "Konteyner teknolojileri uzmanı, mikroservis mimarileri.",
      specialties: ["Docker", "Kubernetes", "Helm"]
    }
  ],
  description: "Docker ile konteynerleştirme, Kubernetes ile orkestrasyon ve yönetim.",
  whyTake: "Modern uygulama dağıtımının temel taşları.",
  employmentAreas: "DevOps mühendisi, sistem yöneticisi",
  requirements: "Temel Linux bilgisi."
},

// 8. Microsoft Azure ile Bulut Çözümleri - Daha önce yoktu
{
  slug: "azure-bulut-cozumleri-ankara",
  title: "Microsoft Azure ile Bulut Çözümleri",
  category: "Bulut",
  breadcrumb: "Bilişim Eğitimi > Bulut",
  image: "/images/microsoft.jpg",
  instructors: [
    {
      slug: "irem-yilmazer",
      name: "İrem Yılmazer",
      since: 2017,
      rating: 4.7,
      privatePrice: 2900,
      groupPrice: 1450,
      corporate: true,
      online: true,
      location: "Ankara",
      bio: "Azure uzmanı, Microsoft sertifikalı eğitmen.",
      specialties: ["Azure", "Virtual Machines", "App Services"]
    }
  ],
  description: "Microsoft Azure'da sanal makineler, veritabanları ve web uygulamaları.",
  whyTake: "Kurumsal dünyada yaygın kullanılan bulut platformu.",
  employmentAreas: "Bulut çözümleri uzmanı, Azure administrator",
  requirements: "Temel sistem yönetimi."
},

// 9. İleri Excel ve VBA Makro Programlama - Daha önce yoktu
{
  slug: "ileri-excel-vba-ankara",
  title: "İleri Excel ve VBA Makro Programlama",
  category: "Ofis",
  breadcrumb: "Bilişim Eğitimi > Ofis",
  image: "/images/excel3.jpg",
  instructors: [
    {
      slug: "kaan-ozdemir",
      name: "Kaan Özdemir",
      since: 2016,
      rating: 4.7,
      privatePrice: 2000,
      groupPrice: 1000,
      corporate: false,
      online: true,
      location: "Ankara",
      bio: "Excel eğitmeni, VBA ile otomasyon projeleri.",
      specialties: ["Excel", "VBA", "Makro", "Dashboard"]
    }
  ],
  description: "İleri Excel formülleri, pivot tablolar ve VBA ile makro programlama.",
  whyTake: "İş hayatında verimliliğinizi katlayın, tekrarlayan işleri otomatikleştirin.",
  employmentAreas: "Ofis çalışanı, raporlama uzmanı, finans analisti",
  requirements: "Temel Excel bilgisi."
},

// 10. WordPress ile E-Ticaret Sitesi Kurulumu (WooCommerce) - Daha önce yoktu
{
  slug: "wordpress-woocommerce-ankara",
  title: "WordPress ile E-Ticaret Sitesi Kurulumu (WooCommerce)",
  category: "Web Tasarım",
  breadcrumb: "Bilişim Eğitimi > Web Tasarım",
  image: "/images/wordpress.jpg",
  instructors: [
    {
      slug: "levent-ekinci",
      name: "Levent Ekinci",
      since: 2018,
      rating: 4.6,
      privatePrice: 1800,
      groupPrice: 900,
      corporate: true,
      online: true,
      location: "Ankara",
      bio: "WordPress geliştirici, e-ticaret siteleri kuruyor.",
      specialties: ["WordPress", "WooCommerce", "E-Ticaret"]
    }
  ],
  description: "WordPress ve WooCommerce ile profesyonel e-ticaret sitesi kurulumu.",
  whyTake: "Kendi online mağazanızı açmak veya müşterilerinize site yapmak için.",
  employmentAreas: "Web geliştirici, e-ticaret uzmanı",
  requirements: "Temel WordPress bilgisi."
},

// 11. Google Analytics ve Veri Analizi - Daha önce yoktu
{
  slug: "google-analytics-veri-analizi-ankara",
  title: "Google Analytics ve Veri Analizi",
  category: "Dijital Pazarlama",
  breadcrumb: "Bilişim Eğitimi > Pazarlama",
  image: "/images/ads.jpg",
  instructors: [
    {
      slug: "meltem-aksoy",
      name: "Meltem Aksoy",
      since: 2017,
      rating: 4.7,
      privatePrice: 2200,
      groupPrice: 1100,
      corporate: true,
      online: true,
      location: "Ankara",
      bio: "Dijital pazarlama uzmanı, Google Analytics ve veri raporlama.",
      specialties: ["Google Analytics", "Veri Analizi", "Raporlama"]
    }
  ],
  description: "Google Analytics ile web sitesi trafiğini analiz etme, hedef kitle davranışlarını anlama.",
  whyTake: "Dijital pazarlama stratejilerinizi veriyle yönetin.",
  employmentAreas: "Dijital pazarlama uzmanı, analist",
  requirements: "Temel dijital pazarlama bilgisi."
},

// 12. Adobe Premiere Pro ile Video Montaj - Daha önce yoktu
{
  slug: "adobe-premiere-pro-video-montaj-ankara",
  title: "Adobe Premiere Pro ile Video Montaj ve Kurgu",
  category: "Video",
  breadcrumb: "Bilişim Eğitimi > Video",
  image: "/images/blogger.jpg",
  instructors: [
    {
      slug: "nazli-karaca",
      name: "Nazlı Karaca",
      since: 2019,
      rating: 4.6,
      privatePrice: 1600,
      groupPrice: 800,
      corporate: false,
      online: true,
      location: "Ankara",
      bio: "Video editör, Premiere Pro ve After Effects uzmanı.",
      specialties: ["Premiere Pro", "Video Montaj", "After Effects"]
    }
  ],
  description: "Adobe Premiere Pro ile profesyonel video montaj, renk düzeltme ve efekt ekleme.",
  whyTake: "YouTube, sosyal medya veya kurumsal videolar için içerik üretin.",
  employmentAreas: "Video editör, içerik üretici",
  requirements: "Temel bilgisayar bilgisi."
},

// 13. 3ds Max ile İç Mekan Modelleme - Daha önce yoktu
{
  slug: "3ds-max-ic-mekan-modelleme-ankara",
  title: "3ds Max ile İç Mekan Modelleme ve Görselleştirme",
  category: "3D Tasarım",
  breadcrumb: "Bilişim Eğitimi > 3D Tasarım",
  image: "/images/3ds-max.jpg",
  instructors: [
    {
      slug: "orhan-erdogan",
      name: "Orhan Erdoğan",
      since: 2016,
      rating: 4.7,
      privatePrice: 2400,
      groupPrice: 1200,
      corporate: true,
      online: true,
      location: "Ankara",
      bio: "İç mimar, 3ds Max ve V-Ray ile fotogerçekçi görseller hazırlıyor.",
      specialties: ["3ds Max", "V-Ray", "İç Mekan"]
    }
  ],
  description: "3ds Max ile iç mekan modelleme, malzeme kaplama ve V-Ray ile render alma.",
  whyTake: "Mimari sunumlar ve müşteri görselleri için kaliteli görselleştirme.",
  employmentAreas: "İç mimar, 3D modelci",
  requirements: "Temel 3D bilgisi."
},

// 14. PHP ile Web Geliştirme (Laravel) - Daha önce yoktu
{
  slug: "php-laravel-web-gelistirme-ankara",
  title: "PHP ile Web Geliştirme (Laravel)",
  category: "Yazılım",
  breadcrumb: "Bilişim Eğitimi > Yazılım",
  image: "/images/php.jpg",
  instructors: [
    {
      slug: "pelin-sahiner",
      name: "Pelin Şahiner",
      since: 2016,
      rating: 4.8,
      privatePrice: 2700,
      groupPrice: 1350,
      corporate: true,
      online: true,
      location: "Ankara",
      bio: "PHP ve Laravel geliştirici, backend uzmanı.",
      specialties: ["PHP", "Laravel", "MySQL"]
    }
  ],
  description: "PHP ve Laravel framework ile modern web uygulamaları geliştirme.",
  whyTake: "En popüler backend dillerinden biriyle profesyonel projeler yapın.",
  employmentAreas: "Backend developer, PHP developer",
  requirements: "Temel programlama bilgisi."
},

// 15. JavaScript ve React ile Frontend Geliştirme - Daha önce yoktu
{
  slug: "javascript-react-frontend-ankara",
  title: "JavaScript ve React ile Frontend Geliştirme",
  category: "Yazılım",
  breadcrumb: "Bilişim Eğitimi > Yazılım",
  image: "/images/react.jpg",
  instructors: [
    {
      slug: "rumeysa-altun",
      name: "Rümeysa Altun",
      since: 2017,
      rating: 4.8,
      privatePrice: 2800,
      groupPrice: 1400,
      corporate: false,
      online: true,
      location: "Ankara",
      bio: "Frontend geliştirici, React ve modern JavaScript uzmanı.",
      specialties: ["JavaScript", "React", "HTML/CSS"]
    }
  ],
  description: "Modern JavaScript (ES6+) ve React ile interaktif web arayüzleri oluşturun.",
  whyTake: "Frontend geliştirme dünyasında en çok aranan beceriler.",
  employmentAreas: "Frontend developer, React developer",
  requirements: "Temel HTML/CSS bilgisi."
},

// ===== İZMİR =====

// 1. MS Office Programları Kapsamlı Eğitim (Eğitmen: Zeynep Aydın)
{
  slug: "ms-office-programlari-kapsamli-egitim",
  title: "MS Office Programları Kapsamlı Eğitim",
  category: "Ofis Programları",
  breadcrumb: "Bilişim Eğitimi > Ofis",
  image: "/images/microsoft.jpg",
  instructors: [
    {
      slug: "zeynep-aydin-izmir-01",
      name: "Zeynep Aydın",
      since: 2017,
      rating: 4.7,
      privatePrice: 750,
      groupPrice: 375,
      corporate: false, // Kurumsal eğitim vermiyor
      online: true,
      location: "İzmir",
      bio: "MS Office uzmanı, 6 yıllık eğitmenlik deneyimi.",
      specialties: ["Excel", "Word", "PowerPoint", "OneNote"]
    }
  ],
  description: "Word, Excel, PowerPoint ve OneNote programlarını kapsamlı bir şekilde öğrenin.",
  whyTake: "Ofis programlarında uzmanlaşarak iş hayatında verimliliğinizi artırın.",
  employmentAreas: "Ofis çalışanı, yönetici asistanı, muhasebe.",
  requirements: "Temel bilgisayar kullanımı."
},
{
  slug: "excel-ile-veri-analizi-ve-raporlama-izmir",
  title: "Excel ile Veri Analizi ve Raporlama",
  category: "Ofis Programları",
  breadcrumb: "Bilişim Eğitimi > Ofis",
  image: "/images/excel2.jpg",
  instructors: [
    {
      slug: "zeynep-aydin-izmir-01",
      name: "Zeynep Aydın",
      since: 2017,
      rating: 4.7,
      privatePrice: 750,
      groupPrice: 375,
      corporate: false,
      online: true,
      location: "İzmir",
      bio: "MS Office uzmanı, 6 yıllık eğitmenlik deneyimi.",
      specialties: ["Excel", "Veri Analizi", "Dashboard"]
    }
  ],
  description: "Excel ile veri analizi, pivot tablolar ve ileri raporlama teknikleri.",
  whyTake: "Veriyi anlamlandırarak iş kararlarına katkı sağlayın.",
  employmentAreas: "Veri analisti, raporlama uzmanı.",
  requirements: "Temel Excel bilgisi."
},

// 2. Siber Güvenlik Dersi (Eğitmen: Mehmet Demir)
{
  slug: "siber-guvenlik-uzmanligi-ve-etik-hackerlik-izmir",
  title: "Siber Güvenlik Uzmanlığı ve Etik Hackerlık",
  category: "Siber Güvenlik",
  breadcrumb: "Bilişim Eğitimi > Güvenlik",
  image: "/images/siber-guvenlik.jpg",
  instructors: [
    {
      slug: "mehmet-demir-izmir-02",
      name: "Mehmet Demir",
      since: 2015,
      rating: 4.8,
      privatePrice: 1125,
      groupPrice: 560,
      corporate: true,
      online: true,
      location: "İzmir",
      bio: "Siber güvenlik uzmanı, CEH sertifikalı, 8 yıllık deneyim.",
      specialties: ["Siber Güvenlik", "Etik Hackerlık", "Ağ Güvenliği"]
    }
  ],
  description: "Siber tehditlere karşı sistemleri koruma ve etik hackerlık teknikleri.",
  whyTake: "Siber güvenlik alanında kariyer yapmak için temel beceriler.",
  employmentAreas: "Siber güvenlik uzmanı, penetrasyon testçisi.",
  requirements: "Temel ağ bilgisi."
},
{
  slug: "ag-guvenligi-ve-sizma-testi-egitimi-izmir",
  title: "Ağ Güvenliği ve Sızma Testi Eğitimi",
  category: "Siber Güvenlik",
  breadcrumb: "Bilişim Eğitimi > Güvenlik",
  image: "/images/siber-guvenlik-egitimi.jpg",
  instructors: [
    {
      slug: "mehmet-demir-izmir-02",
      name: "Mehmet Demir",
      since: 2015,
      rating: 4.8,
      privatePrice: 1125,
      groupPrice: 560,
      corporate: true,
      online: true,
      location: "İzmir",
      bio: "Siber güvenlik uzmanı, ağ güvenliği ve sızma testi.",
      specialties: ["Ağ Güvenliği", "Sızma Testi", "Kali Linux"]
    }
  ],
  description: "Ağ altyapılarını güvenli hale getirme ve sızma testi yöntemleri.",
  whyTake: "Kurumsal ağların güvenliğini sağlamak için.",
  employmentAreas: "Ağ güvenlik uzmanı, güvenlik testçisi.",
  requirements: "Temel ağ bilgisi ve Linux."
},

// 3. HTML, Tailwind ve React ile Hızlı Web Tasarım (Eğitmen: Elif Yılmaz)
{
  slug: "react-ile-modern-web-uygulamalari-gelistirme-izmir",
  title: "React ile Modern Web Uygulamaları Geliştirme",
  category: "Yazılım",
  breadcrumb: "Bilişim Eğitimi > Yazılım",
  image: "/images/react.jpg",
  instructors: [
    {
      slug: "elif-yilmaz-izmir-03",
      name: "Elif Yılmaz",
      since: 2018,
      rating: 4.7,
      privatePrice: 1425,
      groupPrice: 710,
      corporate: true,
      online: true,
      location: "İzmir",
      bio: "Frontend geliştirici, React ve Tailwind uzmanı.",
      specialties: ["React", "JavaScript", "Web Geliştirme"]
    }
  ],
  description: "React ile modern, hızlı ve ölçeklenebilir web uygulamaları oluşturun.",
  whyTake: "En popüler frontend kütüphanesi ile fark yaratın.",
  employmentAreas: "Frontend developer, React developer.",
  requirements: "Temel HTML, CSS ve JavaScript bilgisi."
},
{
  slug: "tailwind-css-ile-hizli-web-tasarimi-izmir",
  title: "Tailwind CSS ile Hızlı Web Tasarımı",
  category: "Web Tasarım",
  breadcrumb: "Bilişim Eğitimi > Web Tasarım",
  image: "/images/yazilim.jpg",
  instructors: [
    {
      slug: "elif-yilmaz-izmir-03",
      name: "Elif Yılmaz",
      since: 2018,
      rating: 4.7,
      privatePrice: 1425,
      groupPrice: 710,
      corporate: true,
      online: true,
      location: "İzmir",
      bio: "Frontend geliştirici, Tailwind CSS uzmanı.",
      specialties: ["Tailwind CSS", "CSS3", "Responsive Tasarım"]
    }
  ],
  description: "Tailwind CSS ile hızlı ve modern web arayüzleri tasarlayın.",
  whyTake: "CSS yazımını hızlandıran utility-first framework.",
  employmentAreas: "Frontend developer, web tasarımcı.",
  requirements: "Temel CSS bilgisi."
},
{
  slug: "html5-ve-css3-ile-web-tasarim-kursu-izmir",
  title: "HTML5 ve CSS3 ile Web Tasarım Kursu",
  category: "Web Tasarım",
  breadcrumb: "Bilişim Eğitimi > Web Tasarım",
  image: "/images/web-tasarim.jpg",
  instructors: [
    {
      slug: "elif-yilmaz-izmir-03",
      name: "Elif Yılmaz",
      since: 2018,
      rating: 4.7,
      privatePrice: 1425,
      groupPrice: 710,
      corporate: true,
      online: true,
      location: "İzmir",
      bio: "Frontend geliştirici, HTML/CSS eğitmeni.",
      specialties: ["HTML5", "CSS3", "Web Tasarım"]
    }
  ],
  description: "HTML5 ve CSS3 ile modern web siteleri oluşturun.",
  whyTake: "Web geliştirmenin temelleri.",
  employmentAreas: "Web tasarımcı, frontend developer.",
  requirements: "Temel bilgisayar kullanımı."
},

// 4. PYTHON, C/C++, PHP, DB, JS, R (Eğitmen: Canan Kara)
{
  slug: "python-ile-sifirdan-ileri-seviye-programlama-izmir",
  title: "Python ile Sıfırdan İleri Seviye Programlama",
  category: "Yazılım",
  breadcrumb: "Bilişim Eğitimi > Yazılım",
  image: "/images/python-egitimi.jpg",
  instructors: [
    {
      slug: "canan-kara-izmir-04",
      name: "Canan Kara",
      since: 2016,
      rating: 4.8,
      privatePrice: 1500,
      groupPrice: 750,
      corporate: false, // Kurumsal eğitim yok
      online: true,
      location: "İzmir",
      bio: "Çok dilli programcı, 7 yıllık eğitmen.",
      specialties: ["Python", "C/C++", "PHP", "JavaScript", "R"]
    }
  ],
  description: "Python programlamayı sıfırdan ileri seviyeye kadar öğrenin.",
  whyTake: "Yazılım dünyasının en popüler dili.",
  employmentAreas: "Yazılım geliştirici, veri bilimci.",
  requirements: "Temel algoritma mantığı."
},
{
  slug: "c-ve-cpp-ile-sistem-programlama-izmir",
  title: "C ve C++ ile Sistem Programlama",
  category: "Yazılım",
  breadcrumb: "Bilişim Eğitimi > Yazılım",
  image: "/images/yazilim.jpg",
  instructors: [
    {
      slug: "canan-kara-izmir-04",
      name: "Canan Kara",
      since: 2016,
      rating: 4.8,
      privatePrice: 1500,
      groupPrice: 750,
      corporate: false,
      online: true,
      location: "İzmir",
      bio: "Çok dilli programcı, C/C++ uzmanı.",
      specialties: ["C", "C++", "Sistem Programlama"]
    }
  ],
  description: "C ve C++ dilleri ile sistem düzeyinde programlama yapın.",
  whyTake: "Performanslı yazılımlar geliştirmek için.",
  employmentAreas: "Sistem programcısı, gömülü yazılım geliştirici.",
  requirements: "Temel programlama bilgisi."
},
{
  slug: "php-ile-dinamik-web-sitesi-gelistirme-izmir",
  title: "PHP ile Dinamik Web Sitesi Geliştirme",
  category: "Yazılım",
  breadcrumb: "Bilişim Eğitimi > Yazılım",
  image: "/images/php.jpg",
  instructors: [
    {
      slug: "canan-kara-izmir-04",
      name: "Canan Kara",
      since: 2016,
      rating: 4.8,
      privatePrice: 1500,
      groupPrice: 750,
      corporate: false,
      online: true,
      location: "İzmir",
      bio: "PHP ve backend geliştirme uzmanı.",
      specialties: ["PHP", "MySQL", "Web"]
    }
  ],
  description: "PHP ile dinamik ve veritabanlı web uygulamaları geliştirin.",
  whyTake: "En yaygın backend dillerinden biri.",
  employmentAreas: "Backend developer, web geliştirici.",
  requirements: "Temel HTML ve programlama bilgisi."
},
{
  slug: "javascript-ile-modern-web-gelistirme-izmir",
  title: "JavaScript ile Modern Web Geliştirme",
  category: "Yazılım",
  breadcrumb: "Bilişim Eğitimi > Yazılım",
  image: "/images/web-tasarim.jpg",
  instructors: [
    {
      slug: "canan-kara-izmir-04",
      name: "Canan Kara",
      since: 2016,
      rating: 4.8,
      privatePrice: 1500,
      groupPrice: 750,
      corporate: false,
      online: true,
      location: "İzmir",
      bio: "JavaScript ve frontend geliştirme eğitmeni.",
      specialties: ["JavaScript", "ES6", "React"]
    }
  ],
  description: "JavaScript ile modern web uygulamaları geliştirin.",
  whyTake: "Web'in vazgeçilmez dili.",
  employmentAreas: "Frontend developer, full stack developer.",
  requirements: "Temel HTML/CSS bilgisi."
},
{
  slug: "r-programlama-ile-veri-analizi-izmir",
  title: "R Programlama ile Veri Analizi",
  category: "Veri Bilimi",
  breadcrumb: "Bilişim Eğitimi > Veri Bilimi",
  image: "/images/yazilim.jpg",
  instructors: [
    {
      slug: "canan-kara-izmir-04",
      name: "Canan Kara",
      since: 2016,
      rating: 4.8,
      privatePrice: 1500,
      groupPrice: 750,
      corporate: false,
      online: true,
      location: "İzmir",
      bio: "R dili ve istatistiksel analiz uzmanı.",
      specialties: ["R", "Veri Analizi", "İstatistik"]
    }
  ],
  description: "R programlama ile veri analizi, görselleştirme ve raporlama.",
  whyTake: "Akademik ve endüstriyel araştırmalarda yaygın.",
  employmentAreas: "Veri analisti, istatistikçi.",
  requirements: "Temel istatistik bilgisi."
},

// 5. Java dersleri (Eğitmen: Kemal Öz)
{
  slug: "java-ile-nesne-tabanli-programlama-kursu-izmir",
  title: "Java ile Nesne Tabanlı Programlama Kursu",
  category: "Yazılım",
  breadcrumb: "Bilişim Eğitimi > Yazılım",
  image: "/images/javadeveloper.jpg",
  instructors: [
    {
      slug: "kemal-oz-izmir-05",
      name: "Kemal Öz",
      since: 2015,
      rating: 4.7,
      privatePrice: 1500,
      groupPrice: 750,
      corporate: true,
      online: true,
      location: "İzmir",
      bio: "Java ve Spring Boot eğitmeni, 8 yıllık deneyim.",
      specialties: ["Java", "OOP", "Spring Boot"]
    }
  ],
  description: "Java ile nesne tabanlı programlamayı öğrenin.",
  whyTake: "Kurumsal yazılım dünyasının temel dili.",
  employmentAreas: "Java developer, backend developer.",
  requirements: "Temel programlama mantığı."
},
{
  slug: "spring-boot-ile-microservice-gelistirme-izmir",
  title: "Spring Boot ile Microservice Geliştirme",
  category: "Yazılım",
  breadcrumb: "Bilişim Eğitimi > Yazılım",
  image: "/images/yazilim.jpg",
  instructors: [
    {
      slug: "kemal-oz-izmir-05",
      name: "Kemal Öz",
      since: 2015,
      rating: 4.7,
      privatePrice: 1500,
      groupPrice: 750,
      corporate: true,
      online: true,
      location: "İzmir",
      bio: "Java ve Spring Boot uzmanı.",
      specialties: ["Spring Boot", "Microservice", "REST API"]
    }
  ],
  description: "Spring Boot ile microservice mimarisi geliştirin.",
  whyTake: "Modern backend geliştirme becerisi.",
  employmentAreas: "Backend developer, microservice uzmanı.",
  requirements: "Java ve OOP bilgisi."
},

// 6. Robotik Kodlama (Eğitmen: Serkan Akyüz)
{
  slug: "robotik-kodlama-ve-arduino-egitimi-izmir",
  title: "Robotik Kodlama ve Arduino Eğitimi",
  category: "Robotik",
  breadcrumb: "Bilişim Eğitimi > Robotik",
  image: "/images/algoritma-ileri.jpg",
  instructors: [
    {
      slug: "serkan-akyuz-izmir-06",
      name: "Serkan Akyüz",
      since: 2017,
      rating: 4.8,
      privatePrice: 1650,
      groupPrice: 825,
      corporate: true,
      online: true,
      location: "İzmir",
      bio: "Robotik eğitmeni, Arduino ve STEM uzmanı.",
      specialties: ["Arduino", "Robotik", "Elektronik"]
    }
  ],
  description: "Arduino ile robotik projeler geliştirin, kodlama öğrenin.",
  whyTake: "STEM eğitiminin temel taşı.",
  employmentAreas: "Robotik eğitmeni, proje geliştirici.",
  requirements: "Temel mantık bilgisi."
},
{
  slug: "cocuklar-icin-robotik-ve-bilisim-egitimi-izmir",
  title: "Çocuklar İçin Robotik ve Bilişim Eğitimi",
  category: "Çocuk Eğitimi",
  breadcrumb: "Bilişim Eğitimi > Çocuk",
  image: "/images/Blocky.jpg",
  instructors: [
    {
      slug: "serkan-akyuz-izmir-06",
      name: "Serkan Akyüz",
      since: 2017,
      rating: 4.8,
      privatePrice: 1650,
      groupPrice: 825,
      corporate: true,
      online: true,
      location: "İzmir",
      bio: "Çocuklara robotik eğitmeni, oyun tabanlı öğrenme.",
      specialties: ["Robotik", "Çocuk Eğitimi", "Scratch"]
    }
  ],
  description: "Çocuklar için eğlenceli robotik ve bilişim eğitimi.",
  whyTake: "Erken yaşta teknolojiyle tanışma.",
  employmentAreas: "Eğitmen, çocuk gelişim uzmanı.",
  requirements: "7-15 yaş arası çocuklar."
},

// 7. Excel (Eğitmen: Hülya Erdem)
{
  slug: "sifirdan-uzmanliga-excel-egitimi-izmir",
  title: "Sıfırdan Uzmanlığa Excel Eğitimi",
  category: "Ofis Programları",
  breadcrumb: "Bilişim Eğitimi > Ofis",
  image: "/images/excel.jpg",
  instructors: [
    {
      slug: "hulya-erdem-izmir-07",
      name: "Hülya Erdem",
      since: 2018,
      rating: 4.6,
      privatePrice: 1050,
      groupPrice: 525,
      corporate: false, // Kurumsal eğitim vermiyor
      online: true,
      location: "İzmir",
      bio: "Excel eğitmeni, iş hayatında pratik çözümler.",
      specialties: ["Excel", "Formüller", "Pivot"]
    }
  ],
  description: "Hiç bilmeyenden uzman seviyesine Excel.",
  whyTake: "İş hayatında en çok kullanılan program.",
  employmentAreas: "Ofis çalışanı, muhasebe.",
  requirements: "Temel bilgisayar kullanımı."
},
{
  slug: "ileri-duzey-excel-ve-veri-analizi-izmir",
  title: "İleri Düzey Excel ve Veri Analizi",
  category: "Ofis Programları",
  breadcrumb: "Bilişim Eğitimi > Ofis",
  image: "/images/excel3.jpg",
  instructors: [
    {
      slug: "hulya-erdem-izmir-07",
      name: "Hülya Erdem",
      since: 2018,
      rating: 4.6,
      privatePrice: 1050,
      groupPrice: 525,
      corporate: false,
      online: true,
      location: "İzmir",
      bio: "Excel uzmanı, veri analizi.",
      specialties: ["Excel", "Veri Analizi", "Dashboard"]
    }
  ],
  description: "İleri Excel formülleri, makrolar ve veri analizi teknikleri.",
  whyTake: "Veri odaklı kararlar almak için.",
  employmentAreas: "Veri analisti, raporlama uzmanı.",
  requirements: "Orta düzey Excel bilgisi."
},

// 8. CapCut Video Düzenleme (Eğitmen: Onur Yıldız)
{
  slug: "capcut-ile-video-montaj-ve-duzenleme-izmir",
  title: "CapCut ile Video Montaj ve Düzenleme",
  category: "Video Tasarım",
  breadcrumb: "Bilişim Eğitimi > Video",
  image: "/images/yazilim.jpg",
  instructors: [
    {
      slug: "onur-yildiz-izmir-08",
      name: "Onur Yıldız",
      since: 2019,
      rating: 4.6,
      privatePrice: 1050,
      groupPrice: 525,
      corporate: false,
      online: true,
      location: "İzmir",
      bio: "Video editörü, CapCut ve Premiere Pro uzmanı.",
      specialties: ["CapCut", "Video Montaj", "Efekt"]
    }
  ],
  description: "CapCut ile mobil veya masaüstünde video düzenlemeyi öğrenin.",
  whyTake: "Sosyal medya içerikleri için ideal.",
  employmentAreas: "Video editörü, içerik üretici.",
  requirements: "Temel bilgisayar kullanımı."
},
{
  slug: "video-kurgu-ve-post-prodüksiyon-egitimi-izmir",
  title: "Video Kurgu ve Post-Prodüksiyon Eğitimi",
  category: "Video Tasarım",
  breadcrumb: "Bilişim Eğitimi > Video",
  image: "/images/web-tasarim.jpg",
  instructors: [
    {
      slug: "onur-yildiz-izmir-08",
      name: "Onur Yıldız",
      since: 2019,
      rating: 4.6,
      privatePrice: 1050,
      groupPrice: 525,
      corporate: false,
      online: true,
      location: "İzmir",
      bio: "Video editörü, kurgu ve renklendirme.",
      specialties: ["Video Kurgu", "Post-Prodüksiyon", "Renk Düzeltme"]
    }
  ],
  description: "Profesyonel video kurgu ve post-prodüksiyon teknikleri.",
  whyTake: "Film, dizi, reklam sektöründe çalışmak için.",
  employmentAreas: "Video editörü, post-prodüksiyon uzmanı.",
  requirements: "Temel video kurgu bilgisi."
},

// 9. Robotik Kodlama (Eğitmen: Meltem Şahin)
{
  slug: "robotik-kodlama-ve-yapay-zeka-uygulamalari-izmir",
  title: "Robotik Kodlama ve Yapay Zeka Uygulamaları",
  category: "Robotik",
  breadcrumb: "Bilişim Eğitimi > Robotik",
  image: "/images/yapay-zeka.jpg",
  instructors: [
    {
      slug: "meltem-sahin-izmir-09",
      name: "Meltem Şahin",
      since: 2016,
      rating: 4.8,
      privatePrice: 2250,
      groupPrice: 1125,
      corporate: false, // Kurumsal eğitim yok
      online: true,
      location: "İzmir",
      bio: "Robotik ve yapay zeka eğitmeni, proje bazlı çalışma.",
      specialties: ["Robotik", "Yapay Zeka", "Python"]
    }
  ],
  description: "Robotik sistemler ve yapay zeka algoritmalarıyla projeler geliştirin.",
  whyTake: "Geleceğin teknolojilerine hazırlık.",
  employmentAreas: "Robotik mühendisi, yapay zeka geliştirici.",
  requirements: "Temel programlama bilgisi."
},
{
  slug: "stem-ve-robotik-egitimi-izmir",
  title: "STEM ve Robotik Eğitimi",
  category: "Robotik",
  breadcrumb: "Bilişim Eğitimi > Robotik",
  image: "/images/it-Help-Desk.jpg",
  instructors: [
    {
      slug: "meltem-sahin-izmir-09",
      name: "Meltem Şahin",
      since: 2016,
      rating: 4.8,
      privatePrice: 2250,
      groupPrice: 1125,
      corporate: false,
      online: true,
      location: "İzmir",
      bio: "STEM eğitmeni, disiplinler arası projeler.",
      specialties: ["STEM", "Robotik", "Problem Çözme"]
    }
  ],
  description: "Bilim, teknoloji, mühendislik ve matematik entegrasyonu ile robotik projeler.",
  whyTake: "21. yüzyıl becerileri kazanın.",
  employmentAreas: "Eğitmen, proje danışmanı.",
  requirements: "Temel bilim ve matematik."
},

// ===== İZMİR ve ADANA EKLENTİLERİ =====

// 1. MS Office Eğitimi - İzmir (Eğitmen: Burak Aydın)
{
  slug: "ms-office-programlari-kapsamli-egitim",
  title: "MS Office Programları Kapsamlı Eğitim",
  category: "Ofis",
  breadcrumb: "Bilişim Eğitimi > Ofis",
  image: "/images/microsoft.jpg",
  instructors: [
    {
      slug: "burak-aydin-80",
      name: "Burak Aydın",
      since: 2016,
      rating: 4.7,
      privatePrice: 750,
      groupPrice: 375,
      corporate: true,
      online: true,
      location: "İzmir",
      bio: "MS Office uzmanı, 7 yıllık eğitmen.",
      specialties: ["Excel", "Word", "PowerPoint", "OneNote"]
    }
  ],
  description: "Word, Excel, PowerPoint, OneNote programlarını kapsamlı öğrenin.",
  whyTake: "Ofis programlarında uzmanlaşarak iş hayatında verimliliğinizi artırın.",
  employmentAreas: "Ofis çalışanı, yönetici asistanı, muhasebe.",
  requirements: "Temel bilgisayar kullanımı."
},
{
  slug: "excel-ile-veri-analizi-ve-raporlama-izmir",
  title: "Excel ile Veri Analizi ve Raporlama",
  category: "Ofis",
  breadcrumb: "Bilişim Eğitimi > Ofis",
  image: "/images/excel2.jpg",
  instructors: [
    {
      slug: "burak-aydin-80",
      name: "Burak Aydın",
      since: 2016,
      rating: 4.7,
      privatePrice: 750,
      groupPrice: 375,
      corporate: true,
      online: true,
      location: "İzmir",
      bio: "MS Office uzmanı, 7 yıllık eğitmen.",
      specialties: ["Excel", "Word", "PowerPoint", "OneNote"]
    }
  ],
  description: "Excel ile veri analizi, pivot tablolar ve raporlama teknikleri.",
  whyTake: "Veriyi anlamlandırarak iş kararlarına katkı sağlayın.",
  employmentAreas: "Veri analisti, muhasebe, finans.",
  requirements: "Temel Excel bilgisi."
},

// 2. Siber Güvenlik - İzmir (Eğitmen: Cemre Kılıç)
{
  slug: "siber-guvenlik-uzmanligi-ve-etik-hackerlik-izmir",
  title: "Siber Güvenlik Uzmanlığı ve Etik Hackerlık",
  category: "Siber Güvenlik",
  breadcrumb: "Bilişim Eğitimi > Güvenlik",
  image: "/images/siber-guvenlik.jpg",
  instructors: [
    {
      slug: "cemre-kilic-81",
      name: "Cemre Kılıç",
      since: 2015,
      rating: 4.9,
      privatePrice: 1125,
      groupPrice: 560,
      corporate: false,
      online: true,
      location: "İzmir",
      bio: "Siber güvenlik uzmanı, CEH sertifikalı.",
      specialties: ["Siber Güvenlik", "Etik Hacker", "Ağ Güvenliği"]
    }
  ],
  description: "Siber tehditlere karşı sistemleri koruyun, etik hackerlık becerileri kazanın.",
  whyTake: "Siber güvenlik alanında uzmanlaşarak kariyerinizi güvence altına alın.",
  employmentAreas: "Siber güvenlik uzmanı, penetrasyon testçisi.",
  requirements: "Temel ağ bilgisi."
},
{
  slug: "ag-guvenligi-ve-sizma-testi-egitimi",
  title: "Ağ Güvenliği ve Sızma Testi Eğitimi",
  category: "Siber Güvenlik",
  breadcrumb: "Bilişim Eğitimi > Güvenlik",
  image: "/images/siber-guvenlik-egitimi.jpg",
  instructors: [
    {
      slug: "cemre-kilic-81",
      name: "Cemre Kılıç",
      since: 2015,
      rating: 4.9,
      privatePrice: 1125,
      groupPrice: 560,
      corporate: false,
      online: true,
      location: "İzmir",
      bio: "Siber güvenlik uzmanı, CEH sertifikalı.",
      specialties: ["Siber Güvenlik", "Etik Hacker", "Ağ Güvenliği"]
    }
  ],
  description: "Ağ güvenliği, sızma testi ve zafiyet analizi yöntemleri.",
  whyTake: "Kurumsal ağları koruyacak uzmanlığı edinin.",
  employmentAreas: "Ağ güvenliği uzmanı, sızma testçisi.",
  requirements: "Temel ağ ve protokol bilgisi."
},

// 3. HTML, Tailwind, React - İzmir (Eğitmen: Deniz Poyraz)
{
  slug: "react-ile-modern-web-uygulamalari-gelistirme-izmir",
  title: "React ile Modern Web Uygulamaları Geliştirme",
  category: "Yazılım",
  breadcrumb: "Bilişim Eğitimi > Yazılım",
  image: "/images/react.jpg",
  instructors: [
    {
      slug: "deniz-poyraz-82",
      name: "Deniz Poyraz",
      since: 2017,
      rating: 4.8,
      privatePrice: 1425,
      groupPrice: 710,
      corporate: true,
      online: true,
      location: "İzmir",
      bio: "Frontend geliştirici, modern web teknolojileri eğitmeni.",
      specialties: ["React", "Tailwind", "HTML", "CSS"]
    }
  ],
  description: "React ile modern, hızlı ve ölçeklenebilir web uygulamaları oluşturun.",
  whyTake: "En popüler frontend kütüphanesi ile sektörde fark yaratın.",
  employmentAreas: "Frontend developer, React developer.",
  requirements: "HTML, CSS ve JavaScript temel bilgisi."
},
{
  slug: "tailwind-css-ile-hizli-web-tasarimi",
  title: "Tailwind CSS ile Hızlı Web Tasarımı",
  category: "Web Tasarım",
  breadcrumb: "Bilişim Eğitimi > Web Tasarım",
  image: "/images/yazilim.jpg",
  instructors: [
    {
      slug: "deniz-poyraz-82",
      name: "Deniz Poyraz",
      since: 2017,
      rating: 4.8,
      privatePrice: 1425,
      groupPrice: 710,
      corporate: true,
      online: true,
      location: "İzmir",
      bio: "Frontend geliştirici, modern web teknolojileri eğitmeni.",
      specialties: ["React", "Tailwind", "HTML", "CSS"]
    }
  ],
  description: "Tailwind CSS ile utility-first yaklaşımla hızlı web arayüzleri tasarlayın.",
  whyTake: "Modern CSS framework'lerini öğrenerek tasarım sürecini hızlandırın.",
  employmentAreas: "Frontend developer, web tasarımcı.",
  requirements: "Temel CSS bilgisi."
},
{
  slug: "html5-ve-css3-ile-web-tasarim-kursu-izmir",
  title: "HTML5 ve CSS3 ile Web Tasarım Kursu",
  category: "Web Tasarım",
  breadcrumb: "Bilişim Eğitimi > Web Tasarım",
  image: "/images/web-tasarim.jpg",
  instructors: [
    {
      slug: "deniz-poyraz-82",
      name: "Deniz Poyraz",
      since: 2017,
      rating: 4.8,
      privatePrice: 1425,
      groupPrice: 710,
      corporate: true,
      online: true,
      location: "İzmir",
      bio: "Frontend geliştirici, modern web teknolojileri eğitmeni.",
      specialties: ["React", "Tailwind", "HTML", "CSS"]
    }
  ],
  description: "Modern web siteleri oluşturmak için HTML5 ve CSS3 öğrenin.",
  whyTake: "Web geliştirmenin temel taşları.",
  employmentAreas: "Frontend developer, web tasarımcı.",
  requirements: "Temel bilgisayar kullanımı."
},

// 4. Python, C/C++, PHP, JS, R - İzmir (Eğitmen: Elif Karaman)
{
  slug: "python-ile-sifirdan-ileri-seviye-programlama-izmir",
  title: "Python ile Sıfırdan İleri Seviye Programlama",
  category: "Yazılım",
  breadcrumb: "Bilişim Eğitimi > Yazılım",
  image: "/images/python-egitimi.jpg",
  instructors: [
    {
      slug: "elif-karaman-83",
      name: "Elif Karaman",
      since: 2014,
      rating: 4.8,
      privatePrice: 1500,
      groupPrice: 750,
      corporate: true,
      online: true,
      location: "İzmir",
      bio: "Çok dilli programcı, 9 yıllık deneyim.",
      specialties: ["Python", "C", "C++", "PHP", "JavaScript", "R"]
    }
  ],
  description: "Sıfırdan başlayarak Python programlamayı ileri seviyede öğrenin.",
  whyTake: "En popüler programlama dili ile kariyer fırsatlarınızı artırın.",
  employmentAreas: "Yazılım geliştirici, veri analisti.",
  requirements: "Temel bilgisayar bilgisi."
},
{
  slug: "c-ve-cpp-ile-sistem-programlama",
  title: "C ve C++ ile Sistem Programlama",
  category: "Yazılım",
  breadcrumb: "Bilişim Eğitimi > Yazılım",
  image: "/images/yazilim.jpg",
  instructors: [
    {
      slug: "elif-karaman-83",
      name: "Elif Karaman",
      since: 2014,
      rating: 4.8,
      privatePrice: 1500,
      groupPrice: 750,
      corporate: true,
      online: true,
      location: "İzmir",
      bio: "Çok dilli programcı, 9 yıllık deneyim.",
      specialties: ["Python", "C", "C++", "PHP", "JavaScript", "R"]
    }
  ],
  description: "C ve C++ ile sistem programlama, bellek yönetimi ve ileri konular.",
  whyTake: "Performanslı yazılım geliştirme için temel dil.",
  employmentAreas: "Sistem programcısı, gömülü yazılımcı.",
  requirements: "Temel algoritma bilgisi."
},
{
  slug: "php-ile-dinamik-web-sitesi-gelistirme-izmir",
  title: "PHP ile Dinamik Web Sitesi Geliştirme",
  category: "Yazılım",
  breadcrumb: "Bilişim Eğitimi > Yazılım",
  image: "/images/php.jpg",
  instructors: [
    {
      slug: "elif-karaman-83",
      name: "Elif Karaman",
      since: 2014,
      rating: 4.8,
      privatePrice: 1500,
      groupPrice: 750,
      corporate: true,
      online: true,
      location: "İzmir",
      bio: "Çok dilli programcı, 9 yıllık deneyim.",
      specialties: ["Python", "C", "C++", "PHP", "JavaScript", "R"]
    }
  ],
  description: "PHP ile dinamik web siteleri ve veritabanı bağlantılı uygulamalar geliştirin.",
  whyTake: "Web programlamanın en yaygın dillerinden biri.",
  employmentAreas: "Web developer, backend developer.",
  requirements: "Temel HTML ve programlama bilgisi."
},
{
  slug: "javascript-ile-modern-web-gelistirme-izmir",
  title: "JavaScript ile Modern Web Geliştirme",
  category: "Yazılım",
  breadcrumb: "Bilişim Eğitimi > Yazılım",
  image: "/images/javadeveloper.jpg",
  instructors: [
    {
      slug: "elif-karaman-83",
      name: "Elif Karaman",
      since: 2014,
      rating: 4.8,
      privatePrice: 1500,
      groupPrice: 750,
      corporate: true,
      online: true,
      location: "İzmir",
      bio: "Çok dilli programcı, 9 yıllık deneyim.",
      specialties: ["Python", "C", "C++", "PHP", "JavaScript", "R"]
    }
  ],
  description: "JavaScript ile modern web uygulamaları, DOM manipülasyonu ve async programlama.",
  whyTake: "Frontend ve backend (Node.js) için vazgeçilmez dil.",
  employmentAreas: "Frontend developer, full stack developer.",
  requirements: "Temel HTML ve CSS bilgisi."
},
{
  slug: "r-programlama-ile-veri-analizi",
  title: "R Programlama ile Veri Analizi",
  category: "Veri Bilimi",
  breadcrumb: "Bilişim Eğitimi > Veri Bilimi",
  image: "/images/yazilim.jpg",
  instructors: [
    {
      slug: "elif-karaman-83",
      name: "Elif Karaman",
      since: 2014,
      rating: 4.8,
      privatePrice: 1500,
      groupPrice: 750,
      corporate: true,
      online: true,
      location: "İzmir",
      bio: "Çok dilli programcı, 9 yıllık deneyim.",
      specialties: ["Python", "C", "C++", "PHP", "JavaScript", "R"]
    }
  ],
  description: "R programlama ile istatistiksel analiz, veri görselleştirme ve raporlama.",
  whyTake: "Veri bilimi ve akademik araştırmalarda güçlü araç.",
  employmentAreas: "Veri analisti, istatistikçi.",
  requirements: "Temel istatistik bilgisi."
},

// 5. Java ve Spring Boot - İzmir (Eğitmen: Furkan Aslan)
{
  slug: "java-ile-nesne-tabanli-programlama-kursu-izmir",
  title: "Java ile Nesne Tabanlı Programlama Kursu",
  category: "Yazılım",
  breadcrumb: "Bilişim Eğitimi > Yazılım",
  image: "/images/javadeveloper.jpg",
  instructors: [
    {
      slug: "furkan-aslan-84",
      name: "Furkan Aslan",
      since: 2016,
      rating: 4.7,
      privatePrice: 1500,
      groupPrice: 750,
      corporate: false,
      online: true,
      location: "İzmir",
      bio: "Java ve Spring uzmanı, kurumsal projeler.",
      specialties: ["Java", "Spring Boot", "Microservice"]
    }
  ],
  description: "Java ile nesne tabanlı programlamayı öğrenin, kurumsal uygulamalar geliştirin.",
  whyTake: "Java, kurumsal dünyanın en çok tercih edilen dili.",
  employmentAreas: "Java developer, backend developer.",
  requirements: "Temel programlama bilgisi."
},
{
  slug: "spring-boot-ile-microservice-gelistirme",
  title: "Spring Boot ile Microservice Geliştirme",
  category: "Yazılım",
  breadcrumb: "Bilişim Eğitimi > Yazılım",
  image: "/images/yazilim.jpg",
  instructors: [
    {
      slug: "furkan-aslan-84",
      name: "Furkan Aslan",
      since: 2016,
      rating: 4.7,
      privatePrice: 1500,
      groupPrice: 750,
      corporate: false,
      online: true,
      location: "İzmir",
      bio: "Java ve Spring uzmanı, kurumsal projeler.",
      specialties: ["Java", "Spring Boot", "Microservice"]
    }
  ],
  description: "Spring Boot ile microservice mimarisi, REST API geliştirme ve dağıtık sistemler.",
  whyTake: "Modern backend geliştirmenin temel teknolojisi.",
  employmentAreas: "Backend developer, Java developer.",
  requirements: "Java ve OOP bilgisi."
},

// 6. Robotik Kodlama (İlkokul-Ortaokul-Lise) - İzmir (Eğitmen: Gamze Yıldırım)
{
  slug: "robotik-kodlama-ve-arduino-egitimi-izmir",
  title: "Robotik Kodlama ve Arduino Eğitimi",
  category: "Robotik",
  breadcrumb: "Bilişim Eğitimi > Robotik",
  image: "/images/yapay-zeka.jpg",
  instructors: [
    {
      slug: "gamze-yildirim-85",
      name: "Gamze Yıldırım",
      since: 2018,
      rating: 4.8,
      privatePrice: 1650,
      groupPrice: 825,
      corporate: true,
      online: true,
      location: "İzmir",
      bio: "Robotik eğitmeni, çocuklara yönelik programlar.",
      specialties: ["Robotik", "Arduino", "STEM"]
    }
  ],
  description: "Arduino ile robotik projeler geliştirin, kodlama mantığını öğrenin.",
  whyTake: "Geleceğin teknolojilerine erken yaşta adım atın.",
  employmentAreas: "Robotik eğitmeni, hobi projeleri.",
  requirements: "7-17 yaş arası çocuklar ve gençler."
},
{
  slug: "cocuklar-icin-robotik-ve-bilisim-egitimi",
  title: "Çocuklar İçin Robotik ve Bilişim Eğitimi",
  category: "Robotik",
  breadcrumb: "Bilişim Eğitimi > Robotik",
  image: "/images/Blocky.jpg",
  instructors: [
    {
      slug: "gamze-yildirim-85",
      name: "Gamze Yıldırım",
      since: 2018,
      rating: 4.8,
      privatePrice: 1650,
      groupPrice: 825,
      corporate: true,
      online: true,
      location: "İzmir",
      bio: "Robotik eğitmeni, çocuklara yönelik programlar.",
      specialties: ["Robotik", "Arduino", "STEM"]
    }
  ],
  description: "Çocuklara özel robotik ve bilişim teknolojileri eğitimi, eğlenceli projeler.",
  whyTake: "Problem çözme ve yaratıcılığı geliştirir.",
  employmentAreas: "Eğitmen, çocuk gelişim uzmanı.",
  requirements: "İlkokul-ortaokul öğrencileri."
},

// 7. Excel (temel-orta-ileri) - İzmir (Eğitmen: Hakan Özkan)
{
  slug: "sifirdan-uzmanliga-excel-egitimi-izmir",
  title: "Sıfırdan Uzmanlığa Excel Eğitimi",
  category: "Ofis",
  breadcrumb: "Bilişim Eğitimi > Ofis",
  image: "/images/excel.jpg",
  instructors: [
    {
      slug: "hakan-ozkan-86",
      name: "Hakan Özkan",
      since: 2015,
      rating: 4.6,
      privatePrice: 1050,
      groupPrice: 525,
      corporate: true,
      online: true,
      location: "İzmir",
      bio: "Excel eğitmeni, finans ve raporlama.",
      specialties: ["Excel", "Veri Analizi", "Dashboard"]
    }
  ],
  description: "Hiç bilmeyenden uzman seviyesine Excel öğrenin.",
  whyTake: "İş hayatında en çok kullanılan program.",
  employmentAreas: "Ofis çalışanı, muhasebe, raporlama.",
  requirements: "Temel bilgisayar kullanımı."
},
{
  slug: "ileri-duzey-excel-ve-veri-analizi-izmir",
  title: "İleri Düzey Excel ve Veri Analizi",
  category: "Ofis",
  breadcrumb: "Bilişim Eğitimi > Ofis",
  image: "/images/excel3.jpg",
  instructors: [
    {
      slug: "hakan-ozkan-86",
      name: "Hakan Özkan",
      since: 2015,
      rating: 4.6,
      privatePrice: 1050,
      groupPrice: 525,
      corporate: true,
      online: true,
      location: "İzmir",
      bio: "Excel eğitmeni, finans ve raporlama.",
      specialties: ["Excel", "Veri Analizi", "Dashboard"]
    }
  ],
  description: "İleri Excel formülleri, pivot tablolar, makrolar ve veri analizi.",
  whyTake: "Veriyi anlamlandırarak karar süreçlerine katkı.",
  employmentAreas: "Veri analisti, raporlama uzmanı.",
  requirements: "Orta düzey Excel bilgisi."
},

// 8. CapCut Video Düzenleme - İzmir (Eğitmen: Işıl Eren)
{
  slug: "capcut-ile-video-montaj-ve-duzenleme",
  title: "CapCut ile Video Montaj ve Düzenleme",
  category: "Video Tasarım",
  breadcrumb: "Bilişim Eğitimi > Tasarım",
  image: "/images/yazilim.jpg",
  instructors: [
    {
      slug: "isil-eren-87",
      name: "Işıl Eren",
      since: 2019,
      rating: 4.5,
      privatePrice: 1050,
      groupPrice: 525,
      corporate: false,
      online: true,
      location: "İzmir",
      bio: "Video editör, sosyal medya içerik üreticisi.",
      specialties: ["CapCut", "Video Montaj", "Kurgu"]
    }
  ],
  description: "CapCut ile profesyonel videolar düzenleyin, efektler ekleyin.",
  whyTake: "Sosyal medya içerikleri için hızlı ve pratik çözüm.",
  employmentAreas: "Video editör, içerik üretici.",
  requirements: "Temel bilgisayar kullanımı."
},
{
  slug: "video-kurgu-ve-post-produksiyon-egitimi",
  title: "Video Kurgu ve Post-Prodüksiyon Eğitimi",
  category: "Video Tasarım",
  breadcrumb: "Bilişim Eğitimi > Tasarım",
  image: "/images/web-tasarim.jpg",
  instructors: [
    {
      slug: "isil-eren-87",
      name: "Işıl Eren",
      since: 2019,
      rating: 4.5,
      privatePrice: 1050,
      groupPrice: 525,
      corporate: false,
      online: true,
      location: "İzmir",
      bio: "Video editör, sosyal medya içerik üreticisi.",
      specialties: ["CapCut", "Video Montaj", "Kurgu"]
    }
  ],
  description: "Video kurgu teknikleri, renk düzeltme, ses düzenleme ve efektler.",
  whyTake: "Profesyonel video prodüksiyonu için gerekli tüm beceriler.",
  employmentAreas: "Video editör, post-prodüksiyon uzmanı.",
  requirements: "Temel bilgisayar bilgisi."
},

// 9. Robotik Kodlama Dersi - İzmir (Eğitmen: Koray Aydemir)
{
  slug: "robotik-kodlama-ve-yapay-zeka-uygulamalari-izmir",
  title: "Robotik Kodlama ve Yapay Zeka Uygulamaları",
  category: "Robotik",
  breadcrumb: "Bilişim Eğitimi > Robotik",
  image: "/images/yapay-zeka.jpg",
  instructors: [
    {
      slug: "koray-aydemir-88",
      name: "Koray Aydemir",
      since: 2016,
      rating: 4.9,
      privatePrice: 2250,
      groupPrice: 1125,
      corporate: true,
      online: true,
      location: "İzmir",
      bio: "Robotik ve yapay zeka eğitmeni, proje tabanlı öğrenme.",
      specialties: ["Robotik", "Yapay Zeka", "STEM"]
    }
  ],
  description: "Robotik sistemler ve yapay zeka algoritmalarıyla projeler geliştirin.",
  whyTake: "Geleceğin teknolojilerine el atın.",
  employmentAreas: "Robotik mühendisi, yapay zeka uzmanı.",
  requirements: "Temel programlama ve elektronik bilgisi."
},
{
  slug: "stem-ve-robotik-egitimi",
  title: "STEM ve Robotik Eğitimi",
  category: "Robotik",
  breadcrumb: "Bilişim Eğitimi > Robotik",
  image: "/images/it-Help-Desk.jpg",
  instructors: [
    {
      slug: "koray-aydemir-88",
      name: "Koray Aydemir",
      since: 2016,
      rating: 4.9,
      privatePrice: 2250,
      groupPrice: 1125,
      corporate: true,
      online: true,
      location: "İzmir",
      bio: "Robotik ve yapay zeka eğitmeni, proje tabanlı öğrenme.",
      specialties: ["Robotik", "Yapay Zeka", "STEM"]
    }
  ],
  description: "STEM (Fen, Teknoloji, Mühendislik, Matematik) ve robotik uygulamaları.",
  whyTake: "Disiplinler arası yaklaşımla yaratıcı projeler.",
  employmentAreas: "Eğitmen, proje geliştirici.",
  requirements: "İlgi ve merak yeterli."
},

// 10. Website, Mobil, ML, AI, Python, Java - Adana (Eğitmen: Leyla Gül)
{
  slug: "python-ile-sifirdan-ileri-seviye-programlama-adana",
  title: "Python ile Sıfırdan İleri Seviye Programlama",
  category: "Yazılım",
  breadcrumb: "Bilişim Eğitimi > Yazılım",
  image: "/images/python-egitimi.jpg",
  instructors: [
    {
      slug: "leyla-gul-89",
      name: "Leyla Gül",
      since: 2015,
      rating: 4.8,
      privatePrice: 1125,
      groupPrice: 560,
      corporate: true,
      online: true,
      location: "Adana",
      bio: "Full stack developer ve yapay zeka mühendisi.",
      specialties: ["Python", "Java", "Yapay Zeka", "Mobil", "Web"]
    }
  ],
  description: "Sıfırdan başlayarak Python programlamayı ileri seviyede öğrenin.",
  whyTake: "En popüler programlama dili ile kariyer fırsatlarınızı artırın.",
  employmentAreas: "Yazılım geliştirici, veri bilimci.",
  requirements: "Temel bilgisayar bilgisi."
},
{
  slug: "java-ile-nesne-tabanli-programlama-kursu-adana",
  title: "Java ile Nesne Tabanlı Programlama Kursu",
  category: "Yazılım",
  breadcrumb: "Bilişim Eğitimi > Yazılım",
  image: "/images/javadeveloper.jpg",
  instructors: [
    {
      slug: "leyla-gul-89",
      name: "Leyla Gül",
      since: 2015,
      rating: 4.8,
      privatePrice: 1125,
      groupPrice: 560,
      corporate: true,
      online: true,
      location: "Adana",
      bio: "Full stack developer ve yapay zeka mühendisi.",
      specialties: ["Python", "Java", "Yapay Zeka", "Mobil", "Web"]
    }
  ],
  description: "Java ile nesne tabanlı programlamayı öğrenin, kurumsal uygulamalar geliştirin.",
  whyTake: "Java, kurumsal dünyanın en çok tercih edilen dili.",
  employmentAreas: "Java developer, backend developer.",
  requirements: "Temel programlama bilgisi."
},
{
  slug: "yapay-zeka-ve-makine-ogrenmesi-egitimi-adana",
  title: "Yapay Zeka ve Makine Öğrenmesi Eğitimi",
  category: "Yapay Zeka",
  breadcrumb: "Bilişim Eğitimi > Yapay Zeka",
  image: "/images/yapay-zeka.jpg",
  instructors: [
    {
      slug: "leyla-gul-89",
      name: "Leyla Gül",
      since: 2015,
      rating: 4.8,
      privatePrice: 1125,
      groupPrice: 560,
      corporate: true,
      online: true,
      location: "Adana",
      bio: "Full stack developer ve yapay zeka mühendisi.",
      specialties: ["Python", "Java", "Yapay Zeka", "Mobil", "Web"]
    }
  ],
  description: "Yapay zeka, makine öğrenmesi ve derin öğrenme algoritmalarını öğrenin.",
  whyTake: "Geleceğin mesleklerinden yapay zeka alanında uzmanlaşın.",
  employmentAreas: "Yapay zeka mühendisi, veri bilimci.",
  requirements: "Temel Python ve matematik bilgisi."
},
{
  slug: "mobil-uygulama-gelistirme-android-ios",
  title: "Mobil Uygulama Geliştirme (Android/iOS)",
  category: "Mobil",
  breadcrumb: "Bilişim Eğitimi > Mobil",
  image: "/images/android-ios.jpg",
  instructors: [
    {
      slug: "leyla-gul-89",
      name: "Leyla Gül",
      since: 2015,
      rating: 4.8,
      privatePrice: 1125,
      groupPrice: 560,
      corporate: true,
      online: true,
      location: "Adana",
      bio: "Full stack developer ve yapay zeka mühendisi.",
      specialties: ["Python", "Java", "Yapay Zeka", "Mobil", "Web"]
    }
  ],
  description: "Android (Java/Kotlin) ve iOS (Swift) için mobil uygulama geliştirme.",
  whyTake: "Mobil pazarında yerinizi alın.",
  employmentAreas: "Mobil geliştirici, Android/iOS developer.",
  requirements: "Temel programlama bilgisi."
},
{
  slug: "full-stack-web-gelistirme-bootcamp-adana",
  title: "Full Stack Web Geliştirme Bootcamp",
  category: "Yazılım",
  breadcrumb: "Bilişim Eğitimi > Yazılım",
  image: "/images/full-stack-development.jpg",
  instructors: [
    {
      slug: "leyla-gul-89",
      name: "Leyla Gül",
      since: 2015,
      rating: 4.8,
      privatePrice: 1125,
      groupPrice: 560,
      corporate: true,
      online: true,
      location: "Adana",
      bio: "Full stack developer ve yapay zeka mühendisi.",
      specialties: ["Python", "Java", "Yapay Zeka", "Mobil", "Web"]
    }
  ],
  description: "Frontend ve backend teknolojilerini kapsayan kapsamlı full stack eğitimi.",
  whyTake: "Sektörün ihtiyaç duyduğu tüm becerileri tek bir programda edinin.",
  employmentAreas: "Full stack developer, web developer.",
  requirements: "Temel programlama bilgisi."
},

// ===== ERZURUM =====
{
  slug: "python-ile-sifirdan-ileri-seviye-programlama-erzurum",
  title: "Python ile Sıfırdan İleri Seviye Programlama",
  category: "Yazılım",
  breadcrumb: "Bilişim Eğitimi > Yazılım",
  image: "/images/python-egitimi.jpg",
  instructors: [
    {
      slug: "ahmet-karahan-90",
      name: "Ahmet Karahan",
      since: 2016,
      rating: 4.7,
      privatePrice: 1125,
      groupPrice: 560,
      corporate: false,
      online: true,
      location: "Erzurum",
      bio: "Uygulamalı kodlama eğitmeni, 7 yıllık deneyim.",
      specialties: ["Python", "C#", "Web Geliştirme"]
    }
  ],
  description: "Sıfırdan başlayarak Python programlamayı ileri seviyede öğrenin.",
  whyTake: "En popüler programlama dili ile kariyer fırsatlarınızı artırın.",
  employmentAreas: "Yazılım geliştirici, veri analisti.",
  requirements: "Temel bilgisayar bilgisi."
},
{
  slug: "csharp-ile-nesne-tabanli-programlama-erzurum",
  title: "C# ile Nesne Tabanlı Programlama",
  category: "Yazılım",
  breadcrumb: "Bilişim Eğitimi > Yazılım",
  image: "/images/csharp-egitimi.jpg",
  instructors: [
    {
      slug: "ahmet-karahan-90",
      name: "Ahmet Karahan",
      since: 2016,
      rating: 4.7,
      privatePrice: 1125,
      groupPrice: 560,
      corporate: false,
      online: true,
      location: "Erzurum",
      bio: "Uygulamalı kodlama eğitmeni, 7 yıllık deneyim.",
      specialties: ["Python", "C#", "Web Geliştirme"]
    }
  ],
  description: "C# ile nesne tabanlı programlama ve .NET platformu.",
  whyTake: "Windows uygulamaları ve oyun geliştirme için ideal.",
  employmentAreas: ".NET developer, yazılım geliştirici.",
  requirements: "Temel programlama bilgisi."
},
{
  slug: "web-gelistirme-html-css-javascript-erzurum",
  title: "Web Geliştirme (HTML, CSS, JavaScript) Eğitimi",
  category: "Web Tasarım",
  breadcrumb: "Bilişim Eğitimi > Web Tasarım",
  image: "/images/web-tasarim.jpg",
  instructors: [
    {
      slug: "ahmet-karahan-90",
      name: "Ahmet Karahan",
      since: 2016,
      rating: 4.7,
      privatePrice: 1125,
      groupPrice: 560,
      corporate: false,
      online: true,
      location: "Erzurum",
      bio: "Uygulamalı kodlama eğitmeni, 7 yıllık deneyim.",
      specialties: ["Python", "C#", "Web Geliştirme"]
    }
  ],
  description: "HTML, CSS ve JavaScript ile modern web siteleri oluşturun.",
  whyTake: "Web geliştirmenin temellerini sağlam öğrenin.",
  employmentAreas: "Frontend developer, web tasarımcı.",
  requirements: "Temel bilgisayar bilgisi."
},

// ===== ANTALYA =====
{
  slug: "algoritma-ve-veri-yapilari-egitimi-antalya",
  title: "Algoritma ve Veri Yapıları Eğitimi",
  category: "Yazılım",
  breadcrumb: "Bilişim Eğitimi > Yazılım",
  image: "/images/web-tasarim.jpg",
  instructors: [
    {
      slug: "zeynep-arslan-91",
      name: "Zeynep Arslan",
      since: 2014,
      rating: 4.8,
      privatePrice: 1500,
      groupPrice: 750,
      corporate: true,
      online: true,
      location: "Antalya",
      bio: "Bilgisayar mühendisi, algoritma uzmanı.",
      specialties: ["Algoritma", "Java", "Python"]
    }
  ],
  description: "Karmaşık algoritmalar ve veri yapılarını derinlemesine öğrenin.",
  whyTake: "Teknik mülakatlarda ve yazılım geliştirmede fark yaratın.",
  employmentAreas: "Yazılım mühendisi, algoritma uzmanı.",
  requirements: "Temel programlama bilgisi."
},
{
  slug: "java-ile-nesne-tabanli-programlama-antalya",
  title: "Java ile Nesne Tabanlı Programlama Kursu",
  category: "Yazılım",
  breadcrumb: "Bilişim Eğitimi > Yazılım",
  image: "/images/javadeveloper.jpg",
  instructors: [
    {
      slug: "zeynep-arslan-91",
      name: "Zeynep Arslan",
      since: 2014,
      rating: 4.8,
      privatePrice: 1500,
      groupPrice: 750,
      corporate: true,
      online: true,
      location: "Antalya",
      bio: "Bilgisayar mühendisi, algoritma uzmanı.",
      specialties: ["Algoritma", "Java", "Python"]
    }
  ],
  description: "Java ile nesne tabanlı programlamayı öğrenin.",
  whyTake: "Kurumsal yazılım dünyasının temel dili.",
  employmentAreas: "Java developer, backend developer.",
  requirements: "Temel programlama bilgisi."
},
{
  slug: "python-ile-veri-bilimi-ve-gorsellestirme-antalya",
  title: "Python ile Veri Bilimi ve Görselleştirme",
  category: "Veri Bilimi",
  breadcrumb: "Bilişim Eğitimi > Veri Bilimi",
  image: "/images/python-egitimi-2.jpg",
  instructors: [
    {
      slug: "zeynep-arslan-91",
      name: "Zeynep Arslan",
      since: 2014,
      rating: 4.8,
      privatePrice: 1500,
      groupPrice: 750,
      corporate: true,
      online: true,
      location: "Antalya",
      bio: "Bilgisayar mühendisi, algoritma uzmanı.",
      specialties: ["Algoritma", "Java", "Python"]
    }
  ],
  description: "Python ile veri analizi, görselleştirme ve makine öğrenmesine giriş.",
  whyTake: "Veri bilimi alanında kariyer için sağlam temel.",
  employmentAreas: "Veri bilimci, veri analisti.",
  requirements: "Temel Python bilgisi."
},

// ===== ESKİŞEHİR =====
{
  slug: "scratch-ile-cocuklar-icin-kodlama-egitimi-eskisehir",
  title: "Scratch ile Çocuklar İçin Kodlama Eğitimi",
  category: "Çocuk Eğitimi",
  breadcrumb: "Bilişim Eğitimi > Çocuk",
  image: "/images/scratch.jpg",
  instructors: [
    {
      slug: "mehmet-can-92",
      name: "Mehmet Can",
      since: 2018,
      rating: 4.6,
      privatePrice: 750,
      groupPrice: 375,
      corporate: false,
      online: true,
      location: "Eskişehir",
      bio: "Çocuklara kodlama eğitmeni, oyun tasarımı.",
      specialties: ["Scratch", "Python", "C#", "Flowgorithm"]
    }
  ],
  description: "Scratch ile çocuklar eğlenerek kodlama öğrensin.",
  whyTake: "7-17 yaş arasına uygun, yaratıcılığı geliştirir.",
  employmentAreas: "Eğitmen, çocuk gelişim uzmanı.",
  requirements: "7-17 yaş arası çocuklar."
},
{
  slug: "python-ile-gencler-icin-programlama-eskisehir",
  title: "Python ile Gençler İçin Programlama",
  category: "Çocuk Eğitimi",
  breadcrumb: "Bilişim Eğitimi > Çocuk",
  image: "/images/python-egitimi-2.jpg",
  instructors: [
    {
      slug: "mehmet-can-92",
      name: "Mehmet Can",
      since: 2018,
      rating: 4.6,
      privatePrice: 750,
      groupPrice: 375,
      corporate: false,
      online: true,
      location: "Eskişehir",
      bio: "Çocuklara kodlama eğitmeni, oyun tasarımı.",
      specialties: ["Scratch", "Python", "C#", "Flowgorithm"]
    }
  ],
  description: "Gençlere özel Python ile programlamaya giriş.",
  whyTake: "Geleceğin yazılımcıları için sağlam temel.",
  employmentAreas: "Eğitmen, gençlik koçu.",
  requirements: "10-17 yaş arası."
},
{
  slug: "csharp-ile-gorsel-programlama-eskisehir",
  title: "C# ile Görsel Programlama",
  category: "Yazılım",
  breadcrumb: "Bilişim Eğitimi > Yazılım",
  image: "/images/yazilim.jpg",
  instructors: [
    {
      slug: "mehmet-can-92",
      name: "Mehmet Can",
      since: 2018,
      rating: 4.6,
      privatePrice: 750,
      groupPrice: 375,
      corporate: false,
      online: true,
      location: "Eskişehir",
      bio: "Çocuklara kodlama eğitmeni, oyun tasarımı.",
      specialties: ["Scratch", "Python", "C#", "Flowgorithm"]
    }
  ],
  description: "C# ile Windows Forms ve görsel arayüz programlama.",
  whyTake: "Masaüstü uygulamalar geliştirin.",
  employmentAreas: "Masaüstü geliştirici.",
  requirements: "Temel C# bilgisi."
},
{
  slug: "flowgorithm-ile-algoritma-mantigi-eskisehir",
  title: "Flowgorithm ile Algoritma Mantığı",
  category: "Yazılım",
  breadcrumb: "Bilişim Eğitimi > Yazılım",
  image: "/images/web-tasarim.jpg",
  instructors: [
    {
      slug: "mehmet-can-92",
      name: "Mehmet Can",
      since: 2018,
      rating: 4.6,
      privatePrice: 750,
      groupPrice: 375,
      corporate: false,
      online: true,
      location: "Eskişehir",
      bio: "Çocuklara kodlama eğitmeni, oyun tasarımı.",
      specialties: ["Scratch", "Python", "C#", "Flowgorithm"]
    }
  ],
  description: "Flowgorithm ile akış şemaları oluşturarak algoritma mantığını kavrayın.",
  whyTake: "Programlamaya yeni başlayanlar için ideal.",
  employmentAreas: "Öğrenci, eğitmen.",
  requirements: "Temel bilgisayar bilgisi."
},

// ===== KOCAELİ ===== (Burada birden fazla eğitmen var, her ilan ayrı eğitmen)
// 1. R, Veritabanı, Full Stack
{
  slug: "r-programlama-ile-veri-analizi-ve-istatistik-kocaeli",
  title: "R Programlama ile Veri Analizi ve İstatistik",
  category: "Veri Bilimi",
  breadcrumb: "Bilişim Eğitimi > Veri Bilimi",
  image: "/images/yazilim.jpg",
  instructors: [
    {
      slug: "elif-turan-93",
      name: "Elif Turan",
      since: 2015,
      rating: 4.7,
      privatePrice: 1125,
      groupPrice: 560,
      corporate: true,
      online: true,
      location: "Kocaeli",
      bio: "Veri bilimi ve R uzmanı, akademik danışman.",
      specialties: ["R", "SQL", "Full Stack"]
    }
  ],
  description: "R programlama ile istatistiksel analiz, veri görselleştirme.",
  whyTake: "Akademik araştırmalar ve veri analizi için güçlü araç.",
  employmentAreas: "Veri analisti, istatistikçi.",
  requirements: "Temel istatistik bilgisi."
},
{
  slug: "veritabani-yonetimi-ve-sql-egitimi-kocaeli",
  title: "Veritabanı Yönetimi ve SQL Eğitimi",
  category: "Veritabanı",
  breadcrumb: "Bilişim Eğitimi > Veritabanı",
  image: "/images/sql-egitimi.jpg",
  instructors: [
    {
      slug: "elif-turan-93",
      name: "Elif Turan",
      since: 2015,
      rating: 4.7,
      privatePrice: 1125,
      groupPrice: 560,
      corporate: true,
      online: true,
      location: "Kocaeli",
      bio: "Veri bilimi ve R uzmanı, akademik danışman.",
      specialties: ["R", "SQL", "Full Stack"]
    }
  ],
  description: "SQL ile veritabanı yönetimi, sorgulama ve optimizasyon.",
  whyTake: "Veritabanı bilgisi her yazılımcının ihtiyacı.",
  employmentAreas: "Veritabanı yöneticisi, backend developer.",
  requirements: "Temel bilgisayar bilgisi."
},
{
  slug: "full-stack-web-gelistirme-egitimi-kocaeli",
  title: "Full Stack Web Geliştirme Eğitimi",
  category: "Yazılım",
  breadcrumb: "Bilişim Eğitimi > Yazılım",
  image: "/images/full-stack-development.jpg",
  instructors: [
    {
      slug: "elif-turan-93",
      name: "Elif Turan",
      since: 2015,
      rating: 4.7,
      privatePrice: 1125,
      groupPrice: 560,
      corporate: true,
      online: true,
      location: "Kocaeli",
      bio: "Veri bilimi ve R uzmanı, akademik danışman.",
      specialties: ["R", "SQL", "Full Stack"]
    }
  ],
  description: "Frontend ve backend teknolojileriyle full stack uygulamalar geliştirin.",
  whyTake: "Her yönüyle web geliştirme.",
  employmentAreas: "Full stack developer.",
  requirements: "Temel programlama bilgisi."
},

// 2. SPSS, Jamovi, R (Kocaeli)
{
  slug: "spss-ile-istatistiksel-veri-analizi-kocaeli",
  title: "SPSS ile İstatistiksel Veri Analizi",
  category: "Veri Bilimi",
  breadcrumb: "Bilişim Eğitimi > Veri Bilimi",
  image: "/images/yazilim.jpg",
  instructors: [
    {
      slug: "cansu-yildiz-94",
      name: "Cansu Yıldız",
      since: 2016,
      rating: 4.6,
      privatePrice: 1200,
      groupPrice: 600,
      corporate: true,
      online: true,
      location: "Kocaeli",
      bio: "İstatistik uzmanı, akademik tez danışmanı.",
      specialties: ["SPSS", "Jamovi", "R"]
    }
  ],
  description: "SPSS ile veri analizi, hipotez testleri ve raporlama.",
  whyTake: "Sosyal bilimler ve sağlık alanında yaygın kullanım.",
  employmentAreas: "Veri analisti, akademisyen.",
  requirements: "Temel istatistik bilgisi."
},
{
  slug: "jamovi-ile-modern-veri-analizi",
  title: "Jamovi ile Modern Veri Analizi",
  category: "Veri Bilimi",
  breadcrumb: "Bilişim Eğitimi > Veri Bilimi",
  image: "/images/yazilim.jpg",
  instructors: [
    {
      slug: "cansu-yildiz-94",
      name: "Cansu Yıldız",
      since: 2016,
      rating: 4.6,
      privatePrice: 1200,
      groupPrice: 600,
      corporate: true,
      online: true,
      location: "Kocaeli",
      bio: "İstatistik uzmanı, akademik tez danışmanı.",
      specialties: ["SPSS", "Jamovi", "R"]
    }
  ],
  description: "Jamovi ile açık kaynaklı, modern istatistiksel analiz.",
  whyTake: "Kullanıcı dostu ve ücretsiz.",
  employmentAreas: "Veri analisti, araştırmacı.",
  requirements: "Temel istatistik bilgisi."
},
{
  slug: "r-ile-ileri-istatistik-ve-grafikleme",
  title: "R ile İleri İstatistik ve Grafikleme",
  category: "Veri Bilimi",
  breadcrumb: "Bilişim Eğitimi > Veri Bilimi",
  image: "/images/web-tasarim.jpg",
  instructors: [
    {
      slug: "cansu-yildiz-94",
      name: "Cansu Yıldız",
      since: 2016,
      rating: 4.6,
      privatePrice: 1200,
      groupPrice: 600,
      corporate: true,
      online: true,
      location: "Kocaeli",
      bio: "İstatistik uzmanı, akademik tez danışmanı.",
      specialties: ["SPSS", "Jamovi", "R"]
    }
  ],
  description: "R ile ileri istatistiksel analizler ve grafikler.",
  whyTake: "Esnek ve güçlü bir araç.",
  employmentAreas: "Veri bilimci, istatistikçi.",
  requirements: "R temel bilgisi."
},

// 3. Tübitak Bilim Olimpiyatları (Kocaeli)
{
  slug: "tubitak-bilim-olimpiyatlari-algoritma-hazirlik",
  title: "Tübitak Bilim Olimpiyatları Algoritma Hazırlık",
  category: "Akademik",
  breadcrumb: "Bilişim Eğitimi > Akademik",
  image: "/images/tubitak.jpg",
  instructors: [
    {
      slug: "kaan-ozdemir-95",
      name: "Kaan Özdemir",
      since: 2013,
      rating: 4.9,
      privatePrice: 2250,
      groupPrice: 1125,
      corporate: false,
      online: true,
      location: "Kocaeli",
      bio: "Ulusal olimpiyat derecesi sahibi, eğitmen.",
      specialties: ["Algoritma", "C++", "Python"]
    }
  ],
  description: "Tübitak Bilim Olimpiyatları için algoritma ve programlama hazırlığı.",
  whyTake: "Olimpiyatlarda derece yapmak isteyenler için.",
  employmentAreas: "Öğrenci, eğitmen.",
  requirements: "İleri seviye algoritma bilgisi."
},
{
  slug: "ulusal-bilgisayar-olimpiyatlari-egitimi",
  title: "Ulusal Bilgisayar Olimpiyatları Eğitimi",
  category: "Akademik",
  breadcrumb: "Bilişim Eğitimi > Akademik",
  image: "/images/yazilim.jpg",
  instructors: [
    {
      slug: "kaan-ozdemir-95",
      name: "Kaan Özdemir",
      since: 2013,
      rating: 4.9,
      privatePrice: 2250,
      groupPrice: 1125,
      corporate: false,
      online: true,
      location: "Kocaeli",
      bio: "Ulusal olimpiyat derecesi sahibi, eğitmen.",
      specialties: ["Algoritma", "C++", "Python"]
    }
  ],
  description: "Ulusal bilgisayar olimpiyatlarına yönelik kapsamlı eğitim.",
  whyTake: "Yarışmalara hazırlık.",
  employmentAreas: "Öğrenci.",
  requirements: "Algoritma temelleri."
},

// 4. Temel Bilgisayar (Kocaeli)
{
  slug: "temel-bilgisayar-kullanimi-ve-ofis-programlari",
  title: "Temel Bilgisayar Kullanımı ve Ofis Programları",
  category: "Ofis",
  breadcrumb: "Bilişim Eğitimi > Ofis",
  image: "/images/is-analistligi.jpg",
  instructors: [
    {
      slug: "selin-aksoy-96",
      name: "Selin Aksoy",
      since: 2017,
      rating: 4.5,
      privatePrice: 900,
      groupPrice: 450,
      corporate: true,
      online: true,
      location: "Kocaeli",
      bio: "Bilgisayar eğitmeni, temel düzey dersler.",
      specialties: ["Temel Bilgisayar", "Ofis Programları"]
    }
  ],
  description: "Bilgisayar kullanımı, internet ve ofis programları temel eğitimi.",
  whyTake: "Bilgisayar okuryazarlığı için.",
  employmentAreas: "Ofis çalışanı, yeni başlayanlar.",
  requirements: "Bilgisayar kullanma isteği."
},
{
  slug: "bilgisayar-okuryazarligi-ve-internet-kullanimi",
  title: "Bilgisayar Okuryazarlığı ve İnternet Kullanımı",
  category: "Ofis",
  breadcrumb: "Bilişim Eğitimi > Ofis",
  image: "/images/bilisim.jpg",
  instructors: [
    {
      slug: "selin-aksoy-96",
      name: "Selin Aksoy",
      since: 2017,
      rating: 4.5,
      privatePrice: 900,
      groupPrice: 450,
      corporate: true,
      online: true,
      location: "Kocaeli",
      bio: "Bilgisayar eğitmeni, temel düzey dersler.",
      specialties: ["Temel Bilgisayar", "Ofis Programları"]
    }
  ],
  description: "Bilgisayar ve internet temelleri, e-posta, dosya yönetimi.",
  whyTake: "Dijital dünyaya adım.",
  employmentAreas: "Herkes.",
  requirements: "Okuma-yazma."
},

// 5. Makeblock (Kocaeli)
{
  slug: "makeblock-ile-robotik-kodlama",
  title: "Makeblock ile Robotik Kodlama",
  category: "Robotik",
  breadcrumb: "Bilişim Eğitimi > Robotik",
  image: "/images/yazilim.jpg",
  instructors: [
    {
      slug: "berk-aydin-97",
      name: "Berk Aydın",
      since: 2018,
      rating: 4.6,
      privatePrice: 1050,
      groupPrice: 525,
      corporate: false,
      online: true,
      location: "Kocaeli",
      bio: "Robotik eğitmeni, Makeblock ve Arduino.",
      specialties: ["Makeblock", "Python", "Robotik"]
    }
  ],
  description: "Makeblock platformu ile robotik kodlama ve projeler.",
  whyTake: "Eğlenceli ve öğretici robot setleri.",
  employmentAreas: "Eğitmen, hobi.",
  requirements: "Temel bilgisayar bilgisi."
},
{
  slug: "python-ile-robotik-uygulamalar",
  title: "Python ile Robotik Uygulamalar",
  category: "Robotik",
  breadcrumb: "Bilişim Eğitimi > Robotik",
  image: "/images/python-egitimi-2.jpg",
  instructors: [
    {
      slug: "berk-aydin-97",
      name: "Berk Aydın",
      since: 2018,
      rating: 4.6,
      privatePrice: 1050,
      groupPrice: 525,
      corporate: false,
      online: true,
      location: "Kocaeli",
      bio: "Robotik eğitmeni, Makeblock ve Arduino.",
      specialties: ["Makeblock", "Python", "Robotik"]
    }
  ],
  description: "Python ile robotik projeler ve sensör uygulamaları.",
  whyTake: "Yazılım ve donanım birlikte.",
  employmentAreas: "Robotik geliştirici.",
  requirements: "Temel Python bilgisi."
},

// 6. C/C++/Python (Kocaeli)
{
  slug: "c-ve-cpp-ile-sistem-programlama-kocaeli",
  title: "C ve C++ ile Sistem Programlama",
  category: "Yazılım",
  breadcrumb: "Bilişim Eğitimi > Yazılım",
  image: "/images/yazilim.jpg",
  instructors: [
    {
      slug: "alper-yilmaz-98",
      name: "Alper Yılmaz",
      since: 2015,
      rating: 4.7,
      privatePrice: 900,
      groupPrice: 450,
      corporate: false,
      online: true,
      location: "Kocaeli",
      bio: "C/C++ ve Python geliştirici.",
      specialties: ["C", "C++", "Python"]
    }
  ],
  description: "C ve C++ ile sistem programlama, bellek yönetimi.",
  whyTake: "Performanslı kod yazımı.",
  employmentAreas: "Sistem programcısı.",
  requirements: "Temel programlama."
},
{
  slug: "python-ile-sifirdan-ileri-seviye-programlama-kocaeli",
  title: "Python ile Sıfırdan İleri Seviye Programlama",
  category: "Yazılım",
  breadcrumb: "Bilişim Eğitimi > Yazılım",
  image: "/images/python-egitimi.jpg",
  instructors: [
    {
      slug: "alper-yilmaz-98",
      name: "Alper Yılmaz",
      since: 2015,
      rating: 4.7,
      privatePrice: 900,
      groupPrice: 450,
      corporate: false,
      online: true,
      location: "Kocaeli",
      bio: "C/C++ ve Python geliştirici.",
      specialties: ["C", "C++", "Python"]
    }
  ],
  description: "Sıfırdan Python öğrenin.",
  whyTake: "Popüler dil.",
  employmentAreas: "Yazılımcı.",
  requirements: "Temel bilgisayar."
},

// 7. Sıfırdan Yayınlamaya Mobil Uygulama (Kocaeli)
{
  slug: "sifirdan-yayinlamaya-mobil-uygulama-gelistirme",
  title: "Sıfırdan Yayınlamaya Mobil Uygulama Geliştirme",
  category: "Mobil",
  breadcrumb: "Bilişim Eğitimi > Mobil",
  image: "/images/android-ios.jpg",
  instructors: [
    {
      slug: "elif-kaya-99",
      name: "Elif Kaya",
      since: 2014,
      rating: 4.9,
      privatePrice: 43500,
      groupPrice: 21750,
      corporate: true,
      online: true,
      location: "Kocaeli",
      bio: "Mobil uygulama geliştirici, yayınlanmış uygulamalar.",
      specialties: ["iOS", "Android", "Flutter"]
    }
  ],
  description: "Sıfırdan başlayarak mobil uygulama geliştirme ve mağazalara yükleme.",
  whyTake: "Kendi uygulamanızı yapın.",
  employmentAreas: "Mobil geliştirici.",
  requirements: "Temel programlama."
},
{
  slug: "ios-ve-android-mobil-uygulama-gelistirme-bootcamp",
  title: "iOS ve Android Mobil Uygulama Geliştirme Bootcamp",
  category: "Mobil",
  breadcrumb: "Bilişim Eğitimi > Mobil",
  image: "/images/android-ios.jpg",
  instructors: [
    {
      slug: "elif-kaya-99",
      name: "Elif Kaya",
      since: 2014,
      rating: 4.9,
      privatePrice: 43500,
      groupPrice: 21750,
      corporate: true,
      online: true,
      location: "Kocaeli",
      bio: "Mobil uygulama geliştirici, yayınlanmış uygulamalar.",
      specialties: ["iOS", "Android", "Flutter"]
    }
  ],
  description: "Hem iOS hem Android için uygulama geliştirme.",
  whyTake: "Cross-platform geliştirme.",
  employmentAreas: "Mobil geliştirici.",
  requirements: "Temel programlama."
},

// 8. Arduino ve Robotik (Kayseri)
{
  slug: "arduino-ile-robotik-kodlama-egitimi",
  title: "Arduino ile Robotik Kodlama Eğitimi",
  category: "Robotik",
  breadcrumb: "Bilişim Eğitimi > Robotik",
  image: "/images/algoritma-ileri.jpg",
  instructors: [
    {
      slug: "kaan-yildiz-100",
      name: "Kaan Yıldız",
      since: 2016,
      rating: 4.7,
      privatePrice: 1125,
      groupPrice: 560,
      corporate: false,
      online: true,
      location: "Kayseri",
      bio: "Arduino ve robotik eğitmeni.",
      specialties: ["Arduino", "Robotik", "C"]
    }
  ],
  description: "Arduino ile robotik projeler ve sensörler.",
  whyTake: "Donanım-yazılım birlikte.",
  employmentAreas: "Robotik geliştirici.",
  requirements: "Temel elektronik."
},
{
  slug: "ensorler-ve-mikrodenetleyici-programlama",
  title: "Sensörler ve Mikrodenetleyici Programlama",
  category: "Gömülü Sistemler",
  breadcrumb: "Bilişim Eğitimi > Gömülü",
  image: "/images/yazilim.jpg",
  instructors: [
    {
      slug: "kaan-yildiz-100",
      name: "Kaan Yıldız",
      since: 2016,
      rating: 4.7,
      privatePrice: 1125,
      groupPrice: 560,
      corporate: false,
      online: true,
      location: "Kayseri",
      bio: "Arduino ve robotik eğitmeni.",
      specialties: ["Arduino", "Robotik", "C"]
    }
  ],
  description: "Sensörler ve mikrodenetleyici programlama (Arduino tabanlı).",
  whyTake: "Gömülü sistemlerin temeli.",
  employmentAreas: "Gömülü yazılımcı.",
  requirements: "Temel elektronik."
},

// 9. Yapay Zeka ve Robotik (Kayseri)
{
  slug: "yapay-zeka-ve-robotik-kodlama-egitimi",
  title: "Yapay Zeka ve Robotik Kodlama Eğitimi",
  category: "Robotik",
  breadcrumb: "Bilişim Eğitimi > Robotik",
  image: "/images/yapay-zeka.jpg",
  instructors: [
    {
      slug: "derya-arslan-101",
      name: "Derya Arslan",
      since: 2017,
      rating: 4.6,
      privatePrice: 750,
      groupPrice: 375,
      corporate: false,
      online: true,
      location: "Kayseri",
      bio: "Robotik ve yapay zeka eğitmeni.",
      specialties: ["Yapay Zeka", "Robotik", "Python"]
    }
  ],
  description: "Yapay zeka ve robotik uygulamaları.",
  whyTake: "Geleceğin teknolojisi.",
  employmentAreas: "Robotik mühendisi.",
  requirements: "Temel programlama."
},

// ===== BALIKESİR =====
{
  slug: "ansys-ile-sonlu-elemanlar-analizi",
  title: "ANSYS ile Sonlu Elemanlar Analizi",
  category: "Mühendislik",
  breadcrumb: "Bilişim Eğitimi > Mühendislik",
  image: "/images/yazilim.jpg",
  instructors: [
    {
      slug: "canan-demir-102",
      name: "Canan Demir",
      since: 2014,
      rating: 4.8,
      privatePrice: 1500,
      groupPrice: 750,
      corporate: true,
      online: true,
      location: "Balıkesir",
      bio: "Makine mühendisi, sonlu elemanlar analiz uzmanı.",
      specialties: ["ANSYS", "CFD", "LS-DYNA"]
    }
  ],
  description: "ANSYS ile yapısal, termal ve akışkan analizleri.",
  whyTake: "Mühendislik simülasyonları.",
  employmentAreas: "Tasarım mühendisi.",
  requirements: "Temel mühendislik bilgisi."
},
{
  slug: "cfd-hesaplamali-akiskanlar-dinamigi-egitimi",
  title: "CFD (Hesaplamalı Akışkanlar Dinamiği) Eğitimi",
  category: "Mühendislik",
  breadcrumb: "Bilişim Eğitimi > Mühendislik",
  image: "/images/algoritma-ileri.jpg",
  instructors: [
    {
      slug: "canan-demir-102",
      name: "Canan Demir",
      since: 2014,
      rating: 4.8,
      privatePrice: 1500,
      groupPrice: 750,
      corporate: true,
      online: true,
      location: "Balıkesir",
      bio: "Makine mühendisi, sonlu elemanlar analiz uzmanı.",
      specialties: ["ANSYS", "CFD", "LS-DYNA"]
    }
  ],
  description: "Hesaplamalı akışkanlar dinamiği simülasyonları.",
  whyTake: "Akış analizleri için.",
  employmentAreas: "CFD mühendisi.",
  requirements: "Temel akışkanlar mekaniği."
},
{
  slug: "ls-dyna-ile-dinamik-analiz",
  title: "LS-DYNA ile Dinamik Analiz",
  category: "Mühendislik",
  breadcrumb: "Bilişim Eğitimi > Mühendislik",
  image: "/images/yazilim.jpg",
  instructors: [
    {
      slug: "canan-demir-102",
      name: "Canan Demir",
      since: 2014,
      rating: 4.8,
      privatePrice: 1500,
      groupPrice: 750,
      corporate: true,
      online: true,
      location: "Balıkesir",
      bio: "Makine mühendisi, sonlu elemanlar analiz uzmanı.",
      specialties: ["ANSYS", "CFD", "LS-DYNA"]
    }
  ],
  description: "LS-DYNA ile dinamik ve darbe analizleri.",
  whyTake: "Yüksek hızlı dinamik olaylar.",
  employmentAreas: "Analiz mühendisi.",
  requirements: "Temel sonlu elemanlar bilgisi."
},

// ===== ESKİŞEHİR (devam) =====
// Solidworks, AutoCAD, ANSYS, XFLR5, OpenROCKET
{
  slug: "solidworks-ile-katı-modelleme-ve-tasarim-eskisehir",
  title: "Solidworks ile Katı Modelleme ve Tasarım",
  category: "3D Tasarım",
  breadcrumb: "Bilişim Eğitimi > 3D Tasarım",
  image: "/images/solidworks.jpg",
  instructors: [
    {
      slug: "eren-kaya-103",
      name: "Eren Kaya",
      since: 2015,
      rating: 4.7,
      privatePrice: 750,
      groupPrice: 375,
      corporate: true,
      online: true,
      location: "Eskişehir",
      bio: "Makine mühendisi, CAD/CAE uzmanı.",
      specialties: ["Solidworks", "AutoCAD", "ANSYS"]
    }
  ],
  description: "Solidworks ile katı modelleme, montaj ve teknik resim.",
  whyTake: "Endüstriyel tasarımın temeli.",
  employmentAreas: "Tasarım mühendisi.",
  requirements: "Temel teknik resim."
},
{
  slug: "autocad-ile-teknik-cizim-ve-projelendirme-eskisehir",
  title: "AutoCAD ile Teknik Çizim ve Projelendirme",
  category: "Mühendislik",
  breadcrumb: "Bilişim Eğitimi > Mühendislik",
  image: "/images/autocad.jpg",
  instructors: [
    {
      slug: "eren-kaya-103",
      name: "Eren Kaya",
      since: 2015,
      rating: 4.7,
      privatePrice: 750,
      groupPrice: 375,
      corporate: true,
      online: true,
      location: "Eskişehir",
      bio: "Makine mühendisi, CAD/CAE uzmanı.",
      specialties: ["Solidworks", "AutoCAD", "ANSYS"]
    }
  ],
  description: "AutoCAD ile 2D/3D teknik çizimler.",
  whyTake: "Mühendislik ve mimarlıkta standart.",
  employmentAreas: "Teknik ressam, mühendis.",
  requirements: "Temel çizim bilgisi."
},
{
  slug: "xflr5-ile-aerodinamik-analiz",
  title: "XFLR5 ile Aerodinamik Analiz",
  category: "Mühendislik",
  breadcrumb: "Bilişim Eğitimi > Mühendislik",
  image: "/images/yazilim.jpg",
  instructors: [
    {
      slug: "eren-kaya-103",
      name: "Eren Kaya",
      since: 2015,
      rating: 4.7,
      privatePrice: 750,
      groupPrice: 375,
      corporate: true,
      online: true,
      location: "Eskişehir",
      bio: "Makine mühendisi, CAD/CAE uzmanı.",
      specialties: ["Solidworks", "AutoCAD", "ANSYS"]
    }
  ],
  description: "XFLR5 ile kanat ve uçak aerodinamiği analizi.",
  whyTake: "Havacılık meraklıları için.",
  employmentAreas: "Aerodinamik uzmanı.",
  requirements: "Temel akışkanlar mekaniği."
},
{
  slug: "openrocket-ile-roket-tasarimi",
  title: "OpenROCKET ile Roket Tasarımı",
  category: "Mühendislik",
  breadcrumb: "Bilişim Eğitimi > Mühendislik",
  image: "/images/algoritma-ileri.jpg",
  instructors: [
    {
      slug: "eren-kaya-103",
      name: "Eren Kaya",
      since: 2015,
      rating: 4.7,
      privatePrice: 750,
      groupPrice: 375,
      corporate: true,
      online: true,
      location: "Eskişehir",
      bio: "Makine mühendisi, CAD/CAE uzmanı.",
      specialties: ["Solidworks", "AutoCAD", "ANSYS"]
    }
  ],
  description: "OpenROCKET ile model roket tasarımı ve simülasyonu.",
  whyTake: "Roketçilik tutkunları.",
  employmentAreas: "Hobi, eğitim.",
  requirements: "Temel fizik."
},

// ===== ESKİŞEHİR (Yapay zeka eğitimi) =====
{
  slug: "yapay-zeka-ve-derin-ogrenme-uzmanligi",
  title: "Yapay Zeka ve Derin Öğrenme Uzmanlığı",
  category: "Yapay Zeka",
  breadcrumb: "Bilişim Eğitimi > Yapay Zeka",
  image: "/images/yapay-zeka.jpg",
  instructors: [
    {
      slug: "elif-yilmaz-104",
      name: "Elif Yılmaz",
      since: 2013,
      rating: 5.0,
      privatePrice: 12000,
      groupPrice: 6000,
      corporate: true,
      online: true,
      location: "Eskişehir",
      bio: "Yapay zeka mühendisi, doktora derecesi.",
      specialties: ["Derin Öğrenme", "Makine Öğrenmesi", "Python"]
    }
  ],
  description: "Yapay zeka, derin öğrenme ve uygulamaları.",
  whyTake: "En güncel alan.",
  employmentAreas: "Yapay zeka mühendisi.",
  requirements: "Python ve temel matematik."
},
{
  slug: "makine-ogrenmesi-ve-uygulamali-projeler",
  title: "Makine Öğrenmesi ve Uygulamalı Projeler",
  category: "Yapay Zeka",
  breadcrumb: "Bilişim Eğitimi > Yapay Zeka",
  image: "/images/yazilim.jpg",
  instructors: [
    {
      slug: "elif-yilmaz-104",
      name: "Elif Yılmaz",
      since: 2013,
      rating: 5.0,
      privatePrice: 12000,
      groupPrice: 6000,
      corporate: true,
      online: true,
      location: "Eskişehir",
      bio: "Yapay zeka mühendisi, doktora derecesi.",
      specialties: ["Derin Öğrenme", "Makine Öğrenmesi", "Python"]
    }
  ],
  description: "Makine öğrenmesi algoritmaları ve gerçek projeler.",
  whyTake: "Pratik deneyim.",
  employmentAreas: "Makine öğrenmesi mühendisi.",
  requirements: "Python ve istatistik."
},

// ===== DÜZCE =====
{
  slug: "ilkokul-ve-ortaokul-icin-kodlama-egitimi",
  title: "İlkokul ve Ortaokul İçin Kodlama Eğitimi",
  category: "Çocuk Eğitimi",
  breadcrumb: "Bilişim Eğitimi > Çocuk",
  image: "/images/Blocky.jpg",
  instructors: [
    {
      slug: "serkan-ozturk-105",
      name: "Serkan Öztürk",
      since: 2018,
      rating: 4.6,
      privatePrice: 1200,
      groupPrice: 600,
      corporate: false,
      online: true,
      location: "Düzce",
      bio: "Çocuklara kodlama eğitmeni.",
      specialties: ["Scratch", "Algoritma", "Python"]
    }
  ],
  description: "İlkokul ve ortaokul öğrencilerine eğlenceli kodlama.",
  whyTake: "Erken yaşta bilişim.",
  employmentAreas: "Eğitmen.",
  requirements: "Okuma-yazma."
},
{
  slug: "cocuklar-icin-algoritma-ve-problem-cozme",
  title: "Çocuklar İçin Algoritma ve Problem Çözme",
  category: "Çocuk Eğitimi",
  breadcrumb: "Bilişim Eğitimi > Çocuk",
  image: "/images/Blocky.jpg",
  instructors: [
    {
      slug: "serkan-ozturk-105",
      name: "Serkan Öztürk",
      since: 2018,
      rating: 4.6,
      privatePrice: 1200,
      groupPrice: 600,
      corporate: false,
      online: true,
      location: "Düzce",
      bio: "Çocuklara kodlama eğitmeni.",
      specialties: ["Scratch", "Algoritma", "Python"]
    }
  ],
  description: "Algoritmik düşünme ve problem çözme becerileri.",
  whyTake: "Mantıksal zeka gelişimi.",
  employmentAreas: "Öğrenci.",
  requirements: "4. sınıf ve üzeri."
},

// ===== BURSA =====
{
  slug: "autocad-ile-profesyonel-cizim-ve-tasarim",
  title: "AutoCAD ile Profesyonel Çizim ve Tasarım",
  category: "Mühendislik",
  breadcrumb: "Bilişim Eğitimi > Mühendislik",
  image: "/images/autocad.jpg",
  instructors: [
    {
      slug: "ahmet-demir-106",
      name: "Ahmet Demir",
      since: 2012,
      rating: 4.9,
      privatePrice: 7500,
      groupPrice: 3750,
      corporate: true,
      online: true,
      location: "Bursa",
      bio: "İnşaat mühendisi, AutoCAD uzmanı.",
      specialties: ["AutoCAD", "2D/3D", "Proje"]
    }
  ],
  description: "AutoCAD ile profesyonel çizim teknikleri.",
  whyTake: "İleri seviye çizim.",
  employmentAreas: "Mühendis, mimar.",
  requirements: "Temel AutoCAD bilgisi."
},
{
  slug: "autocad-2d-3d-uygulamali-egitim",
  title: "AutoCAD 2D/3D Uygulamalı Eğitim",
  category: "Mühendislik",
  breadcrumb: "Bilişim Eğitimi > Mühendislik",
  image: "/images/autocad.jpg",
  instructors: [
    {
      slug: "ahmet-demir-106",
      name: "Ahmet Demir",
      since: 2012,
      rating: 4.9,
      privatePrice: 7500,
      groupPrice: 3750,
      corporate: true,
      online: true,
      location: "Bursa",
      bio: "İnşaat mühendisi, AutoCAD uzmanı.",
      specialties: ["AutoCAD", "2D/3D", "Proje"]
    }
  ],
  description: "AutoCAD 2D ve 3D uygulamalı eğitim.",
  whyTake: "Pratik ağırlıklı.",
  employmentAreas: "Teknik ressam.",
  requirements: "Temel bilgisayar."
},

// Linux Sunucu, E-ticaret (Bursa)
{
  slug: "linux-sunucu-yonetimi-ve-guvenligi",
  title: "Linux Sunucu Yönetimi ve Güvenliği",
  category: "Sistem",
  breadcrumb: "Bilişim Eğitimi > Sistem",
  image: "/images/algoritma-ileri.jpg",
  instructors: [
    {
      slug: "gokhan-tuna-107",
      name: "Gökhan Tuna",
      since: 2014,
      rating: 4.7,
      privatePrice: 1200,
      groupPrice: 600,
      corporate: true,
      online: true,
      location: "Bursa",
      bio: "Linux sistem yöneticisi.",
      specialties: ["Linux", "Sunucu", "Güvenlik"]
    }
  ],
  description: "Linux sunucu kurulum, yapılandırma ve güvenlik.",
  whyTake: "Sistem yöneticiliği için.",
  employmentAreas: "Sistem yöneticisi.",
  requirements: "Temel Linux bilgisi."
},
{
  slug: "eticaret-ve-pazaryeri-yonetimi-egitimi",
  title: "E-ticaret ve Pazaryeri Yönetimi Eğitimi",
  category: "Dijital Pazarlama",
  breadcrumb: "Bilişim Eğitimi > Pazarlama",
  image: "/images/blogger2.jpg",
  instructors: [
    {
      slug: "gokhan-tuna-107",
      name: "Gökhan Tuna",
      since: 2014,
      rating: 4.7,
      privatePrice: 1200,
      groupPrice: 600,
      corporate: true,
      online: true,
      location: "Bursa",
      bio: "Linux sistem yöneticisi.",
      specialties: ["Linux", "Sunucu", "Güvenlik"]
    }
  ],
  description: "E-ticaret siteleri ve pazaryeri yönetimi.",
  whyTake: "Online satış.",
  employmentAreas: "E-ticaret uzmanı.",
  requirements: "Temel internet bilgisi."
},

// Python, C, CAD, Arduino (Bursa)
{
  slug: "python-ile-programlama-egitimi-bursa",
  title: "Python ile Programlama Eğitimi",
  category: "Yazılım",
  breadcrumb: "Bilişim Eğitimi > Yazılım",
  image: "/images/python-egitimi.jpg",
  instructors: [
    {
      slug: "emre-aksoy-108",
      name: "Emre Aksoy",
      since: 2015,
      rating: 4.7,
      privatePrice: 1500,
      groupPrice: 750,
      corporate: true,
      online: true,
      location: "Bursa",
      bio: "Mühendis, çok dilli programcı.",
      specialties: ["Python", "C", "CAD", "Arduino"]
    }
  ],
  description: "Python ile programlama temelleri.",
  whyTake: "Popüler dil.",
  employmentAreas: "Yazılımcı.",
  requirements: "Temel bilgisayar."
},
{
  slug: "c-programlama-ile-gomulu-sistemler",
  title: "C Programlama ile Gömülü Sistemler",
  category: "Gömülü Sistemler",
  breadcrumb: "Bilişim Eğitimi > Gömülü",
  image: "/images/yazilim.jpg",
  instructors: [
    {
      slug: "emre-aksoy-108",
      name: "Emre Aksoy",
      since: 2015,
      rating: 4.7,
      privatePrice: 1500,
      groupPrice: 750,
      corporate: true,
      online: true,
      location: "Bursa",
      bio: "Mühendis, çok dilli programcı.",
      specialties: ["Python", "C", "CAD", "Arduino"]
    }
  ],
  description: "C ile gömülü sistem programlama.",
  whyTake: "Donanım yakın.",
  employmentAreas: "Gömülü yazılımcı.",
  requirements: "Temel C."
},
{
  slug: "cad-ile-teknik-tasarim",
  title: "CAD ile Teknik Tasarım",
  category: "Mühendislik",
  breadcrumb: "Bilişim Eğitimi > Mühendislik",
  image: "/images/autocad.jpg",
  instructors: [
    {
      slug: "emre-aksoy-108",
      name: "Emre Aksoy",
      since: 2015,
      rating: 4.7,
      privatePrice: 1500,
      groupPrice: 750,
      corporate: true,
      online: true,
      location: "Bursa",
      bio: "Mühendis, çok dilli programcı.",
      specialties: ["Python", "C", "CAD", "Arduino"]
    }
  ],
  description: "CAD yazılımları ile teknik tasarım.",
  whyTake: "Tasarım için temel.",
  employmentAreas: "Tasarım mühendisi.",
  requirements: "Temel geometri."
},
{
  slug: "arduino-ile-robotik-uygulamalar-bursa",
  title: "Arduino ile Robotik Uygulamalar",
  category: "Robotik",
  breadcrumb: "Bilişim Eğitimi > Robotik",
  image: "/images/algoritma-ileri.jpg",
  instructors: [
    {
      slug: "emre-aksoy-108",
      name: "Emre Aksoy",
      since: 2015,
      rating: 4.7,
      privatePrice: 1500,
      groupPrice: 750,
      corporate: true,
      online: true,
      location: "Bursa",
      bio: "Mühendis, çok dilli programcı.",
      specialties: ["Python", "C", "CAD", "Arduino"]
    }
  ],
  description: "Arduino ile robotik projeler.",
  whyTake: "Elektronik ve yazılım.",
  employmentAreas: "Robotik geliştirici.",
  requirements: "Temel elektronik."
},
{
  slug: "html5-ve-css3-ile-web-tasarim-bursa",
  title: "HTML5 ve CSS3 ile Web Tasarım",
  category: "Web Tasarım",
  breadcrumb: "Bilişim Eğitimi > Web Tasarım",
  image: "/images/web-tasarim.jpg",
  instructors: [
    {
      slug: "emre-aksoy-108",
      name: "Emre Aksoy",
      since: 2015,
      rating: 4.7,
      privatePrice: 1500,
      groupPrice: 750,
      corporate: true,
      online: true,
      location: "Bursa",
      bio: "Mühendis, çok dilli programcı.",
      specialties: ["Python", "C", "CAD", "Arduino"]
    }
  ],
  description: "HTML5 ve CSS3 ile web tasarım.",
  whyTake: "Web'in temeli.",
  employmentAreas: "Web tasarımcı.",
  requirements: "Temel bilgisayar."
},

// Siber güvenlik (Bursa)
{
  slug: "siber-guvenlik-uzmanligi-ve-etik-hackerlik-bursa",
  title: "Siber Güvenlik Uzmanlığı ve Etik Hackerlık",
  category: "Siber Güvenlik",
  breadcrumb: "Bilişim Eğitimi > Güvenlik",
  image: "/images/siber-guvenlik.jpg",
  instructors: [
    {
      slug: "merve-aksoy-109",
      name: "Merve Aksoy",
      since: 2016,
      rating: 4.7,
      privatePrice: 750,
      groupPrice: 375,
      corporate: false,
      online: true,
      location: "Bursa",
      bio: "Siber güvenlik uzmanı.",
      specialties: ["Siber Güvenlik", "Etik Hacker", "Ağ Güvenliği"]
    }
  ],
  description: "Siber güvenlik temelleri ve etik hackerlık.",
  whyTake: "Kendini koru.",
  employmentAreas: "Güvenlik uzmanı.",
  requirements: "Temel ağ bilgisi."
},

// Catia (Bursa)
{
  slug: "catia-ile-sac-kalip-tasarimi",
  title: "Catia ile Sac Kalıp Tasarımı",
  category: "Mühendislik",
  breadcrumb: "Bilişim Eğitimi > Mühendislik",
  image: "/images/bilisim.jpg",
  instructors: [
    {
      slug: "umut-kaya-110",
      name: "Umut Kaya",
      since: 2014,
      rating: 4.8,
      privatePrice: 750,
      groupPrice: 375,
      corporate: true,
      online: true,
      location: "Bursa",
      bio: "Tasarım mühendisi, Catia uzmanı.",
      specialties: ["Catia", "Kalıp Tasarımı", "3D Modelleme"]
    }
  ],
  description: "Catia ile sac kalıp tasarımı.",
  whyTake: "Otomotiv sektörü.",
  employmentAreas: "Kalıp tasarımcısı.",
  requirements: "Temel Catia bilgisi."
},
{
  slug: "catia-ile-3d-modelleme-ve-tasarim",
  title: "Catia ile 3D Modelleme ve Tasarım",
  category: "Mühendislik",
  breadcrumb: "Bilişim Eğitimi > Mühendislik",
  image: "/images/bilisim.jpg",
  instructors: [
    {
      slug: "umut-kaya-110",
      name: "Umut Kaya",
      since: 2014,
      rating: 4.8,
      privatePrice: 750,
      groupPrice: 375,
      corporate: true,
      online: true,
      location: "Bursa",
      bio: "Tasarım mühendisi, Catia uzmanı.",
      specialties: ["Catia", "Kalıp Tasarımı", "3D Modelleme"]
    }
  ],
  description: "Catia ile 3D modelleme ve yüzey tasarımı.",
  whyTake: "İleri tasarım.",
  employmentAreas: "Tasarım mühendisi.",
  requirements: "Temel Catia."
},

// ===== SİVAS =====
{
  slug: "python-ile-sifirdan-ileri-seviye-programlama-sivas",
  title: "Python ile Sıfırdan İleri Seviye Programlama",
  category: "Yazılım",
  breadcrumb: "Bilişim Eğitimi > Yazılım",
  image: "/images/python-egitimi.jpg",
  instructors: [
    {
      slug: "burak-yildiz-111",
      name: "Burak Yıldız",
      since: 2015,
      rating: 4.6,
      privatePrice: 1125,
      groupPrice: 560,
      corporate: false,
      online: true,
      location: "Sivas",
      bio: "Çok dilli programcı.",
      specialties: ["Python", "C#", "JavaScript", "C++", "HTML"]
    }
  ],
  description: "Python öğrenin.",
  whyTake: "Popüler.",
  employmentAreas: "Yazılımcı.",
  requirements: "Temel bilgisayar."
},
{
  slug: "csharp-ile-nesne-tabanli-programlama-sivas",
  title: "C# ile Nesne Tabanlı Programlama",
  category: "Yazılım",
  breadcrumb: "Bilişim Eğitimi > Yazılım",
  image: "/images/csharp-egitimi.jpg",
  instructors: [
    {
      slug: "burak-yildiz-111",
      name: "Burak Yıldız",
      since: 2015,
      rating: 4.6,
      privatePrice: 1125,
      groupPrice: 560,
      corporate: false,
      online: true,
      location: "Sivas",
      bio: "Çok dilli programcı.",
      specialties: ["Python", "C#", "JavaScript", "C++", "HTML"]
    }
  ],
  description: "C# ile OOP.",
  whyTake: ".NET için.",
  employmentAreas: ".NET geliştirici.",
  requirements: "Temel programlama."
},
{
  slug: "javascript-ile-modern-web-gelistirme-sivas",
  title: "JavaScript ile Modern Web Geliştirme",
  category: "Yazılım",
  breadcrumb: "Bilişim Eğitimi > Yazılım",
  image: "/images/web-tasarim.jpg",
  instructors: [
    {
      slug: "burak-yildiz-111",
      name: "Burak Yıldız",
      since: 2015,
      rating: 4.6,
      privatePrice: 1125,
      groupPrice: 560,
      corporate: false,
      online: true,
      location: "Sivas",
      bio: "Çok dilli programcı.",
      specialties: ["Python", "C#", "JavaScript", "C++", "HTML"]
    }
  ],
  description: "JavaScript öğrenin.",
  whyTake: "Web'in dili.",
  employmentAreas: "Frontend developer.",
  requirements: "Temel HTML/CSS."
},
{
  slug: "cpp-ile-sistem-programlama-sivas",
  title: "C++ ile Sistem Programlama",
  category: "Yazılım",
  breadcrumb: "Bilişim Eğitimi > Yazılım",
  image: "/images/algoritma-ileri.jpg",
  instructors: [
    {
      slug: "burak-yildiz-111",
      name: "Burak Yıldız",
      since: 2015,
      rating: 4.6,
      privatePrice: 1125,
      groupPrice: 560,
      corporate: false,
      online: true,
      location: "Sivas",
      bio: "Çok dilli programcı.",
      specialties: ["Python", "C#", "JavaScript", "C++", "HTML"]
    }
  ],
  description: "C++ ile sistem programlama.",
  whyTake: "Performans.",
  employmentAreas: "Sistem programcısı.",
  requirements: "Temel C."
},
{
  slug: "html5-ve-css3-ile-web-tasarim-kursu-sivas",
  title: "HTML5 ve CSS3 ile Web Tasarım Kursu",
  category: "Web Tasarım",
  breadcrumb: "Bilişim Eğitimi > Web Tasarım",
  image: "/images/web-tasarim.jpg",
  instructors: [
    {
      slug: "burak-yildiz-111",
      name: "Burak Yıldız",
      since: 2015,
      rating: 4.6,
      privatePrice: 1125,
      groupPrice: 560,
      corporate: false,
      online: true,
      location: "Sivas",
      bio: "Çok dilli programcı.",
      specialties: ["Python", "C#", "JavaScript", "C++", "HTML"]
    }
  ],
  description: "Web tasarım temelleri.",
  whyTake: "Site yap.",
  employmentAreas: "Web tasarımcı.",
  requirements: "Temel bilgisayar."
},

// ===== ESKİŞEHİR (SolidWorks ve AutoCAD tekrar) =====
{
  slug: "solidworks-ile-katı-modelleme-ve-tasarim-eskisehir-2",
  title: "SolidWorks ile Katı Modelleme ve Tasarım",
  category: "3D Tasarım",
  breadcrumb: "Bilişim Eğitimi > 3D Tasarım",
  image: "/images/solidworks.jpg",
  instructors: [
    {
      slug: "cansu-ozturk-112",
      name: "Cansu Öztürk",
      since: 2016,
      rating: 4.7,
      privatePrice: 1500,
      groupPrice: 750,
      corporate: true,
      online: true,
      location: "Eskişehir",
      bio: "Makine mühendisi, CAD uzmanı.",
      specialties: ["SolidWorks", "AutoCAD"]
    }
  ],
  description: "SolidWorks ile katı modelleme.",
  whyTake: "Endüstriyel tasarım.",
  employmentAreas: "Tasarım mühendisi.",
  requirements: "Temel teknik resim."
},
{
  slug: "autocad-ile-teknik-cizim-ve-projelendirme-eskisehir-2",
  title: "AutoCAD ile Teknik Çizim ve Projelendirme",
  category: "Mühendislik",
  breadcrumb: "Bilişim Eğitimi > Mühendislik",
  image: "/images/autocad.jpg",
  instructors: [
    {
      slug: "cansu-ozturk-112",
      name: "Cansu Öztürk",
      since: 2016,
      rating: 4.7,
      privatePrice: 1500,
      groupPrice: 750,
      corporate: true,
      online: true,
      location: "Eskişehir",
      bio: "Makine mühendisi, CAD uzmanı.",
      specialties: ["SolidWorks", "AutoCAD"]
    }
  ],
  description: "AutoCAD ile teknik çizim.",
  whyTake: "Standart.",
  employmentAreas: "Teknik ressam.",
  requirements: "Temel çizim."
},

// ===== GAZİANTEP =====
{
  slug: "matlab-ile-muhendislik-uygulamalari-gaziantep",
  title: "MATLAB ile Mühendislik Uygulamaları",
  category: "Mühendislik",
  breadcrumb: "Bilişim Eğitimi > Mühendislik",
  image: "/images/yazilim.jpg",
  instructors: [
    {
      slug: "yavuz-selcuk-113",
      name: "Yavuz Selçuk",
      since: 2015,
      rating: 4.7,
      privatePrice: 975,
      groupPrice: 487,
      corporate: true,
      online: true,
      location: "Gaziantep",
      bio: "Makine mühendisi, simülasyon uzmanı.",
      specialties: ["MATLAB", "Blender", "Unity", "C++"]
    }
  ],
  description: "MATLAB ile mühendislik hesaplamaları.",
  whyTake: "Akademik ve endüstriyel.",
  employmentAreas: "Mühendis.",
  requirements: "Temel matematik."
},
{
  slug: "blender-ile-3d-modelleme-ve-animasyon",
  title: "Blender ile 3D Modelleme ve Animasyon",
  category: "3D Tasarım",
  breadcrumb: "Bilişim Eğitimi > 3D Tasarım",
  image: "/images/yazilim.jpg",
  instructors: [
    {
      slug: "yavuz-selcuk-113",
      name: "Yavuz Selçuk",
      since: 2015,
      rating: 4.7,
      privatePrice: 975,
      groupPrice: 487,
      corporate: true,
      online: true,
      location: "Gaziantep",
      bio: "Makine mühendisi, simülasyon uzmanı.",
      specialties: ["MATLAB", "Blender", "Unity", "C++"]
    }
  ],
  description: "Blender ile 3D modelleme ve animasyon.",
  whyTake: "Ücretsiz ve güçlü.",
  employmentAreas: "3D sanatçı.",
  requirements: "Temel bilgisayar."
},
{
  slug: "unity-ile-oyun-gelistirme-gaziantep",
  title: "Unity ile Oyun Geliştirme",
  category: "Oyun",
  breadcrumb: "Bilişim Eğitimi > Oyun",
  image: "/images/unity.jpg",
  instructors: [
    {
      slug: "yavuz-selcuk-113",
      name: "Yavuz Selçuk",
      since: 2015,
      rating: 4.7,
      privatePrice: 975,
      groupPrice: 487,
      corporate: true,
      online: true,
      location: "Gaziantep",
      bio: "Makine mühendisi, simülasyon uzmanı.",
      specialties: ["MATLAB", "Blender", "Unity", "C++"]
    }
  ],
  description: "Unity ile oyun geliştirme.",
  whyTake: "Popüler oyun motoru.",
  employmentAreas: "Oyun geliştirici.",
  requirements: "Temel C#."
},
{
  slug: "cpp-ile-ileri-seviye-programlama-gaziantep",
  title: "C++ ile İleri Seviye Programlama",
  category: "Yazılım",
  breadcrumb: "Bilişim Eğitimi > Yazılım",
  image: "/images/bilisim.jpg",
  instructors: [
    {
      slug: "yavuz-selcuk-113",
      name: "Yavuz Selçuk",
      since: 2015,
      rating: 4.7,
      privatePrice: 975,
      groupPrice: 487,
      corporate: true,
      online: true,
      location: "Gaziantep",
      bio: "Makine mühendisi, simülasyon uzmanı.",
      specialties: ["MATLAB", "Blender", "Unity", "C++"]
    }
  ],
  description: "C++ ile ileri seviye programlama.",
  whyTake: "Performanslı kod.",
  employmentAreas: "Yazılım mühendisi.",
  requirements: "Temel C++."
},

// ===== ŞANLIURFA =====
{
  slug: "c-programlama-ile-sistem-programlama-urfa",
  title: "C Programlama ile Sistem Programlama",
  category: "Yazılım",
  breadcrumb: "Bilişim Eğitimi > Yazılım",
  image: "/images/algoritma-ileri.jpg",
  instructors: [
    {
      slug: "ismail-aydin-114",
      name: "İsmail Aydın",
      since: 2013,
      rating: 4.9,
      privatePrice: 3000,
      groupPrice: 1500,
      corporate: true,
      online: true,
      location: "Şanlıurfa",
      bio: "Yazılım mimarı.",
      specialties: ["C", "C#", ".NET"]
    }
  ],
  description: "C ile sistem programlama.",
  whyTake: "Temel dil.",
  employmentAreas: "Sistem programcısı.",
  requirements: "Temel algoritma."
},
{
  slug: "csharp-ile-kurumsal-uygulama-gelistirme-urfa",
  title: "C# ile Kurumsal Uygulama Geliştirme",
  category: "Yazılım",
  breadcrumb: "Bilişim Eğitimi > Yazılım",
  image: "/images/net-core.jpg",
  instructors: [
    {
      slug: "ismail-aydin-114",
      name: "İsmail Aydın",
      since: 2013,
      rating: 4.9,
      privatePrice: 3000,
      groupPrice: 1500,
      corporate: true,
      online: true,
      location: "Şanlıurfa",
      bio: "Yazılım mimarı.",
      specialties: ["C", "C#", ".NET"]
    }
  ],
  description: "C# ile kurumsal uygulamalar.",
  whyTake: "İş dünyası.",
  employmentAreas: ".NET geliştirici.",
  requirements: "Temel C#."
},
{
  slug: "net-core-ile-mikroservis-mimarisi-urfa",
  title: ".NET Core ile Mikroservis Mimarisi",
  category: "Yazılım",
  breadcrumb: "Bilişim Eğitimi > Yazılım",
  image: "/images/net-core.jpg",
  instructors: [
    {
      slug: "ismail-aydin-114",
      name: "İsmail Aydın",
      since: 2013,
      rating: 4.9,
      privatePrice: 3000,
      groupPrice: 1500,
      corporate: true,
      online: true,
      location: "Şanlıurfa",
      bio: "Yazılım mimarı.",
      specialties: ["C", "C#", ".NET"]
    }
  ],
  description: ".NET Core ile mikroservis geliştirme.",
  whyTake: "Modern mimari.",
  employmentAreas: "Backend geliştirici.",
  requirements: "Orta seviye .NET."
},

// ===== YOZGAT =====
{
  slug: "sektor-odakli-yazilim-gelistirme-egitimi",
  title: "Sektör Odaklı Yazılım Geliştirme Eğitimi",
  category: "Yazılım",
  breadcrumb: "Bilişim Eğitimi > Yazılım",
  image: "/images/bilisim.jpg",
  instructors: [
    {
      slug: "merve-ozturk-115",
      name: "Merve Öztürk",
      since: 2016,
      rating: 4.8,
      privatePrice: 1500,
      groupPrice: 750,
      corporate: false,
      online: true,
      location: "Yozgat",
      bio: "Fakülte birincisi, yazılım geliştirici.",
      specialties: ["Yazılım", "Algoritma", "Proje Geliştirme"]
    }
  ],
  description: "Sektör odaklı yazılım geliştirme.",
  whyTake: "Güncel içerik.",
  employmentAreas: "Yazılım geliştirici.",
  requirements: "Temel programlama."
},

// ===== KONYA =====
{
  slug: "3ds-max-ile-modelleme-ve-render-teknikleri",
  title: "3ds Max ile Modelleme ve Render Teknikleri",
  category: "3D Tasarım",
  breadcrumb: "Bilişim Eğitimi > 3D Tasarım",
  image: "/images/3ds-max.jpg",
  instructors: [
    {
      slug: "elif-dogan-116",
      name: "Elif Doğan",
      since: 2015,
      rating: 4.7,
      privatePrice: 1050,
      groupPrice: 525,
      corporate: true,
      online: true,
      location: "Konya",
      bio: "Mimar, 3D görselleştirme uzmanı.",
      specialties: ["3ds Max", "Unreal Engine", "Görselleştirme"]
    }
  ],
  description: "3ds Max ile modelleme ve render.",
  whyTake: "Mimari görselleştirme.",
  employmentAreas: "3D tasarımcı.",
  requirements: "Temel 3D bilgisi."
},
{
  slug: "unreal-engine-ile-gercek-zamanli-gorsellestirme",
  title: "Unreal Engine ile Gerçek Zamanlı Görselleştirme",
  category: "3D Tasarım",
  breadcrumb: "Bilişim Eğitimi > 3D Tasarım",
  image: "/images/yazilim.jpg",
  instructors: [
    {
      slug: "elif-dogan-116",
      name: "Elif Doğan",
      since: 2015,
      rating: 4.7,
      privatePrice: 1050,
      groupPrice: 525,
      corporate: true,
      online: true,
      location: "Konya",
      bio: "Mimar, 3D görselleştirme uzmanı.",
      specialties: ["3ds Max", "Unreal Engine", "Görselleştirme"]
    }
  ],
  description: "Unreal Engine ile gerçek zamanlı görselleştirme.",
  whyTake: "Oyun motoru ile tasarım.",
  employmentAreas: "Unreal artist.",
  requirements: "Temel 3D."
},

// Yapay Zeka ve Yazılım Mühendisliği (Konya)
{
  slug: "yapay-zeka-ve-yazilim-muhendisligi-egitimi",
  title: "Yapay Zeka ve Yazılım Mühendisliği Eğitimi",
  category: "Yapay Zeka",
  breadcrumb: "Bilişim Eğitimi > Yapay Zeka",
  image: "/images/yapay-zeka.jpg",
  instructors: [
    {
      slug: "emre-kara-117",
      name: "Emre Kara",
      since: 2013,
      rating: 4.9,
      privatePrice: 4500,
      groupPrice: 2250,
      corporate: true,
      online: true,
      location: "Konya",
      bio: "Yazılım mühendisi, yapay zeka uzmanı.",
      specialties: ["Yapay Zeka", "Makine Öğrenmesi", "Derin Öğrenme"]
    }
  ],
  description: "Yapay zeka ve yazılım mühendisliği.",
  whyTake: "Kapsamlı eğitim.",
  employmentAreas: "Yapay zeka mühendisi.",
  requirements: "Temel programlama."
},
{
  slug: "makine-ogrenmesi-ve-derin-ogrenme-uygulamalari",
  title: "Makine Öğrenmesi ve Derin Öğrenme Uygulamaları",
  category: "Yapay Zeka",
  breadcrumb: "Bilişim Eğitimi > Yapay Zeka",
  image: "/images/yazilim.jpg",
  instructors: [
    {
      slug: "emre-kara-117",
      name: "Emre Kara",
      since: 2013,
      rating: 4.9,
      privatePrice: 4500,
      groupPrice: 2250,
      corporate: true,
      online: true,
      location: "Konya",
      bio: "Yazılım mühendisi, yapay zeka uzmanı.",
      specialties: ["Yapay Zeka", "Makine Öğrenmesi", "Derin Öğrenme"]
    }
  ],
  description: "Makine öğrenmesi ve derin öğrenme projeleri.",
  whyTake: "İleri seviye.",
  employmentAreas: "Makine öğrenmesi mühendisi.",
  requirements: "Python ve istatistik."
},

// ===== GİRESUN =====
{
  slug: "kisiye-ozel-yazilim-ve-programlama-egitimi",
  title: "Kişiye Özel Yazılım ve Programlama Eğitimi",
  category: "Yazılım",
  breadcrumb: "Bilişim Eğitimi > Yazılım",
  image: "/images/bilisim.jpg",
  instructors: [
    {
      slug: "murat-can-118",
      name: "Murat Can",
      since: 2015,
      rating: 4.7,
      privatePrice: 2250,
      groupPrice: 1125,
      corporate: false,
      online: true,
      location: "Giresun",
      bio: "Yazılım geliştirici, kişiye özel eğitim.",
      specialties: ["Programlama", "Web", "Mobil"]
    }
  ],
  description: "İhtiyaca göre özel yazılım eğitimi.",
  whyTake: "Birebir.",
  employmentAreas: "Yazılımcı.",
  requirements: "Değişken."
},

// ===== ISPARTA =====
{
  slug: "robotik-kodlama-ve-donanim-egitimi",
  title: "Robotik Kodlama ve Donanım Eğitimi",
  category: "Robotik",
  breadcrumb: "Bilişim Eğitimi > Robotik",
  image: "/images/algoritma-ileri.jpg",
  instructors: [
    {
      slug: "sevda-arslan-119",
      name: "Sevda Arslan",
      since: 2016,
      rating: 4.6,
      privatePrice: 750,
      groupPrice: 375,
      corporate: false,
      online: true,
      location: "Isparta",
      bio: "Bilgisayar mühendisi, robotik eğitmeni.",
      specialties: ["Robotik", "Yazılım", "Donanım"]
    }
  ],
  description: "Robotik kodlama ve donanım temelleri.",
  whyTake: "Donanım-yazılım birlikte.",
  employmentAreas: "Robotik geliştirici.",
  requirements: "Temel elektronik."
},
{
  slug: "yazilim-gelistirme-ve-algoritma-egitimi",
  title: "Yazılım Geliştirme ve Algoritma Eğitimi",
  category: "Yazılım",
  breadcrumb: "Bilişim Eğitimi > Yazılım",
  image: "/images/yazilim.jpg",
  instructors: [
    {
      slug: "sevda-arslan-119",
      name: "Sevda Arslan",
      since: 2016,
      rating: 4.6,
      privatePrice: 750,
      groupPrice: 375,
      corporate: false,
      online: true,
      location: "Isparta",
      bio: "Bilgisayar mühendisi, robotik eğitmeni.",
      specialties: ["Robotik", "Yazılım", "Donanım"]
    }
  ],
  description: "Yazılım geliştirme ve algoritma mantığı.",
  whyTake: "Programlama temeli.",
  employmentAreas: "Yazılımcı.",
  requirements: "Temel bilgisayar."
},

// ===== ANTALYA (devam) =====
{
  slug: "sifirdan-web-tasarim-kursu",
  title: "Sıfırdan Web Tasarım Kursu",
  category: "Web Tasarım",
  breadcrumb: "Bilişim Eğitimi > Web Tasarım",
  image: "/images/web-tasarim.jpg",
  instructors: [
    {
      slug: "cansu-erdem-120",
      name: "Cansu Erdem",
      since: 2017,
      rating: 4.6,
      privatePrice: 825,
      groupPrice: 412,
      corporate: false,
      online: true,
      location: "Antalya",
      bio: "Web ve mobil tasarımcı.",
      specialties: ["Web Tasarım", "Mobil Uygulama"]
    }
  ],
  description: "Sıfırdan web tasarımı öğrenin.",
  whyTake: "HTML/CSS ile başlangıç.",
  employmentAreas: "Web tasarımcı.",
  requirements: "Temel bilgisayar."
},
{
  slug: "mobil-uygulama-gelistirme-egitimi-antalya",
  title: "Mobil Uygulama Geliştirme Eğitimi",
  category: "Mobil",
  breadcrumb: "Bilişim Eğitimi > Mobil",
  image: "/images/android-ios.jpg",
  instructors: [
    {
      slug: "cansu-erdem-120",
      name: "Cansu Erdem",
      since: 2017,
      rating: 4.6,
      privatePrice: 825,
      groupPrice: 412,
      corporate: false,
      online: true,
      location: "Antalya",
      bio: "Web ve mobil tasarımcı.",
      specialties: ["Web Tasarım", "Mobil Uygulama"]
    }
  ],
  description: "Mobil uygulama geliştirme.",
  whyTake: "Android/iOS.",
  employmentAreas: "Mobil geliştirici.",
  requirements: "Temel programlama."
}
// ===== SON =====
  
];