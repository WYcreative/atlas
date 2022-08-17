import {members} from '@WYcreative/team';

const guide = {
	name: 'Example',
	team: members.slice(0, 3).map(({email}) => email),
	url: {
		design: 'https://design.com',
		prototype: {
			desktop: 'https://prototype.com/desktop',
			mobile: 'https://prototype.com/mobile',
		},
		repository: 'https://dev.azure.com/Bycom/_git/example',
		development: 'https://example.dev.byclients.com',
		stage: 'https://example.stage.byclients.com',
		production: 'https://example.com',
	},
	timeline: {
		design: {
			start: '2022-01-01',
			end: '2022-01-01',
		},
		frontend: {
			start: '2022-01-01',
			end: '2022-01-01',
		},
		backend: {
			start: '2022-01-01',
			end: '2022-01-01',
		},
		stage: {
			start: '2022-01-01',
			end: '2022-01-01',
		},
		preproduction: {
			start: '2022-01-01',
			end: '2022-01-01',
		},
		production: {
			start: '2022-01-01',
			end: '2022-01-01',
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
	components: [
		{
			id: 'button',
			name: 'Button',
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
	templates: [
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
};

export default guide;
