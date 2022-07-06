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
	team: {
		management: [
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
		design: [
			{
				name: 'Eduardo',
				surname: 'Narciso',
				role: 'UX/UI Designer',
				email: 'eduardo.narciso@wycreative.com',
			},
		],
		development: [
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
	browsers: {
		and_chr: '102',
		and_ff: '101',
		and_qq: '10.4',
		ios_saf: '15.2-15.3',
	},
	enviroments: {
		node: '18.3',
		npm: '8',
	},
	dependencies: {
		"@sindresorhus/slugify": "^2.1.0",
		"chalk": "^5.0.1",
		"semver": "^7.3.7",
		"validate-npm-package-name": "^4.0.0",
		"yeoman-generator": "^5.6.1",
		"yosay": "^2.0.2",
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
	tokens: [

	],
	components: [

	],
	modules: {
		path: '../pages/',
		list: [
			{
				id: 'team',
				name: 'Team',
				description: 'lorem ipsum',
				task: 'test.com',
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
				task: 'test.com',
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
	templates: [

	],
};

export default guide;
