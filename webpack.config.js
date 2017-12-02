var webpack = require("webpack");
var path = require("path");

var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var config = {
	entry: SRC_DIR + "/app/index.js",
	output: {
		path: DIST_DIR + "/app",
		filename: "bundle.js",
		publicPath: "/app/"
	},
	module: {
		loaders: [
			{
				test: /\.js?/,
				include: SRC_DIR,
				loader: "babel-loader",
				query: {
					presets: ["react", "es2015", "stage-2"],
					plugins: ["transform-class-properties"]
				},
			},
				{
	        test: /\.(png|svg|jpg)$/,
	        use: [
	          {
	            loader: 'url-loader',
	            options: {
	              limit: 8192
	            }
	          }
	        ]
			},
			{ test: /\.json$/, loader: 'json-loader' },
			{
        test: /\.css$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader'
        }]
			},
		]
	}
};

module.exports = config;
