module.exports = {
    entry: [
        './src/index.jsx'
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader'],

            },
        ]

    },
    output: {
        path: __dirname + '/static',
        filename: 'bundle.js',
    }
};