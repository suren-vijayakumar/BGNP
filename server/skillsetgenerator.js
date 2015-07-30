var skillset = ["Front End", "Clientside Logic", "Serverside Logic"];

var skillGenerator = function () {
    return skillset[Math.floor(Math.random() * skillset.length)];
}

module.exports = skillGenerator;