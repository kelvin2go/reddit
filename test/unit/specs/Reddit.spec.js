import Vue from 'vue'
import Reddit from '@/components/Reddit'

function getRenderedText (Component, propsData) {
  const Ctor = Vue.extend(Component)
  const vm = new Ctor({ propsData: propsData }).$mount()
  return vm.$el.querySelector('.msg-container textarea').textContent
}

describe('Reddit.vue', () => {
  // inspect monunted will have send message box
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Reddit)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.msg-container label').textContent)
      .to.equal('Start Message')
  })
  // inspect the default message box data
  it('should set default empty message', () => {
    expect(typeof Reddit.data).toBe('function')
    const defaultData = Reddit.data()
    expect(defaultData.message).toBe('')
  })
  // test if input different message correctly
  it('renders correctly with different props', () => {
    expect(getRenderedText(Reddit, {
      msg: 'Hello'
    })).toBe('Hello')
    expect(getRenderedText(Reddit, {
      msg: 'Bye'
    })).toBe('Bye')
  })
})
