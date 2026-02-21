// src/data/courses-spor.js

export const courses = [
  // ===== SPOR KURSLARI =====
{
  slug: "atletizm-dersi",
  title: "Atletizm Dersi",
  category: "Spor",
  breadcrumb: "Spor > Atletizm",
  image: "/images/spor.jpg",
  instructors: [
    {
      slug: "kurtulus-eker",
      name: "Kurtuluş Eker",
      since: 2015,
      rating: 4.7,
      privatePrice: 1800,
      groupPrice: 900,
      corporate: true,
      online: false,
      location: "İstanbul Avrupa Yakası",
      bio: "Eski milli atlet, 10 yıllık antrenörlük deneyimi.",
      specialties: ["Atletizm"]
    },
    {
      slug: "seniz-arikan",
      name: "Şeniz Arıkan",
      since: 2016,
      rating: 4.6,
      privatePrice: 1600,
      groupPrice: 800,
      corporate: false,
      online: false,
      location: "Ankara",
      bio: "Ankara'da atletizm antrenörü, çocuk ve genç grupları.",
      specialties: ["Atletizm"]
    }
  ],
  description: "Koşu, atlama, atma branşlarında temel teknikler ve antrenman programları.",
  whyTake: "Fiziksel performansınızı artırın ve sağlıklı yaşama adım atın.",
  employmentAreas: "Kulüp antrenörlüğü, okul takımları, kişisel antrenör.",
  requirements: "Her seviyeye uygun."
},
{
  slug: "badminton-dersi",
  title: "Badminton Dersi",
  category: "Spor",
  breadcrumb: "Spor > Badminton",
  image: "/images/spor.jpg",
  instructors: [
    {
      slug: "tolga-nalbantoglu",
      name: "Tolga Nalbantoğlu",
      since: 2014,
      rating: 4.6,
      privatePrice: 1700,
      groupPrice: 850,
      corporate: true,
      online: false,
      location: "İstanbul Avrupa Yakası",
      bio: "Badminton antrenörü, lisanslı sporcu, 8 yıllık deneyim.",
      specialties: ["Badminton"]
    },
    {
      slug: "serpil-gozubuyuk",
      name: "Serpil Gözübüyük",
      since: 2017,
      rating: 4.5,
      privatePrice: 1550,
      groupPrice: 775,
      corporate: false,
      online: false,
      location: "Bursa",
      bio: "Bursa'da badminton antrenörü, gençlik merkezlerinde eğitmen.",
      specialties: ["Badminton"]
    }
  ],
  description: "Badminton temel vuruş teknikleri, ayak hareketleri ve oyun taktikleri.",
  whyTake: "Hızlı ve eğlenceli bir sporla kondisyonunuzu geliştirin.",
  employmentAreas: "Kulüp antrenörlüğü, okullar, spor salonları.",
  requirements: "Ön koşul yok."
},
{
  slug: "basketbol-dersi",
  title: "Basketbol Dersi",
  category: "Spor",
  breadcrumb: "Spor > Basketbol",
  image: "/images/spor.jpg",
  instructors: [
    {
      slug: "altan-oksuz",
      name: "Altan Öksüz",
      since: 2013,
      rating: 4.8,
      privatePrice: 2200,
      groupPrice: 1100,
      corporate: true,
      online: false,
      location: "İstanbul Avrupa Yakası",
      bio: "Eski profesyonel basketbolcu, 12 yıl antrenörlük.",
      specialties: ["Basketbol"]
    },
    {
      slug: "birsen-oztoprak",
      name: "Birsen Öztoprak",
      since: 2015,
      rating: 4.7,
      privatePrice: 1950,
      groupPrice: 975,
      corporate: false,
      online: false,
      location: "İzmir",
      bio: "İzmir'de basketbol antrenörü, altyapı gelişim uzmanı.",
      specialties: ["Basketbol"]
    }
  ],
  description: "Basketbol temel becerileri, top sürme, şut, pas ve taktik çalışmalar.",
  whyTake: "Takım sporuyla eğlenirken kondisyon kazanın.",
  employmentAreas: "Kulüpler, okullar, yaz kampları.",
  requirements: "7 yaş ve üzeri."
},
{
  slug: "bilardo-dersi",
  title: "Bilardo Dersi",
  category: "Spor",
  breadcrumb: "Spor > Bilardo",
  image: "/images/spor.jpg",
  instructors: [
    {
      slug: "guner-cetin",
      name: "Güner Çetin",
      since: 2012,
      rating: 4.9,
      privatePrice: 2400,
      groupPrice: 1200,
      corporate: true,
      online: false,
      location: "İstanbul Avrupa Yakası",
      bio: "Profesyonel bilardocu, Türkiye şampiyonu, 15 yıllık deneyim.",
      specialties: ["Bilardo"]
    },
    {
      slug: "nezahat-isik",
      name: "Nezahat Işık",
      since: 2016,
      rating: 4.6,
      privatePrice: 2100,
      groupPrice: 1050,
      corporate: false,
      online: false,
      location: "Eskişehir",
      bio: "Eskişehir'de bilardo antrenörü, kadınlar ligi oyuncusu.",
      specialties: ["Bilardo"]
    }
  ],
  description: "Bilardo temel duruş, istek kuralları, rotasyon ve taktikler.",
  whyTake: "Konsantrasyon ve el-göz koordinasyonunuzu geliştirin.",
  employmentAreas: "Bilardo salonları, turnuva oyuncusu.",
  requirements: "Ön koşul yok."
},
{
  slug: "binicilik-dersi",
  title: "Binicilik Dersi",
  category: "Spor",
  breadcrumb: "Spor > Binicilik",
  image: "/images/spor.jpg",
  instructors: [
    {
      slug: "okay-suer",
      name: "Okay Süer",
      since: 2010,
      rating: 5.0,
      privatePrice: 3200,
      groupPrice: 1600,
      corporate: true,
      online: false,
      location: "İstanbul Avrupa Yakası",
      bio: "At binme antrenörü, engel atlama ve dressaj uzmanı.",
      specialties: ["Binicilik"]
    },
    {
      slug: "ruya-bengu",
      name: "Rüya Bengü",
      since: 2013,
      rating: 4.8,
      privatePrice: 2800,
      groupPrice: 1400,
      corporate: false,
      online: false,
      location: "Ankara",
      bio: "Ankara'da binicilik okulu, çocuk ve yetişkin grupları.",
      specialties: ["Binicilik"]
    }
  ],
  description: "At binme teknikleri, bakım, güvenlik ve temel binicilik eğitimi.",
  whyTake: "Doğayla iç içe, özgürlüğü hissedeceğiniz bir spor.",
  employmentAreas: "Binicilik kulüpleri, çiftlikler.",
  requirements: "Fiziksel yeterlilik."
},
{
  slug: "buz-pateni-ve-hokeyi-dersi",
  title: "Buz Pateni ve Hokeyi Dersi",
  category: "Spor",
  breadcrumb: "Spor > Buz Pateni",
  image: "/images/spor.jpg",
  instructors: [
    {
      slug: "figen-sozer",
      name: "Figen Sözer",
      since: 2014,
      rating: 4.7,
      privatePrice: 2600,
      groupPrice: 1300,
      corporate: true,
      online: false,
      location: "İstanbul Avrupa Yakası",
      bio: "Buz pateni antrenörü, eski milli sporcu.",
      specialties: ["Buz Pateni"]
    },
    {
      slug: "ozcan-basoglu",
      name: "Özcan Başoğlu",
      since: 2015,
      rating: 4.6,
      privatePrice: 2300,
      groupPrice: 1150,
      corporate: false,
      online: false,
      location: "Kocaeli",
      bio: "Kocaeli'de buz hokeyi antrenörü, genç takım çalıştırıcısı.",
      specialties: ["Buz Hokeyi"]
    }
  ],
  description: "Buz üzerinde denge, kayma teknikleri, hokey temel becerileri.",
  whyTake: "Kış sporlarına ilgi duyanlar için eşsiz bir deneyim.",
  employmentAreas: "Buz pistleri, spor kulüpleri.",
  requirements: "Kaymayı bilmek avantajdır."
},
{
  slug: "dagicilik-dersi",
  title: "Dağcılık Dersi",
  category: "Spor",
  breadcrumb: "Spor > Dağcılık",
  image: "/images/spor.jpg",
  instructors: [
    {
      slug: "ersin-kunt",
      name: "Ersin Kunt",
      since: 2011,
      rating: 4.9,
      privatePrice: 2900,
      groupPrice: 1450,
      corporate: true,
      online: false,
      location: "İstanbul Avrupa Yakası",
      bio: "Dağcılık federasyonu eğitmeni, 5000m üzeri tırmanışlar.",
      specialties: ["Dağcılık"]
    },
    {
      slug: "sultan-eris",
      name: "Sultan Eriş",
      since: 2014,
      rating: 4.7,
      privatePrice: 2500,
      groupPrice: 1250,
      corporate: false,
      online: false,
      location: "Antalya",
      bio: "Antalya'da dağcılık ve doğa sporları rehberi.",
      specialties: ["Dağcılık"]
    }
  ],
  description: "Temel dağcılık teknikleri, ip kullanımı, kamp kurma, güvenlik.",
  whyTake: "Doğayla mücadele etmeyi ve zirvelere ulaşmayı öğrenin.",
  employmentAreas: "Dağ rehberliği, doğa sporları kulüpleri.",
  requirements: "İyi fiziksel kondisyon."
},
{
  slug: "dalis-dersi",
  title: "Dalış Dersi",
  category: "Spor",
  breadcrumb: "Spor > Dalış",
  image: "/images/spor.jpg",
  instructors: [
    {
      slug: "macit-kucuk",
      name: "Macit Küçük",
      since: 2012,
      rating: 4.8,
      privatePrice: 3100,
      groupPrice: 1550,
      corporate: true,
      online: false,
      location: "İstanbul Avrupa Yakası",
      bio: "CMAS 3 yıldız dalış eğitmeni, 15 yıllık deneyim.",
      specialties: ["Dalış"]
    },
    {
      slug: "hale-tamer",
      name: "Hale Tamer",
      since: 2015,
      rating: 4.7,
      privatePrice: 2700,
      groupPrice: 1350,
      corporate: false,
      online: false,
      location: "Muğla",
      bio: "Muğla'da dalış okulu, su altı fotoğrafçısı.",
      specialties: ["Dalış"]
    }
  ],
  description: "Temel dalış eğitimi, ekipman kullanımı, güvenlik ve su altı keşif.",
  whyTake: "Denizlerin büyülü dünyasını keşfedin.",
  employmentAreas: "Dalış merkezleri, turizm.",
  requirements: "Sağlık raporu, yüzme bilmek."
},
{
  slug: "dovus-sporlari-dersi",
  title: "Dövüş Sporları Dersi",
  category: "Spor",
  breadcrumb: "Spor > Dövüş",
  image: "/images/spor.jpg",
  instructors: [
    {
      slug: "resat-ekin",
      name: "Reşat Ekin",
      since: 2013,
      rating: 4.8,
      privatePrice: 2400,
      groupPrice: 1200,
      corporate: true,
      online: false,
      location: "İstanbul Avrupa Yakası",
      bio: "Kickboks ve Muay Thai antrenörü, şampiyon yetiştirmiş.",
      specialties: ["Dövüş Sporları"]
    },
    {
      slug: "cigdem-tanriver",
      name: "Çiğdem Tanrıöver",
      since: 2016,
      rating: 4.6,
      privatePrice: 2100,
      groupPrice: 1050,
      corporate: false,
      online: false,
      location: "Adana",
      bio: "Adana'da karate ve tekvando antrenörü, milli sporcu.",
      specialties: ["Dövüş Sporları"]
    }
  ],
  description: "Çeşitli dövüş sporlarının temelleri, savunma teknikleri ve kondisyon.",
  whyTake: "Özgüven kazanın ve kendinizi savunmayı öğrenin.",
  employmentAreas: "Spor salonları, güvenlik sektörü.",
  requirements: "Her seviyeye uygun."
},
{
  slug: "eskrim-dersi",
  title: "Eskrim Dersi",
  category: "Spor",
  breadcrumb: "Spor > Eskrim",
  image: "/images/spor.jpg",
  instructors: [
    {
      slug: "kudret-sezer",
      name: "Kudret Sezer",
      since: 2014,
      rating: 4.7,
      privatePrice: 2300,
      groupPrice: 1150,
      corporate: true,
      online: false,
      location: "İstanbul Avrupa Yakası",
      bio: "Eskrim antrenörü, epe ve flöre dallarında uzman.",
      specialties: ["Eskrim"]
    },
    {
      slug: "aysel-durukan",
      name: "Aysel Durukan",
      since: 2016,
      rating: 4.5,
      privatePrice: 1950,
      groupPrice: 975,
      corporate: false,
      online: false,
      location: "İzmir",
      bio: "İzmir'de eskrim okulu, genç takım antrenörü.",
      specialties: ["Eskrim"]
    }
  ],
  description: "Eskrim temel duruş, hamle, savunma ve maç taktikleri.",
  whyTake: "Asil bir sporla reflekslerinizi ve zekanızı geliştirin.",
  employmentAreas: "Kulüpler, spor okulları.",
  requirements: "7 yaş ve üzeri."
},
{
  slug: "fitness-ve-pilates-dersi",
  title: "Fitness ve Pilates Dersi",
  category: "Spor",
  breadcrumb: "Spor > Fitness",
  image: "/images/spor.jpg",
  instructors: [
    {
      slug: "hikmet-candas",
      name: "Hikmet Candaş",
      since: 2015,
      rating: 4.6,
      privatePrice: 1700,
      groupPrice: 850,
      corporate: true,
      online: false,
      location: "İstanbul Avrupa Yakası",
      bio: "Kişisel antrenör, fitness ve pilates eğitmeni.",
      specialties: ["Fitness"]
    },
    {
      slug: "nurhayat-bozkurt",
      name: "Nurhayat Bozkurt",
      since: 2017,
      rating: 4.5,
      privatePrice: 1550,
      groupPrice: 775,
      corporate: false,
      online: false,
      location: "Bursa",
      bio: "Bursa'da pilates stüdyosu, hamile pilatesi uzmanı.",
      specialties: ["Pilates"]
    }
  ],
  description: "Fitness ve pilates ile formda kalın, esneklik ve güç kazanın.",
  whyTake: "Sağlıklı ve fit bir vücut için ideal.",
  employmentAreas: "Spor salonları, kişisel antrenörlük.",
  requirements: "Ön koşul yok."
},
{
  slug: "futbol-dersi",
  title: "Futbol Dersi",
  category: "Spor",
  breadcrumb: "Spor > Futbol",
  image: "/images/spor.jpg",
  instructors: [
    {
      slug: "ismail-hakki-gok",
      name: "İsmail Hakkı Gök",
      since: 2012,
      rating: 4.9,
      privatePrice: 2200,
      groupPrice: 1100,
      corporate: true,
      online: false,
      location: "İstanbul Avrupa Yakası",
      bio: "UEFA A lisanslı futbol antrenörü, altyapı deneyimi.",
      specialties: ["Futbol"]
    },
    {
      slug: "fatma-nevin-yilmaz",
      name: "Fatma Nevin Yılmaz",
      since: 2015,
      rating: 4.6,
      privatePrice: 1900,
      groupPrice: 950,
      corporate: false,
      online: false,
      location: "Gaziantep",
      bio: "Gaziantep'te kadın futbol takımı antrenörü.",
      specialties: ["Futbol"]
    }
  ],
  description: "Futbol temel teknikleri, pas, şut, top sürme ve taktik çalışmalar.",
  whyTake: "Dünyanın en popüler sporunu profesyonelce öğrenin.",
  employmentAreas: "Kulüpler, okullar, futbol okulları.",
  requirements: "Her seviyeye uygun."
},
{
  slug: "golf-dersi",
  title: "Golf Dersi",
  category: "Spor",
  breadcrumb: "Spor > Golf",
  image: "/images/spor.jpg",
  instructors: [
    {
      slug: "timur-berksoy",
      name: "Timur Berksoy",
      since: 2010,
      rating: 5.0,
      privatePrice: 4200,
      groupPrice: 2100,
      corporate: true,
      online: false,
      location: "İstanbul Avrupa Yakası",
      bio: "Profesyonel golf antrenörü, PGA sertifikalı.",
      specialties: ["Golf"]
    },
    {
      slug: "selma-koz",
      name: "Selma Koz",
      since: 2013,
      rating: 4.8,
      privatePrice: 3800,
      groupPrice: 1900,
      corporate: false,
      online: false,
      location: "Antalya",
      bio: "Antalya'da golf okulu, kadın golfçüler derneği üyesi.",
      specialties: ["Golf"]
    }
  ],
  description: "Golf temel vuruş teknikleri, kurallar, saha yönetimi.",
  whyTake: "Prestijli bir sporla doğayla iç içe olun.",
  employmentAreas: "Golf kulüpleri, turnuvalar.",
  requirements: "Ön koşul yok."
},
{
  slug: "gures-dersi",
  title: "Güreş Dersi",
  category: "Spor",
  breadcrumb: "Spor > Güreş",
  image: "/images/spor.jpg",
  instructors: [
    {
      slug: "ilteris-topuz",
      name: "İlteriş Topuz",
      since: 2011,
      rating: 4.8,
      privatePrice: 2300,
      groupPrice: 1150,
      corporate: true,
      online: false,
      location: "İstanbul Avrupa Yakası",
      bio: "Eski milli güreşçi, serbest stil antrenörü.",
      specialties: ["Güreş"]
    },
    {
      slug: "asiye-cengiz",
      name: "Asiye Cengiz",
      since: 2014,
      rating: 4.6,
      privatePrice: 1950,
      groupPrice: 975,
      corporate: false,
      online: false,
      location: "Samsun",
      bio: "Samsun'da güreş antrenörü, kadın güreşi geliştirme.",
      specialties: ["Güreş"]
    }
  ],
  description: "Güreş temel teknikleri, pozisyon alma, rakip kontrolü.",
  whyTake: "Fiziksel gücünüzü ve dayanıklılığınızı artırın.",
  employmentAreas: "Spor kulüpleri, milli takım altyapısı.",
  requirements: "Fiziksel yeterlilik."
},
{
  slug: "jimnastik-dersi",
  title: "Jimnastik Dersi",
  category: "Spor",
  breadcrumb: "Spor > Jimnastik",
  image: "/images/spor.jpg",
  instructors: [
    {
      slug: "rauf-eren",
      name: "Rauf Eren",
      since: 2013,
      rating: 4.7,
      privatePrice: 2100,
      groupPrice: 1050,
      corporate: true,
      online: false,
      location: "İstanbul Avrupa Yakası",
      bio: "Jimnastik antrenörü, artistik jimnastik uzmanı.",
      specialties: ["Jimnastik"]
    },
    {
      slug: "sirin-erdem",
      name: "Şirin Erdem",
      since: 2015,
      rating: 4.5,
      privatePrice: 1800,
      groupPrice: 900,
      corporate: false,
      online: false,
      location: "İzmir",
      bio: "İzmir'de ritmik jimnastik antrenörü, minikler grubu.",
      specialties: ["Jimnastik"]
    }
  ],
  description: "Jimnastik temel hareketleri, esneme, denge ve koordinasyon.",
  whyTake: "Çocuklar için ideal, yetişkinler için formda kalma.",
  employmentAreas: "Jimnastik kulüpleri, okullar.",
  requirements: "4 yaş ve üzeri."
},
{
  slug: "kayak-ve-snowboard-dersi",
  title: "Kayak ve Snowboard Dersi",
  category: "Spor",
  breadcrumb: "Spor > Kayak",
  image: "/images/spor.jpg",
  instructors: [
    {
      slug: "koray-unaldi",
      name: "Koray Ünaldı",
      since: 2012,
      rating: 4.9,
      privatePrice: 3300,
      groupPrice: 1650,
      corporate: true,
      online: false,
      location: "İstanbul Avrupa Yakası",
      bio: "Kayak ve snowboard eğitmeni, uluslararası sertifikalı.",
      specialties: ["Kayak"]
    },
    {
      slug: "betul-kaymak",
      name: "Betül Kaymak",
      since: 2014,
      rating: 4.7,
      privatePrice: 2900,
      groupPrice: 1450,
      corporate: false,
      online: false,
      location: "Erzurum",
      bio: "Erzurum'da kayak okulu, Palandöken'de eğitmen.",
      specialties: ["Kayak"]
    }
  ],
  description: "Kayak ve snowboard temel teknikleri, dönüşler, duruş ve güvenlik.",
  whyTake: "Kış tatillerinde keyifli vakit geçirin.",
  employmentAreas: "Kayak merkezleri, turizm.",
  requirements: "Fiziksel kondisyon."
},
{
  slug: "motor-sporlari-dersi",
  title: "Motor Sporları Dersi",
  category: "Spor",
  breadcrumb: "Spor > Motor",
  image: "/images/spor.jpg",
  instructors: [
    {
      slug: "dogus-yener",
      name: "Doğuş Yener",
      since: 2010,
      rating: 5.0,
      privatePrice: 4500,
      groupPrice: 2250,
      corporate: true,
      online: false,
      location: "İstanbul Avrupa Yakası",
      bio: "Eski yarış pilotu, pist eğitmeni, güvenli sürüş uzmanı.",
      specialties: ["Motor Sporları"]
    },
    {
      slug: "nalan-pekel",
      name: "Nalan Pekel",
      since: 2013,
      rating: 4.8,
      privatePrice: 4100,
      groupPrice: 2050,
      corporate: false,
      online: false,
      location: "Kocaeli",
      bio: "Kocaeli'de motor sporları okulu, off-road eğitmeni.",
      specialties: ["Motor Sporları"]
    }
  ],
  description: "Motor sporları temelleri, pist sürüşü, güvenlik, araç kontrolü.",
  whyTake: "Adrenalin dolu bir dünyaya adım atın.",
  employmentAreas: "Pistler, yarış takımları.",
  requirements: "Ehliyet sahibi olmak."
},
{
  slug: "okculuk-dersi",
  title: "Okçuluk Dersi",
  category: "Spor",
  breadcrumb: "Spor > Okçuluk",
  image: "/images/spor.jpg",
  instructors: [
    {
      slug: "suat-seren",
      name: "Suat Şeren",
      since: 2013,
      rating: 4.8,
      privatePrice: 2400,
      groupPrice: 1200,
      corporate: true,
      online: false,
      location: "İstanbul Avrupa Yakası",
      bio: "Okçuluk antrenörü, geleneksel ve modern okçuluk.",
      specialties: ["Okçuluk"]
    },
    {
      slug: "meral-baydar",
      name: "Meral Baydar",
      since: 2015,
      rating: 4.6,
      privatePrice: 2000,
      groupPrice: 1000,
      corporate: false,
      online: false,
      location: "Konya",
      bio: "Konya'da okçuluk okulu, genç milli takım antrenörü.",
      specialties: ["Okçuluk"]
    }
  ],
  description: "Okçuluk temel duruş, nişan alma, yay çekme ve hedef vurma.",
  whyTake: "Konsantrasyon ve sabrı geliştiren kadim bir spor.",
  employmentAreas: "Spor kulüpleri, okçuluk dernekleri.",
  requirements: "8 yaş ve üzeri."
},
{
  slug: "rafting-dersi",
  title: "Rafting Dersi",
  category: "Spor",
  breadcrumb: "Spor > Rafting",
  image: "/images/spor.jpg",
  instructors: [
    {
      slug: "ercument-unal",
      name: "Ercüment Ünal",
      since: 2012,
      rating: 4.8,
      privatePrice: 2700,
      groupPrice: 1350,
      corporate: true,
      online: false,
      location: "İstanbul Avrupa Yakası",
      bio: "Rafting rehberi, akarsu kurtarma uzmanı, uluslararası deneyim.",
      specialties: ["Rafting"]
    },
    {
      slug: "jale-tarcan",
      name: "Jale Tarcan",
      since: 2014,
      rating: 4.6,
      privatePrice: 2300,
      groupPrice: 1150,
      corporate: false,
      online: false,
      location: "Rize",
      bio: "Rize'de rafting eğitmeni, Fırtına Deresi'nde rehber.",
      specialties: ["Rafting"]
    }
  ],
  description: "Rafting temel kürek teknikleri, akıntı okuma, güvenlik.",
  whyTake: "Heyecan verici bir doğa sporuyla takım ruhunu yaşayın.",
  employmentAreas: "Rafting şirketleri, turizm.",
  requirements: "Yüzme bilmek, iyi kondisyon."
},
{
  slug: "ruzgar-sorfu-dersi",
  title: "Rüzgar Sörfü Dersi",
  category: "Spor",
  breadcrumb: "Spor > Rüzgar Sörfü",
  image: "/images/spor.jpg",
  instructors: [
    {
      slug: "cengiz-ortak",
      name: "Cengiz Ortak",
      since: 2011,
      rating: 4.9,
      privatePrice: 3200,
      groupPrice: 1600,
      corporate: true,
      online: false,
      location: "İstanbul Avrupa Yakası",
      bio: "Rüzgar sörfü eğitmeni, yelken federasyonu sertifikalı.",
      specialties: ["Rüzgar Sörfü"]
    },
    {
      slug: "sema-apaydin",
      name: "Sema Apaydın",
      since: 2013,
      rating: 4.7,
      privatePrice: 2800,
      groupPrice: 1400,
      corporate: false,
      online: false,
      location: "Muğla",
      bio: "Muğla'da rüzgar sörfü okulu, Bodrum'da eğitmen.",
      specialties: ["Rüzgar Sörfü"]
    }
  ],
  description: "Rüzgar sörfü temel denge, yelken kontrolü, rüzgarı kullanma.",
  whyTake: "Deniz ve rüzgarla dans edin, özgürlüğü hissedin.",
  employmentAreas: "Sörf okulları, tatil köyleri.",
  requirements: "Yüzme bilmek."
},
{
  slug: "satranc-dersi",
  title: "Satranç Dersi",
  category: "Spor",
  breadcrumb: "Spor > Satranç",
  image: "/images/spor.jpg",
  instructors: [
    {
      slug: "hayati-kaya",
      name: "Hayati Kaya",
      since: 2014,
      rating: 4.7,
      privatePrice: 1800,
      groupPrice: 900,
      corporate: true,
      online: true,
      location: "İstanbul Avrupa Yakası",
      bio: "Satranç antrenörü, FIDE eğitmeni, turnuva oyuncusu.",
      specialties: ["Satranç"]
    },
    {
      slug: "emel-rona",
      name: "Emel Rona",
      since: 2016,
      rating: 4.5,
      privatePrice: 1600,
      groupPrice: 800,
      corporate: false,
      online: true,
      location: "Ankara",
      bio: "Ankara'da satranç okulu, çocuklara özel dersler.",
      specialties: ["Satranç"]
    }
  ],
  description: "Satranç temel kurallar, strateji, taktik ve açılış bilgisi.",
  whyTake: "Zihinsel becerilerinizi geliştirin, analitik düşünün.",
  employmentAreas: "Satranç kulüpleri, okullar.",
  requirements: "Her seviyeye uygun."
},
{
  slug: "sorf-dersi",
  title: "Sörf Dersi",
  category: "Spor",
  breadcrumb: "Spor > Sörf",
  image: "/images/spor.jpg",
  instructors: [
    {
      slug: "savas-akin",
      name: "Savaş Akın",
      since: 2012,
      rating: 4.8,
      privatePrice: 3100,
      groupPrice: 1550,
      corporate: true,
      online: false,
      location: "İstanbul Avrupa Yakası",
      bio: "Sörf antrenörü, dalga takibi, güvenli sörf teknikleri.",
      specialties: ["Sörf"]
    },
    {
      slug: "alev-soyer",
      name: "Alev Soyer",
      since: 2014,
      rating: 4.6,
      privatePrice: 2700,
      groupPrice: 1350,
      corporate: false,
      online: false,
      location: "İzmir",
      bio: "İzmir'de sörf okulu, Çeşme'de eğitmen.",
      specialties: ["Sörf"]
    }
  ],
  description: "Sörf temel duruş, kürek çekme, dalga yakalama ve kalkma.",
  whyTake: "Okyanus dalgalarıyla mücadele etmenin keyfini yaşayın.",
  employmentAreas: "Sörf okulları, tatil beldeleri.",
  requirements: "Yüzme bilmek, iyi kondisyon."
},
{
  slug: "sportif-havacilik-dersi",
  title: "Sportif Havacılık Dersi",
  category: "Spor",
  breadcrumb: "Spor > Havacılık",
  image: "/images/spor.jpg",
  instructors: [
    {
      slug: "cevahir-can",
      name: "Cevahir Can",
      since: 2009,
      rating: 5.0,
      privatePrice: 5200,
      groupPrice: 2600,
      corporate: true,
      online: false,
      location: "İstanbul Avrupa Yakası",
      bio: "Yelken kanat ve yamaç paraşütü eğitmeni, binlerce uçuş.",
      specialties: ["Sportif Havacılık"]
    },
    {
      slug: "fusun-kutlu",
      name: "Füsun Kutlu",
      since: 2012,
      rating: 4.9,
      privatePrice: 4800,
      groupPrice: 2400,
      corporate: false,
      online: false,
      location: "Eskişehir",
      bio: "Eskişehir'de planör eğitmeni, hava sporları kulübü.",
      specialties: ["Sportif Havacılık"]
    }
  ],
  description: "Yamaç paraşütü, yelken kanat, planör gibi hava sporları temel eğitimi.",
  whyTake: "Gökyüzünde özgürce süzülmenin heyecanını yaşayın.",
  employmentAreas: "Hava sporları merkezleri, turizm.",
  requirements: "Sağlık raporu, cesaret."
},
{
  slug: "tenis-dersi",
  title: "Tenis Dersi",
  category: "Spor",
  breadcrumb: "Spor > Tenis",
  image: "/images/spor.jpg",
  instructors: [
    {
      slug: "oguz-sever",
      name: "Oğuz Sever",
      since: 2013,
      rating: 4.8,
      privatePrice: 2500,
      groupPrice: 1250,
      corporate: true,
      online: false,
      location: "İstanbul Avrupa Yakası",
      bio: "Tenis antrenörü, ITF sertifikalı, gençlik gelişim uzmanı.",
      specialties: ["Tenis"]
    },
    {
      slug: "lale-ongor",
      name: "Lale Öngör",
      since: 2015,
      rating: 4.6,
      privatePrice: 2200,
      groupPrice: 1100,
      corporate: false,
      online: false,
      location: "Antalya",
      bio: "Antalya'da tenis okulu, kort tenisi eğitmeni.",
      specialties: ["Tenis"]
    }
  ],
  description: "Tenis temel vuruşlar, servis, vole ve maç taktikleri.",
  whyTake: "Zarif ve dinamik bir sporla tanışın.",
  employmentAreas: "Tenis kulüpleri, spor merkezleri.",
  requirements: "Her seviyeye uygun."
},
{
  slug: "tirmanis-dersi",
  title: "Tırmanış Dersi",
  category: "Spor",
  breadcrumb: "Spor > Tırmanış",
  image: "/images/spor.jpg",
  instructors: [
    {
      slug: "yaman-akpinar",
      name: "Yaman Akpınar",
      since: 2012,
      rating: 4.8,
      privatePrice: 2600,
      groupPrice: 1300,
      corporate: true,
      online: false,
      location: "İstanbul Avrupa Yakası",
      bio: "Kaya tırmanışı antrenörü, dağcılık federasyonu eğitmeni.",
      specialties: ["Tırmanış"]
    },
    {
      slug: "gungor-yasar",
      name: "Güngör Yaşar",
      since: 2014,
      rating: 4.6,
      privatePrice: 2300,
      groupPrice: 1150,
      corporate: false,
      online: false,
      location: "Bursa",
      bio: "Bursa'da tırmanış salonu, spor tırmanış eğitmeni.",
      specialties: ["Tırmanış"]
    }
  ],
  description: "Tırmanış temel teknikleri, güvenlik, ekipman kullanımı, ip geçişleri.",
  whyTake: "Fiziksel ve zihinsel gücünüzü sınayın.",
  employmentAreas: "Tırmanış salonları, doğa sporları kulüpleri.",
  requirements: "Fiziksel yeterlilik."
},
{
  slug: "voleybol-dersi",
  title: "Voleybol Dersi",
  category: "Spor",
  breadcrumb: "Spor > Voleybol",
  image: "/images/spor.jpg",
  instructors: [
    {
      slug: "ayvaz-gunes",
      name: "Ayvaz Güneş",
      since: 2013,
      rating: 4.7,
      privatePrice: 2100,
      groupPrice: 1050,
      corporate: true,
      online: false,
      location: "İstanbul Avrupa Yakası",
      bio: "Voleybol antrenörü, plaj voleybolu uzmanı.",
      specialties: ["Voleybol"]
    },
    {
      slug: "perran-sozeri",
      name: "Perran Sözeri",
      since: 2015,
      rating: 4.5,
      privatePrice: 1850,
      groupPrice: 925,
      corporate: false,
      online: false,
      location: "İzmir",
      bio: "İzmir'de voleybol okulu, altyapı antrenörü.",
      specialties: ["Voleybol"]
    }
  ],
  description: "Voleybol temel teknikler, pas, smaç, blok ve oyun sistemi.",
  whyTake: "Takım sporuyla eğlenirken boyunuzu geliştirin.",
  employmentAreas: "Voleybol kulüpleri, okullar.",
  requirements: "Her seviyeye uygun."
},
{
  slug: "vucut-gelistirme-dersi",
  title: "Vücut Geliştirme Dersi",
  category: "Spor",
  breadcrumb: "Spor > Vücut Geliştirme",
  image: "/images/spor.jpg",
  instructors: [
    {
      slug: "behcet-arslan",
      name: "Behçet Arslan",
      since: 2012,
      rating: 4.8,
      privatePrice: 2300,
      groupPrice: 1150,
      corporate: true,
      online: false,
      location: "İstanbul Avrupa Yakası",
      bio: "Vücut geliştirme antrenörü, beslenme uzmanı, yarışmacı.",
      specialties: ["Vücut Geliştirme"]
    },
    {
      slug: "mufide-ergen",
      name: "Müfide Ergen",
      since: 2014,
      rating: 4.6,
      privatePrice: 1950,
      groupPrice: 975,
      corporate: false,
      online: false,
      location: "Ankara",
      bio: "Ankara'da fitness ve vücut geliştirme koçu.",
      specialties: ["Vücut Geliştirme"]
    }
  ],
  description: "Vücut geliştirme temel prensipleri, ağırlık çalışmaları, beslenme.",
  whyTake: "Hedeflediğiniz fiziğe ulaşın, sağlıklı yaşayın.",
  employmentAreas: "Spor salonları, kişisel antrenörlük.",
  requirements: "Sağlık raporu."
},
{
  slug: "yamac-parasutu-dersi",
  title: "Yamaç Paraşütü Dersi",
  category: "Spor",
  breadcrumb: "Spor > Yamaç Paraşütü",
  image: "/images/spor.jpg",
  instructors: [
    {
      slug: "tufan-ozer",
      name: "Tufan Özer",
      since: 2011,
      rating: 4.9,
      privatePrice: 3400,
      groupPrice: 1700,
      corporate: true,
      online: false,
      location: "İstanbul Avrupa Yakası",
      bio: "Yamaç paraşütü eğitmeni, THK sertifikalı, binlerce uçuş.",
      specialties: ["Yamaç Paraşütü"]
    },
    {
      slug: "mehtap-uzgoren",
      name: "Mehtap Uzgören",
      since: 2013,
      rating: 4.7,
      privatePrice: 3000,
      groupPrice: 1500,
      corporate: false,
      online: false,
      location: "Muğla",
      bio: "Muğla'da yamaç paraşütü okulu, tandem pilot.",
      specialties: ["Yamaç Paraşütü"]
    }
  ],
  description: "Yamaç paraşütü temel eğitim, uçuş teorisi, güvenlik ve pratik.",
  whyTake: "Kuş bakışı manzarayı izleyerek özgürlüğü hissedin.",
  employmentAreas: "Havacılık okulları, turizm.",
  requirements: "Sağlık raporu, hafiflik."
},
{
  slug: "yelkencilik-dersi",
  title: "Yelkencilik Dersi",
  category: "Spor",
  breadcrumb: "Spor > Yelkencilik",
  image: "/images/spor.jpg",
  instructors: [
    {
      slug: "atalay-sonmez",
      name: "Atalay Sönmez",
      since: 2010,
      rating: 5.0,
      privatePrice: 3600,
      groupPrice: 1800,
      corporate: true,
      online: false,
      location: "İstanbul Avrupa Yakası",
      bio: "Yelken antrenörü, denizci, yarış takımı kaptanı.",
      specialties: ["Yelkencilik"]
    },
    {
      slug: "handan-ergor",
      name: "Handan Ergör",
      since: 2012,
      rating: 4.8,
      privatePrice: 3200,
      groupPrice: 1600,
      corporate: false,
      online: false,
      location: "İzmir",
      bio: "İzmir'de yelken okulu, genç takım antrenörü.",
      specialties: ["Yelkencilik"]
    }
  ],
  description: "Yelkencilik temel dümen kullanımı, yelken trimleme, seyir.",
  whyTake: "Denizle iç içe, rüzgarın gücünü kullanmayı öğrenin.",
  employmentAreas: "Yat kulüpleri, yelken okulları.",
  requirements: "Yüzme bilmek."
},
{
  slug: "yoga-dersi",
  title: "Yoga Dersi",
  category: "Spor",
  breadcrumb: "Spor > Yoga",
  image: "/images/spor.jpg",
  instructors: [
    {
      slug: "ergun-ucar",
      name: "Ergun Uçar",
      since: 2013,
      rating: 4.7,
      privatePrice: 1900,
      groupPrice: 950,
      corporate: true,
      online: true,
      location: "İstanbul Avrupa Yakası",
      bio: "Yoga eğitmeni, Hatha ve Vinyasa stilleri, 10 yıl deneyim.",
      specialties: ["Yoga"]
    },
    {
      slug: "asuman-toy",
      name: "Asuman Toy",
      since: 2015,
      rating: 4.5,
      privatePrice: 1700,
      groupPrice: 850,
      corporate: false,
      online: true,
      location: "Bursa",
      bio: "Bursa'da yoga stüdyosu, hamile yogası ve meditasyon.",
      specialties: ["Yoga"]
    }
  ],
  description: "Yoga temel duruşlar, nefes teknikleri, meditasyon ve gevşeme.",
  whyTake: "Stres atın, esnekliğinizi artırın ve iç huzuru bulun.",
  employmentAreas: "Yoga stüdyoları, spor salonları.",
  requirements: "Her seviyeye uygun."
},
{
  slug: "yuzme-dersi",
  title: "Yüzme Dersi",
  category: "Spor",
  breadcrumb: "Spor > Yüzme",
  image: "/images/spor.jpg",
  instructors: [
    {
      slug: "bilge-ediz",
      name: "Bilge Ediz",
      since: 2014,
      rating: 4.6,
      privatePrice: 1800,
      groupPrice: 900,
      corporate: true,
      online: false,
      location: "İstanbul Avrupa Yakası",
      bio: "Yüzme antrenörü, cankurtaran, çocuklara özel dersler.",
      specialties: ["Yüzme"]
    },
    {
      slug: "kenan-isik",
      name: "Kenan Işık",
      since: 2015,
      rating: 4.5,
      privatePrice: 1600,
      groupPrice: 800,
      corporate: false,
      online: false,
      location: "Mersin",
      bio: "Mersin'de yüzme okulu, yetişkin grupları.",
      specialties: ["Yüzme"]
    }
  ],
  description: "Yüzme temel stiller (serbest, sırtüstü, kurbağama), nefes alma, suda güvenlik.",
  whyTake: "Hayati bir beceri kazanın ve formda kalın.",
  employmentAreas: "Yüzme havuzları, spor kulüpleri.",
  requirements: "Su korkusu olmamalı."
},
{
  slug: "zumba-dersi",
  title: "Zumba Dersi",
  category: "Spor",
  breadcrumb: "Spor > Zumba",
  image: "/images/spor.jpg",
  instructors: [
    {
      slug: "nese-soysal",
      name: "Neşe Soysal",
      since: 2015,
      rating: 4.6,
      privatePrice: 1700,
      groupPrice: 850,
      corporate: true,
      online: false,
      location: "İstanbul Avrupa Yakası",
      bio: "Zumba eğitmeni, dansçı, grup dersleri uzmanı.",
      specialties: ["Zumba"]
    },
    {
      slug: "celal-ozsan",
      name: "Celal Özsan",
      since: 2016,
      rating: 4.4,
      privatePrice: 1500,
      groupPrice: 750,
      corporate: false,
      online: false,
      location: "Antalya",
      bio: "Antalya'da zumba ve aerobik eğitmeni.",
      specialties: ["Zumba"]
    }
  ],
  description: "Eğlenceli müzikler eşliğinde dans ederek kalori yakın, formda kalın.",
  whyTake: "Sıkılmadan egzersiz yapmanın en keyifli yolu.",
  employmentAreas: "Spor salonları, dans stüdyoları.",
  requirements: "Her seviyeye uygun."
}
];