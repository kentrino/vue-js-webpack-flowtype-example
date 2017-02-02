<style>
  .blue {
    color: #00f;
  }
</style>

<template>
  <div>
  <h1 class="blue">Page B</h1>
  <p>
    This page is B.
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
        msg: 'Yes. Page B.'
      }
    }
  }
</script>
