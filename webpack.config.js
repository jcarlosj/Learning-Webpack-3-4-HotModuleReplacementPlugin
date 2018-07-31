const webpack = require( 'webpack' );

module .exports = {
    mode: 'development',
    entry: {
        app: './index.js'
    },
    output: {
        filename: '[name].bundle.js'
    },
    devServer: {
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ]
    },
    plugins: [
        new webpack .HotModuleReplacementPlugin()
    ]
}
