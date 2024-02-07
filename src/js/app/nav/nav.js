import { NavData } from './nav-data.js';
// console.log('NavData');
// console.dir(NavData);
/**
 * header-nav__burger
 * header-nav__menu-wrapper
 * header-nav__menu
 * 
 *  * data-show="show"
 */
let header_nav__burger, header_nav__menu_wrapper, header_nav__menu;

if ( document.querySelector('.header-nav__burger') != null )
{
    header_nav__burger = document.querySelector('.header-nav__burger');
    header_nav__menu_wrapper = document.querySelector('.header-nav__menu-wrapper');
    header_nav__menu = document.querySelector('.header-nav__menu');
    // nav render
    header_nav__menu.innerHTML = '';
    for (const key in NavData) {
        header_nav__menu.innerHTML += `<li><a href="${NavData[key].href}">${NavData[key].title}</a></li>`;
      }
    // burger click
    header_nav__burger.addEventListener('click', () => {
        if ( (header_nav__burger.dataset.show == undefined) || (header_nav__burger.dataset.show == 'hide') )
        {
            header_nav__burger.dataset.show = 'show';
            header_nav__menu_wrapper.dataset.show = 'show';
            header_nav__menu.dataset.show = 'show';
        }
        else
        {
            header_nav__burger.dataset.show = 'hide';
            header_nav__menu_wrapper.dataset.show = 'hide';
            header_nav__menu.dataset.show = 'hide';
        }
    });
    // wrapper click
    header_nav__menu_wrapper.addEventListener('click', () => {
        header_nav__burger.dataset.show = 'hide';
        header_nav__menu_wrapper.dataset.show = 'hide';
        header_nav__menu.dataset.show = 'hide';
    });
}