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
	const backgroundAboutUs = document.querySelector('.about-us-container');
	const backgroundTerms = document.querySelector('.terms-and-conditions-container');
	const brigthBackground = document.querySelector('.breithBackground');
	const brigthBackground2 = document.querySelector('.breithBackground2');
	const brightBackground3 = document.querySelector('.breithBackground3');

	const parallaxImages = document.querySelector('.about-us-img');
	const movePictureUp = () => {
		const scrollValue = window.scrollY;
		const scrollSpeed = 0.018; // Dostosuj prędkość przesuwania zdjęć
		const imgTop = parallaxImages.getBoundingClientRect().top;
		const maxTop = 350;
	  
		// Ogranicz przesunięcie obrazka w górę
		if (scrollValue < 3000) {
		  const offset = (scrollValue - imgTop) * scrollSpeed;
		  parallaxImages.style.top = -offset + 'px';
		}
	  };

	  window.addEventListener('scroll', movePictureUp);
	  const windowScroll = () => {
		const win = window.scrollY;
		console.log(win); // Wyświetl odległość od góry w konsoli
	  };
	  
	  window.addEventListener('scroll', windowScroll);
	const mainImg = document.querySelector('.main-img');
	const scaleHeaderImg = () => {
		const imageTop = mainImg.getBoundingClientRect().top;
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
		mainImg.style.transform = `scale(${scale})`;
	};
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
		console.log('Funkcja bright2 została wywołana'); // Dodaj to
		const x3 = e3.clientX;
		const y3 = e3.clientY;
		const backgroundTermsY = backgroundTerms.offsetTop;
		const backgroundTermsX = backgroundTerms.offsetLeft;
		const brightX3 = x3 - backgroundTermsX;
		const brightY3 = y3 - backgroundTermsY;
		brightBackground3.style.top = brightY3 + 'px';
		brightBackground3.style.left = brightX3 + 'px';
	};
	backgroundHeader.addEventListener('mousemove', bright);
	backgroundAboutUs.addEventListener('mousemove', bright2);
	backgroundTerms.addEventListener('mousemove', bright3);

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
	};

	const removeA = () => {
		navBar.classList.remove('nav-mobile-active');
	};
	const handleCurrentYear = () => {
		const year = new Date().getFullYear();
		footerYear.innerText = year;
	};

	handleCurrentYear();

	faSolid.addEventListener('click', function () {
		window.location.href = 'index.html#home';
	});
	burgerBtn.addEventListener('click', addActive);
	navItem.forEach((item) => {
		item.addEventListener('click', removeA);
	});
});
