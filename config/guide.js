const guide = {
	name: 'Project',
	description: 'Dolorem ipsa iure facilis ipsa porro officia officia sit veritatis sint impedit animi temporibus. Omnis ipsam perferendis voluptate itaque.',
	version: '1.0.0',
	lastUpdate: new Date(),
	url: {
		design: 'test.com',
		prototype: {
			desktop: 'test.com',
			mobile: 'test.com',
		},
		repository: 'test.com',
		dev: 'https://example.dev.byclients.com',
		stage: 'https://example.stage.byclients.com',
		prod: 'https://example.com',
	},
	team: [
		{
			name: 'Management',
			list: [
				{
					name: 'Joana',
					surname: 'Correia',
					role: 'Project Management',
					email: 'joana.correia@wycreative.com',
				},
				{
					name: 'César',
					surname: 'Guerra',
					role: 'Project Management',
					email: 'cesar.guerra@wycreative.com',
				},
			],
		},
		{
			name: 'Design',
			list: [
				{
					name: 'Eduardo',
					surname: 'Narciso',
					role: 'UX/UI Designer',
					email: 'eduardo.narciso@wycreative.com',
				},
			],
		},
		{
			name: 'Development',
			list: [
				{
					name: 'Rui',
					surname: 'Rosa',
					role: 'CTO',
					email: 'rui.rosa@wycreative.com',
				},
				{
					name: 'Abel',
					surname: 'Silva',
					role: 'FE',
					email: 'abel.silva@wycreative.com',
				},
				{
					name: 'Oscar',
					surname: 'Marcelo',
					role: 'FE',
					email: 'oscar.marcelo@wycreative.com',
				},
				{
					name: 'Hugo',
					surname: 'Coutinho',
					role: 'FE',
					email: 'hugo.coutinho@wycreative.com',
				},
				{
					name: 'Madalena',
					surname: 'Santos',
					role: 'FE',
					email: 'madalena.santos@wycreative.com',
				},
				{
					name: 'Marcelo',
					surname: 'Santos',
					role: 'FE',
					email: 'marcelo.santos@wycreative.com',
				},
				{
					name: 'Diogo',
					surname: 'Oliveira',
					role: 'FE',
					email: 'diogo.oliveira@wycreative.com',
				},
				{
					name: 'Carlos',
					surname: 'Pacheco',
					role: 'BE',
					email: 'carlos.pacheco@wycreative.com',
				},
				{
					name: 'Ricardo',
					surname: 'Santos',
					role: 'BE',
					email: 'ricardo.santos@wycreative.com',
				},
				{
					name: 'Nilson',
					surname: 'Martins',
					role: 'BE',
					email: 'nilson.martins@wycreative.com',
				},
				{
					name: 'Fábio',
					surname: 'Ferreira',
					role: 'BE',
					email: 'fabio.ferreira@wycreative.com',
				},
				{
					name: 'Pedro',
					surname: 'Rodrigues',
					role: 'BE',
					email: 'pedro.rodrigues@wycreative.com',
				},
				{
					name: 'João',
					surname: 'Pacheco',
					role: 'BE',
					email: 'joao.pacheco@wycreative.com',
				},
			],
		},
	],
	browsers: {
		chrome: {
			name: 'Chrome',
			version: 102,
		},
		firefox: {
			name: 'Firefox',
			version: 101,
		},
		qq: {
			name: 'QQ Browser',
			version: 10.4,
		},
		safari: {
			name: 'Safari',
			version: 15.2,
		},
		operaMini: {
			name: 'Opera Mini',
		},
	},
	environments: {
		node: {
			name: 'Node.js',
			url: 'https://nodejs.org/en/',
			version: '>=18',
		},
		npm: {
			name: 'npm',
			url: 'https://www.npmjs.com/',
			version: '>=8.6',
		},
	},
	dependencies: {
		'@sindresorhus/slugify': '^2.1.0',
		chalk: '^5.0.1',
		semver: '^7.3.7',
		'validate-npm-package-name': '^4.0.0',
		'yeoman-generator': '^5.6.1',
		yosay: '^2.0.2',
	},
	timeline: {
		design: {
			start: new Date(),
			end: new Date(),
		},
		development: {
			start: new Date(),
			end: new Date(),
		},
		stage: {
			start: new Date(),
			end: new Date(),
		},
		preproduction: {
			start: new Date(),
			end: new Date(),
		},
		production: {
			start: new Date(),
			end: new Date(),
		},
	},
	tokens: {
		colors: [
			{
				name: 'Yellow',
				value: '#FFC100',
				variable: '$color-creative-yellow',
				type: 'color',
			},
			{
				name: 'Orange',
				value: '#FF881F',
				variable: '$color-juicy-orange',
				type: 'color',
			},
			{
				name: 'Purple',
				value: '#968EFF',
				variable: '$color-funky-purple',
				type: 'color',
			},
			{
				name: 'Blue',
				value: '#3979FF',
				variable: '$color-electric-blue',
				type: 'color',
			},
			{
				name: 'Green',
				value: '#1DBA72',
				variable: '$color-groovy-green',
				type: 'color',
			},
			{
				name: 'White',
				value: '#FFFFFF',
				variable: '$color-chill-white',
				type: 'color',
			},
			{
				name: 'Gray',
				value: '#CCCCCC',
				variable: '$color-cool-gray',
				type: 'color',
			},
			{
				name: 'Black',
				value: '#000000',
				variable: '$color-badass-black',
				type: 'color',
			},
		],
		typography: [
			{
				type: 'display-1',
				fontFamily: 'Gilroy',
				fontSize: {
					desktop: '52px',
					mobile: '48px',
				},
				lineHeight: {
					desktop: '56px',
					mobile: '52px',
				},
				letterSpacing: {
					desktop: '0px',
					mobile: '0px',
				},
				fontWeight: 600,
			},
			{
				type: 'display-2',
				fontFamily: 'Gilroy',
				fontSize: {
					desktop: '50px',
					mobile: '46px',
				},
				lineHeight: {
					desktop: '54px',
					mobile: '50px',
				},
				letterSpacing: {
					desktop: '0px',
					mobile: '0px',
				},
				fontWeight: 600,
			},
			{
				type: 'heading-1',
				fontFamily: 'MyriadPro',
				fontSize: {
					desktop: '52px',
					mobile: '48px',
				},
				lineHeight: {
					desktop: '56px',
					mobile: '52px',
				},
				letterSpacing: {
					desktop: '0px',
					mobile: '0px',
				},
				fontWeight: 600,
			},
		],
	},
	components: {
		path: '../components/',
		list: [
			{
				id: 'button',
				name: 'Button',
			},
			{
				id: 'filter',
				name: 'Filter',
			},
		],
	},
	modules: {
		path: '../modules/',
		list: [
			{
				id: 'team',
				name: 'Team',
				description: 'lorem ipsum',
				status: 'done',
				components: [
					'button',
					'picture',
				],
				url: {
					design: '',
					prototype: {
						desktop: '',
						mobile: '',
					},
					task: '',
				},
				code: '<div class="team">content</div>',
				data: [
					{
						name: 'Name',
						required: true,
						type: [
							'String',
						],
						description: 'Lorem Ipsum',
					},
					{
						name: 'isPrimary',
						required: false,
						type: [
							'Boolean',
						],
						description: 'Sit Dolor Amet',
					},
				],
				notes: 'lorem ipsum',
			},
			{
				id: 'slider',
				name: 'Slider',
				description: 'sit dolor amet',
				status: 'wip',
				components: [
					'button',
					'picture',
					'drag',
				],
				url: {
					design: '',
					prototype: {
						desktop: '',
						mobile: '',
					},
					task: '',
				},
				code: '<div class="slider">content</div>',
				data: [
					{
						name: 'Name',
						required: true,
						type: [
							'String',
						],
						description: 'Lorem Ipsum',
					},
					{
						name: 'isPrimary',
						required: false,
						type: [
							'Boolean',
						],
						description: 'Sit Dolor Amet',
					},
				],
				notes: 'lorem ipsum',
			},
		],
	},
	templates: {
		path: '../pages/',
		list: [
			{
				id: 'template-example',
				name: 'Template Example',
				description: 'lorem ipsum',
				status: 'done',
				modules: [
					{
						name: 'team',
						url: '#',
					},
					{
						name: 'hero',
						url: '#',
					},
				],
				url: {
					design: '',
					prototype: {
						desktop: '',
						mobile: '',
					},
					task: '',
				},
				notes: 'lorem ipsum',
			},
		],
	},
};

export default guide;
