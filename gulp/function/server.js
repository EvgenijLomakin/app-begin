import { GLOB_PATH } from './../config/glob_path.js';
import browserSync from 'browser-sync';

export { serverHTML, serverPHP };

const serverHTML = () => {
    browserSync.init({
        server: GLOB_PATH.HOST,
        notify: false,
    });
};

const serverPHP = () => {
    browserSync.init({
        proxy: GLOB_PATH.PROXY_NAME,
        //host: GLOB_PATH.HOST,
        //open: 'external',
        notify: false,
        //tunnel: true
    });
}