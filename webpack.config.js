/* eslint camelcase: 0, object-curly-newline: 0 */
const path = require("path");
const webpack = require("webpack");
const appRoutes = require("./tools/generate-routes-copy-array");
const levelsToRoot = require("./tools/levels-to-root");
const autoprefixer = require("autoprefixer");
const TerserPlugin = require("terser-webpack-plugin");
const SentryCliPlugin = require("@sentry/webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const FileManagerPlugin = require("filemanager-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const AppManifestWebpackPlugin = require("app-manifest-webpack-plugin");

module.exports = (env, argv) => {
    const isProd = argv.mode === "production";
    const isDevServer = !!argv.host;
    const version = env && env.semver ? env.semver : "LOCAL_DEV";
    const isRelease = env && env.release === "true";
    const basename = env && env.basename ? `/${env.basename}/` : "/";
    const infoVersion = env && env.info_version ? env.info_version : "LOCAL_DEV";

    const config = {
        entry: {
            "px-script": ["@babel/polyfill", "./src/px-script/main/index.js"],
            "px.dashboard": "./src/px-script/dashboard/index.js",
            app: ["@babel/polyfill/noConflict", "./src/index.js"]
        },
        resolve: {
            extensions: [".js", ".jsx", ".json"]
        },
        output: {
            library: "payex",
            path: path.resolve(__dirname, `dist${basename}`),
            filename: "scripts/[name].js?[hash]",
            chunkFilename: "scripts/[name].js?[hash]",
            publicPath: basename
        },
        // target: "async-node",
        devtool: "source-map",
        devServer: {
            contentBase: path.resolve(__dirname, `dist${basename}`),
            publicPath: basename,
            compress: true,
            port: 3000,
            hot: true,
            clientLogLevel: "warning",
            historyApiFallback: true,
            /*
                Temporary fix for the websocket issue with webpack dev server on IE11 [AW]
                https://stackoverflow.com/questions/51893524/websockets-not-closing-on-ie-if-closing-handshake-is-never-made
                TODO: Keep an eye out for fixes
            */
            disableHostCheck: true
        },
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    exclude: modulePath => (
                        (/node_modules/).test(modulePath) &&
                        !(/node_modules\/*/).test(modulePath) &&
                        (/__snapshots__/).test(modulePath)
                    ),
                    use: {
                        loader: "babel-loader",
                        options: {
                            presets: ["@babel/preset-env"]
                        }
                    }
                },
                {
                    test: /\.less$/,
                    resolve: { extensions: [".less"] },
                    use: [
                        {
                            loader: isProd ? MiniCssExtractPlugin.loader : "style-loader"
                        },
                        {
                            loader: "css-loader",
                            options: {
                                // modules: "global"
                            }
                        },
                        {
                            loader: "postcss-loader",
                            options: {
                                plugins: () => autoprefixer({
                                    grid: true
                                })
                            }
                        },
                        {
                            loader: "less-loader",
                            options: {
                                javascriptEnabled: true
                            }
                        }
                    ]
                },
                {
                    test: /\.css$/,
                    use: [
                        {
                            loader: isProd ? MiniCssExtractPlugin.loader : "style-loader"
                        },
                        "css-loader",
                        {
                            loader: "postcss-loader",
                            options: {
                                plugins: () => autoprefixer()
                            }
                        }
                    ]
                },
                {
                    test: /\.svg$/i,
                    include: [
                        path.resolve(__dirname, "src/icons/flags/1x1")
                    ],
                    use: [
                        {
                            loader: "file-loader",
                            options: {
                                outputPath: "img/flags/1x1/",
                                name: "[name].[ext]?[hash]"
                            }
                        }
                    ]
                },
                {
                    test: /\.svg$/i,
                    include: [
                        path.resolve(__dirname, "src/icons/flags/4x3")
                    ],
                    use: [
                        {
                            loader: "file-loader",
                            options: {
                                outputPath: "img/flags/4x3/",
                                name: "[name].[ext]?[hash]"
                            }
                        }
                    ]
                },
                {
                    test: /\.(png|jpe?g|gif|svg)$/i,
                    exclude: /flags/,
                    use: [
                        {
                            loader: "file-loader",
                            options: {
                                outputPath: "img/",
                                name: "[name].[ext]?[hash]"
                            }
                        }
                    ]
                }
            ]
        },
        optimization: {
            splitChunks: {
                chunks: "async",
                minSize: 30000,
                maxSize: 0,
                minChunks: 1,
                maxAsyncRequests: 5,
                maxInitialRequests: 3,
                automaticNameDelimiter: "~",
                name: true,
                cacheGroups: {
                    vendors: {
                        test: /[\\/]node_modules[\\/]/,
                        priority: -10
                    },
                    default: {
                        minChunks: 2,
                        priority: -20,
                        reuseExistingChunk: true
                    },
                    pxStyles: {
                        name: "px",
                        test: /(flatpickr\.css|px\.less)$/,
                        chunks: "all",
                        enforce: true
                    },
                    docStyles: {
                        name: "documentation",
                        test: /documentation\.less$/,
                        chunks: "all",
                        enforce: true
                    },
                    dgStyles: {
                        name: "designguide",
                        test: /designguide\.less$/,
                        chunks: "all",
                        enforce: true
                    }
                }
            },
            minimize: isProd,
            minimizer: [
                new TerserPlugin({
                    sourceMap: true,
                    terserOptions: {
                        compress: { drop_console: true }
                    }
                }),
                new OptimizeCSSAssetsPlugin()
            ],
            mergeDuplicateChunks: isProd
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: "./src/index.html",
                hash: true,
                title: "PayEx DesignGuide",
                meta: {
                    "informational-version": infoVersion
                }
            }),
            new MiniCssExtractPlugin({
                filename: "styles/[name].css"
            }),
            new webpack.DefinePlugin({
                "process.env": {
                    basename: JSON.stringify(basename),
                    version: JSON.stringify(version),
                    sentry: isRelease,
                    google: isRelease
                }
            }),
            new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/) // Ignores moments locale folder which doubles the size of the package, moment is a dependency of chart.js [EH]
        ]
    };

    if (!env && !isDevServer) {
        config.plugins.push(
            new BundleAnalyzerPlugin()
        );
    }

    if (isRelease) {
        const rootPath = levelsToRoot(basename);

        config.plugins.push(
            new HtmlWebpackPlugin({
                filename: `${rootPath}index.html`,
                template: "./build/rootindex.html",
                hash: true,
                title: "PayEx DesignGuide",
                chunks: ["px"],
                basename
            }),
            new HtmlWebpackPlugin({
                filename: `${rootPath}404.html`,
                template: "./build/root404.html",
                hash: true,
                chunks: ["px"],
                title: "PayEx DesignGuide",
                basename
            }),
            new SentryCliPlugin({
                release: version,
                include: ".",
                ignore: ["node_modules", "webpack.config.js"]
            })
        );
    }

    if (isProd && !isDevServer) {
        const onEndArchive = [
            {
                source: "./dist/temp/icons",
                destination: `./dist${basename}release/icons.zip`
            }
        ];

        if (isRelease) {
            onEndArchive.push({
                source: "./dist/temp/release",
                destination: `./dist${basename}release/PayEx.DesignGuide.v${version}.zip`
            });
        }

        config.plugins.push(
            new AppManifestWebpackPlugin({
                logo: "./src/img/favicon.png",
                output: "/icons/",
                config: {
                    appName: "PayEx DesignGuide",
                    developerName: "PayEx",
                    developerURL: "https://payex.com",
                    background: "#000",
                    theme_color: "#2da944",
                    version,
                    icons: {
                        android: true,
                        appleIcon: true,
                        appleStartup: true,
                        coast: true,
                        favicons: true,
                        firefox: false,
                        opengraph: true,
                        twitter: true,
                        yandex: false,
                        windows: true
                    }
                }
            }),
            new FileManagerPlugin({
                onStart: [
                    {
                        delete: ["./dist"]
                    }
                ],
                onEnd: [
                    {
                        copy: [
                            {
                                source: `./dist${basename}icons`,
                                destination: "./dist/temp/icons/icons"
                            },
                            {
                                source: `./dist${basename}scripts/px-script.js`,
                                destination: "./dist/temp/release/scripts"
                            },
                            {
                                source: `./dist${basename}scripts/px-script.js.map`,
                                destination: "./dist/temp/release/scripts"
                            },
                            {
                                source: `./dist${basename}scripts/px.dashboard.js`,
                                destination: "./dist/temp/release/scripts"
                            },
                            {
                                source: `./dist${basename}scripts/px.dashboard.js.map`,
                                destination: "./dist/temp/release/scripts"
                            },
                            {
                                source: `./dist${basename}styles/px.css`,
                                destination: "./dist/temp/release/styles"
                            }
                        ],
                        mkdir: [`./dist${basename}release`],
                        archive: onEndArchive,
                        delete: ["./dist/temp"]
                    },
                    {
                        copy: appRoutes.map(route => ({
                            source: `./dist${basename}index.html`,
                            destination: `./dist${basename}${route}`
                        }))
                    }
                ]
            })
        );
    }

    return config;
};
