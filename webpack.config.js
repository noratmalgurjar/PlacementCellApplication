// Import webpack module
var webpack = require("webpack");
//Import path module
const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const htmlPlugin = new HtmlWebPackPlugin({
	url: 'http://localhost:8080/',
	template: "./src/index.html",
	filename: "./index.html"
});

module.exports = {
	entry: "./src/index.js",
	resolve: {
		extensions: ['.js', '.jsx']
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'public/dist'),
		sourceMapFilename: 'bundle.map.js',
		publicPath: '/'
		
	},
	// Set dev-server configuration
	devServer: {
		inline: true,
		historyApiFallback: true,
		contentBase: './public/dist', 
		port: 8080
	},
  	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},
			{
				test: /\.(css|scss)$/,
				use: ['style-loader', 'css-loader', 'sass-loader']
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: "html-loader"
					}
				]
			},
			{
				test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
				loader: 'file-loader',
				options: {
					limit: 10000
				}
			}
    	]
	},
	plugins: [
		new CleanWebpackPlugin(),
		htmlPlugin,
	]
};