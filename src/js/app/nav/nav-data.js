import { AppData } from './../app_data.js';

//const BaseUrl = 'http://192.168.1.4:3000/';
console.log('AppData');
console.dir(AppData);
export const NavData = {
    0 : {
        href : AppData.BaseUrl,
        title : 'главная',
    },
    1 : {
        href : AppData.BaseUrl+'page/bookmarks/index.html',
        title : 'закладки',
    },
    2 : {
        href : AppData.BaseUrl+'page/blog/javascript/index.html',
        title : 'блог',
    },
    27 : {
        href : AppData.BaseUrl+'page/aboutus/index.html',
        title : 'о нас',
    },
};