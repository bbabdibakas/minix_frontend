import webpack from 'webpack';
import {BuildOptions} from './types/BuildOptions';

export const buildResolvers = ({paths}: BuildOptions): webpack.ResolveOptions => {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true,
        modules: [
            paths.src,
            'node_modules'
        ],
        mainFiles: ['index'],
        alias: {},
    }
}