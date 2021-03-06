const userStates = {
	isLoggedIn: true,
	details: {
		id: '1234',
		name: 'Username',
		email: 'seyispecial',
		phoneNum: '',
		profileImg: 'new_line.png',
		about: '',
		isOnline: false,
	},
	friends: {
		currentPage: null,
		all: [
			{
				id: 1234,
				name: 'Friend One56yvrhvtrhvre',
				profileImg: 'login_bg.png',
				messages: [],
				isOnline: true,
			},
			{
				id: 12345,
				name: 'Friend Two',
				profileImg: 'login_bg.png',
				messages: [],
				isOnline: true,
			},
			{
				id: 12346,
				name: 'Friend Three',
				profileImg: 'login_bg.png',
				messages: [],
				isOnline: true,
			},
		],
		directMessages: [
			{
				id: 1234,
				name: 'Friend One56yvrhvtrhvre',
				profileImg: 'login_bg.png',
				messages: [],
				isOnline: false,
			},
			{
				id: 12345,
				name: 'Friend Two',
				profileImg: 'login_bg.png',
				messages: [],
				isOnline: true,
			},
		],
		requests: [{ id: '', name: '' }],
		blocked: [{ id: '', name: '' }],
	},
	servers: [
		{
			id: '1',
			name: 'Server 1',
			unreadMsgs: 84,
			profileImg: 'new_line.png',
			channels: [{ name: '', id: '', msgs: [], members: [{ name: '', id: '', role: '' }] }],
		},
		{
			id: '2',
			name: 'Server 2',
			unreadMsgs: 7,
			profileImg: 'new_line.png',
			channels: [{ name: '', id: '', msgs: [], members: [{ name: '', id: '', role: '' }] }],
		},
		{
			id: '3',
			name: 'Server 3',
			unreadMsgs: 0,
			profileImg: 'new_line.png',
			channels: [{ name: '', id: '', msgs: [], members: [{ name: '', id: '', role: '' }] }],
		},
	],
};

export const userReducer = (state = userStates, action) => {
	switch (action.type) {
		default:
			return state;
	}
};
