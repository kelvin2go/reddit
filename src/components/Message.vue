<template>
  <md-list-item md-gutter>
    <div class="msg-container" md-flex="70">
      <p> {{message.text}}</p>
    </div>
    <div class="chip-container" md-align="end">
      <md-chip class="md-warn" ><span  @click="up(message)"><md-icon>thumb_up</md-icon> {{message.upCount}}</span> </md-chip>
      <md-chip><span @click="down(message)"><md-icon>thumb_down</md-icon> {{message.downCount}}</span></md-chip>
    </div>
    <md-divider class="md-inset"></md-divider>
 </md-list-item>

</template>

<script>
export default {
  name: 'Message',
  props: {
    message: Object
  },
  methods: {
    up (message) {
      this.$store.dispatch('upVote', {
        message
      })
    },
    down (message) {
      this.$store.dispatch('downVote', {
        message
      })
    }
  }
}
</script>

<style scoped>
  .md-chip{
    padding: 5px;
    margin-bottom: 5px;
    min-width: 55px;
  }
  .chip-container{
    margin: 5px;
    max-width: 55px;
  }
  .md-divider.md-inset {
    margin-left: 12px;
  }

</style>
