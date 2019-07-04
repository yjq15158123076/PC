const path=require("path");
const VueLoaderPlugin=require('vue-loader/lib/plugin');

module.exports={
    mode:"development",
    entry:"./src/main.js",
    output:{
        path:path.resolve(__dirname,"./dist"),
        publicPath: 'dist',
        filename:"bundle.js"
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:["style-loader","css-loader"]
            },
            {
                test:/\.styl$/,
                use:["style-loader","css-loader","stylus-loader"]
            },
            {
                test:/\.vue$/,
                use:["vue-loader"]
            },
            {
                test:/\.(jpg|png|jpe?g|gif|svg|webp)$/,
                use:['url-loader']
            }
        ]
    },
    plugins:[
        new VueLoaderPlugin()
    ],
    resolve:{
        alias: {
            'vue$':'vue/dist/vue.esm.js'
        }
    }
}