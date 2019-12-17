## 基于 React 实现的个人博客

本项是使用 React 实现的个人博客，使用了 Redux 做数据管理，后端使用的是 Ruby On Rails 提供的接口，欢迎大家围观！

## 本地部署
```
git clone git@github.com:wewin11235/react-blog.git
cd react-blog
npm install
npm run start
```
部署完成后，使用浏览器访问 http://localhost:9000 端口即可。

前面说了项目的接口是一个 Ruby On Rails 项目提供的，所以你还需要部署一下 <a href="https://github.com/wewin11235/myblogapi" target="_blank">Blog Api</a> 才能在本地成功体验这个项目，当然你也可以前往 <a href="http://120.24.88.228/" target="_blank">蚂蚁哈哈哈站点</a> 体验这个项目。


## 效果图
### 登陆页面
![sign in](https://github.com/ItsWewin/images/raw/master/blog/blog-sign-in.png)

### 主页
![index](https://github.com/ItsWewin/images/raw/master/blog/blog-index.png)

### 详情页
![detail](https://raw.githubusercontent.com/ItsWewin/images/master/blog/blog-detail.png)

### 新建或编辑页面
![new-or-edit](https://raw.githubusercontent.com/ItsWewin/images/master/blog/blog-edit.png)

## 项目状况

目前项目已经能使用，但是还有很多细节需要完善，代码也需要优化和重构，感兴趣的朋友可以 start 或者加 follow，后面我会持续更新。


# 项目部署

因为涉及到 Ruby on Rails、React、webpack、以及 nginx 等相关知识点，所以你至少要对 Ruby on Rails、webpack、nginx 有所了解，否则遇到文章中没有提到的问题时，你可能会不知道如何解决。

由于我使用的云服务器的基础设施较完善，基本是购买完成后，远程上去装自己需要的软件包就可以。

这个博客系统是 React + Redux + webpack 构建的前端，Ruby on Rails 构建的后端，需要安装的软件有 Ruby、Mysql、Redis 等。

## step1 创建用户用来发布应用
大家都知道使用 root 用户来发布应用的做法是不安全也是不合理的，我们创建普通户来发布咱们的应用
```
# useradd wewin  // 创建用户
# passwd wewin   // 设置密码
```
添加用户 'wewin' 到 sudoer list：
```
# sudo vim /etc/sudoers
```

添加如下内容：
```
## Allow root to run any commands anywhere
root    ALL=(ALL)       ALL
wewin   ALL=(ALL)       ALL  #  添加 wein 用户到 sudoer list
```
普通用户 wewin 创建完成，后面的操作在 wewin 用户名下完成：
```
# su wewin
```

## step2 安装 mysql
#### 安装并启动 mysql
``` 
$ sudo yum install wget
$ sudo wget http://repo.mysql.com/mysql-community-release-el7-5.noarch.rpm
$ sudo rpm -ivh mysql-community-release-el7-5.noarch.rpm
$ sudo yum update
$ sudo yum install mysql-server
$ sudo systemctl start mysqld
```
#### 设置数据库 root 用户密码：
```
$ sudo systemctl stop mysqld
$ sudo mysqld_safe --skip-grant-tables &

$ mysql -u root
> use mysql;
> update user SET PASSWORD=PASSWORD("password") WHERE USER='root';
> flush privileges;
> exit

$ sudo systemctl start mysqld
```
mysql 安装完成。当然好的做法是针对你自己的应用，专门创建一个 mysql 用户

## step3 安装 Redis

```
$ sudo yum install redis
$ sudo systemctl start redis
$ sudo systemctl enable redis
```
安装完成后 `redis-server --version` 能看到版本或 `redis-cli` 能成功连接到 Redis， 说明 Redis 启动成功。

## step4 安装 Git
代码是托管在 git 上的，为了拉取代码方便，需要安装 git 客户端

```
$ sudo yum install -y git
```

## step5 安装 Ruby
前面提到过，后端是使用 Ruby on Rails 提供的接口，所以必须要安装 Ruby 的运行环境，这里是用 RVM 安装 Ruby

#### 安装依赖
```
$ sudo yum install gcc-c++ patch readline readline-devel zlib zlib-devel libyaml-devel libffi-devel openssl-devel make    bzip2 autoconf automake libtool bison iconv-devel sqlite-devel
```
#### 安装 RVM
```
$ sudo curl -sSL https://rvm.io/mpapis.asc | gpg2 --import -
$ sudo curl -sSL https://rvm.io/pkuczynski.asc | gpg2 --import -
$ sudo curl -L get.rvm.io | bash -s stable
$ source /home/wewin/.rvm/scripts/rvm
$ rvm reload
$ rvm requirements run
```

#### 修改 RVM 的 Ruby 源，以提高下载速度
```
$ echo "ruby_url=https://cache.ruby-china.com/pub/ruby" > ~/.rvm/user/db
```
#### 使用 RVM 安装 Ruby
```
$ rvm install 2.4
```

## step6 安装 nginx
由于我们只用到了 nginx 的基础模块，所以直接使用 yum 安装就可以
```
$ sudo yum install epel-release
$ sudo yum install nginx
$ sudo systemctl start nginx
$ sudo systemctl enable nginx
```
安装完成后浏览器访问服务器公网 IP 能看到 nginx 的默认页面就证明 nginx 安装成功（ps： 如果 nginx 服务已经启动，但是访问服务失败，请检查火墙或者服务器 80 端口是否被禁用）

基础软件基本安装完成，下一步就开始部署 Rails 应用和使用 nginx 发布前端资源。

## step7 部署后端 API
后按 API 是使用 Ruby on Rails 部署的，我选择 unicorn 作为发布 Ruby on Rails 的应用服务器。

#### 安装依赖
```
#### sudo yum install mysql-devel
```

#### 安装 bundler
```
gem install bunlder
```

#### 拉取代码并安装依赖
```
$ cd
$ git clone https://github.com/wewin11235/myblogapi.git
$ cd myblogapi/
$ bundle install
```

#### 配置数据库
```
cp config/database.yml.example config/database.yml
```

database.yml 内容如下，其中 database, username, password 需要根据自己的实际情况修改

```
default: &default
  adapter: mysql2
  encoding: utf8
  pool: <%= ENV.fetch("RAILS_MAX_THREADS") { 5 } %>
  socket: /tmp/mysql.sock

production:
  <<: *default
  database: myBlog_production  # 指定数据库名称，后面会根据这个名称创建数据库。
  username: username                 # 需要改为你的数据库用户名
  password: <%= ENV['MYBLOG_DATABASE_PASSWORD'] %>  #需要改为你的数据库用户对应的密码，当然你也可以把这个密码放到系统变量中。
```
修改完成后，保存退出

#### 添加 SECRET_KEY_BASE
```
$ RAILS_ENV=production rake secret
d56e86d7a496c06a535b15db63e7fa4d3d3d9733a7ca02e7d4c54ed3a25b0f05fad750d574c27f6d234bde609b50447fff871f62e59237f026ab1cce15bf6438

$ sudo echo 'export SECRET_KEY_BASE=d56e86d7a496c06a535b15db63e7fa4d3d3d9733a7ca02e7d4c54ed3a25b0f05fad750d574c27f6d234bde609b50447fff871f62e59237f026ab1cce15bf6438' >> ~/.bash_profile
```

#### 创建数据库并运行数据库迁移
```
$ sudo yum install nodejs                   # 安装 nodejs 否则 `RAILS_ENV=production rails db:create` 可能报错
$ RAILS_ENV=production rails db:create
$ RAILS_ENV=production rails db:migrate
$ RAILS_ENV=production rails db:seed        # 初始化部分数据
```

#### 使用 unicorn 启动项目
```
bundle exec unicorn -c config/unicorn.rb -l 3000  -E production -D
```

## step8 升级 node
#### 卸载并重新安装 node
```
sudo yum remove nodejs
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash

echo 'export NVM_DIR="$HOME/.nvm"' >> /etc/profile
echo '[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"' >> /etc/profile
echo '[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"' >> /etc/profile
source /etc/profile
nvm install node
```
node 和 npm 版本
```
$ node -v
v12.4.0

$ npm -v
6.9.0
```

## step9 编译前端代码
#### 拉取代码：
```
$ cd
$ git clone https://github.com/wewin11235/react-blog.git
$ cd react-blog/
```

#### 修改配置：
你需要修改 react-blog 项目目录下的 onfig.js 文件：
```
global.myBlog = {
  apiServer: "http://120.24.88.228"  // 这里改为你自己的服务器地址
};
```
#### 编译资源
```
$ npm install
$ npm run build
```

编译成功后，在 build 目录下能看到编译的输出
```
$ cd build
$ ls
0.9ca96b35.css	   images      index.html.gz  main.9ca96b35.js	   react-vendor~main.9ca96b35.js
0.9ca96b35.css.gz  index.html  logo.png       main.9ca96b35.js.gz  react-vendor~main.9ca96b35.js.gz
```
编译出来的静态资源，等下使用 nginx 做代理，发布出去。

## step10 使用 nginx 整合前后端

### 规划
假设我部署的服务的 IP： 120.24.88.228， 域名：www.mayihahah.com

### 说明
前端编译的资源中 index.html 是整个前端的入口文件，我们需要访问 http://www.mayihahah.com 的时候到达的页面肯定是我们应用的首页，所以 80 端口的 localtion /  的 root 指向的肯定是 index.html。上面部署的时候，我们知道我们后端的 API 相关接口是通过 unicorn 启动在 120.24.88.228:3000 端口的，前端通过 ajax 请求 api 数据的。

熟悉跨域的朋友肯定能想到这里是存在跨域问题的，单由于我这篇文章不是讲解跨域的，所以我这里只给出了我这种场景下是怎么解决这个跨域问题，这种解决方式，不具有通用性。

由于我后端的 api 的 url 都在 'api' 这个域下， 如：`http://120.24.88.228:3000/api/categores`。前端的 url 只有 '/login'、'/'、 'new-aricle' 三个路由。前后端不存在路由冲突的情况，所以我将 unicorn 启动的 3000 端口下的服务也代理到了 80 端口下，这样就不存在了跨域问题，因为所有的 url 都在 80 端口了。这种解决方式并不标准，可参考性较差，在复杂的应用中不存在 url 冲突的可能性较小。

### 整合

#### 将 step9 中编译出来的资源拷贝到你指定的 nginx 发布目录，我定的发布目录在 `/usr/share/nginx/myblog/`
```
$ cp -r ~/react-blog/build/* /usr/share/nginx/myblog/
```

#### 修改 nginx.conf 如下：
```
user root;
worker_processes 2;

events {
  worker_connections 1024;
}

http {
  include mime.types;

  default_type application/octet-stream;

  sendfile on;

  keepalive_timeout 0;

  server {
    gzip on;
    gzip_static on;
    gzip_min_length 1000;
    gzip_buffers 4 8k;
    gzip_types text/plain application/xml text/css text/js text/xml application/x-javascript text/javascript application/json application/xml+rss image/jpeg image/png image/g   
    gzip_vary on;

    listen 80;
    location / {
      root /usr/share/nginx/myblog;
      index index.html;
      try_files $uri /index.html;
    }

    location ~ /api {
      proxy_pass http://unix:/home/wewin/myblogapi/tmp/sockets/socket;  // 这是 unicorn 启动的 server 的 socket
    }
  }
}
```

#### reload nginx
```
$ sudo nginx -t
$ sudo nginx -s reload
```

这时候访问服务器 IP 就可以看到博客系统部署成功
