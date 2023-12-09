module.exports = {
	apps: [
		{
			name: 'KandagaPathfinder',
			port: '3000',
			exec_mode: 'cluster',
			script: 'HOST=0.0.0.0 PORT=4000 ORIGIN=https://kandaga.unpad.ac.id node build'
		}
	]
};
