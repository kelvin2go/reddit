import * as api from '../api'
import * as types from './mutation-types'

export const getAllMessages = ({ commit }) => {
  api.getAllMessages(messages => {
    commit(types.RECEIVE_ALL, {
      messages
    })
  })
}

export const sendMessage = ({ commit }, payload) => {
  api.createMessage(payload, message => {
    commit(types.RECEIVE_MESSAGE, {
      message
    })
  })
}

export const upVote = ({ commit }, payload) => {
  api.upVote(payload, message => {
    commit(types.RECEIVE_UPVOTE, {
      message
    })
  })
}

export const downVote = ({ commit }, payload) => {
  api.downVote(payload, message => {
    commit(types.RECEIVE_DOWNVOTE, {
      message
    })
  })
}
