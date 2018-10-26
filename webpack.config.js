const HtmlWebPackPlugin = require("html-webpack-plugin");
var webpack=require("webpack");
module.exports = {
    //定义入口
    entry: {
            "index":__dirname+'/src/index.js',
    },
    //定义编译后位置
    output: {
        filename: '[name].js',
        path: __dirname + '/dist'
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [{ loader: "html-loader", options: { minimize: true } }]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    //解决webpack 别名 vue ,没有就报错
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
        }
    },
    plugins: [
        new HtmlWebPackPlugin({
            //该插件将html 也打包编译
            template: __dirname + "/src/html/index.html",
            filename: __dirname + "/dist/index.html",
            inject:'body',
            hash:true,
            chunks:["index"]
        })
    ]
}