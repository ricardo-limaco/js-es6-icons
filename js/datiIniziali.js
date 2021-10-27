const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	}
];


const iconsContainer = document.getElementById('icons-container');
const selectCategory = document.getElementById('select-category');


const animalIcons = icons.filter(icon => icon.type === 'animal');
const vegetableIcons = icons.filter(icon => icon.type === 'vegetable');
const userIcons = icons.filter(icon => icon.type === 'user');


icons.forEach(element => createCard(element));

let iconList = document.querySelectorAll('.col .card i');
iconColour(iconList);




selectCategory.addEventListener('change', function () {

	iconsContainer.innerHTML = ''

	switch (selectCategory.value) {
		case 'all':
			icons.forEach(element => createCard(element));
			break;
		case 'animal':
			animalIcons.forEach(element => createCard(element));
			break;
		case 'vegetable':
			vegetableIcons.forEach(element => createCard(element));
			break;
		case 'user':
			userIcons.forEach(element => createCard(element));
			break;
	};

	iconList = document.querySelectorAll('.col .card i');
	iconColour(iconList)
});



function iconColour(iconsArray) {
	iconsArray.forEach(element => {
		switch (element.getAttribute('type')) {
			case 'animal':
				element.style.color = '#0d6efd';
				break;
			case 'vegetable':
				element.style.color = '#198754';
				break;
			case 'user':
				element.style.color = '#6610f2';
				break;
		};
	});
};



function createCard(element) {

	iconsContainer.innerHTML += `<div class="col">
	<div class="card shadow-sm">
		<div class="card-img-top text-center" style="font-size: 50px;">
			<i class="${element.family} ${element.prefix}${element.name}" type="${element.type}"></i>
		</div>
		<div class="card-body">
			<div class="card-title text-center text-capitalize fw-bold m-0">${element.name.split("-").join(" ")}</div>
		</div>
	</div>
</div>`;
};