const responses = require('../../MockData/bot-responses')

let name

const comunicate = (msg, callback) => {
  let response = responses.wildcard
  if (msg.search(/Please search flights/) !== -1) {
    response = responses.enterDate
  }

  else if (msg.search(/search flights/) !== -1) {
    response = responses.enterDate
  }

  else if (msg.search(/020818/) !== -1) {
    response = responses.origin
  }

  else if (msg.search(/BOM/) !== -1) {
    response = responses.destination
  }

  else if (msg.search(/HYD/) !== -1) {
    response = responses.availableFlights
  }
  
  else if (msg.search(/Hi/) !== -1) {
    response = responses.hi
  }
  
  else if (msg.search(/I am good How are you?/) !== -1) {
    response = responses.howYou
  }

  callback(response)
}

module.exports = {
  comunicate
}