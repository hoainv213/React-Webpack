const HtmlWebPackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const part              = require("path");
const htmlPlugin = new HtmlWebPackPlugin({
    template: "./src/index.html",
    filename: "./index.html",
    favicon: './src/images/icons8.png'
});
const cssPlugin = new ExtractTextPlugin ({
    filename: "css/[name].css",
    allChunks: false
});

module.exports = {
    entry: {
        app: './src/index.js'
    },
    output: {
        path: part.resolve( 'dist'),
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(scss|css)$/i,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader','sass-loader'],
                    publicPath: 'dist'
                })
            },
            {
                test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/',
                        publicPath: '../'
                    }
                }]
            },
            {
                test: /\.(jpe?g|png|gif)$/,
                exclude: /node_modules/,
                loader: 'url-loader?limit=1024&name=images/[name].[ext]'
            }
        ]
    },
    plugins: [htmlPlugin,cssPlugin]
};