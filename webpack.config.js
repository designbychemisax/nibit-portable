var webpack = require('webpack');

var config = {
    optimizeMinimize : false,
    optimizeOccurrenceOrder : false,
    progress : false,
    inline : true,
    debug : true,
    entry : "./src/index.js",
    output : {
        library: 'NibitPortable',
        libraryTarget: 'umd',
        filename : "./dist/nibit-portable.js"
    },
    externals: {
        "react": {
            root: 'React',
            commonjs2: 'react',
            commonjs: 'react',
            amd: 'react'
        },
        "react-dom" : {
            root: 'ReactDOM',
            commonjs2: 'react-dom',
            commonjs: 'react-dom',
            amd: 'react-dom'
        }
    },
    module : {
        loaders : [
            {
                test : /\.jsx?$/,
                exclude : /(node_modules|bower_components)/,
                loader : 'babel-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '']
    }
};

module.exports = config;