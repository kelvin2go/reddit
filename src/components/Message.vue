<template>
  <md-list-item>
    <div class="md-list-text-container">
      <span>{{message.timestamp}}</span>
      <span>upcount {{message.upCount}}</span>
      <span>downcount {{message.downCount}}</span>
      <p>{{message.text}}.</p>
    </div>
   </md-list-item>
</template>

<script>
export default {
  name: 'Message',
  props: {
    message: Object
  }
}
</script>
