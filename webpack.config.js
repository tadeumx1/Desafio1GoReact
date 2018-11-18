
// O Webpack vai automatizar o processo de buscar os arquivos Javascript
// e converter eles com o Babel de uma maneira que o navegador entenda

// Aqui nesse arquivo vamos ter a configuração do Webpack

const path = require('path');

module.exports = {

    // O entry é qual vai ser o arquivo principal da aplicação
    // Esse vai ser o único arquivo que vai ser exportado pelo Wepack
    // Já os outros arquivos ele vai importar eles
    entry: path.join(__dirname, 'src', 'index.js'),
    // Onde o arquivo transpilado pelo Babel vai estar
    output: {

        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'

    },
    module: {

        // As regras definidas aqui são quais loaders podemos utilizar
        // No caso vamos usar o Babel Loader para os arquivos Javascript
        // Mas podemos usar arquivos loaders para arquivos de CSS e Imagens

        rules: [

            {
                // Ele vai usar tratar todos os arquivos de Javascript
                test: /\.js$/,
                // Mas ele não vai tratar os arquivos da node modules
                exclude: /node_modules/,
                // Estamos falando para ele usar o babel-loader
                use: {

                    loader: "babel-loader",

                }

            },
            {

                test: /\.scss$/,
                use: [

                    { loader: "style-loader"},
                    
                    { loader: "css-loader"},

                    { loader: "sass-loader"},

                ]

            }

        ]

    },

    devServer: {

        contentBase: path.join(__dirname, "public")

    }

}