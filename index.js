const siteContent = {
  // BU NESNEYİ DEĞİŞTİRMEYİN
  nav: {
    'nav-item-1': 'Eğitimler',
    'nav-item-2': 'Eğitmenler',
    'nav-item-3': 'Sorular',
    'nav-item-4': 'Blog',
    'nav-item-5': 'Hakkımızda',
    'nav-item-6': 'İletişim',
  },
  cta: {
    h1: 'Full Stack Web Developer',
    button: 'Kayıt Olun',
  },
  'top-content': {
    'left-h4': 'Kabul Şartları',
    'left-content':
      'Öğrencilerimizde en başta şu iki özelliği arıyoruz: yazılımcı olmak için gereken analitik yatkınlık (ki bunu C-CAT testi ile ölçüyoruz) ve yazılımcı olma konusunda istek ve kararlılık. Şirket olarak başlangıçta öğretim ücreti almıyoruz ve her yetiştirdiğimiz öğrenci için bir maliyetin altına giriyoruz. Bu sebeple, mezun olup başarılı bir kariyere sahip olacağını öngördüğümüz öğrencilere öncelik vermeye gayret ediyoruz.',
    'right-h4': 'Haftalık Program',
    'right-content':
      'Program haftada 40 saatinizi talep ediyor. Tam zamanlı bir işte çalışırken bu zamanı ayırmanız maalesef mümkün değil. Ancak, part-time bir iş veya daha az zorlayıcı son sınıf dersleriyle program rahatlıkla tamamlanabilir. Programın sunduğu önemli bir kolaylık da her ay yeni bir sınıfın açılıyor oluşu.',
  },
  'bottom-content': {
    'left-h4': 'EN YETENEKLİLERİ 6 AY YETİŞTİRİYORUZ.',
    'left-content':
      "Workintech olarak binlerce başvurudan potansiyeli en yüksek olanları seçiyoruz. Her 9 başvurudan 1'i programımıza kabul alıyor. 6 ay süresince Full-Stack Yazılımcı olarak yetiştiriyoruz.",
    'middle-h4': "BOOTCAMPLER'DEN FARKLI-İLK GÜNDEN İŞE HAZIR ADAYLAR",
    'middle-content':
      'Workintech eğitim programı sıfırdan yazılımcı yetiştiren, toplamı bin saati aşan, yoğun ve zorlayıcı bir eğitim. Daha kısa süreli kurslara oranla çok daha sağlam bir temel atıyoruz. Ayrıca Workintech´te sınıf başına bir ücret ödemeniz gerekmiyor.',
    'right-h4':
      'ŞİRKETİNİZE EN UYGUN ADAYLARI SİZİN İÇİN İŞE HAZIR HALE GETİRİYORUZ',
    'right-content':
      "Workintech´in size özel atanmış ise alım uzmanı yıl boyunca sizi en ideal adaylarla buluşturuyor. Programın son aylarında seçtiğiniz adaylar için staj, part-time, oryantasyon gibi programlarınızı Workintech'e entegre etme imkanı sağlıyoruz. Böylece yeni çalışanınız daha ilk günden işe hazır hale geliyor.",
  },
  contact: {
    'contact-h4': 'İLETİŞİM',
    address: 'Bağdat Cad. No:302/1 D:4 Kadıköy İstanbul, Türkiye',
    phone: '+90 (216) 550-5905',
    email: 'bilgi@birsirketsitesi.com.tr',
  },
  footer: {
    copyright: 'Copyright Bir Şirket Sitesi 2023',
  },
  images: {
    'logo-img': 'https://i.ibb.co/WcRzs8P/logo.png',
    'cta-img': 'https://i.ibb.co/qjynQRy/cta.png',
    'accent-img': 'https://i.ibb.co/HXgFXcR/accent.png',
  },
};

/* Kodlar Buradan aşağıya */

function createDom(domTag, domclass) {
  let tempDom = document.createElement(domTag);
  if (domclass) {
    tempDom.classList.add(domclass);
  }
}

function setNav() {
  let navElement = document.querySelectorAll('nav a');
  navElement.forEach((item, index) => {
    item.textContent = siteContent.nav[`nav-item-${index + 1}`];
  });
}

function setTextH1() {
  let domElement = document.querySelector('.cta-text h1');
  domElement.textContent = siteContent.cta.h1;
}

function setTextButton() {
  let domElement = document.querySelector('.cta-text button');
  domElement.textContent = siteContent.cta.button;
}

function checkTopContentOfH4() {
  let domElement = document.querySelectorAll('.top-content h4');
  for (let i = 0; i < domElement.length; i++) {
    if (i === 0) {
      domElement[i].textContent = siteContent['top-content']['left-h4'];
    } else {
      domElement[i].textContent = siteContent['top-content']['right-h4'];
    }
  }
}

function checkTopContentOfP() {
  let domElement = document.querySelectorAll('.top-content p');
  for (let i = 0; i < domElement.length; i++) {
    if (i === 0) {
      domElement[i].textContent = siteContent['top-content']['left-content'];
    } else {
      domElement[i].textContent = siteContent['top-content']['right-content'];
    }
  }
}

function checkBottomContentOfH4() {
  let domElement = document.querySelectorAll('.bottom-content h4');
  for (let i = 0; i < domElement.length; i++) {
    if (i === 0) {
      domElement[i].textContent = siteContent['bottom-content']['left-h4'];
    } else if (i === 1) {
      domElement[i].textContent = siteContent['bottom-content']['middle-h4'];
    } else {
      domElement[i].textContent = siteContent['bottom-content']['right-h4'];
    }
  }
}

function checkBottomContentOfP() {
  let domElement = document.querySelectorAll('.bottom-content p');
  for (let i = 0; i < domElement.length; i++) {
    if (i === 0) {
      domElement[i].textContent = siteContent['bottom-content']['left-content'];
    } else if (i === 1) {
      domElement[i].textContent =
        siteContent['bottom-content']['middle-content'];
    } else {
      domElement[i].textContent =
        siteContent['bottom-content']['right-content'];
    }
  }
}

function checkContact() {
  let domElement = document.querySelector('.contact').children;
  domElement[0].textContent = siteContent.contact['contact-h4'];
  domElement[1].textContent = siteContent.contact.address;
  domElement[2].textContent = siteContent.contact.phone;
  domElement[3].textContent = siteContent.contact.email;
}

function checkFooter() {
  let domElement = document.querySelector('footer a');
  domElement.textContent = siteContent.footer.copyright;
  domElement.classList.add('bold');
}

function logoImg() {
  let domElement = document.getElementById('logo-img');
  domElement.setAttribute('src', siteContent.images['logo-img']);
}

function checkSrc() {
  let domElement = document.getElementById('cta-img');
  if (domElement.hasAttribute('src')) {
    domElement.setAttribute('src', siteContent.images['cta-img']);
  } else domElement.setAttribute('src', siteContent.images['cta-img']);

  /*
  if (domElement.getAttribute('src') === siteContent.images['cta-img']) {
    
  }

  /*
  domElement.getAttribute('src') === siteContent.images['cta-img']
    ? true
    : false;
  */
  /*  
  let imgElement = domElement
    .getAttribute('src')
    .matches(siteContent.images['cta-img']);
  return imgElement;
 */
  /*
  if (domElement.getAttribute('src').match(siteContent.images['cta-img'])) {
    console.log(true);
  }
  */
  /*
  if (domElement.getAttribute('src').includes(siteContent.images['cta-img'])) {
    console.log(true);
  } else {
    console.log(false);
  }
  */
}

function checkMiddleSrc() {
  let domElement = document.getElementById('middle-img');
  if (domElement.hasAttribute('src')) {
    domElement.setAttribute('src', siteContent.images['accent-img']);
  } else domElement.setAttribute('src', siteContent.images['accent-img']);
}

function italicMenu() {
  let domElement = document.querySelectorAll('nav a');
  domElement.forEach((item) => {
    item.classList.add('italic');
  });
}

document.addEventListener('DOMContentLoaded', function () {
  setNav();
  setTextH1();
  setTextButton();
  checkTopContentOfH4();
  checkTopContentOfP();
  checkBottomContentOfH4();
  checkBottomContentOfP();
  checkContact();
  checkFooter();
  logoImg();
  checkSrc();
  checkMiddleSrc();
  italicMenu();
});
