<template>
  <div id="app" class="app-viewport">
    <md-toolbar>
      <h2 class="md-title" style="flex: 1">Reddit</h2>
    </md-toolbar>
    <div class="main-content">
      <router-view></router-view>
    </div>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>

html,
body,
.app-viewport {
  height: 100%;
  overflow: hidden;
}
.app-viewport {
  display: flex;
  flex-flow: column;
}
.main-toolbar {
  position: relative;
  z-index: 10;
}

.main-content {
  position: relative;
  z-index: 1;
  overflow: auto;
  padding: 20px;
}

</style>
