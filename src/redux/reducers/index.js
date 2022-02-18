const initState = {
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

const rootReducer = (state = initState, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default rootReducer;
