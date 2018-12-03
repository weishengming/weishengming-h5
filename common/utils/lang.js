const initLang = (language) => {
  let lang = JSON.parse(window.localStorage.getItem('lang'))
  if (!lang) {
    if(language=='en'){
      lang = {LANG: '20', LANGUAGE: "en"}
    }else{
      lang = {LANG: '10', LANGUAGE: "zh_CN"}
    }
    window.localStorage.setItem('lang', JSON.stringify(lang))
  }
}

const setLang = (language) => {
  let lang = {}
  if (language === 'en') {
    lang.LANG = '20'
    lang.LANGUAGE = 'en'
  } else if(language === 'zh_CN') {
    lang.LANG = '10'
    lang.LANGUAGE = 'zh_CN'
  }
  window.localStorage.setItem('lang', JSON.stringify(lang))
}
export { initLang, setLang}
