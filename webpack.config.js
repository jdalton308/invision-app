

const CopyWebpackPlugin = require('copy-webpack-plugin');


const path = require('path');

const SRC_DIR = path.resolve(__dirname, 'src');
const BUILD_DIR = path.resolve(__dirname, 'build');


module.exports = {
	entry: SRC_DIR + '/index.js',
	output: {
		path: BUILD_DIR,
		// path: './',
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				loader: 'babel-loader', 
				exclude: /node-modules/, 
				options: { presets: ['es2015', 'react'] } 
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'
				]
			},
			{
				test: /\.scss$/,
				loaders: [
					'style-loader',
					'css-loader',
					'sass-loader'
				],
			},
  		{
				test: /\.(png|jpg|svg)$/,  
				use: [{
					loader: 'url-loader',
					options: {
						limit: 8000, // Convert images < 8kb to base64 strings
						name: 'images/[hash]-[name].[ext]'
					} 
				}]
			}
		],
	},
  plugins: [
    new CopyWebpackPlugin([
        {
          from: 'src/assets',
          to: 'assets'
        } 
    ]), 
  ]
};