var randomNumber = function (min, max) {
    return Math.floor(Math.random() * (1 + max - min) + min);
};


var scrumNumber= function() {

    var scrum = randomNumber(1, 9);

    return scrum;
};

module.exports = scrumNumber;
