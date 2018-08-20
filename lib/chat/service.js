const emitMessage = (msg, callback) => callback(msg)

const emitHistory = (messages, callback) => {
  messages.forEach(msg => emitMessage(msg, callback))
}


module.exports = { emitMessage, emitHistory }
