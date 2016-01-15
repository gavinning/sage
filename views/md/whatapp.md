# 什么是App
App包含数个文件，用于描述一个完整的功能

#### 目录结构
```
nav
├── nav.jade            // 可选，app的jade模板
├── nav.js              // 可选，app功能js文件
├── nav.json.js         // 可选，app模拟数据，基于mock规则
├── nav.less            // 可选，app的样式文件
├── aimee.json          // 必须，app描述文件
├──                     // 可选，app的其他文件
└── img                 // 可选，app的媒体文件夹
```



#### 定义App
```js
exports.hello = function(name){
    console.log('hello', name)
}
```

#### 调用App
```js
var app = require('appname')
app.hello('gavinning') // => hello gavinning
```

#### 发布App到Aimeejs仓库
```js
$ aimee p app
// or
$ aimee publish app
```

#### 从Aimeejs仓库安装App
```js
$ aimee i app
// or
$ aimee install app
```

#### 卸载App
```js
$ aimee r app
// or
$ aimee remove app
```

#### 从Aimeejs仓库更新App
```js
$ aimee u app
// or
$ aimee update app
```
