<template>
  <div class="hello">
    <md-list class="custom-list md-triple-line">

      <md-whiteframe md-elevation="2" class="msg-container">
        <md-input-container md-clearable>
          <label>Message box</label>
          <md-textarea maxlength="255" @keyup.enter="sendMessage" v-model="msg"></md-textarea>
        </md-input-container>
      </md-whiteframe>

      <md-list-item>
        <md-avatar>
          <img src="https://placeimg.com/40/40/people/1" alt="People">
        </md-avatar>
        <div class="md-list-text-container">
          <span>Ali Connors</span>
          <span>Brunch this weekend?</span>
          <p>I'll be in your neighborhood doing errands...</p>
        </div>
      </md-list-item>
    </md-list>
  </div>
</template>

<script>
export default {
  name: 'reddit',
  data () {
    return {
      msg: ''
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
