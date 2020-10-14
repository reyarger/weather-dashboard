      // This .on("click") function will trigger the AJAX Call
      $("#search-btn").on("click", function(event) {

        // event.preventDefault() can be used to prevent an event's default behavior.
        // Here, it prevents the submit button from trying to submit a form when clicked
        event.preventDefault();

        // Here we grab the text from the input box
        var city = $("#search-input").val();
        console.log(city);
        var APIKey ="f67c879f0fb2de6e538cafabe2bb17a3";
        // Here we construct our URL
        var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city+"&appid="+ APIKey;

        console.log(queryURL);
        // Write code between the dashes below to hit the queryURL with $ajax, then take the response data
        // and display it in the div with an id of movie-view

        $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function(response) {

            // var date=moment().format("dddd, MMMM Do");
            // console.log(date);

            console.log(response);
            var tempF = (response.main.temp - 273.15) * 1.80 + 32;
            
            $(".city").html("<h1>" + response.name + "</h1>");
            $(".temp").text("Temoerature: " + tempF.toFixed(2));
            $(".humidity").text("Humidity: " + response.main.humidity);
            $(".wind").text("Wind Speed: " + response.wind.speed);
            // $(".uv").text("UV Index: " + response.main.)
        });
    //   console.log(response);
        // -----------------------------------------------------------------------

      });
