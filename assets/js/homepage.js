//New file
var getUserRepos = function(user) {
    
    var apiurl = "https://api.github.com/users/" + user + "/repos";
    
    fetch(apiurl).then(function(response) {
        response.json().then(function(data) {
            console.log(data);
        });    
    });
};

getUserRepos("jamoore4579");