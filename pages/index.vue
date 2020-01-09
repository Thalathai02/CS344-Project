<template>
  <div class="container">
    <div>
     
        <logo />
        <h1  class="display-3 title">ครัวตะวันออก</h1>
        <h2 class="subtitle">Test System</h2>
        <div class="links">
          <b-link :to="{path:'/Reservations'}" class="button--green">การจองโต๊ะ</b-link>
          <b-link to="#" target="_blank" class="button--grey">รายการอาหาร</b-link>
       
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import navbar from '~/components/Navbar.vue'
export default {
  components: {
    Logo,
    navbar
  }
}
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
