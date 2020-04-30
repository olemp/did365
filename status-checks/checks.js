// const bundleSize = require('./bundle-size');

const sleep = (s) => {
  return new Promise(resolve => {
    setTimeout(resolve, s * 1000);
  });
}

module.exports = [
  {
    name: 'Build',
    callback: async () => 'Build success',
  },
  {
    name: 'Approved by Product Owner',
    callback: async () => {
      await sleep(5);
      return 'The merge was approved';
    }
  }
];
