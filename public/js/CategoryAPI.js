$("document").ready(function() {
  $("#gastronomy").click(function() {
    SetAPI("gastronomy");

    $("#CategorySelected").empty();
    $("#CategorySelected").append("Gastronomy");
  });

  $("#attraction").click(function() {
    SetAPI("attraction");

    $("#CategorySelected").empty();
    $("#CategorySelected").append("Attraction");
  });

  $("#accommodation").click(function() {
    SetAPI("accommodation");

    $("#CategorySelected").empty();
    $("#CategorySelected").append("Accommodation");
  });

  $("#services").click(function() {
    SetAPI("services");

    $("#CategorySelected").empty();
    $("#CategorySelected").append("Services");
  });

  $("#essentials").click(function() {
    SetAPI("essentials");

    $("#CategorySelected").empty();
    $("#CategorySelected").append("Essentials");
  });

  /*$('#ViequesArea').click(function() {

        let area = new SetURL('Vieques');
    });

    $('#CulebraArea').click(function() {

        let area = new SetURL('Culebra');
    });*/
});

//---------------- Call the API ----------------
/*
    This function will call the API specifying
    the category the user selected.
*/
function CallAPI(category) {
  return "./api/viewPR/" + category;
}

//---------------- Call the API end ----------------

//---------------- Set API ----------------
/*
    This function will set the API
    with the category selected.
*/
function SetAPI(category) {
  var categories = [
    "gastronomy",
    "attraction",
    "accommodation",
    "services",
    "essentials"
  ];

  for (var i = 0; i < categories.length; i++) {
    if (category == categories[i]) {
      ShowData(CallAPI(category));
    }
  }
}
//---------------- Set API ends ------------

//---------------- ShowLocation ------------
function ShowData(api_url) {
  
    $("#image").empty();
    $("#image2").empty();
    $("#image3").empty();
    $("#image4").empty();
    $("#image5").empty();
    $("#image6").empty();

    $("#name").empty();
    $("#name2").empty();
    $("#name3").empty();
    $("#name4").empty();
    $("#name5").empty();
    $("#name6").empty();

    $("#PhoneNumber").empty();
    $("#PhoneNumber2").empty();
    $("#PhoneNumber3").empty();
    $("#PhoneNumber4").empty()
    $("#PhoneNumber5").empty();
    $("#PhoneNumber6").empty()

    $("#Address").empty();
    $("#Address2").empty();
    $("#Address3").empty();
    $("#Address4").empty();
    $("#Address5").empty();
    $("#Address6").empty();
    

 /* fetch(api_url)
  .then(data => data.json())
  .then(json => {
      console.log(json)
  })
  .catch(err => console.log(err))*/

  $.ajax({
    url: api_url,
    type: "GET",
    dataType: "json",
    cache: false,
    success: function(data) {
      console.log(data);

      //let image = data[0].media;

     /* for (var i = 0; i < data.length; i++) {
        //$('#data').append('<img id="PlaceImage class="w-full"" src="' + image + '">');
        $("#target").append(`
        <div class="w-1/3 px-2">
        <div>
            <div class="max-w-sm rounded overflow-hidden shadow-lg">
                <img class="w-full" src="https://tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains">
                <div class="px-6 py-4">
                    <!-- Name -->
                    <div class="font-bold text-xl mb-2" id="name">`+ data[i].name ? data[i].name : "not found" +`</div>
                    <p class="text-grey-darker text-base">
                        `+data[i].description? data[i].description: "not found"+`
                    </p>
                    <hr>
                    <button class="bg-transparent hover:bg-blue text-blue-dark font-semibold hover:text-white py-2 px-4 border border-blue hover:border-transparent rounded">
                        Read More
                    </button>
                </div>
                <div class="px-6 py-4">
                    <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">#photography</span>
                    <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">#travel</span>
                    <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker">#winter</span>
                </div>
            </div>
        </div>
    </div>
        `);*/

        $('#image').append('<img class="w-full" id="PlaceImage" style=""; src="' + data[0].media[0] + '">');
        $('#name').append(data[0].name);
        $('#PhoneNumber').append(data[0].phone);
        $('#Address').append(data[0].address);

        $('#image2').append('<img class="w-full" id="PlaceImage" src="' + data[1].media[0] + '">');
        $('#name2').append(data[1].name);
        $('#PhoneNumber2').append(data[1].phone);
        $('#Address2').append(data[1].address);

        $('#image3').append('<img class="w-full" id="PlaceImage" src="' + data[2].media[0] + '">');
        $('#name3').append(data[2].name);
        $('#PhoneNumber3').append(data[2].phone);
        $('#Address3').append(data[2].address);

        $('#image4').append('<img class="w-full" id="PlaceImage" src="' + data[3].media[0] + '">');
        $('#name4').append(data[3].name);
        $('#PhoneNumber4').append(data[3].phone);
        $('#Address4').append(data[3].address);

        $('#image5').append('<img class="w-full" id="PlaceImage" src="' + data[4].media[0] + '">');
        $('#name5').append(data[4].name);
        $('#PhoneNumber5').append(data[4].phone);
        $('#Address5').append(data[4].address);

        $('#image6').append('<img class="w-full" id="PlaceImage" src="' + data[5].media[0] + '">');
        $('#name6').append(data[5].name);
        $('#PhoneNumber6').append(data[5].phone);
        $('#Address6').append(data[5].address);
        

       // $('#PlaceImage').append('<img id="image" src' + data[0].media[0] + '>');
        /* $('#data').append('<h3 id="Address">Address: '+  data[i].address + '</h3>');
                            $('#data').append('<h3 id="rating">Rating: Rating</h3>');
                            $('#data').append('<h3 id="phone">Phone: ' + data[i].phone + '</h3>');
                            $('#data').append('<h3 id="zone">Zone: ' + data[i].zone + '</h3><hr>');*/
    }
  });
}

SetAPI('gastronomy');
//---------------- ShowLocation ends ------------
