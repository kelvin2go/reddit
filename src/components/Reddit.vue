<template>
  <div class="hello">
    <md-whiteframe md-elevation="2" class="msg-container">
      <md-layout md-gutter>
        <md-layout md-flex="80">
          <md-input-container md-clearable>
            <md-icon>speaker_notes</md-icon><label>Start Message</label>
            <md-textarea maxlength="255"  v-model="msg"></md-textarea>
          </md-input-container>
        </md-layout>
        <md-layout md-align="end">
          <md-button :disabled="msg==''" class="md-raised md-primary" @click="sendMessage">Send</md-button>
        </md-layout>
      </md-layout>
    </md-whiteframe>

    <md-list class="custom-list md-triple-line">
      <message-section></message-section>
    </md-list>
  </div>
</template>

<script>
import MessageSection from './MessageSection.vue'
export default {
  name: 'reddit',
  components: {
    MessageSection
  },
  data () {
    return {
      msg: ''
    }
  },
  methods: {
    sendMessage (e) {
      const text = this.msg
      console.log(text)
      if (text.trim()) {
        this.$store.dispatch('sendMessage', {
          text
        })
        e.target.value = ''
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .msg-container{
    padding: 10px;
  }

</style>
