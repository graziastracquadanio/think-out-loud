// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyB07elmeH9kwDc5wBcIU2qYmO5Gv-M1ezM',
    authDomain: 'think-out-loud-loud.firebaseapp.com',
    databaseURL: 'https://think-out-loud-loud.firebaseio.com',
    projectId: 'think-out-loud-loud',
    storageBucket: 'think-out-loud-loud.appspot.com',
    messagingSenderId: '475354579769',
  },
};
