let mix = require('laravel-mix');

mix.options({
    processCssUrls: false
});

mix.sass('resources/assets/sass/app_sass.scss', 'public/css');

mix.less('resources/assets/less/app_less.less', 'public/css');

// Work-around:
//mix.less('resources/assets/less/app_less.less', 'public/css', {relativeUrls: false});

