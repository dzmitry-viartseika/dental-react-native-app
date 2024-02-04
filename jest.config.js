module.exports = {
	preset: 'react-native',
	moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
	transform: {
		'^.+\\.(js|jsx)$': require.resolve('babel-jest'),
	},
	testEnvironment: 'node',
};
