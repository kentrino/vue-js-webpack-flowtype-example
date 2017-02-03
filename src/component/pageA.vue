<style>
  .yellow {
    color: #f0f;
  }
</style>

<template>
  <div>
  <h1 class="yellow">Page A</h1>
  <p>
    This page is A!!!
  </p>
  <p>
    msg = {{msg}}
  </p>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        msg: 'Yes!!!! Page A!'
      }
    }
  }
</script>
