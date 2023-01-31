const CracoEsbuildPlugin = require('craco-esbuild')
const CracoAntDesignPlugin = require('craco-antd')
const { CracoAliasPlugin } = require('react-app-alias')

module.exports = {
	eslint: {
		enable: false,
	},
	typescript: {
		enableTypeChecking: false,
	},
	plugins: [
		{
			plugin: CracoEsbuildPlugin,
			options: {
				esbuildLoaderOptions: {
					loader: 'tsx',
					target: 'es2022',
				},
				esbuildMinimizerOptions: {
					target: 'es2022',
					css: true,
				},
				esbuildJestOptions: {
					loaders: {
						'.ts': 'ts',
						'.tsx': 'tsx',
						'.js': 'js',
						'.json': 'json',
					},
				},
			},
		},
		{
			plugin: CracoAntDesignPlugin,
		},
		{
			plugin: CracoAliasPlugin,
		},
	],
}
