

var crypto = require('crypto-js')

function get_sha(aa) {
    // return crypto.SHA1(aa).toString()
    // return crypto.SHA224(aa).toString()
    // return crypto.SHA256(aa).toString()
    return crypto.SHA512(aa).toString()
}

console.log(get_sha('123'));
console.log(get_sha('123').length);



