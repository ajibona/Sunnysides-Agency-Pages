
const menuButtonElement = document.querySelector('.js-menu-icon');
const dropDownElement = document.querySelector('.js-mobile-dropdown');


menuButtonElement.addEventListener('click', ()=>{
  console.log(dropDownElement);
  dropDownElement.classList.toggle('active')
})
