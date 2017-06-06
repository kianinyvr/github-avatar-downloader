var request = require("request");

console.log("Welcome to the GitHub Avatar Downloader!");

var GITHUB_USER = "kianinyvr";
var GITHUB_TOKEN = "46de44438fe534fa85fb3a88f15557cd481be098";



function getRepoContributors(repoOwner, repoName, cb){
  var requestURL = 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';
  console.log(requestURL);

  var options = {
    url: requestURL,
    headers: {"User-Agent": "kianinyvr"}
  };


  request(options, (err, results) => {

    let parsedResults = JSON.parse(results.body);
    console.log(parsedResults);
  });

};


getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("Errors:", err);
  console.log("Result:", result);
});
