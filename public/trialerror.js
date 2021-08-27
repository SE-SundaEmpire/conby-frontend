var settings = {
    "url": "https://conby-api.herokuapp.com/",
    "method": "GET",
    "timeout": 0,
  };
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  });