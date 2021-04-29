const compiler = require('@ampproject/rollup-plugin-closure-compiler')

module.exports = {
	rollup(config) {
		config.output.globals.Redux = 'Redux'
		config.plugins.push(compiler())
		return config
	},
}
