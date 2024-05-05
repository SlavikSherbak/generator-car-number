const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const regions = [
    { code: '01', name: 'АР Крим', letters: ['АК', 'КК'] },
    { code: '02', name: 'Вінницька область', letters: ['АВ','КВ'] },
    { code: '03', name: 'Рівненська область', letters: ['АС', 'KC'] },
    { code: '04', name: 'Дніпропетровська область', letters: ['АЕ', 'KE'] },
    { code: '05', name: 'Донецька область', letters: ['АН','КН'] },
    { code: '06', name: 'Житомирська область', letters: ['АМ', 'КМ'] },
    { code: '07', name: 'Запорізька область', letters: ['АР', 'КР'] },
    { code: '08', name: 'Київ', letters: ['АА','KA'] },
    { code: '09', name: 'Київська область', letters: ['АI', 'KI'] },
    { code: '10', name: 'Полтавська область', letters: ['ВI', 'НI'] },
    { code: '11', name: 'Сумська область', letters: ['ВМ','НМ'] },
    { code: '12', name: 'Харківська область', letters: ['АХ', 'КХ'] },
];

function generateNumber(regionCode, regionLetters) {
    const digits = '0123456789';

    const initialLetters = regionLetters[0];
    const randomDigits = [...Array(4)].map(() => digits[Math.floor(Math.random() * digits.length)]).join('');

    regionLetters = regionLetters[1];

    return `${initialLetters} ${randomDigits} ${regionLetters}`;
}

function start() {
    console.log('Список доступних регіонів:');
    regions.forEach((region) => {
      console.log(`${region.code} - ${region.name}`);
    });
  
    console.log('\n');
  
    readline.question('Виберіть регіон (за кодом) або натисніть Enter для випадкового: ', (regionCode) => {
      let selectedRegion = null;

      if (regionCode) {
        selectedRegion = regions.find((region) => region.code === regionCode);
      }

      if (!selectedRegion) {
        selectedRegion = regions[Math.floor(Math.random() * regions.length)];
      }

      console.log(`Вибраний регіон: ${selectedRegion.name} (${selectedRegion.code})`);

      const generatedNumber = generateNumber(selectedRegion.code, selectedRegion.letters);
      console.log(`Ваш номерний знак: ${generatedNumber}`);

      readline.question('Згенерувати новий номер? (y/n): ', (answer) => {
        if (answer.toLowerCase() === 'y') {
          start();
        } else {
          console.log('Дякуємо за використання!');
          readline.close();
        }
      });
    });
}

start();
