/* eslint no-console: 0 */
const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CleanWebpackPlugin = require('clean-webpack-plugin')



module.exports = (env, options) => {


    // Basic Configuration elements !!!
    // Multi Mode setup happens here
    // Store current mode to enable Setup specific for production !!!
    let isProduction = options.mode === "production";

    // inline-source-map is loaded with JS but slower and bigger files, used for development only !!!
    let cfgSourceMap = isProduction ? "source-map" : "inline-source-map";


    if (isProduction) console.log("Webpack in PRODUCTION mode!");
    console.log('SourceMap := ' + cfgSourceMap);

    let webpackConfig = {
        entry: "./src/index.tsx",
        output: {
            filename: "[name]_[id]_[chunkhash].js",
            path: __dirname + "/dist"
        },

        devtool: cfgSourceMap,
        resolve: {
            // Add '.ts' and '.tsx' as resolvable extensions.
            extensions: [".ts", ".tsx", ".js", ".json"]
        },

        module: {
            rules: [
                // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
                {
                    test: /\.tsx?$/,
                    loader: "ts-loader"
                },
                {
                    test: /\.html$/,
                    use: [{
                        loader: "html-loader",
                        options: {
                            minimize: this.isProduction ? true : false
                        }
                    }]
                }, {
                    test: /\.css$/,
                    use: [MiniCssExtractPlugin.loader, "css-loader"]
                },
                // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
                {
                    enforce: "pre",
                    test: /\.js$/,
                    loader: "source-map-loader"
                }
            ]
        },

        // When importing a module whose path matches one of the following, just
        // assume a corresponding global variable exists and use that instead.
        // This is important because it allows us to avoid bundling all of our
        // dependencies, which allows browsers to cache those libraries between builds.
        externals: {
            // "react": "React",
            // "react-dom": "ReactDOM"
        },

        optimization: {
            splitChunks: {
                cacheGroups: {
                    commons: {
                        test: /[\\/]node_modules[\\/]/,
                        name: 'vendors',
                        chunks: 'all'
                    }
                },
                //maxSize: 500000,
                name: true
            }
        },
        performance: {
            maxEntrypointSize: 500000,

            assetFilter:

                function (assetFilename) {
                    // Skip vendors for size warnings.
                    return !assetFilename.startsWith("vendors") && assetFilename.endsWith('.js');
                }
        },
        plugins: [
            // new BundleAnalyzerPlugin({
            //     analyzerMode: "static",
            //     reportFilename: "webpackReport.html",
            //     generateStatsFile: true,
            //     statsFilename: "webpackBuildStats.json",
            //     openAnalyzer: false
            // }),
            new HtmlWebPackPlugin({
                template: "./src/index.html",
                filename: "./index.html"
            }),

            new MiniCssExtractPlugin({
                filename: "[name].css",
                chunkFilename: "[id].css"
            }),
            new CleanWebpackPlugin('./dist')
        ]
    };

    if (env && env.STATS === 'true') {
        console.log('Adding Stats to webpack config');
        webpackConfig.plugins.push(
            new BundleAnalyzerPlugin({
                analyzerMode: "static",
                reportFilename: "webpackReport.html",
                generateStatsFile: true,
                statsFilename: "webpackBuildStats.json",
                openAnalyzer: false
            }),
        );
    }
    return webpackConfig;
};
