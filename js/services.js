var londonDif=null;
var newyorkDif=null;
var tokyoDif=null;
var bogotaDif=null;

function setOilPrices() {
    let url = "https://3ov1xkbk64.execute-api.us-east-2.amazonaws.com/dev/oilprices";
    fetch(url).then((resp)=>resp.json()).then((data)=>{
        let caret = '<i class="fa fa-caret-up" aria-hidden="true" style="color: green"></i>';
        if (data.wti.delta.startsWith("-"))
            caret = '<i class="fa fa-caret-down" aria-hidden="true" style="color: red"></i>';
        $('#wtiPrice').html(`${data.wti.price} ${caret}`);
        $('#wtiChange').html(`${data.wti.delta}`);
        $('#wtiPct').html(`${data.wti.deltap}`);

        caret = '<i class="fa fa-caret-up" aria-hidden="true" style="color: green"></i>';
        if (data.brent.delta.startsWith("-"))
            caret = '<i class="fa fa-caret-down" aria-hidden="true" style="color: red"></i>';
        $('#brentPrice').html(`${data.brent.price} ${caret}`);
        $('#brentChange').html(`${data.brent.delta}`);
        $('#brentPct').html(`${data.brent.deltap}`);
    }).catch((err)=>{
        console.log(err);
    }); 
}

function setTimeBogota(lt) {
    let wd = new Intl.DateTimeFormat('en', { timeZone: 'America/Bogota', weekday: 'short' }).format(lt);
    let ye = new Intl.DateTimeFormat('en', { timeZone: 'America/Bogota', year: 'numeric' }).format(lt);
    let mo = new Intl.DateTimeFormat('en', { timeZone: 'America/Bogota', month: 'short' }).format(lt);
    let da = new Intl.DateTimeFormat('en', { timeZone: 'America/Bogota', day: '2-digit' }).format(lt);
    let ti = new Intl.DateTimeFormat('en', { timeZone: 'America/Bogota', hour: 'numeric',minute: 'numeric' }).format(lt);
    var ed = document.getElementById('bogotaDate');
    ed.innerHTML = `${wd},${mo} ${da}, ${ye}`;
    var et = document.getElementById('bogotaTime');
    et.innerHTML = `${ti}`;
}

function setTimeLondon(lt) {
    let wd = new Intl.DateTimeFormat('en', { timeZone: 'Europe/London', weekday: 'short' }).format(lt);
    let ye = new Intl.DateTimeFormat('en', { timeZone: 'Europe/London', year: 'numeric' }).format(lt);
    let mo = new Intl.DateTimeFormat('en', { timeZone: 'Europe/London', month: 'short' }).format(lt);
    let da = new Intl.DateTimeFormat('en', { timeZone: 'Europe/London', day: '2-digit' }).format(lt);
    let ti = new Intl.DateTimeFormat('en', { timeZone: 'Europe/London', hour: 'numeric',minute: 'numeric' }).format(lt);
    var ed = document.getElementById('londonDate');
    ed.innerHTML = `${wd},${mo} ${da}, ${ye}`;
    var et = document.getElementById('londonTime');
    et.innerHTML = `${ti}`;
}

function setTimeNewYork(lt) {
    let wd = new Intl.DateTimeFormat('en', { timeZone: 'America/New_York', weekday: 'short' }).format(lt);
    let ye = new Intl.DateTimeFormat('en', { timeZone: 'America/New_York', year: 'numeric' }).format(lt);
    let mo = new Intl.DateTimeFormat('en', { timeZone: 'America/New_York', month: 'short' }).format(lt);
    let da = new Intl.DateTimeFormat('en', { timeZone: 'America/New_York', day: '2-digit' }).format(lt);
    let ti = new Intl.DateTimeFormat('en', { timeZone: 'America/New_York', hour: 'numeric',minute: 'numeric' }).format(lt);
    var ed = document.getElementById('newyorkDate');
    ed.innerHTML = `${wd},${mo} ${da}, ${ye}`;
    var et = document.getElementById('newyorkTime');
    et.innerHTML = `${ti}`;
}

function setTimeTokyo(lt) {
    let wd = new Intl.DateTimeFormat('en', { timeZone: 'Asia/Tokyo', weekday: 'short' }).format(lt);
    let ye = new Intl.DateTimeFormat('en', { timeZone: 'Asia/Tokyo', year: 'numeric' }).format(lt);
    let mo = new Intl.DateTimeFormat('en', { timeZone: 'Asia/Tokyo', month: 'short' }).format(lt);
    let da = new Intl.DateTimeFormat('en', { timeZone: 'Asia/Tokyo', day: '2-digit' }).format(lt);
    let ti = new Intl.DateTimeFormat('en', { timeZone: 'Asia/Tokyo', hour: 'numeric',minute: 'numeric' }).format(lt);
    var ed = document.getElementById('tokyoDate');
    ed.innerHTML = `${wd},${mo} ${da}, ${ye}`;
    var et = document.getElementById('tokyoTime');
    et.innerHTML = `${ti}`;
}

function setWeatherBar() {
    let url = "http://api.openweathermap.org/data/2.5/weather?q=barranquilla,co&APPID=62a08f10f4bd90015eb490fec8fb4d5f";
    fetch(url).then((resp)=>resp.json()).then((data)=>{
        $('#barWeather').html(`${toFahrenheit(data.main.temp)}°F`);
        $('#barHumidity').html(`${data.main.humidity}%`);
    }).catch((err)=>{
        console.log(err)
    }); 
}

function setWeatherBog() {
    let url = "http://api.openweathermap.org/data/2.5/weather?q=bogota,co&APPID=62a08f10f4bd90015eb490fec8fb4d5f";
    fetch(url).then((resp)=>resp.json()).then((data)=>{
        $('#bogWeather').html(`${toFahrenheit(data.main.temp)}°F`);
        $('#bogHumidity').html(`${data.main.humidity}%`);
    }).catch((err)=>{
        console.log(err);
    }); 
}

function setWeatherBue() {
    let url = "http://api.openweathermap.org/data/2.5/weather?q=buenaventura,co&APPID=62a08f10f4bd90015eb490fec8fb4d5f";
    fetch(url).then((resp)=>resp.json()).then((data)=>{
        $('#bueWeather').html(`${toFahrenheit(data.main.temp)}°F`);
        $('#bueHumidity').html(`${data.main.humidity}%`);
    }).catch((err)=>{
        console.log(err);
    }); 
}

function setWeatherCtg() {
    let url = "http://api.openweathermap.org/data/2.5/weather?q=cartagena,co&APPID=62a08f10f4bd90015eb490fec8fb4d5f";
    fetch(url).then((resp)=>resp.json()).then((data)=>{
        $('#ctgWeather').html(`${toFahrenheit(data.main.temp)}°F`);
        $('#ctgHumidity').html(`${data.main.humidity}%`);
    }).catch((err)=>{
        console.log(err);
    }); 
}

function setWeatherRio() {
    let url = "http://api.openweathermap.org/data/2.5/weather?q=riohacha,co&APPID=62a08f10f4bd90015eb490fec8fb4d5f";
    fetch(url).then((resp)=>resp.json()).then((data)=>{
        $('#rioWeather').html(`${toFahrenheit(data.main.temp)}°F`);
        $('#rioHumidity').html(`${data.main.humidity}%`);
    }).catch((err)=>{
        console.log(err);
    }); 
}

function setWeatherCov() {
    let url = "http://api.openweathermap.org/data/2.5/weather?q=coveñas,co&APPID=62a08f10f4bd90015eb490fec8fb4d5f";
    fetch(url).then((resp)=>resp.json()).then((data)=>{
        $('#covWeather').html(`${toFahrenheit(data.main.temp)}°F`);
        $('#covHumidity').html(`${data.main.humidity}%`);
    }).catch((err)=>{
        console.log(err);
    }); 
}

function setWeatherStm() {
    let url = "http://api.openweathermap.org/data/2.5/weather?q=santa%20marta,co&APPID=62a08f10f4bd90015eb490fec8fb4d5f";
    fetch(url).then((resp)=>resp.json()).then((data)=>{
        $('#stmWeather').html(`${toFahrenheit(data.main.temp)}°F`);
        $('#stmHumidity').html(`${data.main.humidity}%`);
    }).catch((err)=>{
        console.log(err);
    }); 
}

function setWeather() {
    setWeatherBar();
    setWeatherBog();
    setWeatherBue();
    setWeatherCtg();
    setWeatherRio();
    setWeatherCov();
    setWeatherStm();

}

function setWorldTime() {
    let lt = new Date().getTime();
    setTimeBogota();
    setTimeLondon();
    setTimeNewYork();
    setTimeTokyo();
}

function toFahrenheit(kelvin) {
    let fh = (parseFloat(kelvin) - 273.15) * 9 / 5 + 32;
    return fh.toFixed(2);
}