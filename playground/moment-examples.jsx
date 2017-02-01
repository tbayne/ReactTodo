const moment = require('moment')

console.log(moment().format());

const now = moment();

console.log('Current timestamp: ', now.unix());

const timestamp = 1485976186;
var currentMoment = moment.unix(timestamp);
console.log('Current Moment: ', currentMoment.format("MMM DD, YYYY @ HH:mm"));

console.log('Current timestamp: ', moment().format("MMMM Do, YYYY @ hh:mm A"));
