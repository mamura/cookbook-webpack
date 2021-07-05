## O que são os cookbooks?

Meus cookbooks são receitas rápidas de como executar procedimentos para agilizar no desenvolvimento de novas aplicações. Aqui você vai encontrar tutoriais, passo a passos, etc. É uma amálgama das coisas que eu já usei e que volta e meia me pego precisando utilizar novamente. Afim de facilitar minha vida (já que minha memória não é das melhores), publico aqui esses documentos afim de me ajudar no futuro e ajudar quem também precisar.

## O que é Webpack?

De maneira simples, Webpack é um empacotador de módulos para aplicações javascript. O Webpack permite a você escrever módulos e empacotar todos eles em um ou mais pacotes. Além do javascript, ele também pode incluir outros tipos de arquivos como css, font, image, HTML, e etc. e em seguida transformá-los no formato aceitável do webpack.

### Instalando e configurando

1. Instalar o **npm**.

    ``` bash
    apt-get install npm
    ```

2. Inicia o **package.json**.
O parâmetro **-y** pula as perguntas de criação do arquivo.

    ``` bash
    npm init -y
    ```

3. Instalar o **Webpack**

    ``` bash
    npm install webpack webpack-cli --save-dev
    ```

4. Criar o arquivo **webpack.config.json**
É nesse arquivo que é feito todas as configurações de entrada, saída e adição de plugins utilizados. Neste caso, irei configurar o uso para scss (SASS) e javascript. Crie o arquivo webpack.config.json na raiz do projeto com esse conteúdo:

    ``` javascript
    const path = require('path');
    const MiniCssExtractPlugin = require('mini-css-extract-plugin'); //plugin para exportar o css

    module.exports = {
        mode: "development",
        entry: {
            app: path.resolve(__dirname, 'path/to/entry.js') // caminho para a entrada do arquivo JS
        },
        output: {
            filename: '[name].js',
            path: path.resolve(__dirname, 'path/to/output') // caminho para a pasta em que os arquivos serão exportados
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
    ```

5. Temos que instalar os loaders e plugins necessários para essa configuração funcionar:
    - loaders CSS:

    ``` bash
    npm install --save-dev style-loader css-loader
    ```

    - loaders SASS:

    ``` bash
    npm install --save-dev sass-loader sass
    ```

    - plugin que extrai o CSS. Os loaders de sass compilam o css dentro do arquivo .js. Esse plugin extrai o build do sass e o colocam em um arquivo css minificado:

    ``` bash
    npm install --save-dev mini-css-extract-plugin
    ```
