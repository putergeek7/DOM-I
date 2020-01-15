const siteContent = {
	nav: {
		'nav-item-1': 'Services',
		'nav-item-2': 'Product',
		'nav-item-3': 'Vision',
		'nav-item-4': 'Features',
		'nav-item-5': 'About',
		'nav-item-6': 'Contact',
		'img-src': 'img/logo.png'
	},

	cta: {
		h1: 'DOM Is Awesome',
		button: 'Get Started',
		'img-src': 'img/header-img.png'
	},

	'main-content': {
		'features-h4': 'Features',
		'features-content':
			'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
		'about-h4': 'About',
		'about-content':
			'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
		'middle-img-src': 'img/mid-page-accent.jpg',
		'services-h4': 'Services',
		'services-content':
			'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
		'product-h4': 'Product',
		'product-content':
			'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
		'vision-h4': 'Vision',
		'vision-content':
			'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
	},
	contact: {
		'contact-h4': 'Contact',
		address: '123 Way 456 Street Somewhere, USA',
		phone: '1 (888) 888-8888',
		email: 'sales@greatidea.io'
	},
	footer: {
		copyright: 'Copyright Great Idea! 2018'
	}
};

// Example: Update the img src for the logo
let logo = document.getElementById('logo-img');
logo.setAttribute('src', siteContent['nav']['img-src']);

// ================= NAV ===================================

let navItems = document.querySelectorAll('nav a');
navItems.forEach((element, i) => {
	element.textContent = siteContent.nav[`nav-item-${i++}`];
});

// ================== IMAGE ===============================

const ctaItem = document.querySelector('.cta-text h1');
ctaItem.textContent = siteContent.cta.h1;

const ctaImg = document.getElementById('cta-img');
ctaImg.setAttribute('src', siteContent['cta']['img-src']);

const ctaBtn = document.querySelector('.cta-text button');
ctaBtn.textContent = siteContent.cta.button;

// ================== MIDDLE IMAGE ============================

const middleImage = document.getElementById('middle-img');
middleImage.setAttribute('src', siteContent['main-content']['middle-img-src']);

// =================== Titles ===========================================

let titles = document.querySelectorAll('h4');
titles[0].textContent = siteContent['main-content']['features-h4'];
titles[1].textContent = siteContent['main-content']['about-h4'];
titles[2].textContent = siteContent['main-content']['services-h4'];
titles[3].textContent = siteContent['main-content']['product-h4'];
titles[4].textContent = siteContent['main-content']['vision-h4'];

let paragraphs = document.querySelectorAll('p');
paragraphs[0].textContent = siteContent['main-content']['features-content'];
paragraphs[1].textContent = siteContent['main-content']['about-content'];
paragraphs[2].textContent = siteContent['main-content']['services-content'];
paragraphs[3].textContent = siteContent['main-content']['product-content'];
paragraphs[4].textContent = siteContent['main-content']['vision-content'];

// ================== CONTACT ===============================

let contact = document.querySelector('.contact h4');

contact.textContent = siteContent.contact['contact-h4'];

let address = document.querySelectorAll('.contact p');
address[0].textContent = siteContent.contact.address;
address[1].textContent = siteContent.contact.phone;
address[2].textContent = siteContent.contact.email;

// ================== FOOTER =================================

const footerInfo = document.querySelector('footer p');
footerInfo.textContent = siteContent.footer.copyright;

// ================= LINK COLOR CHANGE ========================

const links = document.getElementsByTagName('a');

Array.from(links).forEach(link => {
	link.style.color = 'green';
});

// ============== APPEND and PREPEND==============================

const newContent = document.createElement('a');
const newContent2 = document.createElement('a');
newContent.textContent = 'Home';
newContent.style.color = 'red';
newContent2.textContent = 'Store';
newContent2.style.color = 'blue';
const parentElement = document.querySelector('nav');
parentElement.appendChild(newContent2);
parentElement.prepend(newContent);
