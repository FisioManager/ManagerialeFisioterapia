const path = require('path')

module.exports = {
    mode: 'development', 
    entry: './src/index.jsx',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.jsx'
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.svg$/,
                use: 'svg-inline-loader'
            },
            {
                test: /\.scss$/,
                use: [
                  "style-loader",
                  "css-loader",
                  "sass-loader"
                ]
            }
        ]
    },
    resolve: {
        extensions: [".js", ".jsx"]
    }
}


