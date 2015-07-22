

function auth() {
  var config = {
    'client_id': '735213377869-ij7q11i3740bf2ab6msibo100b43cfja.apps.googleusercontent.com',
    'scope': 'https://www.googleapis.com/auth/tagmanager.edit.containers'
  };
  gapi.auth.authorize(config, function() {
    console.log('login complete');
    console.log(gapi.auth.getToken());
    debugger;
  });
}

$(function(){

})

 function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
  }

  function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail());
}