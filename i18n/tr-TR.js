module.exports = {
  common: {
    an_error_occurred: 'Bir hata oluştu',
    page_not_found: 'sayfası bulunamadı',
    please_define_title: 'Please define a title in the front matter',
    please_define_description:
      'Please define a description in the front matter',
    search: 'Ara (tıkla ya da "/")',
    version: 'Sürüm'
  },
  iso: 'tr',

  links: {
    download: 'İndir',
    live_edit: 'Canlı Düzenleme'
  },
  header: {
    links: [
      {
        name: 'Rehberler',
        slug: 'guides',
        type: 'newDocs',
        routeName: 'guides-book-slug'
      },
      {
        name: 'Rehber',
        slug: 'guide',
        type: 'dynamic',
        routeName: 'section-slug'
      },
      {
        name: 'API',
        slug: 'api',
        type: 'dynamic',
        routeName: 'section-slug'
      },
      {
        name: 'Örnekler',
        slug: 'examples',
        type: 'dynamic',
        routeName: 'section-slug'
      },
      {
        name: 'SSS',
        slug: 'faq',
        type: 'dynamic',
        routeName: 'section-slug'
      },
      {
        name: 'Kaynaklar',
        slug: 'resources',
        type: 'static'
      },
      {
        name: 'Blog',
        slug: 'blog',
        type: 'static'
      }
    ],
    search: {
      placeholder: 'Ara (tıkla ya da "/")'
    }
  },
  homepage: {
    meta: {
      title: 'Nuxt.js - Sezgisel Vue Sistemi',
      description:
        'Bir sonraki Vue.js uygulamanızı, NuxtJS ile güvenli bir şekilde programlayın. Web geliştirmeyi basit ve güçlü kılan açık kaynak bir sistem.'
    },
    welcome: {
      title: 'Sezgisel {br} {frameworkType} Sistemi',
      description:
        'Bir sonraki Vue.js uygulamanızı, NuxtJS ile güvenli bir şekilde programlayın. Web geliştirmeyi basit ve güçlü kılan {openSource} bir sistem.',
      openSource: 'açık kaynak',
      get_started: 'başlarken',
      get_updates: 'Her ay gelen kutunuza NuxtJS güncellemelerini alın',
      video:
        "Video {company} tarafından hazırlanmıştır, ücretsiz {cheatSheet}'nu indirin.",
      cheatSheet: 'Nuxt Kullanım Kılavuzu'
    },
    why: {
      title: 'Neden {nuxt}',
      try_nuxtjs_online: "NuxtJS'yi Deneyin",
      enjoyable: {
        title: 'Eğlenceli',
        description:
          "Ana amacımız Geliştirici Deneyimini geliştirmektir. Nuxt.js'yi seviyoruz ve sistemi sürekli olarak sizin de sevmenizi hedefliyoruz! 💚 {break} Kolay çözümler, açıklayıcı hata mesajları, güçlü varsayılanlar ve ayrıntılı dokümantasyona hazır olun! Eğer bir sorunla karşılaşır veya bir soru sormak isterseniz, yardımsever topluluğumuz size yardımcı olacaktır."
      },
      modular: {
        title: 'Modüler',
        description:
          "Nuxt modüler bir yapı üzerine kurulmuştur. Geliştirme aşamanızı hızlandırıp kolaylaştıracak 50'den fazla modüle kolayca erişebilirsiniz. PWA ayrıcalıklarına erişmek, uygulamanızı Google Analytics'e bağlamak veya bir site haritası oluşturmak için tekerleği yeniden icat etmenize gerek yok!"
      },
      performant: {
        title: 'Performanslı',
        description:
          "Nuxt.js ile, uygulamanız kutudan çıktığı haliyle optimize edilmiş olacaktır. Vue.js ve Node.js pratiklerini en iyi şekilde kullanıp sizlere en güçlü performans sunan bir sistem geliştirmeye çalışıyoruz. Gereği olmayan en küçük ayrıntıya kadar Nuxt'un imkanları sayesinde uygulamanız her zaman optimize edilmiş bir şekilde çalışır."
      }
    },
    companies: {
      title: 'Kimler {nuxt} kullanıyor?'
    },
    modes: {
      title: '{nuxt} işlemesi',
      ssr: {
        title: 'Sunucu Taraflı İşleme',
        description:
          'Bu mod, Nuxt\'un en popüler modudur. STİ (SSR), "universal" veya "isomorphic" olarak isimlendirdiğimiz bu mod, saf javascript kullanıp Vue komponentlerinizi kullanıcılara sunmaktansa, bir Node.js sunucusu kullanıp bunları sunucuda işleyerek sitenize HTML bazlı olarak çıktı verecektir. STİ kullanmak, büyük bir SEO puanı takviyesi almanıza sebep olacaktır, daha iyi kullanıcı deneyimi ve Vue SPA ile karşılaştırıldığında daha fazla imkanınız olacaktır.{break}STİ\'yi kendi başınıza uygulamanıza uyarlamak zorlu olabilir, Nuxt.js sizlere bunu hazır bir şekilde sunar ve bilinen bir çok ayarı sizin için yapar.'
      },
      spa: {
        title: 'Tek Sayfalı Uygulama (SPA)',
        description:
          "STİ'ye veya Statik Site Oluşturma'ya ihtiyacınız yok ancak yine de Nuxt'un sağladığı özelliklerden yararlanmak mı istiyorsunuz? Veya uygulamanızı dönüştürmek istiyor ve hafif bir yükle başlamak mı istiyorsunuz? O halde SPA modu sizin ihtiyacınızı karşılayacaktır. Sonuç, Vue SPA ile aynı olacaktır ancak ayarlar ve Nuxt sisteminin sağladığı ayrıcalıkları kullanabileceksiniz."
      },
      ssg: {
        title: 'Statik Olarak Oluşturma',
        description:
          'Statik Site Oluşturma bu sıralar çok popüler bir oluştur. Bir başka sisteme geçip alışmakla zaman kaybetmek yerine neden bir taşla iki kuş vurmayasınız ki? {proverbial} Nuxt.js, Vue uygulamanıza bağlı olarak statik bir site oluşturabilir. Buna ayrıca "her iki tarafın da en iyisi" denilir çünkü bir sunucuya ihtiyacınız olmadığı halde Nuxt\'un tüm sayfaları önceden işleyerek verdiği sonuçlar doğrultusunda tüm SEO ayrıcalıklarına erişebilirsiniz. Ayrıca, bu yöntemle oluşturduğunuz sayfalarınızı kolaylıkla Netlify veya GitHub sayfalarınızda kullanabilirsiniz. ',
        proverbial: 'sadece atasözü olarak elbette'
      }
    },
    sponsors: {
      title: 'Sponsorlar',
      description:
        "NuxtJS, MIT lisanslı açık kaynak ve kullanması tamamen ücretsiz bir projedir. Yine de, projeyi ayakta tutmak, yeni özellikler eklemek için sarf edilen efor ve emek finansal destek gerektirmektedir. Eğer bir işletme yürütüyorsanız ve işletmenizde Nuxt kullanıp kazanç sağlıyorsanız, Nuxt'u desteklemek işletmeler kitabında mantıklı olacaktır. Böylece sizin işletmeniz ve Nuxt ayakta durabilir ve güncelleme almaya devam edebilir. Sponsor olmak, ayrıca sizi Vue/Nuxt topluluğuna sokacaktır ve bu toplulukta Vue/Nuxt geliştiricilerine ulaşmanıza kolaylık sağlayacaktır. Eğer Nuxt kullanıyor ve memnun kalıyorsanız, minnettarlığınızı göstermek amacıyla bağış yapmayı unutmayın.",
      become_a_sponsor: 'Sponsor ol'
    },
    newsletter: {
      title: '{nuxt} Bülteni',
      description:
        'Çekirdek ekibi ve katkıda bulunanlar tarafından yönetilen en son Nuxt haberlerine gelen kutunuzdan ulaşın.',
      form: {
        email: 'Eposta',
        subscribing: 'Abone olunuyor...',
        subscribe: 'Abone Ol',
        subscribed_messages: {
          pre: 'Aboneliğinizi onaylamak için epostanıza bir eposta gönderildi',
          post: '💚'
        }
      }
    }
  },
  design: {
    title: 'Tasarım',
    description:
      "NuxtJS, MIT lisansı açık kaynak bir projedir ve kullanması tamamen ücretsizdir. Burada gördüğünüz logolarımızı NuxtJS'yi ve nuxtjs.org'u belirttiğiniz takdirde istediğiniz gibi kullanabilirsiniz.",
    other_download_message:
      "Aynı zamanda isterseniz {favicon}'umuzu veya {sketch} dosyamızı indirebilirsiniz."
  },
  resources: {
    title: 'Kaynaklar',
    description:
      'Partnerimiz tarafından hazırlanan kaynaklara göz atın. Buradaki bağlantıları kullanarak bizlere  Açık Kaynak Sistem projemizi geliştirmemizde destek oluyorsunuz.',
    themes: {
      title: 'Temalar'
    },
    videos: {
      title: 'Videolu Kurslar'
    }
  },
  shop: {
    title: 'Mağaza',
    description:
      'NuxtJS projesine desteğinizi göstermek ve topluluğun geri kalanına sevginizi göstermek mi istiyorsunuz? Doğru yerdesiniz, buradan en kaliteli ürünlerimize ulaşabilirsiniz!'
  },
  team: {
    title: 'Ekip',
    description:
      "NuxtJS ve ekosistemiminin gelişimi uluslararası bir ekip tarafından kılavuzlanmıştır. Nuxt'u iyileştirmek için sürekli çabalayan ve çalışan bir ekibe sahibiz."
  },
  themes: {
    title: 'Temalar',
    description:
      "Creative Tim ve Theme Forest'daki partnerlerimiz tarafından hazırlanan temalara göz atarak NuxtJS ile yapılmış bir uygulamanın gerçek kullanımda nasıl gözüktüğünü görebilirsiniz."
  },
  'video-courses': {
    title: 'Video Kursları',
    description:
      'Aşağıdaki VueSchool tarafından hazırlanan video kurslarımız ile Nuxt.js sistemi hakkında daha fazla keşif yapabilir ve daha fazla bilgiye sahip olabilirsiniz.',
    cta: {
      discover: "Vueschool'u keşfet",
      start: 'KURSU BAŞLAT'
    }
  },
  sponsor: {
    title: {
      pre: '',
      post: 'Gelişimine Destek Ol'
    },
    description:
      'NuxtJS, MIT lisanslı açık kaynak ve kullanması tamamen ücretsiz bir projedir. Yine de, bu proje ve bu proje için yeni özellikler yapmak için sarfedilen efor finansal destek olmadan mümkün olmayacaktır.{break}Aşağıdaki yöntemleri kullanarak NuxtJS gelişimine destek çıkabilirsiniz:',
    donations: {
      title: 'Tek seferlik bağışlar',
      description: 'Bu kanallardan gelen bağışları kabul ediyoruz'
    },
    pledges: {
      title: 'Yinelenen Bağışlar',
      description:
        'Yinelenen bağışlar yanında bir çok özellikle birlikte gelir, örneğin isminizi NuxtJS GitHub deposuna yazdırma, veya şirket logonuzu sitemizde bulundurma... {opencollective} (topluluk çabalarını ve olaylarını destekleyen şeffaf harcama modelleri ile bir fona giriyor) üzerinden bir nuxter veya sponsor olarak bizlere destek olabilirsiniz.'
    },
    become_a_sponsor: 'Sponsor ol'
  },
  support: {
    title: {
      pre: 'Danışmanlık',
      post: 'Destek'
    },
    description:
      '{team}, NuxtJS uygulamalarınız için resmi bir danışmanlık desteği sunuyor. İhtiyacınıza göre teknik destekten, özel geliştirme aşamalarına kadar farklı servisler sağlıyoruz. Bir iş günü içerisinde cevap veriyor ve bu servisi beğenmemeniz durumunda bir NDA imzalayabilir ve paranızın tamamını size geri iletebiliriz.',
    technical: {
      title: 'Teknik destek',
      description:
        'NuxtJS ekibinden proje denetimleri, özel geliştirme işlemleri ve teknik destek alın.',
      start: 'Konuşmayı başlat',
      partner: {
        pre: 'Sizlere daha hızlı hizmet verebilmek için',
        post: 'ile partnerlik sağladık.'
      }
    },
    entreprise: {
      title: 've Kuruluşlar',
      description:
        'NuxtJS ve binlerce diğer paketlerin kuruluşlara abonelik sağlamak için Tidelift adı verilen bir firmayla ortak olarak çalışır.{break} Eğer açık kaynak kodun genişletilebilir olmasını istiyor ve ticari-dereceli yazılımın rahatlığını aynı anda yaşamak istiyorsanız bu tam size göre.',
      partner: {
        pre: '',
        post: 'aboneliği ile ulaşılabilir.'
      },
      learn_more: 'Daha fazla bilgi',
      request_a_demo: 'Bir örnek talep et'
    }
  },
  blog: {
    title: 'NuxtJS Blog',
    description:
      '{nuxtTeam} ve {ambassadors} tarafından hazırlanan NuxtJS gönderilerini ve ipuçlarını keşfedin!',
    ambassadors: 'büyükelçileri',
    contribute:
      'Hata yakaladınız veya bu gönderiye katkıda bulunmak mı istiyorsunuz?'
  },
  guide: {
    release_notes: 'Sürüm Notları',
    toc_title: 'Bu sayfadakiler'
  },
  quiz: {
    title: 'Test'
  },
  tryNewDocs: {
    msg1: 'Yeni dokümanlarımıza göz atmak ister misiniz? ',
    link: 'Yeni dokümanlarımız',
    msg2: 'beta dönemine girdi. Tadını çıkarın!'
  },
  contribute: {
    title: 'Katkıda Bulunanlar',
    docs: 'Hata yakaladınız veya bu dokümana katkıda bulunmak mı istiyorsunuz?',
    blog:
      'Hata yakaladınız veya bu gönderiye katkıda bulunmak mı istiyorsunuz?',
    edit_on_github: "Bu sayfayı GitHub'da düzenleyin!",
    msg1:
      'Bu sayfa için şu anda katkıda bulunamazsınız. Eğer katkıda bulunmak istiyorsanız',
    link: 'buraya tıklayın.'
  },
  codeSandbox: {
    open: "CodeSandbox'ı Aç"
  },
  content: {
    guide: {
      prologue: 'Önsöz',
      'getting-started': 'Başlarken'
    },
    api: {
      essential: 'Gereksinim',
      pages: 'Sayfalar',
      components: 'Komponentler',
      utils: 'Araçlar',
      configuration: 'Konfigurasyon',
      programmatically: 'Programlı',
      internals: 'İç Kısımlar'
    },
    examples: {
      essentials: 'Gereksinimler',
      customization: 'Kişiselleştirme',
      advanced: 'Gelişmiş'
    },
    faq: {
      configuration: 'Konfigurasyon',
      development: 'Geliştirme',
      deployment: 'Yayımlama'
    },
    guides: {
      'get-started': 'Başlarken',
      concepts: 'Konseptler',
      features: 'Özellikler',
      'directory-structure': 'Dosya Sistemi',
      'configuration-glossary': 'Konfigurasyon Sözlüğü',
      'internals-glossary': 'İç Kısım Sözlüğü',
      'components-glossary': 'Komponent Sözlüğü'
    }
  },
  cookies: {
    consent:
      'Kullanıcı analizleri ve sayfa içerisi geliştirmeler yapmak için çerezleri kullanıyoruz.',
    linkLabel: 'Çerezler hakkında bilgi',
    button: 'Tamam'
  }
}