var webpack = require( "webpack" );

module.exports = {

	context: __dirname,
	entry: [
		"./App.jsx",
	],
	output: {
		path: __dirname,
		publicPath: "/",
		filename: "dist/bundle.js",
	},
	module: {
		preLoaders: [
			{ test: /\.json$/, loader: 'json' },
		],
		loaders: [
			{ test: /\.(js|jsx)$/, loader: "react-hot!babel", exclude: /node_modules/ },
			{ test: /\.(less|css)$/, loaders: [
				"style?sourceMap",
				"css?modules&importLoaders=2&localIdentName=[name]__[local]___[hash:base64:5]",
			], exclude: /node_modules/ },
			{ test: /\.(woff\d?|eot|ttf|svg)$/, loader: "file" },
			{ test: /\.(png|jpg|gif)$|images\/.*\.svg$/i, loader: 'url?limit=8192' },
		],
	},
	resolve: {
		extensions: [ "", ".js", ".jsx", ".json" ],
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	]

};
