const path = require('path');

const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	mode: 'development',
	devtool: 'inline-cheap-module-source-map',
	entry: {
		main: './index.js',
		vendor: './libs/vendor.js'
	},
	output: {
      filename: '[name].bundle.[contenthash].js',
      path: path.resolve(__dirname, 'dist')
    },
	plugins: [
		new CleanWebpackPlugin(),
		new HTMLWebpackPlugin({
			template: './index.html'
		}),
		new VueLoaderPlugin()
	],
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				test: /\.js$/,
				exclude: '/node_modules/',
				loader: ['babel-loader', 'eslint-loader']
			},
			{
				test: /\.s[ca]ss$/,
				use: [
					'vue-style-loader',
					{
						loader: 'css-loader',
						options: {
							modules: {
								localIdentName: '[name]__[local]--[hash:base64:5]',
							}
						}
					},
					'sass-loader'
				]
			}
		]
	}
}
