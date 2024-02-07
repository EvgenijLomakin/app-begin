import gulp from gulp;
import { GLOB_PATH } from "../config/glob_path.js";
import { browserSync } from 'browser-sync';
import { style_dev } from "./style.js";
import { js_webpack } from './js_webpack.js';

export { watching };

function watching() {
    gulp.watch( GLOB_PATH.WATCH.CSS, style_dev );
    gulp.watch( GLOB_PATH.WATCH.JS , js_webpack );
    gulp.watch( GLOB_PATH.WATCH.PHP_HTML ).on('change',  browserSync.reload );
}