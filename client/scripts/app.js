var companyNames = ["Best Buy", "The Nerdery", "Wells Fargo", "Target", "3M", "Walmart", "Honeywell"];

var randomNumber = function (min, max) {
    return Math.floor(Math.random() * (1 + max - min) + min);
};

//var rand = require('../random');



//function projectCreator () {
//    var name = companyNames[Math.floor(Math.random() * companyNames.length)];
//    var frontEnd =  randomNumber(10, 60);
//    var clientSide =randomNumber(10, 60);
//    var serverSide = randomNumber(10, 60);
//    var projectArray = [name, frontEnd, clientSide, serverSide];
//    return projectArray;
//}

var projectCreator = {
    name : companyNames[Math.floor(Math.random() * companyNames.length)],
    frontEnd :  randomNumber(10, 60),
    clientSide: randomNumber(10, 60),
    serverSide: randomNumber(10, 60)

};

$(document).ready(function(){
    $('.projectDiv').append("<button class='clickyButton'>Generate Project</button>");

    $("body").on('click', '.clickyButton', function() {
        console.log("clickyButton clicked!");
        $(".projectDiv").children().remove();
        $(".staffDiv").children().remove();
        $('.projectDiv').append("<button class='clickyButton'>Generate Project</button>");
        $(".projectDiv").append("<p>Company Name: " + projectCreator.name + "</p>");
        $(".projectDiv").append("<p>Front End: " + projectCreator.frontEnd + "</p>");
        $(".projectDiv").append("<p>Clientside: " + projectCreator.clientSide + "</p>");
        $(".projectDiv").append("<p>Serverside: " + projectCreator.serverSide + "</p>");
        $(".projectDiv").append("<button class='staffButton'>Assign Staff</button>");
    });
    $("body").on('click', '.staffButton', function() {
        var empArray =[];
        console.log("staffButton clicked!");

            $.ajax({
            url: "/data-request",
            success: function(data) {
                console.log(data);
                empArray.push(data);
                $(".staffDiv").append("<p>Employee Name: " + data.name + "</p>");
                $(".staffDiv").append("<p>Employee Skill: " + data.skills + "</p>");
                $(".staffDiv").append("<p>Employee Scrum: " + data.scrum + "</p>");

            }

        });

    });



});