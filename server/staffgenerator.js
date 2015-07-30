var staffNames = ["Donald Trump", "Rosie O'Donnell", "Leonardo", "Arthur", "Brunhilda", "Lancelot", "Bartholamewl"];

var staffCreator = function () {
    var name = staffNames[Math.floor(Math.random() * staffNames.length)];
    return name;
};

module.exports = staffCreator;