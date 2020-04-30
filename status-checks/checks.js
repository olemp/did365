// const bundleSize = require('./bundle-size');

const sleep = (s) => {
  return new Promise(resolve => {
    setTimeout(resolve, s * 1000);
  });
}

module.exports = (statusUrl) => [
  {
    name: 'Build',
    callback: async () => 'Build success',
  },
  {
    name: 'Approved by Product Owner',
    callback: async () => {
      await fetch('https://prod-17.westeurope.logic.azure.com:443/workflows/cd56328aaacb40cdbe80bf460c7c652e/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=2Oo1NKXyKFKwOjFM7lhH3BHKrUXwMdZocRFldcTT3aA', {
        method: 'POST',
        body: JSON.stringify({
          url: statusUrl,
          token: process.env.GITHUB_TOKEN,
          name: 'Approved by Product Owner',
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });;
      return null;
    }
  }
];
