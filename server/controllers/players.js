var mongoose = require('mongoose');
var Player = mongoose.model('Player');

module.exports = {
    //just displays all the players created. 
    showPlayers: function(req, res){
        Player.find({}, function(err, players){
            console.log("Players printing from server side.");
            console.log(players);
            return res.json(players);
        })
    },
    // needs to receive player information.
    createPlayer: function(req, res){
        console.log("Attempting to create player. Server side.");
        console.log(req.body);
        Player.create(req.body, (err, player) => {
            if(err){
                console.log("There was an error during the creation");
                return res.json(err);
            }

            else{
                return res.json(player);
            }
        })
    },
    //needs to receive player id.
    deletePlayer: function(req, res){
        console.log("Attempting to delete the player. Server side");
        console.log(req.body);
        Player.remove({_id:req.params.id}, (err, player) => {
            if(err){
                console.log("There is an error in deleting.");
                return res.json(err);
            }
            else{
                return res.json(player);
                console.log("player successfully deleted");
            }
        })
    },
    // Needs to receive an id and player information.
    updatePlayer: function(req, res){
        console.log("Attempting to update a player server side.");
        console.log(req.body);
        Player.findOne({_id: req.params.id}, (err, player) => {
            if(err){
                console.log("Can't find player with that id");
                return res.json(err);
            }else{
                for (var key in req.body){
                    player[key] = req.body[key];
                }
                player.save(function(err) {
                    if(err){
                        console.log("Could not save the player, server side");
                        return res.json(err);
                    }

                    else{
                        return res.json(player);
                    }
                })
            }


        })


    }
    
}