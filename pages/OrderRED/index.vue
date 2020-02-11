<template>
  <div class="container">
    <b-card title="รายการอาหาร">
      <div v-for="item in Mu" :key="item">
        <b-img  :src= item.pic fluid alt="Left image" rounded ></b-img>
        <h1>{{item.name}} <button type="button" class="btn btn-primary" value=item.price >เพิ่มลงในตะกร้า</button></h1>
        </div>
        <b-button type="submit" variant="primary" href='http://localhost:8080/'>ชำระเงิน</b-button>
    </b-card>
  </div>
</template>
<script>
import axios from 'axios'
import Mu from '@/store/Testsystem.json'
export default {
  data:()=>({
      Mu:Mu,
    
  })
 
  
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
