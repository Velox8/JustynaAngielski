document.addEventListener('DOMContentLoaded', function () {
	const burgerBtn = document.querySelector('.burger');
	const h1Span = document.querySelector('.h1-span');
	const navBar = document.querySelector('.nav-mobile');
	const footerYear = document.querySelector('.footer-year');
	const navItem = document.querySelectorAll('.a');
	const menuItems = document.querySelectorAll('.nav-item');
	const scrollSpySections = document.querySelectorAll('.section');
	const faSolid = document.querySelector('.fa-tree');
	const userName = document.querySelector('#name');
	const email = document.querySelector('#email');
	const msgNew = document.querySelector('#msg');

	const backgroundHeader = document.querySelector('.header');
	// const backgroundOffers2 = document.querySelector('.offers2-container');

	const backgroundAboutUs = document.querySelector('.about-us-container');
	// const backgroundBox = document.querySelector('.offers2-box2');

	const backgroundTerms = document.querySelector(
		'.terms-and-conditions-container'
	);
	const brigthBackground = document.querySelector('.breithBackground');
	const brigthBackground2 = document.querySelector('.breithBackground2');
	const brightBackground3 = document.querySelector('.breithBackground3');
	const brightBackground4 = document.querySelector('.breithBackground4');
	const brightBackground5 = document.querySelector('.breithBackground5');

	const parallaxImages = document.querySelector('.about-us-img');
	const parallaxImages2 = document.querySelectorAll('.offers2-img');
	const movePictureUp = () => {
		const scrollValue = window.scrollY;
		const scrollSpeed = 0.019; // Dostosuj prędkość przesuwania zdjęć
		const imgTop = parallaxImages.getBoundingClientRect().top;
		// const maxTop = 350;

		// Ogranicz przesunięcie obrazka w górę
		if (scrollValue < 1500) {
			const offset = (scrollValue - imgTop) * scrollSpeed;
			parallaxImages.style.top = -offset + 'px';
		}
	};

	window.addEventListener('scroll', movePictureUp);

	const movePictureUp2 = () => {
		const isDesktop = window.matchMedia('(min-width: 993px)').matches;
		if (isDesktop === true) {
			const scrollValue = window.scrollY;
			parallaxImages2.forEach((img) => {
				const scrollSpeed = 0.0109; // Dostosuj prędkość przesuwania zdjęć
				const imgTop = img.getBoundingClientRect().bottom;
				const offset = (scrollValue - imgTop) * scrollSpeed;
				img.style.top = offset + 'px';
				img.style.transition = 'top 2.3s';
			});
		}
	};

	window.addEventListener('scroll', movePictureUp2);
	const windowScroll = () => {
		const win = window.scrollY;
		console.log(win); // Wyświetl odległość od góry w konsoli
	};

	window.addEventListener('scroll', windowScroll);
	const mainImg = document.querySelectorAll('.main-img');

	const scaleHeaderImg = () => {

		mainImg.forEach((img) => {
		const imageTop = img.getBoundingClientRect().top;
		const windowHeight = window.innerHeight;

		// Oblicz stosunek przewinięcia strony do pozycji zdjęcia
		const scrollRatio = (windowHeight - imageTop) / windowHeight;

		// Minimalna i maksymalna skala, jaką chcemy osiągnąć
		const minScale = 1;
		const maxScale = 1.16;
		// Interpolacja liniowa, aby obliczyć skalę w zakresie od minScale do maxScale
		let scale = minScale + scrollRatio * (maxScale - minScale);
		scale = Math.max(scale, 1);

		// Zastosuj skalę dla obrazu
		img.style.transform = `scale(${scale})`;
		})}
	window.addEventListener('scroll', scaleHeaderImg);

	const bright = (e) => {
		const x = e.clientX;

		const y = e.clientY;

		const backgroundHeaderY = backgroundHeader.offsetTop;
		const backgroundHeaderX = backgroundHeader.offsetLeft;

		const brightX = x - backgroundHeaderX;
		const brightY = y - backgroundHeaderY;

		brigthBackground.style.top = brightY + 'px';
		brigthBackground.style.left = brightX + 'px';
	};

	const bright2 = (e2) => {
		console.log('Funkcja bright2 została wywołana'); // Dodaj to
		const x2 = e2.clientX;
		const y2 = e2.clientY;
		const backgroundAboutUsY = backgroundAboutUs.offsetTop;
		const backgroundAboutUsX = backgroundAboutUs.offsetLeft;
		const brightX2 = x2 - backgroundAboutUsX;
		const brightY2 = y2 - backgroundAboutUsY;
		brigthBackground2.style.top = brightY2 + 'px';
		brigthBackground2.style.left = brightX2 + 'px';
	};

	const bright3 = (e3) => {
		console.log('Funkcja bright3 została wywołana'); // Dodaj to
		const x3 = e3.clientX;
		const y3 = e3.clientY;
		const backgroundTermsY = backgroundTerms.offsetTop;
		const backgroundTermsX = backgroundTerms.offsetLeft;
		const brightX3 = x3 - backgroundTermsX;
		const brightY3 = y3 - backgroundTermsY;
		brightBackground3.style.top = brightY3 + 'px';
		brightBackground3.style.left = brightX3 + 'px';
	};
	// const bright4 = (e4) => {
	// 	console.log('Funkcja bright4 została wywołana'); // Dodaj to
	// 	const x4 = e4.clientX;
	// 	const y4 = e4.clientY;
	// 	const backgroundOffers2Y = backgroundOffers2.offsetTop;
	// 	const backgroundOffers2X = backgroundOffers2.offsetLeft;
	// 	const brightX4 = x4 - backgroundOffers2X;
	// 	const brightY4 = y4 - backgroundOffers2Y;
	// 	brightBackground4.style.top = brightY4 + 'px';
	// 	brightBackground4.style.left = brightX4 + 'px';
	// };
	// const bright5 = (e5) => {
	// 	console.log('Funkcja bright4 została wywołana'); // Dodaj to
	// 	const x5 = e5.clientX;
	// 	const y5 = e5.clientY;
	// 	const backgroundBoxY = backgroundBox.offsetTop;
	// 	const backgroundBoxX = backgroundBox.offsetLeft;
	// 	const brightX5 = x5 - backgroundBoxX;
	// 	const brightY5 = y5 - backgroundBoxY;
	// 	brightBackground5.style.top = brightY5 + 'px';
	// 	brightBackground5.style.left = brightX5 + 'px';
	// };
	backgroundHeader.addEventListener('mousemove', bright);
	backgroundAboutUs.addEventListener('mousemove', bright2);
	backgroundTerms.addEventListener('mousemove', bright3);
	// backgroundOffers2.addEventListener('mousemove', bright4);
	// backgroundBox.addEventListener('mousemove', bright5);

	let inputValue = 'online! ';
	let timeout;
	let index = 0;

	let speed = 200;
	const textAnimation = () => {
		h1Span.innerHTML = inputValue.slice(0, index);
		index++;

		if (index > inputValue.length) {
			index = 0;
			clearTimeout(timeout);
			setTimeout(() => {
				timeout = setTimeout(textAnimation, speed);
			}, 2000);
		} else {
			clearTimeout(timeout);
			setTimeout(textAnimation, speed);
		}
	};

	setTimeout(textAnimation, 1000);

	const showError = (input, msg) => {
		// argument input przechowyje inputa
		// argument msg przechowuje placeholder
		const formBox = input.parentElement;
		const errorMsg = formBox.querySelector('.error-text');

		formBox.classList.add('error');
		errorMsg.textContent = msg;
	};

	const clearError = (input) => {
		const formBox = input.parentElement;

		const errorMsg = formBox.querySelector('.error-text');
		formBox.classList.remove('error');
		errorMsg.textContent = 'Wszystkiego Najlepszego EMIL!!!!!';
	};

	const checkForm = (input) => {
		input.forEach((el) => {
			if (el.value === '') {
				showError(el, el.placeholder);
			} else {
				clearError(el);
			}
		});
	};

	const buttons = document.getElementsByClassName('contact-form-button');

	for (let i = 0; i < buttons.length; i++) {
		buttons[i].addEventListener('click', function (e) {
			e.preventDefault();
			checkForm([userName, email, msgNew]);
		});
	}
	function disableScroll(event) {
		event.preventDefault();
	}

	const handleScrollSpy = () => {
		const sections = [];

		scrollSpySections.forEach((section) => {
			if (window.scrollY <= section.offsetTop + section.offsetHeight - 100) {
				sections.push(section);

				const activeSection = document.querySelector(
					`[href*="${sections[0].id}"]`
				);

				menuItems.forEach((item) => item.classList.remove('active'));

				activeSection.classList.add('active');
			}

			if (
				window.innerHeight + window.scrollY >=
				document.body.offsetHeight - 200
			) {
				const lastSection = document.querySelector('a:last-of-type');

				menuItems.forEach((item) => item.classList.remove('active'));

				lastSection.classList.add('active');
			}
		});
	};

	window.addEventListener('scroll', handleScrollSpy);
	navBar.addEventListener('touchmove', disableScroll, { passive: false });
	navBar.addEventListener('wheel', disableScroll, { passive: false });

	const addActive = () => {
		navBar.classList.toggle('nav-mobile-active');
		if (navBar.classList.contains('nav-mobile-active')) {
			console.log('Klasa "nav-mobile-active" została dodana do navBar.');
		} else {
			console.log('Klasa "nav-mobile-active" została usunięta z navBar.');
		}
	};

	const removeA = () => {
		navBar.classList.remove('nav-mobile-active');
	};
	const handleCurrentYear = () => {
		const year = new Date().getFullYear();
		footerYear.innerText = year;
	};

	burgerBtn.addEventListener('click', () => {
		console.log('Przycisk "burgerBtn" został kliknięty.');

		if (navBar.classList.contains('nav-mobile-active')) {
			console.log('Klasa "nav-mobile-active" została dodana do navBar.');
		} else {
			console.log('Klasa "nav-mobile-active" została usunięta z navBar.');
		}

		// Tutaj możesz dodać dodatkowe działania, które wykonują się po kliknięciu przycisku.
	});

	handleCurrentYear();

	// faSolid.addEventListener('click', function () {
	// 	window.location.href = 'index.html#home';
	// });
	burgerBtn.addEventListener('click', addActive);
	navItem.forEach((item) => {
		item.addEventListener('click', removeA);
	});
});
