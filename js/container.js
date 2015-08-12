
var clientId = '735213377869-ij7q11i3740bf2ab6msibo100b43cfja.apps.googleusercontent.com';

var apiKey = 'AIzaSyCP1B-ZaJzC04l_yHIdrgaXKBtBFaK4aNw';

var scopes = 'https://www.googleapis.com/auth/tagmanager.manage.accounts';

function handleClientLoad() {
  gapi.client.setApiKey(apiKey);
  window.setTimeout(checkAuth,1);
}
function checkAuth() {
  gapi.auth.authorize({client_id: clientId, scope: scopes, immediate: true}, handleAuthResult);
}

function handleAuthResult(authResult) {
  var authorizeButton = document.getElementById('authorize-button');
  if (authResult && !authResult.error) {
    authorizeButton.style.visibility = 'hidden';
    makeApiCall();
  } else {
    authorizeButton.style.visibility = '';
    authorizeButton.onclick = handleAuthClick;
  }
}

function handleAuthClick(event) {
  gapi.auth.authorize({client_id: clientId, scope: scopes, immediate: false}, handleAuthResult);
  return false;
}

// Load the API and make an API call.  Display the results on the screen.
function makeApiCall() {
  gapi.client.load('tagmanager', 'v1', function() {
    var request = gapi.client.tagmanager.accounts.get({
    });
    request.execute(function(resp) {
      // var accountsInfo = document.createElement('h5');
      // accountsInfo.appendChild(document.createTextNode(resp.displayName));
      // document.getElementById('content').appendChild(accountsInfo);
      console.log(resp)
    });
  });
}



//   function onSignIn(googleUser) {
//   var profile = googleUser.getBasicProfile();
//   console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
//   console.log('Name: ' + profile.getName());
//   console.log('Image URL: ' + profile.getImageUrl());
//   console.log('Email: ' + profile.getEmail());
// // The ID token you need to pass to your backend:
//   var id_token = googleUser.getAuthResponse().id_token;
//   console.log("ID Token: " + id_token);

//   var access_token = {
//     "async": true,
//     "crossDomain": true,
//     "url": "https://www.googleapis.com/oauth2/v3/token",
//     "method": "POST",
//     "headers": {
//       "Content-Type": "application/x-www-form-urlencoded",
//       "code": "Bearer"
//     }
//   }
// GET list of accounts for user
// var accounts = {
//   "async": true,
//   "crossDomain": true,
//   "url": "https://www.googleapis.com/tagmanager/v1/accounts",
//   "method": "GET",
//   "headers": {
//     "callback": "selectAccount",
//     "Authorization": "Bearer " + id_token
//   }
// }

// $.ajax(accounts).done(function (response) {
//   console.log(response);
// });

// };


// var accounts = gapi.client.tagmanager.accounts();

//  function makeRequest() {
//         var request = gapi.client.tagmanager.accounts.get({
//           'shortUrl': 'http://goo.gl/fbsS'
//         });





// accountsData
// $.ajax('https://www.googleapis.com/tagmanager/v1/accounts', {
//     success: function(data) {
//       console.log(data);
//     }
//   })

// var template = "<tr>{{#accountsData}}<td>{{accountId}}</td><td>{{name}}</td>{{/accountsData}}</tr>"

// document.getElementById('accountsData').innerHTML =
//   Mustache.render(template, accountsData)

// Load container configuration JSON file from server
// containerData = null;
// $.ajax('unified-analytics.json', {
//   dataType: 'text',
//   success: function(data) {
//     containerData = data
//   //  console.log(data);
//   }
// })


// // POST container configuration to GTM accountoki
// // var accountId = '';
// // var containerId = '';
// // var createUrl = '';
// // $.ajax(createUrl, {
// //   method: 'POST',
// //   contentType: 'application/json'
// //   data: containerData
// // })

// function containerUpload() {
//   console.log('container upload click');
// }
// $('#buttonUpload').click(containerUpload);

