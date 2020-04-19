
//        Информация о том, как перевести нужную нам страницу html в json  формат .
// 1) заходим на нужную нам страницу. (В моем случае это плей лист SnoopDogga (https://www.shazam.com/artist/18/snoop-dogg)
// 2) Далее нажимаем комбинацию клавиш "Ctrl+Shift+I" 
// 3) Переходим во вкладку "Network" и в фильтрах выбираем "XHR" запросы.
// 4) Перезагружаем страницу (клавиша "F5") 
// 5) В результате , у нас в списке окажется несколько запросов, заходим на каждый, подбираем который нам нужно 


const request = require("request");
var url = 'https://www.shazam.com/shazam/v2/en-US/UA/web/-/tracks/artisttoptracks_18?startFrom=0&pageSize=20&connected=&channel='
request(url, (err, response, json) => {
     if (!err && response.statusCode === 200) {
        var obj = JSON.parse(json);
        for (var i = 0; i < 15; i++) {
            console.log((obj['chart'][i]['share']['subject'])+" "+(obj['chart'][i]['share']['href']))
        }
    }
})
