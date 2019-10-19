const moment = require('moment');
const urlParcer = (checkin, checkout) => {
    const formatedChecking = moment(checkin, "DD/MM/YYYY").format('DDMMYYYY');
    const formatedCheckout = moment(checkout, "DD/MM/YYYY").format('DDMMYYYY');
    return `https://myreservations.omnibees.com/default.aspx?q=5462&version=MyReservation&sid=5e38835a-61ae-436e-b57b-936c2317a87a#/&diff=false&CheckIn=${formatedChecking}&CheckOut=${formatedCheckout}&Code=&group_code=&loyality_card=&NRooms=1&ad=1&ch=0&ag=-` 
}
module.exports = urlParcer
