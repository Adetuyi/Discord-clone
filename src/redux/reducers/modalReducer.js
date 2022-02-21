import { MODAL } from '../types';

const domStates = {
	modalRef: '',
};

export const modalReducer = (state = domStates, action) => {
	switch (action.type) {
		case MODAL:
			return { ...state, modalRef: action.payload };
		default:
			return state;
	}
};
