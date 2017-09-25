var mongoose = require('mongoose');

var playerSchema = new mongoose.Schema({
    name: {type: String, required: true, min:2},
    position:{type: String, required: true, min:2},
    game1:{type: Boolean, required: false, default: false},
    game2:{type: Boolean, required: false, default: false},
    game3:{type: Boolean, required: false, default: false}},
    {timestamps: true });

mongoose.model('Player', playerSchema);
var Player = mongoose.model('Player');