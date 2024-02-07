import gulp from "gulp";
import { GLOB_PATH } from "../config/glob_path.js";
import browserSync from "browser-sync";
export { copy_app };

const copy_app = () => {
    return gulp.src( GLOB_PATH.SRC.APP )
    .pipe( gulp.dest( GLOB_PATH.BUILD.DIR ) )
    //.pipe(browserSync.stream());
}
