var request = require("request");
var fs = require('fs');

var owner = process.argv[2];

if(!owner || owner.length !==2){
  console.log("You must enter two arguments");
  return;
}


console.log("Welcome to the GitHub Avatar Downloader!");

var GITHUB_USER = "kianinyvr";
var GITHUB_TOKEN = "46de44438fe534fa85fb3a88f15557cd481be098";

var count = 0;

function getRepoContributors(repoOwner, repoName, cb){
  var requestURL = 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + owner[0] + '/' + owner[1] + '/contributors';
  console.log(requestURL);

  var options = {
    url: requestURL,
    headers: {"User-Agent": "kianinyvr"}
  };


  request(options, (err, results) => {

    let parsedResults = JSON.parse(results.body);

    parsedResults.forEach((user) => {
      var fileName = "./avatars/" + user.login + ".jpg";
      downloadImageByURL(user.avatar_url, fileName );
    })
  });

};


getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("Errors:", err);
  console.log("Result:", result);
});



function downloadImageByURL(url, filePath){
  //request to url and save image file
  request.get(url)
         .on("error", function(err){
          throw err;
         })
         .on('response', function(response){
         })
         .pipe(fs.createWriteStream(filePath));

}



