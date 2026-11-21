const translations = {
  en: {
    brand: "ALSUWEDEY", brandSub: "Delivery Services",
    navHome: "Home", navAbout: "About Us", navPartnership: "Partnership", navBulk: "Bulk Parcels",
    navOnline: "Online Platform", navContact: "Contact", navPortals: "Portals", navJoin: "Join Us",
    heroTitle: "Delivering Trust, Every Mile.", heroSub: "Moving what matters across the UAE.",
    heroCta1: "Book a Delivery", aboutTitle: "About Us", aboutBody: "<p>ALSUWEDEY Delivery Services...</p>",
    formSuccess: "✅ Message sent! We will reply soon."
  },
  ar: {
    brand: "السويدي", brandSub: "لخدمات التوصيل",
    navHome: "الرئيسية", navAbout: "من نحن", navPartnership: "الشراكات", navBulk: "الطرود بالجملة",
    navOnline: "المنصة الإلكترونية", navContact: "اتصل بنا", navPortals: "البوابات", navJoin: "انضم إلينا",
    heroTitle: "نوصل الثقة في كل ميل.", heroSub: "ننقل ما يهم في جميع أنحاء الإمارات.",
    heroCta1: "احجز توصيلاً", aboutTitle: "من نحن", aboutBody: "<p>السويدي لخدمات التوصيل...</p>",
    formSuccess: "✅ تم إرسال الرسالة! سنرد قريبا."
  },
  ur: {
    brand: "السويدي", brandSub: "ڈیلیوری سروسز",
    navHome: "ہوم", navAbout: "ہمارے بارے میں", navPartnership: "شراکت داری", navBulk: "بلک پارسلز",
    navOnline: "آن لائن پلیٹ فارم", navContact: "رابطہ", navPortals: "پورٹلز", navJoin: "ہمارے ساتھ شامل ہوں",
    heroTitle: "ہر میل پر اعتبار پہنچانا۔", heroSub: "جو اہم ہے اسے پہنچانا۔",
    heroCta1: "ڈیلیوری بک کریں", aboutTitle: "ہمارے بارے میں", aboutBody: "<p>السويدي ڈیلیوری سروسز...</p>",
    formSuccess: "✅ پیغام بھیج دیا گیا!"
  }
};

let currentLang = 'en';
let currentPage = 'home';

function t(key) { return translations[currentLang]?.[key] ?? translations.en[key] ?? key; }

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = t(key);
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') el.placeholder = val;
    else el.innerHTML = val;
  });
  if (currentPage === 'about') document.querySelector('#page-about .about-text').innerHTML = t('aboutBody');
}

function setLanguage(lang) {
  currentLang = lang;
  const isRTL = (lang === 'ar' || lang === 'ur');
  document.documentElement.lang = lang;
  document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
  document.body.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
  applyTranslations();
  document.getElementById('langSelect').value = lang;
}

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  document.getElementById('themeToggle').textContent = theme === 'dark' ? '☀️' : '🌙';
  localStorage.setItem('theme', theme);
}

function navigate(page) {
  currentPage = page;
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const target = document.getElementById('page-' + page);
  if (target) target.classList.add('active');
  document.querySelectorAll('#mainNav button').forEach(btn => btn.classList.toggle('active', btn.dataset.page === page));
  document.getElementById('mainNav').classList.remove('active');
  if (page === 'about') document.querySelector('#page-about .about-text').innerHTML = t('aboutBody');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function bookDelivery() { window.open('https://deliveryforless.vercel.app', '_blank'); }

async function handleContact(e) {
  e.preventDefault();
  const form = e.target;
  const status = document.getElementById('formStatus');
  status.style.display = 'block';
  status.textContent = "Sending...";

  const response = await fetch(form.action, {
    method: form.method,
    body: new FormData(form),
    headers: { 'Accept': 'application/json' }
  });

  if (response.ok) {
    status.textContent = t('formSuccess');
    form.reset();
  } else {
    status.textContent = "Oops! There was a problem.";
  }
  setTimeout(() => { status.style.display = 'none'; }, 5000);
}

document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  setTheme(savedTheme || 'light');
  setLanguage('en');
  document.querySelectorAll('#mainNav button').forEach(btn => btn.addEventListener('click', () => navigate(btn.dataset.page)));
  document.getElementById('hamburgerBtn').addEventListener('click', () => document.getElementById('mainNav').classList.toggle('active'));
  document.getElementById('langSelect').addEventListener('change', (e) => setLanguage(e.target.value));
  document.getElementById('themeToggle').addEventListener('click', () => setTheme(document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'));
});
