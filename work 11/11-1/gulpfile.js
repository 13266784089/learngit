//引入gulp及其组件
var gulp = require('gulp'), //基础库
    imagemin = require('gulp-imagemin'), //图片压缩
    sass = require('gulp-sass'), //sass
    minifyCss = require('gulp-minify-css'), //css压缩
    rev = require('gulp-rev'),//- 对文件名加MD5后缀
    revCollector = require('gulp-rev-collector'),//- 路径替换
    uglify = require('gulp-uglify'), //js压缩
    rename = require('gulp-rename'), //重命名
    concat = require('gulp-concat'), //合并文件
    clean = require('gulp-clean'), //清空文件夹

    tinylr = require('tiny-lr'), //livereload
    server = tinylr(),
    livereload = require('gulp-livereload');//livereload


// HTML处理
gulp.task('html', function() {
    var htmlSrc = '*.html',
        htmlDst = 'dist/'; //dist为发布环境

    gulp.src(htmlSrc)
        // .pipe(livereload(server))
        .pipe(gulp.dest(htmlDst))
});

// 样式处理

gulp.task('sass', function() {
    gulp.src('Stylesheets/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/css')); //dest()写入文件
});

// 图片处理
gulp.task('images', function() {
    var imgSrc = 'Images/**',
        imgDst = 'dist/images';
    gulp.src(imgSrc)
        .pipe(imagemin())
        .pipe(gulp.dest(imgDst));
})

// js处理
gulp.task('js', function() {
    var jsSrc = 'Scripts/*.js',
        jsDst = 'dist/js';

    gulp.src(jsSrc)
        // .pipe(jshint('.jshintrc'))
        // .pipe(jshint.reporter('default'))
        .pipe(concat('main.js'))
        .pipe(gulp.dest(jsDst))
        .pipe(rename({ suffix: '.min' }))
        .pipe(uglify())
        //  .pipe(livereload(server))
        .pipe(gulp.dest(jsDst));
});



gulp.task('concat', function() {                                //- 创建一个名为 concat 的 task
    gulp.src(['Stylesheets/*.css'])    //- 需要处理的css文件，放到一个字符串数组里
        .pipe(concat('style.css'))                            //- 合并后的文件名
        .pipe(minifyCss())                                      //- 压缩处理成一行
        .pipe(rev())                                            //- 文件名加MD5后缀
        .pipe(gulp.dest('dist/css'))                               //- 输出文件本地
        .pipe(rev.manifest())                                   //- 生成一个rev-manifest.json
        .pipe(gulp.dest('dist/rev'));                              //- 将 rev-manifest.json 保存到 rev 目录内
});


gulp.task('rev', function() {
    gulp.src(['./rev/*.json', 'dist/index.html'])   //- 读取 rev-manifest.json 文件以及需要进行css名替换的文件
        .pipe(revCollector())                                   //- 执行文件内css名的替换
        .pipe(gulp.dest('dist/application'));                     //- 替换后的文件输出的目录
});
// 默认任务 清空图片、样式、js并重建 运行语句 gulp
gulp.task('default',function() {
    gulp.start('html', 'sass', 'images', 'js','concat', 'rev');
});

// 监听任务 运行语句 gulp watch
gulp.task('watch', function() {
    server.listen(port, function(err) {
        if (err) {
            return console.log(err);
        }

        // 监听html
        gulp.watch('*.html', function(event) {
            gulp.run('html');
        })

        // 监听css
        gulp.watch('Stylesheets/scss/*.scss', function() {
            gulp.run('css');
        });

        // 监听images
        gulp.watch('Images/**', function() {
            gulp.run('images');
        });

        // 监听js
        gulp.watch('Scripts/*.js', function() {
            gulp.run('js');
        });

    });
});
