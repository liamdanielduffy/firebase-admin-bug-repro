const path = require("path");

module.exports = {
	target: "serverless",
	webpack(config, options) {
		config.resolve.alias["libraries"] = path.join(__dirname, "libraries");
		config.resolve.alias["pages"] = path.join(__dirname, "pages");
		return config;
	}
};
