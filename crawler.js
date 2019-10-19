const crawler = require('./src/crawler')

const checkin = '25/12/2019'
// const checkin = '2019-12-25'
const checkout  = '01/01/2020'

crawler(checkin, checkout).then(async (result) => {
    // console.log(result)
    console.log(result);
}).catch(error => {
    console.error(error)
});


// crawler().then(async (result) => {
//     // console.log(result)
//     console.log(result);
// }).catch(error => {
//     console.error(error)
// });