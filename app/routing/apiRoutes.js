var Friends = require("../data/friends.js");
var path = require("path")

module.exports = function (app) {


  app.get("/api/friends", function (req, res) {
    res.json(Friends);
  });





  app.post("/api/friends", function (req, res) {


    var friendScores = req.body.scores;

    var matchName = '';
    var matchImage = '';
    var leastSum = 10000;

    for (var i = 0; i < Friends.length; i++) {


      var sumDiff = 0;
      for (var j = 0; j < friendScores.length; j++) {
        sumDiff += Math.abs((Friends[i].scores[j]) - (friendScores[j]));


      }





      if (sumDiff < leastSum) {


        matchName = Friends[i].name;
        matchImage = Friends[i].imageLink;
        leastSum = sumDiff;
        
        console.log(matchName);
        console.log(leastSum);
        console.log(matchImage);



      }
    }




    Friends.push(req.body)

    res.json({
      name: matchName,
      image: matchImage
    })
  });




};