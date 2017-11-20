# Emiya Node

## 使用
```
1. git clone 
2. cd 
3. npm i
4. npm run dev
5. go to http://127.0.0.1:3000/
```

## 开发
### 1. Config - [config.js](https://github.com/zjhch123/emiya-node-template/blob/master/src/config.js)
在这个文件中可以设置数据库相关数据
```
{
  db_username: 'root', // 数据库连接账号
  db_password: 'root', // 数据库连接密码
  db_name: 'node', // 数据库名
  db_host: 'localhost', // 数据库host
  db_port: 3306 // 数据库端口
}
```
数据库使用MySQL

### 2. Paths - [paths.js](https://github.com/zjhch123/emiya-node-template/blob/master/src/paths.js)
在这个文件中可以设置程序相关路径

### 3. 添加Model
在 `models` 中创建js文件, 例如`modes/Student.js`, 在文件中可定义Model相关属性
```
// Example
const db = require('../db')

module.exports = db.defineModel('Student', {
  username: {
    type: db.STRING(100),
    unique: true
  },
  password: db.STRING(100),
  realname: db.STRING(100),
  gender: db.BOOLEAN
})
```
其中db为对Sequelize的二次封装, 可见[db.js](https://github.com/zjhch123/emiya-node-template/blob/master/src/db.js)

### 4. 添加Controller
在 `controller` 中创建js文件, 例如`controller/student.js`, 文件内容可以参照[user.js](https://github.com/zjhch123/emiya-node-template/blob/master/src/controller/user.js)或者[index.js](https://github.com/zjhch123/emiya-node-template/blob/master/src/controller/index.js)

### 5. 开启/关闭 跨域
[app.js](https://github.com/zjhch123/emiya-node-template/blob/master/src/app.js#L28)第28行





















