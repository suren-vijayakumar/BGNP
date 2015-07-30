var staff = require('./staffgenerator');
var skills = require('./skillsetgenerator');
var scrum = require('./scrumgenerator');


var newEmployee = function(){
    var newEmp = {
        name: staff(),
        skills: skills(),
        scrum: scrum()
    };
    console.log(newEmp);

    return newEmp;

};
 module.exports = newEmployee;