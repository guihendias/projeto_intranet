// SystemJS configuration file, see links for more information
// https://github.com/systemjs/systemjs
// https://github.com/systemjs/systemjs/blob/master/docs/config-api.md

/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
const map: any = {
  '@angular2-material': 'vendor/@angular2-material',
  'dragula': 'vendor/dragula/dist/dragula.js',
  'ng2-dragula': 'vendor/ng2-dragula'
};

/** User packages configuration. */
const packages: any = {
  'dragula': { defaultExtension: 'js' },
  'ng2-dragula': {defaultExtension: 'js' }
};

// put the names of any of your Material components here
const materialPkgs: string[] = [
  'core',
  'button',
  'icon',
  'toolbar',
  'sidenav',
  'list',
  'progress-circle',
  'card',
  'input',
  'checkbox',
  'slide-toggle',
  'radio'
];

materialPkgs.forEach((pkg) => {
  packages[`@angular2-material/${pkg}`] = { main: `${pkg}.js` };
});
////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
const barrels: string[] = [
  // Angular specific barrels.
  '@angular/core',
  '@angular/common',
  '@angular/compiler',
  '@angular/http',
  '@angular/forms',
  '@angular/router',
  '@angular/platform-browser',
  '@angular/platform-browser-dynamic',
  // Thirdparty barrels.
  'rxjs',
  // App specific barrels.
  'app',
  'app/shared',
  /** @cli-barrel */
];

const cliSystemConfigPackages: any = {};
barrels.forEach((barrelName: string) => {
  cliSystemConfigPackages[barrelName] = { main: 'index' };
});

/** Type declaration for ambient System. */
declare var System: any;

// Apply the CLI SystemJS configuration.
System.config({
  map: {
    '@angular': 'vendor/@angular',
    'rxjs': 'vendor/rxjs',
    'main': 'main.js',
    'dragula': 'vendor/dragula',
    'ng2-dragula': 'vendor/ng2-dragula/ng2-dragula.js',
  },
  packages: cliSystemConfigPackages
});

// Apply the user's configuration.
System.config({ map, packages });
