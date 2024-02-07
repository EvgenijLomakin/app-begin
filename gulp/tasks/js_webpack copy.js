import gulp from "gulp";
import webpackStream  from 'webpack-stream';
import browserSync from "browser-sync";
import if_plugin from "gulp-if";
import { GLOB_PATH } from "./../config/glob_path.js";
// .pipe(if_plugin( GLOB_PATH.IS_BILD, {mode: 'production'}  ) ),
export const js_webpack = () => {
    //if_plugin( GLOB_PATH.IS_BILD, )
    return gulp.src( GLOB_PATH.SRC.JS, { sourcemaps: true } )
        .pipe( webpackStream ({
            mode: 'development',
            //mode: 'production',
            entry: GLOB_PATH.SRC.JS,
            output: {
                filename: GLOB_PATH.JS_BUILD_FILE,
            },
            module: {
                rules: [
                    {
                        test: /\.js$/,
                        exclude: /node_modules/,
                        loader: "babel-loader",
                        options: {
                            presets: ["@babel/preset-env"],
                        },
                    },
                ],
            },
        }))
        .pipe(gulp.dest( GLOB_PATH.BUILD.JS ))
        .pipe(browserSync.stream());
}