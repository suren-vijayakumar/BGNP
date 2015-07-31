var staff = require('./staffgenerator');
var skills = require('./skillsetgenerator');
var scrum = require('./scrumgenerator');

var empNew = {
            name: staff(),
            skills: skills(),
            scrum: scrum()
        };


 module.exports = empNew;