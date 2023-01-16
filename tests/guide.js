import {members} from '@WYcreative/team';

const guide = {
	name: 'Example',
	team: members.slice(0, 10).map(({email}) => email),
	url: {
		design: 'https://design.com',
		designLibrary: 'https://designlibrary.com',
		prototypeDesktop: 'https://prototype.com/desktop',
		prototypeMobile: 'https://prototype.com/mobile',
		repository: 'https://dev.azure.com/Bycom/_git/example',
		development: 'https://example.dev.byclients.com',
		stage: 'https://example.stage.byclients.com',
		production: 'https://example.com',
	},
	tokens: {
		colors: {
			'creative-yellow': '#FFC100',
			'juicy-orange': '#FF881F',
			'funky-purple': '#968EFF',
			'electric-blue': '#3979FF',
			'groovy-green': '#1DBA72',
			neutrals: {
				'chill-white': '#FFFFFF',
				'cool-gray': '#CCCCCC',
				'badass-black': '#000000',
			},
			transparents: {
				transparent: 'rgba(0, 0, 0, 0)',
				'half-white': 'rgba(255, 255, 255, 0.5)',
			},
		},
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
				fontFamily: 'Myriad Pro',
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
	components: [
		{
			id: 'button',
			name: 'Button',
			status: 'done',
			url: {
				design: 'test.com',
				designLibrary: 'test.com',
				prototypeDesktop: 'test.com',
				prototypeMobile: 'test.com',
				task: '',
			},
			code: '<div class="button">content</div>',
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
			id: 'filter',
			name: 'Filter',
		},
	],
	modules: [
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
				design: 'test.com',
				designLibrary: 'test.com',
				prototypeDesktop: 'test.com',
				prototypeMobile: 'test.com',
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
				prototypeDesktop: '',
				prototypeMobile: '',
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
	templates: [
		{
			id: 'template-example',
			name: 'Template Example',
			description: 'lorem ipsum',
			status: 'done',
			modules: [
				'team',
				'hero',
			],
			url: {
				design: 'test.com',
				designLibrary: 'test.com',
				prototypeDesktop: '',
				prototypeMobile: '',
				task: '',
			},
			notes: 'lorem ipsum',
		},
	],
};

export default guide;
