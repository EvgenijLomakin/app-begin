import gulp from "gulp";
import { watching } from './gulp/function/watching.js';
import { serverHTML, serverPHP } from './gulp/function/server.js';

export const dev = gulp.parallel( serverHTML, watching );

export const console_log = () => {
    console.log('CONSOLE');
}

// Задача по умолчанию

//gulp.task('default', console_log );

gulp.task("default", dev );