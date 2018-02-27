# Bug report

- Laravel Mix Version: 2.0.0 (`npm list --depth=0`)
- Node Version (`node -v`): v8.9.4
- NPM Version (`npm -v`): 5.6.0
- OS: Linux Mint 18.2 (Ubuntu Xenial)

### Description:
`processCssUrls: false` option does not work for LESS files imported from subfolders. It works all right for SASS files.

### Steps To Reproduce:

```
git clone https://github.com/JanisE/bug_laravel-mix_less_processCssUrls.git
cd bug_laravel-mix_less_processCssUrls
npm install
npm run dev
```

In folder `public/css`, two files get generated – `app_less.css` and `app_sass.css`.

* In `app_less.css` , the relative background URL of class `.glglgl` (coming from [resources/assets/less/_variables.less](resources/assets/less/_variables.less)) has been correctly left as is (`url('../images/heisaa.jpg')`), but the relative background URL of class `.glglgl_sub` (coming from [resources/assets/less/variables/_variables.less](resources/assets/less/variables/_variables.less) – a sub-folder in respect to the mixed [resources/assets/less/app_less.less](resources/assets/less/app_less.less)) has been converted to an absolute URL (`url('images/heisaa.jpg')`).
* In `app_sass.css`, both relative background URLs are correctly left as is.

### Work-around

A work-round that I discovered for the time being, is to use a "less-loader" option `relativeUrls` directly – see in [webpack.mix.js](webpack.mix.js).