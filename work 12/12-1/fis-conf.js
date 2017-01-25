// 加 md5
fis.match('*.{js,css,png}', {
  useHash: true
});
//启用 fis-spriter-csssprites 插件
fis.match('::packager', {
  spriter: fis.plugin('csssprites')
});
//对 CSS 进行图片合并
fis.match('*.css', {
  useSprite: true
});
//压缩css、js、png、html
fis.match('function.js', {
  // fis-optimizer-uglify-js 插件进行压缩，已内置
  optimizer: fis.plugin('uglify-js')
});

fis.match('*.css', {
  // fis-optimizer-clean-css 插件进行压缩，已内置
  optimizer: fis.plugin('clean-css')
});

fis.match('*.png', {
  // fis-optimizer-png-compressor 插件进行压缩，已内置
  optimizer: fis.plugin('png-compressor')
});
fis.match('*.html', {
  optimizer: fis.plugin('html-minifier')
});


// 设置图片合并的最小间隔
fis.config.set('settings.spriter.csssprites.margin', 20);

// 开启simple插件，注意需要先进行插件安装 npm install -g fis-postpackager-simple
fis.config.set('modules.postpackager', 'simple');

// 设置打包规则
fis.config.set('pack', {
    '/pkg/lib.js': [
        
        'static/jquery-1.12.1.min.js',
        'static/jquery.cookie.js',
        'static/jquery.mousewheel.js',
    ],
    // 设置CSS打包规则，CSS打包的同时会进行图片合并
    '/pkg/aio.css': '**.css'
});

// 开启simple对零散资源的自动合并
fis.config.set('settings.postpackager.simple.autoCombine', true);