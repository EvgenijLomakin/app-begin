import gulp from "gulp";
const PROXY_NAME = 'http://app-begin/';
//const HOST = 'app-begin';
const HOST = './dist';
const BUILD_DIR = './dist/';
const SRC_DIR = './src/';
const SCSS_MAIN_FILE = 'style.scss';
const JS_SRC_MAIN_FILE = 'script.js';
const JS_BUILD_MAIN_FILE = 'script.js';
const JS_DEV_MAIN_FILE = 'script.dev.js';
export const GLOB_PATH = {
    GULP: gulp,
    PROXY_NAME: PROXY_NAME,
    HOST: HOST,
    IS_BILD: process.argv.includes('--build'),
    IS_DEV: !process.argv.includes('--build'),
    FTP: ``,// папка на удаленном сервере
    JS_BUILD_FILE: JS_BUILD_MAIN_FILE,
    JS_DEV_FILE: JS_DEV_MAIN_FILE,
    BUILD: {
        DIR: BUILD_DIR,
        JS: `${BUILD_DIR}js/`,
        CSS: `${BUILD_DIR}css/`,
        IMG: `${BUILD_DIR}img/`,
        FONTS: `${BUILD_DIR}fonts/`,
        FILES: `${BUILD_DIR}files/`,
    },
    SRC: {
        DIR: SRC_DIR,
        APP: `${SRC_DIR}app/**/*.*`,
        JS: `${SRC_DIR}js/${JS_SRC_MAIN_FILE}`,
        CSS: `${SRC_DIR}scss/${SCSS_MAIN_FILE}`,
        IMG: `${SRC_DIR}img/**/*.{jpg,pnp,svg,gif,ico,webp}`,
        FONTS: `${SRC_DIR}fonts/`,
        FILES: `${SRC_DIR}files/`,
    },
    WATCH: {
        CSS: `${SRC_DIR}scss/**/*.scss`,
        JS: `${SRC_DIR}js/**/*.js`,
        IMG: `${SRC_DIR}img/**/*.{jpg,pnp,svg,gif,ico,webp}`,
        PHP: `${BUILD_DIR}**/*.php`,
        HTML: `${BUILD_DIR}**/*.html`,
        FILES: `${SRC_DIR}files/**/*.*`,
    },
}