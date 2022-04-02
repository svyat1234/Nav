(()=>{"use strict";const e=({timing:e,draw:t,duration:o})=>{let n=performance.now();requestAnimationFrame((function a(l){let i=(l-n)/o;i>1&&(i=1);let c=e(i);t(c),i<1&&requestAnimationFrame(a)}))};(()=>{let e=document.documentElement.clientWidth;$(document).ready((function(){e>850?"/Navigation/index.html"!==document.location.pathname&&"/Navigation/"!==document.location.pathname&&"/index.html"!==document.location.pathname||$(".reviews-slider").slick({slidesToShow:3,speed:1e3,autoplay:!0,centerMode:!0,centerPadding:0,pauseOnHover:!1}):"/Navigation/index.html"!==document.location.pathname&&"/Navigation/"!==document.location.pathname&&"/index.html"!==document.location.pathname||$(".reviews-slider").slick({slidesToShow:1,speed:1e3,autoplay:!0,centerMode:!0,centerPadding:0,pauseOnHover:!1})}))})(),(()=>{const e=document.querySelector(".header"),t=document.querySelectorAll(".header__nav__link"),o=document.querySelector(".header__contacts__block-facebook"),n=document.querySelector(".header__contacts__block-insta"),a=document.querySelector(".header__contacts__block-vk"),l=document.querySelector(".logo__link__img"),i=document.querySelector(".header__nav__link-active");document.documentElement.clientWidth>850&&window.addEventListener("scroll",(()=>{let c=window.scrollY;c>1&&c<=500?e.style.transform="translateY(-100px)":c>500?(e.style.transform="translateY(0)",e.classList.add("header-active"),t.forEach((e=>{e.classList.add("header__nav__link-dark"),e.style.color="#000"})),i.classList.add("header__nav__link-active-dark"),o.style.background="url('./img/social/facebook-dark.png') no-repeat center / cover",n.style.background="url('./img/social/insta-dark.png') no-repeat center / cover",a.style.background="url('./img/social/vk-dark.png') no-repeat center / cover",l.style.background="url('./img/logo-dark.png') no-repeat center / cover"):(e.style.transform="translateY(0)",e.classList.remove("header-active"),i.classList.remove("header__nav__link-active-dark"),t.forEach((e=>{e.classList.remove("header__nav__link-dark"),e.style.color="#fff"})),o.style.background="url('./img/social/facebook.png') no-repeat center / cover",n.style.background="url('./img/social/insta.png') no-repeat center / cover",a.style.background="url('./img/social/vk.png') no-repeat center / cover",l.style.background="url('./img/logo.png') no-repeat center / cover")}))})(),(()=>{const e=document.querySelector(".promo__info");window.addEventListener("scroll",(()=>{let t=window.scrollY;"/index.html"!==document.location.pathname&&"/Navigation/index.html"!==document.location.pathname&&"/Navigation/"!==document.location.pathname||(e.style.opacity=t>=20?0:1)}))})(),(()=>{if("/about.html"===document.location.pathname||"/Navigation/about.html"===document.location.pathname){const e=document.querySelector(".info__slider"),t=document.querySelectorAll(".info__slide"),o=document.querySelectorAll(".info__slider__dot");let n=0;t.forEach(((e,t)=>{e.style.transition="opacity 1s",t>0&&(e.style.opacity=0,e.style.visibility="hidden")})),o[n].classList.add("info__slider__dot-active");const a=(e,t)=>{e[t].style.opacity=0},l=(e,t)=>{e[t].style.opacity=1};e.addEventListener("click",(e=>{t.forEach((e=>{e.style.visibility="visible"})),o[n].classList.remove("info__slider__dot-active"),a(t,n),e.target.closest(".info__slider__button-next")&&n++,e.target.closest(".info__slider__button-prev")&&n--,e.target.closest(".info__slider__dot")&&o.forEach(((t,o)=>{t.classList.remove("info__slider__dot-active"),e.target===t&&(n=o,t.classList.add("info__slider__dot-active"))})),n>=t.length&&(n=0),n<0&&(n=t.length-1),l(t,n),o[n].classList.add("info__slider__dot-active")}))}})(),window.onload=function(){document.body.classList.add("loaded_hiding"),window.setTimeout((function(){document.body.classList.add("loaded"),document.body.classList.remove("loaded_hiding")}),500)},[].forEach.call(document.querySelectorAll("[type = tel]"),(function(e){var t;function o(e){e.keyCode&&(t=e.keyCode),this.selectionStart<3&&e.preventDefault();var o="+7 (___)-___-__-__",n=0,a=o.replace(/\D/g,""),l=this.value.replace(/\D/g,""),i=o.replace(/[_\d]/g,(function(e){return n<l.length?l.charAt(n++)||a.charAt(n):e}));-1!=(n=i.indexOf("_"))&&(n<5&&(n=3),i=i.slice(0,n));var c=o.substr(0,this.value.length).replace(/_+/g,(function(e){return"\\d{1,"+e.length+"}"})).replace(/[+()]/g,"\\$&");(!(c=new RegExp("^"+c+"$")).test(this.value)||this.value.length<5||t>47&&t<58)&&(this.value=i),"blur"==e.type&&this.value.length<5&&(this.value="")}e.addEventListener("input",o,!1),e.addEventListener("focus",o,!1),e.addEventListener("blur",o,!1),e.addEventListener("keydown",o,!1)})),(()=>{let t=document.documentElement.clientWidth;const o=document.querySelector(".header__content"),n=document.querySelector(".header__info"),a=document.querySelectorAll(".header__nav__link");t<850&&o.addEventListener("click",(t=>{t.target.classList.contains("header__content")&&(n.classList.add("header__info-active"),document.querySelector(".header__nav-close").style.display="block",e({duration:300,timing:e=>e,draw(e){n.style.opacity=e}}),a.forEach((e=>{e.style.color="#fff"}))),n.addEventListener("click",(t=>{t.target.classList.contains("header__nav-close")&&e({duration:300,timing:e=>Math.sin(Math.acos(e)),draw(e){n.style.opacity=e,0===e&&n.classList.remove("header__info-active")}})}))}))})(),(()=>{const e=document.querySelector("form"),t=document.querySelector("[name = name]"),o=document.querySelector("[name = tel]"),n=document.querySelectorAll("input"),a=document.querySelector(".form-error-name"),l=document.querySelector(".form-error-tel"),i=document.querySelector(".condition");let c=/[^a-zа-яё\s]/gi;t.oninput=function(){this.value=this.value.replace(c,"")};let r=!1,d=!1;e.addEventListener("submit",(e=>{e.preventDefault(),0===t.value.length?(t.style.border="1px solid tomato",a.textContent="Заполните поле",a.style.display="block",r=!1):t.value.length<2?(t.style.border="1px solid tomato",a.textContent="Введите больше одного символа",a.style.display="block",r=!1):r=!0,0===o.value.length?(o.style.border="1px solid tomato",l.textContent="Заполните поле",l.style.display="block",d=!1):o.value.length<18?(o.style.border="1px solid tomato",l.textContent="Введите 10 символов",l.style.display="block",d=!1):d=!0,r&&d&&(i.textContent="Отправка...",fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify({name:t.value,tel:o.value}),headers:{"Content-type":"application/json; charset=UTF-8"}}).then((e=>e.json())).then((e=>{t.value="",o.value="",i.textContent="Отправлено!"})).catch((e=>{console.log(e),i.textContent="Ошибка!"})))})),n.forEach((e=>{e.addEventListener("keydown",(()=>{"/Navigation/index.html"===document.location.pathname||"/Navigation/"===document.location.pathname||"/index.html"===document.location.pathname?(e.style.border="1px solid #fff",a.style.display="none",l.style.display="none"):(e.style.border="1px solid #F1F1F1",a.style.display="none",l.style.display="none")}))}))})(),(()=>{if("АО Навигационное оборудование"!==document.title&&"Контакты"!==document.title){console.log("ds");const t=document.getElementById("modal");document.getElementById("modalButton").addEventListener("click",(()=>{t.style.display="flex",e({duration:300,timing:e=>e,draw(e){t.style.opacity=e}})})),t.addEventListener("click",(o=>{(o.target.classList.contains("modal")||o.target.closest(".modal__close"))&&e({duration:300,timing:e=>Math.sin(Math.acos(e)),draw(e){t.style.opacity=e,0===e&&(t.style.display="none")}})}))}})(),(new WOW).init()})();