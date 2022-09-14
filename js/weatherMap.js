//API key for weather map
const weatherKey = weatherMapKey;

/*************************************************GLOBAL VARIABLES************************************************/
let weatherData = '';
let time = 0;
let icon = '';
let iconLink = 'https://openweathermap.org/img/wn/';
let lt = 33.7490;
let long = -84.3880;
let cityInput = '';

/*************************************************City input event************************************************/
    $('button').click(function (){
        let cityVal = $('#city').val();
        cityInput = cityVal;

        geocode(cityInput, TOKENHERE).then(function(result) {
            console.log(cityInput)
            console.log(result);
            long = result[0];
            lt = result[1];
            map.setCenter(result);
            map.setZoom(9);

            $.get('https://api.openweathermap.org/data/2.5/onecall',{
                // q:'Atlanta',
                lat:    lt,
                lon:   long,
                units: "imperial",
                appid: weatherMapKey
            }).done(function (data,status,req){
                // console.log(data.daily[0].dt);
                $('#weatherData').html(renderCards(data));
            }).fail(function(status, req,err){
                console.log(err);
            });
            }).catch(err => console.log(err));


        $('#navCityValue').html('<strong>'+cityVal+'</strong>');

        $('#city').val('');





    });

/*************************************************MAP BOX************************************************/
var TOKENHERE = mapBoxKey;
mapboxgl.accessToken = TOKENHERE;
// Create map object
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [long, lt], // starting position [lng, lat]
    zoom: 9, // starting zoom
    projection: 'globe', // display the map as a 3D globe
});

//Geocode
// the  geocode method from mapbox-geocoder-utils.js
// geocode("2816 Brown Trail, Bedford, TX 76021", TOKENHERE).then(function(result) {
//     console.log(cityInput)
//     console.log(result);
//     long = result[0];
//     lt = result[1];
//     map.setCenter(result);
//     map.setZoom(9);
// }).catch(err => console.log(err));


/*************************************************Get Initial Weatherdata************************************************/
$.get('https://api.openweathermap.org/data/2.5/onecall',{
    // q:'Atlanta',
    lat:    lt, //33.7490,
    lon:   long, //-84.3880,
    units: "imperial",
    appid: weatherMapKey
}).done(function (data,status,req){
    // console.log(data.daily[0].dt);
    $('#weatherData').html(renderCards(data));

}).fail(function(status, req,err){
    console.log(err);
});


/*************************************************DATA************************************************/

//Date
    // time = data.daily[0].dt;
    // timeConverter(time);
//high/low temp
    //min temp = data.daily[0].temp.max
    //max temp =data.daily[0].temp.min
//img
    //Put image link in img tag href
    // icon = data.daily[0].weather[0].icon;
    // icon += '.png';
    // iconLink += icon;
//Description
    // data.daily[0].weather[0].description
    // weatherData = JSON.stringify(data.daily[0].dt);
//Humidity
    //data.daily[0].humidity
//Wind
    //data.daily[0].wind_speed
//Pressure
    //data.daily[0].pressure


/*************************************************FUNCTIONS************************************************/


function renderCardData(dailyData){
    let html = '';

    //Get image link
    icon = dailyData.weather[0].icon;
    icon += '.png';
    iconLink += icon;

    //Gather html string

    html+= "<div class=\"col\">\n" +
        "        <div class=\"card\">"+
        "<div class=\"card-header\">\n" +
           timeConverter(dailyData.dt) +
        "   </div>\n" +
        "   <div class=\"card-body\">\n" +
        "       <ul class=\"list-group list-group-flush\">\n" +
        "           <li class=\"list-group-item\">"+ dailyData.temp.min+"/"+dailyData.temp.max+ "<img src="+iconLink+"></li>\n" +
        "           <li class=\"list-group-item\">Description:<strong>"+dailyData.weather[0].description+"</strong> </li>\n" +
        "           <li class=\"list-group-item\">Humidity:<strong>"+dailyData.humidity+"</strong> </li>\n" +
        "           <li class=\"list-group-item\">Wind:<strong>"+dailyData.wind_speed+"</strong> </li>\n" +
        "           <li class=\"list-group-item\"\">Pressure:<strong>"+ dailyData.pressure +"</strong> </li>\n" +
        "       </ul>\n" +
        "   </div>"+
        "</div>"+
        "</div>"

    return html;
}

function renderCards(data){
    let html = '';

    for( var i=0; i < 5; i++){
        html += renderCardData(data.daily[i]);
        iconLink = 'https://openweathermap.org/img/wn/';
    }

    return html;
}


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