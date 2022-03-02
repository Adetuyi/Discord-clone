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

	// If modal is already active, remove then reanimate back in
	const addClass = classNames => {
		if (modal.classList.contains('active')) {
			modal.style.transition = 'none';
			modal.classList.remove('active');

			setTimeout(() => {
				modal.style.transition = 'opacity 0.8s, transform 0.8s';
				modal.className = classNames;
			}, 100);
		} else {
			modal.className = classNames;
		}
	};

	// Show modal depending on specified mode
	switch (mode) {
		case WARNING:
			addClass('modal active warn');
			break;
		case SUCCESS:
			addClass('modal active success');
			break;
		case NEUTRAL:
			addClass('modal active');
			break;
		default:
			break;
	}

	// Remove modal after set time
	timer = setTimeout(() => {
		modal.classList.remove('active');
	}, 3000);
};
