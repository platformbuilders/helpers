const mz = require('mz/fs');
const rimraf = require('rmfr');

const nativeModulesDirectory = `${__dirname}/../native`;
const nativeFolder = `${nativeModulesDirectory}/native`;

const distModulesDirectory = `${__dirname}/../dist`;

const blackListRemove = [
  'native',
  'shared',
  'web',
  'index.js',
  'index.js.map',
  'index.esm.js',
  'index.esm.js.map',
  'index.d.ts',
];

async function removeAndMoveNewFiles() {
  await rimraf(`${nativeModulesDirectory}/__tests__`);
  await rimraf(`${nativeModulesDirectory}/tools`);
  await rimraf(`${nativeModulesDirectory}/web`);
  await rimraf(`${nativeFolder}/__tests__`);
  const contents = await mz.readdir(nativeModulesDirectory);
  await Promise.all(
    contents.map(async (filename) => {
      if (blackListRemove.includes(filename)) return;
      await mz.unlink(`${nativeModulesDirectory}/${filename}`);
    }),
  );
}

async function referenceTypeDefinitions() {
  await mz.writeFile(
    `${nativeModulesDirectory}/index.d.ts`,
    `export * from './native';`,
  );
}

async function removeNativeFolderFromDist() {
  await rimraf(`${distModulesDirectory}/native`);
  await rimraf(`${distModulesDirectory}/__tests__`);
  await rimraf(`${distModulesDirectory}/tools`);
}

removeAndMoveNewFiles();
referenceTypeDefinitions();
removeNativeFolderFromDist();
