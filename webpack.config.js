var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

var nodeModules = {};
var fs = require('fs');
fs.readdirSync('node_modules')
	.filter(function(x) {
		return ['.bin'].indexOf(x) === -1;
	})
	.forEach(function(mod) {
		nodeModules[mod] = 'commonjs ' + mod;
	});
console.log( "nodeModules:", nodeModules );
	
module.exports = [
	{
		name: 'server',
		entry: {
			app: './src/server/app.js',
		},
		target: 'node',
		output: {
			path: __dirname + "/dist/server",
			filename: "[name].js",
		},
		externals: nodeModules,
		module: {
			loaders: [
				{
					test: /\.jsx?$/,
					exclude: /(node_modules|bower_components)/,
					loader: "babel-loader?presets[]=es2015",
				},
			]
		},
		devtool: 'inline-source-map',
	},
	{
		name: "web",
		entry: {
			main: './src/web/app.js',
		},
		output: {
			path: __dirname + "/dist/public",
			filename: "javascripts/[name].js",
		},
		module: {
			loaders: [
				{
					test: /\.jsx?$/,
					exclude: /(node_modules|bower_components)/,
					loader: "babel-loader?presets[]=es2015",
				},
				{ test: /\.(png|jpg|gif)$/, loader: 'url-loader?limit=8192' },
				{ test: /\.jade$/, loader: "jade" },
				{ test: /\.scss$/,
					loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader") },
				{ test: /\.css$/,
					loader: ExtractTextPlugin.extract("style-loader", "css-loader") },
				{ test: /\.less$/,
					loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader") },
			]
		},
		devtool: 'inline-source-map',
		plugins: [
			new ExtractTextPlugin("stylesheets/[name].css"),
			new CommonsChunkPlugin('javascripts/init.js'),
			// new uglifyJsPlugin({ compress: { warnings: false } }),
			// new webpack.ProvidePlugin({
			// 	$: "jquery",
			// 	jQuery: "jquery",
			// 	"window.jQuery": "jquery"
			// })
		],
		externals: {
			// require('data') is external and available
			//  on the global var data
			//'jquery': '$',
		}
	}
];
