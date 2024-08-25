import path from 'path';

module.exports = {
    // Other Webpack configuration options...
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'), // '@'를 src 폴더로 매핑
        },
        extensions: ['.js', '.ts', '.tsx', '.json'], // 확장자 생략 가능
        fallback: {
            path: require.resolve('path-browserify'),
        },
    },
};
