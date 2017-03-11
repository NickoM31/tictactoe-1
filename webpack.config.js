module.exports = {
    entry: {
        app: ["./src/app.js", "./src/style.css", "./src/index.html"]
    },
    output: {
        path: './bin',
        filename: 'app.bundle.js'
    },
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: [
                {
                    loader :"babel-loader"
                }
            ]
          },
          {
            test: /\.css$/, 
            use: [
                {
                    loader :"file-loader",
                    options:{
                    name: "[name].[ext]",
                    emitFile: "true"
                    }
                }
            ]
          },
          {
            test: /\.html$/,
            use: [
                {
                    loader :"file-loader",
                    options:{
                    name: "[name].[ext]",
                    emitFile: "true"
                    }
                }
            ]
          }
        ]
    }
};
