
/*
  These are limited by whitelisted callbacks but still should probably find
  a way to keep them out of version control
*/

var clientId = '927542320010-oqcp2up6lv1t2lfv4j463bkggplcvpoa.apps.googleusercontent.com';
var apiKey = 'AIzaSyBz5pBy064zkh1F_zHdBGzydgMTFilHpXw';

// Grant scopes to both Tag Manager and customize Google Analytics configuration
var scopes = 'https://www.googleapis.com/auth/tagmanager.manage.accounts https://www.googleapis.com/auth/tagmanager.edit.containers https://www.googleapis.com/auth/analytics.edit';

function handleClientLoad() {
  gapi.client.setApiKey(apiKey);
  window.setTimeout(checkAuth,1);
}
function checkAuth() {
  gapi.auth.authorize({client_id: clientId, scope: scopes, immediate: true}, handleAuthResult);
}

// If we're already authenticated, don't show the button
// TODO: provide a mechanism to revoke auth other than session expiration

function handleAuthResult(authResult) {
  var authorizeButton = document.getElementById('authorize-button');
  if (authResult && !authResult.error) {
    authorizeButton.style.visibility = 'hidden';
    getAccountsList();
  } else {
    authorizeButton.style.visibility = '';
    authorizeButton.onclick = handleAuthClick;
  }
}

// Listen for authorize button click and authenticate
function handleAuthClick(event) {
  gapi.auth.authorize({client_id: clientId, scope: scopes, immediate: false}, handleAuthResult);
  return false;
}

// Load the API and make an API call. Display the results on the screen.
function getAccountsList() {
  gapi.client.load('tagmanager', 'v1', function() {
    var requestAcct = gapi.client.tagmanager.accounts.list({
    });
    requestAcct.execute(function(resp) {
      var accountsInfo = document.createElement('div');
			for ( i = 0; i < resp.accounts.length; i++ ) {
				var labelDiv = document.createElement('div');
				var labelItem = document.createElement('label');
				var inputItem = document.createElement('input');
				var spanItem = document.createElement('span');

				labelItem.setAttribute('for', resp.accounts[i].accountId);
				labelItem.className = 'mdl-radio mdl-js-radio mdl-js-ripple-effect';

				inputItem.id = resp.accounts[i].accountId;
				inputItem.type = 'radio';
				inputItem.className = 'mdl-radio__button';
				inputItem.name = 'accounts';
				inputItem.value = resp.accounts[i].accountId;
				labelItem.appendChild(inputItem);

				spanItem.className = 'mdl-radio__label';
				spanItem.innerText = resp.accounts[i].name + ' | ' + resp.accounts[i].accountId;
				labelItem.appendChild(spanItem);

				componentHandler.upgradeElement(labelItem);
				labelDiv.appendChild(labelItem);
				accountsInfo.appendChild(labelDiv);
			};
      document.getElementById('accounts-list').appendChild(accountsInfo);
      console.table(resp)
    });
	});
}
// <+============================== BOOKMARK ================================+>
	/* Event listener (scope?) for onClick to select from 'accounts-list' & return a list
	*of containers as above
	*/

		//sketch of container request:

		// var acctId = onClick(document.getElementById('buttonContainers'));// or something
    // var requestAcct = gapi.client.tagmanager.accounts.list({


function getContainersList() {
	gapi.client.load('tagmanager', 'v1', function() {
		// var acctId = "31734588"
		var requestCont = gapi.client.tagmanager.accounts.31734588.containers({
		});
		requestCont.execute(function(resp) {
      // var containerInfo = document.createElement('div');
			// for ( i = 0; i < resp.accounts.length; i++ ) {
			// 	var labelDiv = document.createElement('div');
			// 	var labelItem = document.createElement('label');
			// 	var inputItem = document.createElement('input');
			// 	var spanItem = document.createElement('span');
			//
			// 	labelItem.setAttribute('for', resp.accounts[i].accountId);
			// 	labelItem.className = 'mdl-radio mdl-js-radio mdl-js-ripple-effect';
			//
			// 	inputItem.id = resp.accounts[i].accountId;
			// 	inputItem.type = 'radio';
			// 	inputItem.className = 'mdl-radio__button';
			// 	inputItem.name = 'accounts';
			// 	inputItem.value = resp.accounts[i].accountId;
			// 	labelItem.appendChild(inputItem);
			//
			// 	spanItem.className = 'mdl-radio__label';
			// 	spanItem.innerText = resp.accounts[i].name + ' | ' + resp.accounts[i].accountId;
			// 	labelItem.appendChild(spanItem);
			//
			// 	componentHandler.upgradeElement(labelItem);
			// 	labelDiv.appendChild(labelItem);
			// 	accountsInfo.appendChild(labelDiv);
			return resp
			// };
      // document.getElementById('containers-list').appendChild(containerInfo);
    });
		console.table(resp)
	});
}

window.onload = function (){
	var el = document.getElementById("buttonContainers");
	el.addEventListener("click", getContainersList);
};
		// requestCont.execute(function(resp) {
		// 	var containersInfo = document.createElement('ul');
		// 	for ( i = 0; i < resp.containers.length; i++ ) {
		// 		var item = document.createElement('li');
		// 		item.innerText = resp.containers[i] + ', ' +
		// 		resp.accounts.containers[i].containerId;
		// 		containersInfo.appendChild(item)
		// 		// accountsInfo.appendChild(document.createTextNode(resp.accounts[i].name));
		// 	}
		// 	document.getElementById('containers-list').appendChild(containersInfo);
		// 	console.table(resp)
		// });
  	// });
	// });
// }

// TODO: Clean up this mess ====================================================
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
