const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const optimization = () => {
	const config = {
		splitChunks: {
			chunks: 'all'
		}
	}

	if (isProd) {
		config.minimizer = [
			new OptimizeCssAssetWebpackPlugin(),
			new TerserWebpackPlugin()
		]
	}
	return config;
}

const filename = ext => isDev ? `[name].${ext}` : `[name].[hash].${ext}`;

module.exports = {
	context: path.resolve(__dirname, 'src'),
	entry: './index.js',
	output: {
		filename: filename('js'),
		path: path.resolve(__dirname, 'dist'),
	},
	optimization: optimization(),
	devServer: {
		port: 8080,
		hot: isDev,
	},
	devtool: isDev ? 'inline-source-map' : 'source-map',
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				}
			},
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader']
			},
			{
				test: /\.s[ac]ss$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
			},
			{
				test: /\.(png|jpg|svg|gif)$/,
				use: ['file-loader']
			},
			{
				test: /\.(ttd|woff|woff2|eot)$/,
				use: ['file-loader']
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './index.html',
			minify: {
				collapseWhitespace: isProd
			}
		}),
		new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
		new CopyWebpackPlugin({
			patterns: [
				{
					from: path.resolve(__dirname, 'src/assets'),
					to: path.resolve(__dirname, 'dist/assets')}
			],
		}),
		new MiniCssExtractPlugin({
			filename: filename('css')
		}),
		new ESLintPlugin({
			extensions: ['js']
		}),
	]
}
