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
  },
  [types.RECEIVE_MESSAGE] (state, { message }) {
    const msg = {
      ...message,
      id: state.messages.length,
      upCount: 0,
      downCount: 0
    }
    addMessage(state, msg)
  },

  [types.RECEIVE_UPVOTE] (state, { message }) {
    state.messages[message.id].upCount++
  },

  [types.RECEIVE_DOWNVOTE] (state, { message }) {
    state.messages[message.id].downCount++
  }
}

function addMessage (state, msg) {
  Vue.set(state.messages, msg.id, msg)
}
