const [pwd] = process.argv.slice(2);
if (!pwd) {
    console.log('Invalid PWD argument');
    process.exit(0);
}

const packagePath = pwd + '/package.json';
const fs = require('fs');
if (!fs.existsSync(packagePath)) {
    console.log('package.json not found at ' + packagePath);
    process.exit(0);
}

const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
packageJson.scripts = {
    build: 'tsc',
    dev: 'ts-node-dev --respawn --transpile-only --ignore-watch node_modules --no-notify src/index.ts'
}

const packageJsonStr = JSON.stringify(packageJson, null, 2);
fs.writeFileSync(packagePath, packageJsonStr, 'utf8');