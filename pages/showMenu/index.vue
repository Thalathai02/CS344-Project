<template>
<div>


<div class="text-center">

    <!-- <div id="carouselExampleInterval" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-interval="10000">
        <img src="https://i.imgur.com/zxbgfn7.jpg" class="d-block w-100 h-50" alt="...">
    </div>
    <div class="carousel-item" data-interval="2000">
      <img src="https://aboutmom.co/wp-content/uploads/2017/10/3-3.jpg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="https://ed.files-media.com/ud/review/1/153/456593/At-Ta-Rote_9.jpg" class="d-block w-100" alt="...">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div> -->

   
    <div>
      <button  class="btn btn-success" v-show="show" @click="get()">รายการอาหาร</button>

    </div>

  </div>

<div class="container">
    <div class="row">
      <div v-for="(name,index) in DataList" :key="index" class="col-md-3 col-6 my-1">
        <div class="card=auto">
          <img :src="name.PicUrl" class="card-img-top" />
          <div class="card-body">
            <div class="card-title">
              <h3>{{ name.Name }}</h3>
            </div>
            <div>
              <h5                   class="btn btn-success"
>
            ราคา {{name.Price}} ฿
               
              </h5>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  

</template>

<script>

import { db } from '@/plugins/firebaseRL.js'  

import axios from 'axios'
import Mu from '@/store/Testsystem.json'

export default {
  data:()=>({
      DataList:  [],
      show: true,
    //   fields: [  
    //   { text: 'Name', value: 'username' },
    //   { text: 'Price', value: 'price' },
    //   { text: 'PicUrl', value: 'url' },
    //  ],

      Mu:Mu,
    
  }),
  methods: {
       get() {
      db.collection('Admin')
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            // doc.data() is never undefined for query doc snapshots
            //  console.log(doc.id, " => ", doc.data());
            this.DataList.push(doc.data())
            console.log(this.DataList)
            this.show = false
          })
        })
    },
    up(todos,Price) {
      this.$store.commit('product/Updatefood', todos),
      this.$store.commit('product/UpdatePrice', Price),

       this.$store.commit('product/increment',Price)
      
    },
    
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
