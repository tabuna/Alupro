var elixir = require('laravel-elixir');
var gulp = require('gulp');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    mix.less('./assets/less/app.less', './public/dist/css/orchid.css');

    mix.copy('./assets/vendor/bootstrap/dist/fonts/', './public/dist/fonts');
    mix.copy('./assets/vendor/font-awesome/fonts/', './public/dist/fonts');
    //mix.copy('./assets/vendor/roboto-fontface/fonts/', './public/dist/fonts');
    mix.copy('./assets/vendor/flag-icon-css/flags/', './public/dist/flags');
    mix.copy('./assets/fonts/', './public/dist/fonts');

    mix.scripts([
        "./assets/vendor/jquery/dist/jquery.min.js",
        "./assets/vendor/jquery-ui/jquery-ui.min.js",
        "./assets/vendor/bootstrap/dist/js/bootstrap.min.js",
        "./assets/vendor/owl.carousel/dist/owl.carousel.min.js",
        "./assets/js/app.js",
        "./assets/js/custom.js",
        "./assets/js/components/**"
    ], './public/dist/js/orchid.js');
});
