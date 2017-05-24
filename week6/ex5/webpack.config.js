const { resolve } = require("path");

module.exports = {

    entry: "./src/main.js",


    output: {
        path: resolve(__dirname + "/rdy/"),
        filename: "bundle.js"
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:{
                    loader: "babel-loader",
                    options: {
                        presets: ["es2015"]
                    }
                }
            }
        ]

    }

};