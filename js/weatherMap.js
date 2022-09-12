//API key for weather map
const weatherKey = weatherMapKey;
let weatherData = '';
let time = 0;
let icon = '';
let iconLink = 'https://openweathermap.org/img/wn/'

$.get('https://api.openweathermap.org/data/2.5/onecall',{
    // q:'Atlanta',
    lat:    32.9748,
    lon:   -97.3478,
    units: "imperial",
    appid: weatherMapKey
}).done(function (data,status,req){
    console.log(data.daily[0].weather[0].icon);

}).fail(function(status, req,err){
    console.log(err);
});


//Date
    // time = data.daily[0].dt;
    // timeConverter(time);
//high/low temp
    //min temp = data.daily[0].temp.max
    //max temp =data.daily[0].temp.min
//img
    // icon = data.daily[0].weather[0].icon;
    // icon += '.png';
    // iconLink += icon;
//Description
    // data.daily[0].weather[0].description
    // weatherData = JSON.stringify(data.daily[0].dt);
//Humidity

//Wind

//Pressure


function timeConverter(UNIX_timestamp){
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    // var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
    var time = year + '-' + month + '-' + date;
    return time;
}