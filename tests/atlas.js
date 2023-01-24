import {members} from '@WYcreative/team';

const atlas = {
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
		typography: {
			displays: {
				'display-1': {
					desktop: {
						fontFamily: 'Gilroy',
						fontSize: '52px',
						lineHeight: '1.0769230769',
						letterSpacing: '0',
						fontWeight: '600',
					},
					mobile: {
						fontFamily: 'Gilroy',
						fontSize: '48px',
						lineHeight: '1.1666666667',
						letterSpacing: '0',
						fontWeight: '600',
					},
				},
				'display-2': {
					desktop: {
						fontFamily: 'Gilroy',
						fontSize: '50px',
						lineHeight: '1.08',
						letterSpacing: '0',
						fontWeight: '600',
					},
					mobile: {
						fontFamily: 'Gilroy',
						fontSize: '46px',
						lineHeight: '1.0869565217',
						letterSpacing: '0',
						fontWeight: '600',
					},
				},
			},
			'heading-1': {
				desktop: {
					fontFamily: 'Myriad Pro',
					fontSize: '52px',
					lineHeight: '1.0769230769',
					letterSpacing: '0',
					fontWeight: '600',
					textDecoration: 'none',
					textCase: 'none',
					fontStyle: 'normal',
					fontStretch: 'normal',
				},
				mobile: {
					fontFamily: 'Myriad Pro',
					fontSize: '48px',
					lineHeight: '1.0833333333',
					letterSpacing: '0',
					fontWeight: '600',
					textDecoration: 'none',
					textCase: 'none',
					fontStyle: 'normal',
					fontStretch: 'normal',
				},
			},
			cta: {
				fontFamily: 'sans-serif',
				fontSize: '16px',
				lineHeight: '1',
				letterSpacing: '0',
				fontWeight: '700',
				textDecoration: 'none',
				textCase: 'none',
				fontStyle: 'normal',
				fontStretch: 'normal',
			},
		},
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
					name: 'Class Modifier',
					required: true,
					type: [
						'String',
						'Array',
					],
					description: [
						'It accepts `button--primary`, `button--secondary`, `button--tertiary`, `button--icon`, `button--facebook`, and `button--google` in addition to the main class `button`.',
						'',
						'It also accepts a `button--small` in conjunction with any of the previous modifiers.',
					].join('\n'),
				},
				{
					name: 'Icon',
					type: [
						'String',
					],
					description: 'The icon ID, to be used as `href` hash of the `.button__icon use` element.',
				},
				{
					name: 'Text',
					required: true,
					type: [
						'String',
					],
					description: 'The button text.',
				},
				{
					name: 'Arrow',
					type: [
						'String',
					],
					description: 'The button arrow. It should only be shown if there is no button icon.',
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

export default atlas;
