const data = require('./mock-data')
const LATENCY = 100

export function getAllMessages (cb) {
  setTimeout(() => {
    cb(data)
  }, LATENCY)
}

export function createMessage ({ text }, cb) {
  const timestamp = Date.now()
  const message = {
    text,
    timestamp
  }
  setTimeout(function () {
    cb(message)
  }, LATENCY)
}

export function upVote ({ message }, cb) {
  setTimeout(function () {
    cb(message)
  }, LATENCY)
}

export function downVote ({ message }, cb) {
  setTimeout(function () {
    cb(message)
  }, LATENCY)
}
