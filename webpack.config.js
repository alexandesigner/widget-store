const path = require('path');
const UglifyJsPlugin = require('uglifyjs-3-webpack-plugin');
var copyWebpackPlugin = require('copy-webpack-plugin');
const bundleOutputDir = './dist';

module.exports = (env) => {
    const isDevBuild = !(env && env.prod);
    return [{
        entry: './src/main.js',
        output: {
            filename: 'widget.js',
            path: path.resolve(bundleOutputDir)
        },
        devServer: {
            contentBase: bundleOutputDir
        },
        optimization: {
            minimizer: [
                new UglifyJsPlugin()
            ]
        },
        plugins: isDevBuild ? [new copyWebpackPlugin([{ from: 'example/' }])] : [],
        module: {
            rules: [
                {
                    test: /\.svg/,
                    use: {
                        loader: 'svg-url-loader',
                        options: {}
                    }
                },
                { test: /\.html$/i, use: 'html-loader' },
                { test: /\.css$/i, use: [
                        'style-loader', 
                        'css-loader',
                        {
                            loader: 'postcss-loader',
                            options: {
                                config: {
                                    path: path.resolve('./postcss.config.js')
                                }
                            },
                        },
                    ] 
                },
                {
                    test: /\.js$/i, exclude: /node_modules/, use: {
                        loader: 'babel-loader',
                        options: {
                            presets: [['@babel/env', {
                                'targets': {
                                    'browsers': ['ie 6', 'safari 7']
                                }
                            }]]
                        }
                    }
                }
            ]
        }
    }];
};