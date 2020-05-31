const path = require('path')
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    //onde o webpack vai pegar os arquivos para montar a árvore
    //mode:"production",
    devtool: 'source-map',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'bundler.js'
    },
    module:{
        rules:[
            {
            test:/\.(js|jsx)$/,
            exclude:/node_modules/,
            use:{
                loader:"babel-loader"
            }
        }
    ]
  },


  plugins: [
    new HtmlWebPackPlugin({
        template: "./src/index.html",
        filename: "./index.html"
        })
    ]


}
    
