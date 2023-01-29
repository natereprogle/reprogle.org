const { writeFile } = require('fs');

// read the command line arguments passed with yargs
const isProduction = process.env['NODE_ENV'] === 'prod';

const targetPath = isProduction
  ? `./src/environments/environment.prod.ts`
  : `./src/environments/environment.ts`;

if (isProduction) {
  console.log(
    'Currently using a production environment. Setting environment variables as such'
  );
} else {
  console.log(
    'Running application in development mode. Angular will handle migrating environment variables, assuming environment.dev.ts has been configured properly'
  );
  process.exit(0);
}

// we have access to our environment variables
// in the process.env object thanks to dotenv
const environmentFileContent = `
export const environment = {
   production: ${isProduction},
   turnstileSecret: "${process.env['PUBLIC_TURNSTILE_SECRET']}",
   turnstileSiteKey: "${process.env['PUBLIC_TURNSTILE_SITE_KEY']}",
   webhook: "${process.env['PUBLIC_WEBHOOK']}"
};
`;

// write the content to the respective file
writeFile(targetPath, environmentFileContent, function (err: any) {
  if (err) {
    console.log(err);
  }

  console.log(`Wrote variables to ${targetPath}`);
});
