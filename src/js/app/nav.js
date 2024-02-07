import { Nav_Data } from './nav-data.js';
// console.log('Nav_Data');
// console.dir(Nav_Data);
// console.log( Object.keys(Nav_Data).length );
// header__nav-burger-icon
// header__nav-menu
// data-show show / hide
//console.log('BaseDir  = ' + BaseDir );
let header__nav_burger_icon, header__nav_menu;
if ( document.querySelector('.header__nav-burger-icon') != null )
{
  header__nav_burger_icon = document.querySelector('.header__nav-burger-icon');
  header__nav_menu = document.querySelector('.header__nav-menu');
  header__nav_menu.innerHTML = '';
  Object.values( Nav_Data ).forEach(element => {
    header__nav_menu.innerHTML += `<li><a href="${element.href}">${element.title}</a></li>`;
  });
  // SHOW
  header__nav_burger_icon.addEventListener('click', () => {
    if ( (header__nav_burger_icon.dataset.show == undefined) || (header__nav_burger_icon.dataset.show == 'hide') )
    {
      header__nav_burger_icon.dataset.show = 'show';
      header__nav_menu.dataset.show = 'show';
    }
    else
    {
      header__nav_burger_icon.dataset.show = 'hide';
      header__nav_menu.dataset.show = 'hide';
    }
  });
}