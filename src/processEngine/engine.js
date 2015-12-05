import Config from '../config';
import Path from 'path';

// Gulp modules.
import gulp from 'gulp';
import sass from 'gulp-sass';
import minifyCss from 'gulp-minify-css';
import imagemin from 'gulp-imagemin';
import pngquant from 'imagemin-pngquant';

// Base path.
var BASE = Path.join(__dirname, '../');

// Engine.
var ProcessEngine = {

	/**
	 * Scss compiling.
	 * - Compile from scss to css
	 * - Minifiy
	 */
	scss(){
		let start = Date.now();

		// Source.
		let src = [
			Path.join(BASE, Config.input.styles, '*.scss'),	 // Single files.
			Path.join(BASE, Config.input.styles, '**/*.scss') // Directories.
		]

		// Destination.
		let dest = Path.join(BASE, Config.output + '/styles');

		return gulp
			.src(src)
			.pipe(sass())
			.pipe(minifyCss({compatibility: 'ie8'}))
			.pipe(gulp.dest(dest));
	},

	/**
	 * Image optimizing.
	 * - png, jpg, svg, gif
	 */
	images(){
		let start = Date.now();

		// Source.
		let src = Path.join(BASE, Config.input.images, '*');

		// Destination.
		let dest = Path.join(BASE, Config.output + '/images');

		return gulp
			.src(src)
			.pipe(imagemin({
				progressive: true,
				svgoPlugins: [{removeViewBox: true}],
				use:[pngquant()]
			}))
			.pipe(gulp.dest(dest));
	},

	/**
	 * TODO: Minify scripts.
	 */
	scripts(){
		console.log('[ProcessEngine] [Scripts] ... ');
	},

	/**
	 * TODO: Minifty html files from the render Engine.
	 */
	html(){

	}
};

// Create gulp tasks.
Object.keys(ProcessEngine).forEach((task) => {
	gulp.task(task, ProcessEngine[task]);
});

// Start processing.
gulp.start();

export default ProcessEngine;