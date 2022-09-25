let path=require('path');
let html = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        bundle: path.resolve(__dirname,'./src/index.js'),            
    },
    output: {
        filename: '[name].[contenthash].js',
        path:path.resolve(__dirname, 'dist'),
        clean:true,
        assetModuleFilename:'[name][ext]',
    },
    devtool: 'inline-source-map',
    devServer: {
        static:path.resolve(__dirname, 'dist'),
        port: 3000,
        compress: true,
        hot: true,
    },
    plugins: [
        new html({title:'WacGonald Restaurant', filename:'index.html', template: 'src/template.html'}),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(jpg|jpeg|png|svg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },    
};