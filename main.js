import axios from 'axios';

const app = document.getElementById('app');
const numberElement = document.getElementById('number');

async function fetchRandomNumber() {
  try {
    const response = await axios.get('https://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain&rnd=new');
    const randomNumber = response.data;

    numberElement.textContent = `Juhuslik number API-st: ${randomNumber}`;
    console.log(`Juhuslik number API-st: ${randomNumber}`);
  } catch (error) {
    console.error('Andmete laadimisel ilmnes viga:', error);
  }
}

fetchRandomNumber();

function generateRandomNumber() {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  console.log(`Juhuslik number juhuslikult genereeritud: ${randomNumber}`);
  return randomNumber;
}

function updateNumber() {
  const randomNumber = generateRandomNumber();
  numberElement.textContent = `Juhuslik number juhuslikult genereeritud: ${randomNumber}`;
}

updateNumber();
window.addEventListener('load', updateNumber);
