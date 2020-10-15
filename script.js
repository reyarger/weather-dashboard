      // This .on("click") function will trigger the AJAX Call
      $("#search-btn").on("click", function(event) {

        // event.preventDefault() can be used to prevent an event's default behavior.
        // Here, it prevents the submit button from trying to submit a form when clicked
        event.preventDefault();

        // Here we grab the text from the input box
        var city = $("#search-input").val();
        var APIKey ="f67c879f0fb2de6e538cafabe2bb17a3";

        var todayDate = moment().format("MM/DD/YYYY");
          var weekDate = [moment().add(1, "days").format("MM/DD/YYYY"),
                      moment().add(2, "days").format("MM/DD/YYYY"),
                      moment().add(3, "days").format("MM/DD/YYYY"),
                      moment().add(4, "days").format("MM/DD/YYYY"),
                      moment().add(5, "days").format("MM/DD/YYYY")
                      ];

        // Here we construct our URL

        var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city+"&appid="+ APIKey;
        var weekURL="https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + APIKey;


        $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function(response) {


            console.log(response);
            var tempF = (response.main.temp - 273.15) * 1.80 + 32;
            var iconcode = response.weather[0].icon;
            var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
           
            
            $(".city").html("<h1>" + response.name +" ("+todayDate+")"+"</h1>");
            $("#icon").attr("src", iconurl);
            $(".temp").text("Temperature: " + tempF.toFixed(1) + " °F");
            $(".humidity").text("Humidity: " + response.main.humidity +" %");
            $(".wind").text("Wind Speed: " + response.wind.speed + " MPH");
            $(".uv").text("UV Index: " );
            // $("#card-date").val();
        });

        $.ajax({
          url:weekURL,
          method: "GET"
        }).then(function(week){
          
          $(".card-date1").text(weekDate[0]);
          $(".card-date2").text(weekDate[1]);
          $(".card-date3").text(weekDate[2]);
          $(".card-date4").text(weekDate[3]);
          $(".card-date5").text(weekDate[4]);



          var wIcon1=week.list[4].weather[0].icon;
          var wIcon2=week.list[12].weather[0].icon;
          var wIcon3=week.list[20].weather[0].icon;
          var wIcon4=week.list[28].weather[0].icon;
          var wIcon5=week.list[36].weather[0].icon;


          var i1="http://openweathermap.org/img/w/"+wIcon1+".png";
          var i2="http://openweathermap.org/img/w/"+wIcon2+".png";
          var i3="http://openweathermap.org/img/w/"+wIcon3+".png";
          var i4="http://openweathermap.org/img/w/"+wIcon4+".png";
          var i5="http://openweathermap.org/img/w/"+wIcon5+".png";

          $("#icon1").attr("src", i1);
          $("#icon2").attr("src", i2);
          $("#icon3").attr("src", i3);
          $("#icon4").attr("src", i4);
          $("#icon5").attr("src", i5);

          $(".card-one").text("Temp: "+((week.list[4].main.temp- 273.15) * 1.80 + 32).toFixed(1)+ " °F");
          $(".card-two").text("Temp: "+((week.list[12].main.temp- 273.15) * 1.80 + 32).toFixed(1)+" °F");
          $(".card-three").text("Temp: "+((week.list[20].main.temp- 273.15) * 1.80 + 32).toFixed(1)+" °F");
          $(".card-four").text("Temp: "+((week.list[28].main.temp- 273.15) * 1.80 + 32).toFixed(1)+" °F");
          $(".card-five").text("Temp: "+((week.list[36].main.temp- 273.15) * 1.80 + 32).toFixed(1)+" °F");

          $(".humid1").text("Humidity: "+week.list[4].main.humidity+" %");
          $(".humid2").text("Humidity: "+week.list[12].main.humidity+" %");
          $(".humid3").text("Humidity: "+week.list[20].main.humidity+" %");
          $(".humid4").text("Humidity: "+week.list[28].main.humidity+" %");
          $(".humid5").text("Humidity: "+week.list[36].main.humidity+" %");

          // function renderButtons() {

          //   var searches=[];

            // Deleting the movie buttons prior to adding new movie buttons
            // (this is necessary otherwise we will have repeat buttons)
            // $("#search-list").empty();
    
            // Looping through the array of searches
            // for (var i = 0; i < searches.length; i++) {
    
              // Then dynamicaly generating buttons for each city search in the array.
              // This code $("<button>") is all jQuery needs to create the start and end tag. (<button></button>)
              // var a = $("<button>");
              // Adding a class
              // a.addClass("city-search");
              // Adding a data-attribute with a value of the city at index i
              // a.attr("data-name", searches[i]);
              // Providing the button's text with a value of the movie at index i
              // a.text(searches[i]);
              // Adding the button to the HTML
          //     $("#search-list").append(a);
          //   }
          // }
    
          // This function handles events where one button is clicked
          // $("#search-btn").on("click", function(event) {
            // event.preventDefault() prevents the form from trying to submit itself.
            // We're using a form so that the user can hit enter instead of clicking the button if they want
            // event.preventDefault();
    
            // This line will grab the text from the input box
            // var newCity = $("#search-input").val().trim();
            // The movie from the textbox is then added to our array
            // searches.push(newCity);
    
            // calling renderButtons which handles the processing of city array
          //   renderButtons();
          // });
    
          // Calling the renderButtons function at least once to display the initial list of movies
          // renderButtons();


        });
    //   console.log(response);
        // -----------------------------------------------------------------------

      });
