const callback = (entries, observer) => {
	entries.forEach(entry => {
		if (!entry.isIntersecting) {
			return;
		}
		entry.target.classList.add('fadeIn');
		observer.unobserve(entry.target);
	});
};

const options = {
	rootMargin: '0px 0px -110px 0px',
};

export const observer = new IntersectionObserver(callback, options);
