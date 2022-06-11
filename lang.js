let body = document.querySelector('.multilang');
let langButton = document.querySelector('.lang-button');

if (localStorage.getItem('lang') == null) {
  localStorage.setItem("lang", "en");
};

if (localStorage.getItem('lang') == 'en') {
  body.classList.add('en');
} else {
  body.classList.add('ru');
  body.classList.remove('en');
}

langButton.onclick = function() {
if (localStorage.getItem('lang') == 'en') {
    localStorage.setItem('lang','ru');
    body.classList.add('ru');
    body.classList.remove('en');
} else {
    localStorage.setItem('lang','en');
    body.classList.add('en');
    body.classList.remove('ru');
}
};