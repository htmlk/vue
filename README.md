#搭建webpack+vue.js前端开发框架实战

##项目展示

[本项目已经更新至vue2.0，点击查看](https://github.com/htmlk/vue2.0 "https://github.com/htmlk/vue2.0")

![](http://i.imgur.com/bHg7Pba.png)

微信扫一扫查看，或者直接点击[http://www.htmlk.cn](http://www.htmlk.cn "www.htmlk.cn")

vue文档链接：

[vue2.0中文文档](https://vuefe.cn/ "https://vuefe.cn/")

[vue1.0文档](https://cn.vuejs.org/ "https://cn.vuejs.org/")

###1、引导页：（可以左右滑动，点击登录可以跳转进入登录页，点击直接进入官网）
![引导](http://i.imgur.com/riq3hOq.png)
![登录](http://i.imgur.com/SyVRcyL.png)
###2、首页：（ps：可下拉刷新加载)
![首页](http://i.imgur.com/VI2siQN.png)
###3、发现页：（ps：点击热门推荐可以查看详情页）
![搜索页](http://i.imgur.com/xqfPYVW.png)
###4、详情页
![详情页](http://i.imgur.com/Z2VIZOH.png)
###5、信息页：（ps:可以左右无限滑动，点击navbar）
![信息](http://i.imgur.com/iCHhfNd.png)
##如何run本项目
1、首先下载本代码，并安装依赖(确保网络通畅，网路不好请一个一个下载),并使用webpack-server启动服务
```

	cnpm i
	//webpack
	webpack -w
	//npm run build
	webpack-dev-server

```
2、mock数据 启用json-server插件 在mock文件夹启动
```

	json-server mock/mock.js --watch --port 8080

```
3、配置host：将www.htmlk.cn映射到localhost，这个方法实现前后端联调
(ps:当然也可以去项目中把www.html.cn改回localhost)
```

	127.0.0.1 localhost www.htmlk.cn

```
##开始开发
###1、环境要求：安装node.js 
###2、npm下在组件：
（ps：如果用package.json 不能安装，就新建一个package.json,一个个安装。观察那个出错，node-sass很难安装）
```

	//webpack
	cnpm i webpack -g
	cnpm i webpack -d
	//webpack服务
	cnpm i webpack-dev-server -D
	//loader
	cnpm i css-loader style-loader sass-loader  string-loader -D
	//babel-core：ES2015编译核心<br/>
	//babel-loader：编译写入ES2015文档<br/>
	//babel-preset-es2015：ES2015语法<br/>
	cnpm i babel-core babel-loader babel-preset-es2015 -D
	//
	cnpm i extract-text-webpack-plugin -D
	//node-sass 这个有点难装
	cnpm node-sass -D
	//vue 组件
	cnpm i vue-router vue-resource vue-html-laoder -D

```
###3、需要用到的命令：
```

	启动服务：webpack-dev-server 
	实时：webpack-dev-server --inline --hot
	监控代码：webpack -watch

......
```
###4、package.json
```

	{
	  "name": "www",
	  "version": "1.0.0",
	  "description": "",
	  "main": "index.js",
	  "scripts": {
	    "test": "echo \"Error: no test specified\" && exit 1",
	    "build": "webpack-dev-server --inline --hot"
	  },
	  "author": "",
	  "license": "ISC",
	  "devDependencies": {
	    "babel-cli": "^6.16.0",
	    "babel-core": "^6.17.0",
	    "babel-loader": "^6.2.5",
	    "babel-preset-es2015": "^6.16.0",
	    "babel-preset-react": "^6.16.0",
	    "css-loader": "^0.25.0",
	    "extract-text-webpack-plugin": "^1.0.1",
	    "node-sass": "^3.10.1",
	    "sass-loader": "^4.0.2",
	    "string-loader": "^0.0.1",
	    "style-loader": "^0.13.1",
	    "webpack": "^1.13.2",
	    "webpack-dev-server": "^1.16.2"
	  }
	}

```
###5、在引用es2015、react的时候需要新建 .babelrc 文件
```

	{
	  "presets":["es2015","react"]
	}

```
###6、项目目录文件及webpack.config.js
![Alt text](http://7xn9on.com1.z0.glb.clouddn.com/2016-10-19_212318.png)
###7、vue的插件
vue：（版本：Vue.js v1.0.260
vue-router：Vue.js 官方路由。与 Vue.js 内核深度整合，让构建单页应用易如反掌。（版本：vue-router v0.7.13）

vue-resource：通过 XMLHttpRequest 或 JSONP 发起请求并处理响应。（版本：vue-resource v1.0.3)

vue-async-data：异步加载数据插件。

vue-validator：表单验证插件。

vue-devtools：Chrome 开发者工具扩展，用于调试 Vue.js 应用。

vue-touch：使用 Hammer.js 添加触摸手势指令。

vue-element：使用 Vue.js 注册自定义元素。

vue-animated-list： 方便的为 v-for 渲染的列表添加动画。
###8、json-server使用
```

	cnpm i json-server -D
	//启动命令
	
	json-server mock/mock.js --watch --port 8080

```
###9、vuex使用
文档：https://github.com/vuejs/vuex/blob/1.0/docs/zh-cn/tutorial.md
写好vuex各个js文件

```

	//每个页面包括以下：change去改变
	import {changeIndex} from "../vuex/actions";
	export default {
	  vuex:{
	    actions:{
	      change:changeIndex
	    }
	  },
	  ready(){
	    this.change(2)
	  }
	}
	```
	```javascript
	//index.vue里面footer的html
	<footer id="footer">
	      <ul>
	        <li v-bind:class="curIndex==$index?'active':''" v-on:click="changPage($index)" v-for="tab in tabList" v-link="{path:tab.path}"><i class="iconfont">{{{tab.icon}}}</i><span>{{tab.name}}</span></li>
	      </ul>
	    </footer>

```
```

	//在切换的地方（eg：footer）
	
	import {changeIndex} from "../vuex/actions.js";
	import { getIndex } from '../vuex/getters';
	export default {
	  vuex: {
	      actions: {
	        change:changeIndex
	      },
	      getters: {
	        curIndex: getIndex
	      }
	    },
	  ready(){
	    this.change(2)
	  },
	  methods:{
	      changPage(index){
	          this.change(index);
	          console.log(index);
	      }
	    }
	}

```

###TODO
1、瀑布流未能实现

		实现：1、使用以前的方法做一个waterfallutil.js
					在本项目lib里面
					2、使用vue组件waterfall 升级vue2.0实现

2、没有做懒加载，导致页面卡断。

3、目前vue版本是1.0，后面升级到2.0。敬请期待！
