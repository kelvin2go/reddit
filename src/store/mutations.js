import Vue from 'vue'
import * as types from './mutation-types'
// for testing
if (navigator.userAgent.indexOf('PhantomJS') > -1) {
  window.localStorage.clear()
}

export default {
  [types.RECEIVE_ALL] (state, { messages }) {
    messages.forEach(message => {
      addMessage(state, message)
    })
    console.log(state)
  },
  [types.RECEIVE_MESSAGE] (state, { msg }) {
    const message = {
      msg,
      upCount: 0,
      downCount: 0
    }
    addMessage(state, message)
  },

  [types.RECEIVE_UPVOTE] (state, { msg }) {
    msg.messagesupCount = msg.upCount++
  },

  [types.RECEIVE_DOWNVOTE] (state, { msg }) {
    msg.upCount = msg.upCount--
  }
}

function addMessage (state, msg) {
  Vue.set(state.messages, msg.id, msg)
}
