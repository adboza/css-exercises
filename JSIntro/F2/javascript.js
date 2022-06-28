/*const select = document.querySelector('select');
const para = document.querySelector('p');

select.addEventListener('change', setWeather);

let x;
x = 1;
console.log(x);
x = 0.01;
console.log(x);
x = "hello world"
console.log(x);
const string = 'the evolution will not be televised.';
console.log (string);


const badString2 = "This is a test";
console.log(badString2);
const sgl = 'Single quotes.';
const dbl = "Double quotes A";
console.log(sgl);
console.log(dbl);

function troubleshooting() {
	const a = 1;
	const b = 1;

	let result;

	// Edit between these lines
	// =================================
	result = a + b;

	// =================================

	return result;
}
console.log(troubleshooting());
// Do not change this 
//module.exports = troubleshooting;



function setWeather() {
  const choice = select.value;

  switch (choice) {
    case 'sunny':
      para.textContent = 'It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.';
      break;
    case 'rainy':
      para.textContent = 'Rain is falling outside; take a rain coat and an umbrella, and don\'t stay out for too long.';
      break;
    case 'snowing':
      para.textContent = 'The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.';
      break;
    case 'overcast':
      para.textContent = 'It isn\'t raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.';
      break;
    default:
      para.textContent = '';
  }
}*/
const select = document.querySelector('select');
const html = document.querySelector('html');
//document.body.style.padding = '10px';

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}

select.addEventListener('change', () => ( select.value === 'black' ) ? update('black','white') : update('white','black'));


