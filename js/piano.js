var piano	= piano	|| {};

piano.play = function(notes, _options) {

    var options = _.extend({
        noteDuration: 1000 //milis
    }, _options);

    var context = new AudioContext();
};
