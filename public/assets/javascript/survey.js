// make on click for submit button
// take in all info provided from user including questions answers
// make sure to use proper sintax for api array
// post this info to the api routes  **** use ajax due to being on the front end ****
// use the .then to GET the info back from api routes as well as push to the home page with the potential friend info for the user 


$("#submit").on("click", function (event) {
    event.preventDefault();
    console.log("ive been clicked");
    alert("clicked")
    var name = $("#name").val().trim();
    var photo = $("#photo").val();
    var q1 = $("#q1").parseInt().val();
    var q2 = $("#q2").parseInt().val();
    var q3 = $("#q3").parseInt().val();
    var q4 = $("#q4").parseInt().val();
    var q5 = $("#q5").parseInt().val();
    var q6 = $("#q6").parseInt().val();
    var q7 = $("#q7").parseInt().val();
    var q8 = $("#q8").parseInt().val();
    var q9 = $("#q9").parseInt().val();
    var q10 = $("#q10").parseInt().val();
    
    var userData = {
        name: name,
        photo: photo,
        scores: [
            q1,
            q2,
            q3,
            q4,
            q5,
            q6,
            q7,
            q8,
            q9,
            q10
        ]
    };
    $.post(currentURL + "/apiRoutes", userData, function(data) {
        // If the data has a match, then show this
        console.log(data)
        
    });
    })