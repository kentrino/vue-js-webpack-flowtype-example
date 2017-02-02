<style>
  .red {
    color: #f00;
  }
</style>

<template>
  <div>
    <router-link to="/pageA">Page A</router-link><br />
    <router-link to="/pageB">Page B</router-link><br />
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        msg: 'Hello world!'
      }
    }
  }
</script>
