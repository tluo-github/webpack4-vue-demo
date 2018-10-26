
# 项目初始化

```bash
mkdir webpack4-vue-demo
cd webpack4-vue-demo
npm init -y
npm install --save-dev webpack webpack-cli vue vue-loader html-webpack-plugin html-loader \
 webpack-dev-server vue-template-compiler html-loader
```
# 注意

webpack.config.js 解决vue 加载不全问题
```angular2html
module.exports = {
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
        }
    }
}
```
