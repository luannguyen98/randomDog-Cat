$(document).ready(function() {
    const meo = document.getElementById('meo');
    const cho = document.getElementById('cho');
    const cat_result = document.getElementById('cat_result');
    const dog_result = document.getElementById('dog_result');

meo.addEventListener('click', getRandomCat);
cho.addEventListener('click', getRandomDog);

function getRandomCat() {
	fetch('https://aws.random.cat/meow')
		.then(res => res.json())
		.then(data => {
			cat_result.innerHTML = `<img class="img" src=${data.file} alt="cat" />`
		});
}

function getRandomDog() {
	fetch('https://random.dog/woof.json')
		.then(res => res.json())
		.then(data => {
			if(data.url.includes('.mp4')) {
				getRandomDog();
			}
			else {
				dog_result.innerHTML = `<img class="img" src=${data.url} alt="dog" />`;
			}
		});
}
});  

