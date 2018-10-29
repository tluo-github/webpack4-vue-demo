
# 项目初始化


mkdir webpack4-vue-demo
cd webpack4-vue-demo
npm init -y
npm install --save-dev webpack webpack-cli vue vue-loader html-webpack-plugin html-loader \
 webpack-dev-server vue-template-compiler html-loader extract-text-webpack-plugin@next css-loader vue-style-loader


# v5

npm i img-loader url-loader file-loader --save-dev

# v21
npm install vue-router --save-dev

# v22
npm install vue-resource --save-dev

# v24 组件异步加载、配合webpack 的 code-splitting 文件拆分
1、 安装 webpack 4.x | babel-loader 8.x | babel 7.x | plugin-syntax-dynamic-import
npm install  @babel/core babel-loader @babel/preset-env  @babel/plugin-syntax-dynamic-import --save-dev
没有 plugin-syntax-dynamic-import 将无法使用 import 来代码拆分。
.babelrc
```angular2html
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "modules": false
      }
    ]
  ],
  "plugins": [
    "@babel/plugin-syntax-dynamic-import"
  ]
}
```
 @ babel / preset-env配置的模块选项设置为false的原因是因为我们希望webpack为我们处理模块捆绑。
