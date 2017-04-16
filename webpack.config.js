const webpack = require('webpack');

const IS_DEV = process.env.NODE_ENV !== 'production';

module.exports = {
	entry: {
		bundle: [
			'./src/js/app.js'
		]
	},
	output: {
		filename: `./public/js/[name]${IS_DEV ? '':'.min'}.js`
	},
	plugins: IS_DEV ? [] : [
	    new webpack.optimize.OccurrenceOrderPlugin(),
	    new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } })
	]
};