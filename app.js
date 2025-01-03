let date= new Date()
let year= date.getFullYear()
let month= date.getMonth()+1
let day= date.getDay()
let dates= date.getDate()
let hour= date.getHours()
let min= date.getMinutes()

let days=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
for(let i=0;i<days.length;i++){
    if(day===i){
        day= days[i]

    }
}
let months=["Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov",]
for(let i=0; i<months.length;i++){
    if(month===i){
        month=months[i]
    }
}


let ampm = hour >= 12 ? 'PM' : 'AM';
min= min<10? '0'+mi:min
let finalTime = hour + ':' + min + ':' +  ' ' + ampm

    function weather() {
weatherCard.style.display = "block";

var city = document.getElementById("inp").value;
var card = document.getElementById("cards");
let er = document.getElementById("errors");

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f1cb1f787045c5c81e1e7d88b45f5566&units=metric`)
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        const currentTime = data.dt;
const sunriseTime = data.sys.sunrise;
const sunsetTime = data.sys.sunset;

const currentDate = new Date(currentTime * 1000);
const sunriseDate = new Date(sunriseTime * 1000);
const sunsetDate = new Date(sunsetTime * 1000);


let timeOfDay = '🌚';  
if (currentTime >= sunriseTime && currentTime <= sunsetTime) {
timeOfDay = '🌞';  
}
         
        card.innerHTML = `
        <div id="timeDay">
        <div><b>PK:</b> ${finalTime}</div>
         <div id="city"> ${data.name}, ${data.sys.country}</div>  
        <div id="dayNight">${timeOfDay}</div>
        </div>
           
            <div id="cardDisplay">
            <div id="wea"><b>Weather: </b>${data.weather[0].main}</div>
            <div><b>Date:</b> ${day}-${dates}-${month}-${year} </div>

            <div id="temp"><b>Temperature:</b> ${data.main.temp}°C</div>
            <div id="pre"><b>Pressure: </b> ${data.main.pressure} hpa</div>
            <div id="sea"><b>Sea-Level: </b> ${data.main.sea_level} m</div>
            <div id="visibility"><b>Visibility: </b> ${data.visibility} m</div>
            <div id="hum"><b>Humidity: </b> ${data.main.humidity}%</div>
            <div id="wind"><b>Wind Speed:</b> ${data.wind.speed} m/s</div>    
            </div>
                
        `;

        
        var weatherCondition = data.weather[0].main.toLowerCase();
        changeBackground(weatherCondition);

       
    })
    .catch(() => {
        error.style.display = "block";
        er.innerHTML = "City Not Found";
    });
}

function changeBackground(condition) {
let body = document.body;

switch (condition) {
    case 'clear':
       body.style.backgroundImage = "url('clear.gif')";
        break;

    case 'clouds':
        body.style.backgroundImage = "url('cloud.gif')";
        break;

    case 'rain':
        body.style.backgroundImage = "url('rain.gif')";
        break;

    case 'thunderstorm':
        body.style.backgroundImage = "url('Thunderstorm.gif')";
        break;

    case 'drizzle':
        body.style.backgroundImage = "url('drizzle.gif')";
        break;

    case 'snow':
        body.style.backgroundImage = "url('snow.gif')";
        break;

    case 'mist':
        body.style.backgroundImage = "url('mist.gif')";
        break;

    case 'haze':
        body.style.backgroundImage = "url('haze.gif')";
        break;

    case 'fog':
        body.style.backgroundImage = "url('fog.gif')";
        break;

    case 'dust':
        body.style.backgroundImage = "url('dust.gif')";
        break;

    case 'smoke':
        body.style.backgroundImage = "url('fog.gif')";
        break;

    case 'sand':
        body.style.backgroundImage = "url('dust.gif')";
        break;

    case 'ash':
        body.style.backgroundImage = "url('ash.gif')";
        break;

    case 'squall':
        body.style.backgroundImage = "url('squal.gif')";
        break;

    case 'tornado':
        body.style.backgroundImage = "url('tornado.gif')";
        break;

    default:
        body.style.backgroundImage = "url('default.gif')";
        break;
}
// Add some additional styles to ensure the background covers the full screen
 
}
function reload(){
window.location.reload()
}