var players = require('../controllers/players.js');
var path = require('path');
module.exports = function(app){
    app.get('/players', (req, res, next) => {
        console.log("Got to the get route for players");
        players.showPlayers(res, res);
    });

    app.post('/players', (req,res,next) => {
        console.log("Attempting to create a player: (routes)");
        console.log(req.body);
        players.createPlayer(req, res);
    });

    app.delete('/players/:id', (req, res, next) => {
        console.log("Got to the delete route");
        players.deletePlayer(req, res);
    });

    app.put('/players/:id',(req, res, next) => {
        console.log("Got to the update route");
        players.updatePlayer(req, res);
    });

    app.all("*", (req,res,next) => {
         console.log("Hit the random route");
            res.sendFile(path.resolve("./public/dist/index.html"))
    });
}