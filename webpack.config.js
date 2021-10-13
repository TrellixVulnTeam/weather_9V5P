
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname,'./src/js/index.js'),

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.js'
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/html/main.html',
            templateParameters: {
                titulo: 'weather'
            }
        })
    ],

    module: {
        rules: [
            {
                test: /\.(s(a|c)ss)$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eott|ttf|otf)$/i,
                type: 'asset/resource',
            }
        ],
    },
};