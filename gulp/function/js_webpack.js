import gulp from "gulp";
import webpackStream  from 'webpack-stream';
import browserSync from "browser-sync";
import if_plugin from "gulp-if";
import { GLOB_PATH } from '../config/glob_path.js';

export { js_webpack };

const js_webpack = () => {
    return gulp.src( GLOB_PATH.SRC.JS, if_plugin( GLOB_PATH.IS_DEV, { sourcemaps: true } )  )
        .pipe( if_plugin( GLOB_PATH.IS_BILD, 
            webpackStream ( {
                mode: 'production',
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
            })    
        ) )
        .pipe( if_plugin( GLOB_PATH.IS_DEV, 
            webpackStream ( {
                mode: 'development',
                entry: GLOB_PATH.SRC.JS,
                output: {
                    filename: GLOB_PATH.JS_DEV_FILE,
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
            })    
        ) )
        .pipe(gulp.dest( GLOB_PATH.BUILD.JS ))
        .pipe(browserSync.stream());
}
