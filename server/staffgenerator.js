var rand = require('./random');
var staffNames = ["Donald", "Trump", "Rosie", "Donnell", "Leonardo", "Arthur", "Brunhilda", "Lancelot", "Bartholamew"];
var someName = staffNames[Math.floor(Math.random() * staffNames.length)];

var staffCreator = function () {
    var name = someName + rand(1,10000);
    return name;
};

module.exports = staffCreator;