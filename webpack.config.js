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
        "react": "React",
        "react-dom" : "ReactDOM"
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