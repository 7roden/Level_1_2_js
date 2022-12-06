const keys = ['coordX', 'coordY', 'name', 'population'];
const numberTop = 10;

document.querySelector('button').onclick = () => {
    let mapOfCity = createMapOfCity(document.querySelector('textarea').value);
    findCity(mapOfCity);
}

function createMapOfCity(listOfCity) {
    return listOfCity
        .replace(/[^a-zA-ZА-Яа-яё0-9,\n]/g, '')
        .split('\n')
        .filter(a => /[a-zA-ZА-Яа-яё0-9,\n]/g.test(a))
        .map(a => a.split(','))
        .map(a => a.reduce((cityData, item, index) => ((cityData[keys[index]] = item), cityData), {}))
        .sort((a, b) => b[keys[3]] - a[keys[3]])
        .slice(0, numberTop)
        .reduce((a, item, index) => ((a[item[keys[2]]] = {
            [keys[0]]: item[keys[0]],
            [keys[1]]: item[keys[1]],
            [keys[3]]: item[keys[3]],
            rating: (index + 1)
        }), a), {})
}

function findCity(newMap) {
    let cityName;
    let message;
    do {
        cityName = prompt('Введіть назву міста');
        if (cityName) {
            message = (cityName in newMap) ? (" Місто: " + cityName +
                "\n Населення: " + newMap[cityName][keys[3]] +
                "\n Рейтинг серед інших міст: " + newMap[cityName].rating +
                "\n Координати на мапі (X: " + newMap[cityName][keys[0]] + " Y: " + newMap[cityName][keys[0]] + ")"
            ) : ("Місто " + cityName + " відсутнє в ТОП" + numberTop + " міст");
            alert(message);
        }
    } while (cityName);
}

/*
10,20,Запорожье,200000
10,20,Харьков,600000
10,20,Львов,300000
10,20,Киев,900000
10,20,Кропивницкий,100000
10,20,Днепр,400000

.map(a => a.reduce((b,item,index) => ((b[keys[index]] = item),b),{}))
можно заменить на:
        .map(a => {
            let newArr = {};
            a.forEach((item, index) => newArr[keys[index]] = item);
            return newArr;
        })
*/

// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/filter