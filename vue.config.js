const webpack = require("webpack");

module.exports = {
	lintOnSave: false,
	configureWebpack: {
		plugins: [
			new webpack.optimize.LimitChunkCountPlugin({
				maxChunks: 6,
			}),
		],
	}
};
