var companyNames = ["Best Buy", "The Nerdery", "Wells Fargo", "Target", "3M", "Walmart", "Honeywell"];

var randomNumber = function (min, max) {
    return Math.floor(Math.random() * (1 + max - min) + min);
}

function projectCreator () {
    var name = companyNames[Math.floor(Math.random() * companyNames.length)];
    var frontEnd = randomNumber(10, 60);
    var clientSide = randomNumber(10, 60);
    var serverSide = randomNumber(10, 60);
    var projectArray = [name, frontEnd, clientSide, serverSide];
    return projectArray;
}


$(document).ready(function(){
    $('.projectDiv').append("<button class='clickyButton'>Generate Project</button>");


    $("body").on('click', '.clickyButton', function() {
        console.log("clickyButton clicked!");
        var currentProject = projectCreator();
        $(".projectDiv").children().remove();
        $(".staffDiv").children().remove();
        $('.projectDiv').append("<button class='clickyButton'>Generate Project</button>");
        $(".projectDiv").append("<p>Company Name: " + currentProject[0] + "</p>");
        $(".projectDiv").append("<p>Front End: " + currentProject[1] + "</p>");
        $(".projectDiv").append("<p>Clientside: " + currentProject[2] + "</p>");
        $(".projectDiv").append("<p>Serverside: " + currentProject[3] + "</p>");
        $(".projectDiv").append("<button class='staffButton'>Assign Staff</button>");
        console.log(currentProject);
    });
    $("body").on('click', '.staffButton', function() {
        console.log("staffButton clicked!");
        $.ajax({
            url: "/data-request",
            success: function(data){
                console.log(data);
          }
        });
    });



});