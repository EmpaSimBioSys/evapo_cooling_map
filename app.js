const open_btn = document.querySelector('.open-btn')
const close_btn = document.querySelector('.close-btn')
const popup = document.querySelector('.popup')
const main_popup = document.querySelector('.main-popup')

open_btn.addEventListener('click',()=>{
 // console.log('test');
 popup.style.display='flex';
 main_popup.style.cssText = 'animation:slide-in .5s ease; animation-fill-mode; forwards;'
});

close_btn.addEventListener('click',()=>{
 main_popup.style.cssText = 'animation:slide-out .5s ease; animation-fill-mode; forwards;';
 setTimeout(()=>{
  popup.style.display ='none';
  },500);
});


const open_btn_s = document.querySelector('.open-btn_s')
const close_btn_s = document.querySelector('.close-btn_s')
const popup_s = document.querySelector('.popup_s')
const main_popup_s = document.querySelector('.main-popup_s')

open_btn_s.addEventListener('click',()=>{
 // console.log('test');
 popup_s.style.display='flex';
});


close_btn_s.addEventListener('click',()=>{

  popup_s.style.display='none';
});