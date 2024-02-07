import { AppData } from './../app_data.js'

console.log('settings main.js');

// header__settings-btn-wrapper
// name="theme-light" "theme-dark" data-show="show"
// header__settings-fsz-menu header__settings-btn name="fsz"
// header__settings-btn-theme
//
let  header__settings_btn_wrapper;
var header_btns_theme;
let FszClass, ThemeClasses;
let fsz, theme;
let btn_fsz_menu, fsz_menu;
// Local Font size
console.dir(localStorage.getItem('fsz') );
console.dir(AppData)

// fsz
if ( localStorage.getItem('fsz') == null )
{
    localStorage.setItem('fsz', AppData.Fsz.FszNormal);
    fsz = AppData.Fsz.FszNormal;
}
else
{
    fsz = localStorage.getItem('fsz');
}

if( document.querySelector('.'+AppData.Fsz.FszClassName) != undefined )
{
    FszClass = document.querySelector('.'+AppData.Fsz.FszClassName);
    FszClass.style.fontSize = fsz + 'px';
}
if( document.querySelectorAll('.'+AppData.Theme.ClassName) != undefined )
{
    ThemeClasses = document.querySelectorAll('.'+AppData.Theme.ClassName);
}
// Theme
if ( localStorage.getItem('theme') == null  )
{
    localStorage.setItem('theme', 'light');
    theme ='light';
}
else
{
    theme = localStorage.getItem('theme');
}
document.addEventListener("DOMContentLoaded", () => {
    start_change_classes_theme(theme);
});

if ( document.querySelector('.header__settings-btn-wrapper') != null )
{
    header_btns_theme = document.querySelectorAll('.header__settings-btn-theme');

    header__settings_btn_wrapper = document.querySelector('.header__settings-btn-wrapper');

    header__settings_btn_wrapper.addEventListener('click', (e) => {

        if ( e.target.attributes.name != undefined )
        {
            switch (e.target.attributes.name.value)
            {
                case 'fsz' :
                    btn_fsz_menu = e.target;
                    fsz_menu = document.querySelector('.header__settings-fsz-menu');
                    show_fsz_menu();
                break;
                case 'theme-dark' :
                        change_theme('dark');
                break;
                case 'theme-light' :
                        change_theme('light');
                break;
            }
        }
    });
    // theme

}

//  Functions
function start_change_classes_theme(theme)
{
    for ( let i = 0; i < ThemeClasses.length; i++ )
    {
            ThemeClasses[i].classList.remove(AppData.Theme.DarkClassMame);
            ThemeClasses[i].classList.remove(AppData.Theme.LigntClassMame);
            if ( theme == 'light')
            {
                ThemeClasses[i].classList.add(AppData.Theme.LigntClassMame);
            }
            else if ( theme == 'dark')
            {
                ThemeClasses[i].classList.add(AppData.Theme.DarkClassMame);
            }
            else
            {
                ThemeClasses[i].classList.add(AppData.Theme.LigntClassMame);
            }
    }

    for ( let x =0; x < header_btns_theme.length; x++ )
    {
        header_btns_theme[x].dataset.show = 'hide';

        if ( theme == 'light')
        {
            if ( header_btns_theme[x].getAttribute('name') == 'theme-dark' )
            {
                header_btns_theme[x].dataset.show = 'show';
            }
        }
        else if ( theme == 'dark')
        {
            if ( header_btns_theme[x].getAttribute('name') == 'theme-light' )
            {
                header_btns_theme[x].dataset.show = 'show';
            }
        }
    }
}

function change_theme(theme)
{
    localStorage.setItem('theme', theme);

    for ( let i = 0; i < header_btns_theme.length; i++ )
    {
        if ( theme == 'dark' )
        {
            if (  header_btns_theme[i].attributes.name.value == 'theme-dark' )
            {
                header_btns_theme[i].dataset.show = 'hide';
            }
            else if (header_btns_theme[i].attributes.name.value == 'theme-light' )
            {
                header_btns_theme[i].dataset.show = 'show';
            }
        }
        else
        {
            if (  header_btns_theme[i].attributes.name.value == 'theme-light' )
            {
                header_btns_theme[i].dataset.show = 'hide';
            }
            else if (header_btns_theme[i].attributes.name.value == 'theme-dark' )
            {
                header_btns_theme[i].dataset.show = 'show';
            }
        }
    }

    start_change_classes_theme(theme);
}

function show_fsz_menu()
{
    if ( (btn_fsz_menu.dataset.show == undefined) || ( btn_fsz_menu.dataset.show == 'hide' ) )
    {
        btn_fsz_menu.dataset.show = 'show';
        fsz_menu.dataset.show = 'show';
    }
    else
    {
        btn_fsz_menu.dataset.show = 'hide';
        fsz_menu.dataset.show = 'hide';
    }
}