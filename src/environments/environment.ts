// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyA3EzCYk43pLropaAJkW785JeP-uzvvT4U',
    authDomain: 'angularteamproject.firebaseapp.com',
    databaseURL: 'https://angularteamproject.firebaseio.com',
    projectId: 'angularteamproject',
    storageBucket: 'angularteamproject.appspot.com',
    messagingSenderId: '893482106660'
  }
};
