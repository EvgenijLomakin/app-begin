import gulp from "gulp";
import { GLOB_PATH } from "../config/glob_path.js";
import browserSync from 'browser-sync';
import { style_dev, style_build } from './style.js';
import { js_webpack } from './js_webpack.js';

const BrSync = browserSync.create();

export { serverPHP };
function serverPHP() {
    browserSync.init({
   // ServerBrowserSync.init({
        proxy: GLOB_PATH.PROXY_NAME,
        //host: GLOB_PATH.HOST,
        //open: 'external',
        notify: false,
        //tunnel: true
    });
    // gulp.watch( GLOB_PATH.WATCH.CSS, style_dev );
    // gulp.watch( GLOB_PATH.WATCH.JS , js_webpack);
    // gulp.watch( GLOB_PATH.WATCH.PHP_HTML ).on('change',  browserSync.reload );
 
}

// const serverPHP = () =>
// {
//     BrSync.init( {
//         proxy: GLOB_PATH.PROXY_NAME,
//         notify: false,
//     } );
//     gulp.watch( GLOB_PATH.WATCH.CSS, style_dev );
//     gulp.watch( GLOB_PATH.WATCH.PHP_HTML ).on('change', BrSync.reload);
// }