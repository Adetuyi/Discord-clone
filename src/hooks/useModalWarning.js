import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getModal } from '../redux/selectors';
import { NEUTRAL } from '../redux/types';

import { showModal } from '../utilities/showModal';

export const useModal = () => {
	const dispatch = useDispatch();
	const modal = useSelector(getModal);

	// Set modal in redux store
	useEffect(() => {
		// Select unavailable features in page
		const unavailableFeatures = document.querySelectorAll('.un');

		unavailableFeatures.forEach(feature =>
			feature.addEventListener('click', () => showModal(modal, NEUTRAL))
		);
	}, [dispatch, modal]);

	return null;
};
