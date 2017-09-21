<template>
  <md-list class="md-double-line">
    <message
      v-for="message in sortedMessages"
      :key="message.id"
      :message="message">
    </message>
  </md-list>
</template>

<script>
import Message from './Message.vue'
export default {
  name: 'MessageSection',
  components: { Message },
  computed: {
    messages () {
      return this.$store.state.messages
    },
    sortedMessages () {
      return this.messages
       .slice()
       .sort((a, b) => b.upCount - a.upCount)
    }
  }

}

</script>
