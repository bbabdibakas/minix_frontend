import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack';
import webpackDevServer from 'webpack-dev-server';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

interface Env {
    mode: 'development' | 'production'
}

export default (env: Env) => {
    const mode = env.mode || 'development';
    const isDev = mode === 'development';

    return {
        mode: mode,
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name].[contenthash:8].js',
            clean: true
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                modules: {
                                    auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                                    localIdentName: isDev ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:8]',
                                },
                            },
                        },
                        'sass-loader',
                    ],
                },
            ],
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
            preferAbsolute: true,
            modules: [
                path.resolve(__dirname, 'src'),
                'node_modules'
            ],
            mainFiles: ['index'],
            alias: {},
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, 'public', 'index.html'),
            }),
            new webpack.ProgressPlugin(),
            new MiniCssExtractPlugin({
                filename: 'css/[name].[contenthash:8].css',
                chunkFilename: 'css/[name].[contenthash:8].css',
            }),
        ],
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? {
            port: 3000,
            open: true,
            historyApiFallback: true,
        } : undefined
    }
}
