//gulp
  var gulp = require('gulp');
  var clean = require('gulp-clean');
  var usemin = require('gulp-usemin');
//HTML
  var htmlmin = require('gulp-htmlmin');
  var htmlimport = require('gulp-html-import');
//CSS
  var cssmin = require('gulp-cssmin');
  var autoprefixer = require('gulp-autoprefixer');
  var sass = require('gulp-sass');
//JS
  var uglify = require('gulp-uglify');
  var jshint = require('gulp-jshint');
  var jshintStylish = require('jshint-stylish');
//Img
  var imagemin = require('gulp-imagemin');
//Server
  var browserSync = require('browser-sync').create();

/*********************************************************************************/
//Tasks
/*********************************************************************************/

//Task padrão que executa as tasks - dbCopy, html, sass, js, img
gulp.task('default', function() {
  gulp.start('dbCopy','fontsCopy','html','sass','js','img');
});

//Task dbCopy faz a cópia do arquivo products.json que contém as informações dos produtos
gulp.task('dbCopy', function() {
  return gulp.src('source/db/products.json')
    .pipe(gulp.dest('dist/db/'));
});

//Task fontsCopy copia as fontes que estiverem na pasta fonts para a pasta dist
gulp.task('fontsCopy', function() {
  return gulp.src('source/assets/fonts/**/*')
    .pipe(gulp.dest('dist/assets/fonts/'));
});

//Task clean apaga a pasta dist
gulp.task('clean', function() {
  return gulp.src('dist')
    .pipe(clean());
});

//Task que importa o html
//Utiliza usemin onde pode-se executar mais de uma função do html
//htmlImport faz o import de arquivos html
//htmlmin minifica o html
gulp.task('html', function(){
  return gulp.src('source/html/**/*.html')
    .pipe(usemin({
      html: [function(){
        return htmlimport('./source/html/');
      }, function(){
        return htmlmin({collapseWhitespace: true});
      }]
  }))
  .pipe(gulp.dest('dist'));
});

//A task sass utiliza o sass para css
//O autoprefixer para criar prefixos do css para as versões passadas como parâmetro
//Cssmin para minificação do css
gulp.task('sass', function() {
  return gulp.src('./source/assets/sass/main.scss')
    //.pipe(sass().on('error', sass.logError))
    .pipe(sass())
    .pipe(autoprefixer({
      browsers: ['last 2 versions']
    }))
    .pipe(cssmin())
    .pipe(gulp.dest('./dist/assets/css/'));
});

//Task Uglify para minificação do javascript
gulp.task('js', function() {
    return gulp.src('source/assets/js/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/assets/js'));
});

//Task de otimização de imagem.
gulp.task('img', function() {
  gulp.src('source/assets/img/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/assets/img'));
});

//Task server sobe um servidor e roda os arquivos da pasta dist/
//Também executa o watch das pastas html, js,css que aplica as mudanças da pasta source/ na pasta dist/
//Ao rodar a task server a task default é executada junto para montar os arquivos em dist/ e subir o servidor
gulp.task('server', ['default'], function() {

    browserSync.init({
      server: {
        baseDir: 'dist'
      },
      reloadDelay: 1500
    });

    gulp.watch('source/html/**/*.html').on('change', function(event){
      gulp.start('html');
    });

    gulp.watch('source/assets/sass/**/*.scss').on('change', function(event) {
       /*gulp.src(event.path)
            .pipe(sass().on('error', function(erro) {
              console.log('Erro CSS: ' + erro.filename);
              console.log(erro.message);
            }))*/
        gulp.start('sass');
    });

    gulp.watch('source/assets/js/**/*.js').on('change', function(event) {
        //console.log("Erro javascript " + event.path);
        //gulp.src(event.path)
            //.pipe(jshint())
            //.pipe(jshint.reporter(jshintStylish));
        gulp.start('js');
    });

    gulp.watch('source/**/*').on('change', browserSync.reload);

}); //server
