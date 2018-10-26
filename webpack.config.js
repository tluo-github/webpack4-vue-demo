const HtmlWebPackPlugin = require("html-webpack-plugin"); //html
const VueLoaderPlugin = require('vue-loader/lib/plugin') //vue-loader

const webpack=require("webpack");
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
            },
            {   test:/\.vue$/,
                use: {
                    loader: "vue-loader"
                }
            },
            {
                test: /\.css$/,
                use: ['vue-style-loader','css-loader']
            }
        ]
    },
    //需引入 vue/dist/vue.js 给个别名 vue
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
        }),
        new VueLoaderPlugin()

    ]
}