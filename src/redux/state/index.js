const userStates = {
	isLoggedIn: false,
	friends: {
		all: [{ userId: '', userName: '', messages: [], isOnline: false }],
		requests: [{ userId: '', userName: '' }],
		blocked: [{ userId: '', userName: '' }],
	},
	globalServerMessages: [
		{ userId: '', userName: '', message: '' },
		{ userId: '', userName: '', message: '', isMine: true },
	],
};

const domStates = {
	modalRef: '',
};

export const initState = {
	...domStates,
	...userStates,
};
