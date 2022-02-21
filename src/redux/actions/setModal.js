import { MODAL } from '../types';

export const setModal = modalRef => {
	return { type: MODAL, payload: modalRef };
};
