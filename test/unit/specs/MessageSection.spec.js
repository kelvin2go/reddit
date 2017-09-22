import Vue from 'vue'
import MessageSection from '@/components/MessageSection'

describe('MessageSection.vue', () => {
  // inspect monunted will have send message box
  it('should render correct contents', () => {
    const Constructor = Vue.extend(MessageSection)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.md-double-line')).to.be.present.before(1000)
  })
})
