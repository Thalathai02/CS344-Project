<template>
  <div class="container" >
      <div>
           <h2 class="display-3 title">Administrator</h2>
         <b-link type="button" class="btn btn-primary" :to="{path:'/Admin/check'}">Check Name</b-link>
         <b-link  type="button" class="btn btn-primary" :to="{path:'/Admin/Edit'}">Edit</b-link >
      </div>
  </div>
</template>

<script>

</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>