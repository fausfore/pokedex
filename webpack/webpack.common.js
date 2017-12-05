const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const helpers = require('./helpers');
const path = require('path');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {

    entry: {
        app: './src/main.tsx'
    },

    resolve: {
        extensions: ['.ts', '.js', '.tsx'],
        alias: {
            '@Models': helpers.root('src/models'),
            '@Actions': helpers.root('src/store/actions'),
            '@Reducers': helpers.root('src/store/reducers'),
            '@Store': helpers.root('src/store'),
            '@Mocks': helpers.root('src/mocks'),
            '@Models': helpers.root('src/models'),
            '@Containers': helpers.root('src/containers'),
            '@Components': helpers.root('src/components'),
            'Styles': helpers.root('src/assets/styles'),
            '@Images': helpers.root('src/assets/images')
          }
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: ['awesome-typescript-loader']
            },
            {
                test: /\.html$/,
                use: 'html-loader'
            },
            {
                test: /\.(png|jpe?g|gif|ico|svg)$/,
                use: ['file-loader']
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: 'url-loader?limit=10000&mimetype=application/font-woff'
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: ['file-loader']
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "sass-loader" // compiles Sass to CSS
                }]
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app']
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new FaviconsWebpackPlugin(
            helpers.root("src/assets/images/favicon/favicon-32x32.png")
        )
        
    ]
    

}