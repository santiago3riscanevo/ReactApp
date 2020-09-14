const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname,'dist'),
        filname: 'main.js'
    },
    resolve: {
        extensions:['.js', '.jsx']
    },
    modules: {
        rules:[
            {
                test:/\.(js|jsx)$/,
                excluede: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test:/\.html$/,
                use:{ //no puse el array
                    loader:'html-loader',
                },
            },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template:'./public/index.html',
            filename:'./index.html'
        })
    ]
}