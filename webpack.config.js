const path = require("path");

module.exports = {
	entry: [
		"./js/game.js",
		"./js/constant.js",
		"./js/util.js",
		"./js/backend.js",
		"./js/wizard.js",
		"./js/render.js",
		"./js/debounce.js",
		"./js/script.js",
		"./js/validate.js",
		"./js/dialog.js",
		"./js/move.js"
	],
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname),
		iife: true
	},
	devtool: false
};
