const path = require('path');

module.exports = {
    // Other Webpack configuration options...
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
};
