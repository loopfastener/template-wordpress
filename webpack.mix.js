let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
mix.autoload({
    jquery: ['$', 'window.jQuery',"jQuery","window.$","jquery","window.jquery"]
});

mix.options({
    vue: {
        preserveWhitespace: false
    }
})

/**
 * Frontend Javascript Compile Script
 */
mix.js('resources/js/app.js', 'public/js').sourceMaps().vue()
    .sass('resources/css/app.scss', 'public/css')
    .copy('resources/images', 'public/images')
    .browserSync({
        proxy: 'http://localhost',
        files: ["public/css/app.scss", "public/js/app.js", "resources/views/**/*", "resources/lang/**/*"],
        ui: false,
        notify: false
    });
