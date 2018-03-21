var friends = require("../data/friends");
var path = require("path")

module.exports = function (app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function (req, res) {
    res.json(friends);
  });



  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function (req, res) {
    //console.log(JSON.stringify(req.body.scores, null, 2));

    var friendScores = req.body.scores;

    var matchName = '';
    var matchImage = '';
    var totalDifference = 0;

    for (var i = 0; i < friends.length; i++) {
      // console.log('friend = ' + JSON.stringify(friends[i]));

      // Compute differenes for each question
      var difference = [];
      var sumDiff = 0;
      for (var j = 0; j < friendScores.length; j++) {
       sumDiff += (Math.abs(friends[i].scores[j] - friendScores[j]));

      } console.log(difference.push(sumDiff));


      console.log('difference = ' + difference);

      // If lowest difference, record the friend match
      if (difference < totalDifference) {
        totalDifference = difference;
        matchName = friends[i].Name;
        matchImage = friends[i].imageLink;
       
        console.log('Closest match found = ' + difference);
        console.log('Friend name = ' + matchName);
        console.log('Friend image = ' + matchImage);

        
      }
    }




    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body-parser middleware
    friends.push(req.body) //this should be done last!

  });




};