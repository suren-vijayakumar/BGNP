var rand = require('./random');

var scrumNumber= function() {
    var scrum = rand(1, 9);
    return scrum;
};

module.exports = scrumNumber;
