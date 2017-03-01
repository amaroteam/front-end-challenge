'use strict'
const gutil = require('gulp-util')
const through = require('through2')
const fs = require('fs')

module.exports = function (componentsUrl) {
	return through.obj(function (file, enc, cb) {
		if (file.isNull()) {
			cb(null, file)
			return
		}

		if (file.isStream()) {
			cb(new gutil.PluginError('gulp-html-import', 'Streaming not supported'))
			return
		}

		const fileReg = /@import\s"(.*)"/gi

		let data = file.contents.toString()
		let dataReplace = data.replace(fileReg, (match, componentName) => {
            console.log(match + ' --> ' + componentName)
            return fs.readFileSync(componentsUrl + componentName, {
                encoding: 'utf8'
            })
        })

		file.contents = new Buffer(dataReplace)
		file.path = gutil.replaceExtension(file.path, '.html')
		console.log('Import finished.')
		cb(null, file)
	})
}
