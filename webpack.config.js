const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
        geoCodingRequest: './src/geoCodingRequest.js',
        aggregator: './src/aggregator.js',
        weatherForecast: './src/weatherForecast.js',
        weatherCurrentData: './src/weatherCurrentData.js',
        domHandler: './src/domHandler.js',
    },
    devtool: 'eval-source-map',
    plugins: [
        new Dotenv(),
        new HtmlWebpackPlugin({
            title: 'Development',
        })
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            }, {
                test: /\.txt$/i,
                use: 'raw-loader',
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
}