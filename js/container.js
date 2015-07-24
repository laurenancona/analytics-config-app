

function auth() {
  var config = {
    'client_id': '735213377869-ij7q11i3740bf2ab6msibo100b43cfja.apps.googleusercontent.com',
    'scope': 'https://www.googleapis.com/auth/tagmanager.edit.containers https://www.googleapis.com/auth/tagmanager.edit.containerversions'
  };
  gapi.auth.authorize(config, function() {
    console.log('login complete');
    console.log(gapi.auth.getToken());
    debugger;
  });
}

//$(function(){

//})

 // function signOut() {
 //    var auth2 = gapi.auth2.getAuthInstance();
 //    auth2.signOut().then(function () {
 //      console.log('User signed out.');
 //    });
 //  }

  function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail());
}

// GET list of accounts for user
accountsData = null;
$.ajax('https://www.googleapis.com/tagmanager/v1/accounts', {
  success: function(data) {
    accountsData = data,
    console.log(data);
  }
})

// Load container configuration JSON file from server
containerData = null;
$.ajax('unified-analytics.json', {
  dataType: 'text',
  success: function(data) {
    containerData = data
  }
})

//   
// var accountId = '';
// var containerId = '';
// var createUrl = '';
// $.ajax(createUrl, {
//   method: 'POST',
//   contentType: 'application/json'
//   data: containerData
// })

function containerUpload() {
  console.log('container upload click');
}

$('#buttonUpload').click(containerUpload);

