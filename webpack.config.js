const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); //plugin para exportar o css

module.exports = {
    mode: "development",
    entry: {
        app: path.resolve(__dirname, 'src/webpack/scripts/app.js') // caminho para a entrada do arquivo JS
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'src/public/assets') // caminho para a pasta em que os arquivos serão exportados
    },
    plugins: [new MiniCssExtractPlugin()], // plugin para extrair o CSS
    module: {
        rules: [
            { // essa regra define que, para todo arquivo com a extensão .scss ou sass, serão usado os esses modulos para exportar esses arquivos.
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    }
};