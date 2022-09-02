# WalineService

## 概述：

> 本项目用作 Waline 独立部署，帮助你自动初始化数据库，一键实现可监控式后台运行。
> 在部署[waline-service](https://github.com/loclink/waline-service)前你需要准备好已安装数据库的服务器或云数据库（并在服务器中执行以下操作，该项目支持所有 waline 所支持的数据库，参考：[多数据库服务支持](https://waline.js.org/guide/server/databases.html)。但`npm run init:db`命令当前仅支持 `mysql`

### 拉取仓库：

```sh
git clone https://github.com/loclink/waline-service.git
```

### 安装依赖：

```sh
cd waline-service
npm install
```

### 初始化`.env`文件：

默认情况下，你`clone`下来的仓库是没有`.env`文件的，你可以手动在根目录中创建，并修改为自己的配置：

```env
MYSQL_HOST=127.0.0.1 # 数据库连接地址
MYSQL_PORT=3306 # 数据库连接端口号
MYSQL_DB=waline # 数据库名
MYSQL_USER=root # 连接数据库用户名
MYSQL_PASSWORD=tj991118 # 连接密码
```

如果你嫌麻烦，还可以直接通过执行命令的方式创建`.env`文件，然后再进行修改：

```sh
npm run init:env
```

### 初始化数据库：

当你配置好一切之后，你可以直接通过命令的形式，自动创建名称于`MYSQL_DB`相同的数据库，并在此数据库中自动为你创建`Waline`所需要的数据表：   
**该命令当前只支持 mysql，这意味着：如果你使用的是其他类型的数据库，需要自己手动创建数据库和数据表。**
```sh
npm run init:db
```

![image](https://tvax1.sinaimg.cn/large/0087ufIQgy1h5idir4pkoj30kv07atbt.jpg)

![image](https://tvax2.sinaimg.cn/large/0087ufIQgy1h5idl5sygaj306u03fq3d.jpg)

### 启动项目：

```sh
npm run start
```

![image](https://tva4.sinaimg.cn/large/0087ufIQgy1h5idn0aqy4j315z08k0yx.jpg)

### 其他操作命令：

```sh
npm run dev # 开发时前台启动服务并保持代码热更新
npm run stop # 停止运行
npm run log # 查看日志
npm run status # 查看运行状态
```

### 服务反向代理：

请查阅：https://waline.js.org/guide/server/vps-deploy.html

### 关于：

仓库地址：https://github.com/loclink/waline-service，如果你觉得还不错的话，就留下一个star吧~

主要依赖：[waline](https://github.com/walinejs/waline)

更多`waline`配置请查阅：https://waline.js.org/
