import { NEUTRAL, SUCCESS, WARNING } from '../redux/types';
let timer;
const defaultMsg = 'This feature is unavailable';

export const showModal = (modal, mode, msg = defaultMsg) => {
	// Return if no modal or msg
	if (!modal || !msg.length) {
		return;
	}

	// Stop previous counter for subsequent calls
	clearTimeout(timer);

	modal.textContent = msg;

	// Show modal depending on specified mode
	switch (mode) {
		case WARNING:
			modal.className = 'modal active warn';
			break;
		case SUCCESS:
			modal.className = 'modal active success';
			break;
		case NEUTRAL:
			modal.className = 'modal active';
			break;
		default:
			break;
	}

	// Remove modal after set time
	timer = setTimeout(() => {
		modal.classList.remove('active');
	}, 3000);
};
