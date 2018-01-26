// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyD48Kb1voVUzen6PSOPTwez8NAASKjK6WA',
    authDomain: 'ng-chat-ab0f9.firebaseapp.com',
    databaseURL: 'https://ng-chat-ab0f9.firebaseio.com',
    projectId: 'ng-chat-ab0f9',
    storageBucket: 'ng-chat-ab0f9.appspot.com',
    messagingSenderId: '635605740090'
  }
};
