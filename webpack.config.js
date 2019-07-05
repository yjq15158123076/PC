const path = require("path");


const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
	mode: "development",
	entry: "./src/main.js", // 统领万物 
	output: {
		path: path.resolve(__dirname,"./dist"),
		publicPath: "dist", // 用来设置网络路径的
		filename: "bundle.js"
	},
	module: {
		rules: [
			{
				test: /\.styl$/,
				use: ["style-loader","css-loader","stylus-loader"]
			},
			{
				test: /\.vue$/,
				use: ["vue-loader"]
			},
			{
				test: /\.css$/,
				use: ["vue-style-loader","css-loader"]
			},
			{
				test:/.(jpg|png)$/,
				use:['url-loader']
			}
			// {
            //     test: require.resolve("some-module"),
            //     use: "imports-loader?this=>window"
            // }
		]
	},
	plugins: [
	  // 请确保引入这个插件！
	  new VueLoaderPlugin()
	],
	resolve: {
	   alias: {
	     'vue$': 'vue/dist/vue.esm.js' // 用 webpack 1 时需用 'vue/dist/vue.common.js'
	   }
	 },

	//-----------------------------------------------\\
	// dev: {

	// 	// 静态资源文件夹
	// 	assetsSubDirectory: 'static',
	
	// 	// 发布路径
	// 	assetsPublicPath: '/',
	
	// 	// 代理配置表，在这里可以配置特定的请求代理到对应的API接口
	// 	// 例如将'localhost:8080/api/xxx'代理到'www.example.com/api/xxx'
	// 	// 使用方法：https://vuejs-templates.github.io/webpack/proxy.html
	// 	proxyTable: {
	// 	  '/api': {
	// 		target: 'http://youwangdian.com/api/sys/listRecommendShop?pageSize=8', // 接口的域名
	// 		// secure: false,  // 如果是https接口，需要配置这个参数
	// 		changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
	// 		pathRewrite: {
	// 		  '^/api': ''
	// 		}
	// 	  }
	// 	},
	
	// 	// 本地访问 http://localhost:8080
	// 	host: 'localhost', // can be overwritten by process.env.HOST
	// }
}