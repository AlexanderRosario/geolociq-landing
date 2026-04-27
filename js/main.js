function setLang(lang) {
  document.body.classList.toggle('lang-es', lang === 'es')
  document.body.classList.toggle('lang-en', lang === 'en')
  document.getElementById('btn-es').classList.toggle('text-primary', lang === 'es')
  document.getElementById('btn-es').classList.toggle('text-on-surface-variant', lang !== 'es')
  document.getElementById('btn-en').classList.toggle('text-primary', lang === 'en')
  document.getElementById('btn-en').classList.toggle('text-on-surface-variant', lang !== 'en')
  document.documentElement.lang = lang
}

function toggleMenu() {
  const menu = document.getElementById('mobile-menu')
  menu.classList.toggle('hidden')
}

// Init — detect browser language
const browserLang = navigator.language?.startsWith('en') ? 'en' : 'es'
setLang(browserLang)
