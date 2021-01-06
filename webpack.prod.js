const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
    mode: "production",
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
            }
        ]
    },
    output: {
        filename: "[name]-[contenthash].js",
        path: path.resolve(__dirname, "build/static"),
        publicPath: "",
    },
    plugins: [new MiniCssExtractPlugin({ filename: `style.[hash].css`})]
});