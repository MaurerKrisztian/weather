
    function getData(){
        fetch('http://api.openweathermap.org/data/2.5/weather?q=Szeged,hu&units=metric&appid=cb314e9c43aa9ca725d76955266fca8a')
        .then((res) => res.json())
        .then(function(data){

          var weatherData = {
             temp: data.main.temp,
             wind : data.wind.speed,
             rain : data.rain["3h"],
             weather : data.weather.description
          };

            weatherData.temp = Math.round(weatherData.temp);
            weatherData.wind = Math.round(weatherData.wind);

            console.log("now temp: " + JSON.stringify(weatherData) + " \n" + JSON.stringify(data));
        
          document.getElementById('country_name').innerHTML = data.name;
          document.getElementById('temp_now').innerHTML = weatherData.temp + " <sup>o</sup>C";
          document.getElementById('wind_now').innerHTML = weatherData.wind + "km/h";
          document.getElementById('rain_now').innerHTML = weatherData.rain + "mm";
          document.getElementById('humidity_now').innerHTML = data.main.humidity + "%";
        })
      }

      getData();