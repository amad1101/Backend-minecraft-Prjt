const util  = require('util');
const client = require('shodan-client');

const searchOpts = {
  facets: 'port:100,country:100',
  // minify: false,
};
client
  .search('minecraft port:25565', 'rx7jBszSGiQYt6ha2o7nP2ZyzxdraU6X', searchOpts)
  .then(res => {
    console.log('Result:');
    console.log(util.inspect(res, { depth: 6 }));
  })
  .catch(err => {
    console.log('Error:');
    console.log(err);
  });