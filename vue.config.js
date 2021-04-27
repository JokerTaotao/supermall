module.exports = {
    configureWebpack: {
        //路径问题
        resolve: {
            alias: {
                //@是默认配置好了的，可以直接用
                //'@': 'src'，
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'network': '@/network',
                'views': '@/views',
            }
            //解决后缀名的问题，一般不需要配置，默认配置过了
            // extensions: []
        }
    }
}