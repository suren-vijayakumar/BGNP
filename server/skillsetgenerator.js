var rand = require('./random');
var skillset = ["Front End", "Clientside Logic", "Serverside Logic"];

var skillGenerator = function () {
    return skillset[rand(0,2)];
};

module.exports = skillGenerator;