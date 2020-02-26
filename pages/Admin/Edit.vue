<template>
  <div class="container" >
      <div class="card">
            <h1 class="text-center alert alert-warning" >เพิ่มเมนูอาหาร</h1>
             
            <div class="input-group mb-3">
               <input type="text"  v-model="username" class="form-control" placeholder="Name" >                   
            </div>
            <div class="input-group mb-3">
                <input type="number" v-model="price" class="form-control" placeholder="Price" >
            </div>
            <div class="input-group mb-3">
                <input type="text" v-model="url" class="form-control" placeholder="Url" >
            </div>

           


          
        <b-link  @click=" Upload">Add Product</b-link >

        </div>
  </div>
</template>

<script>
import { db } from '@/plugins/firebaseRL.js'
//เชื่อมต่อ ไฟล์plugin

export default {
  data() {
    return {
      dialog: false,
      username: '',
      price: '',
      url: '',
      

    }
  },

  methods: {
    Upload() {
      //ทดสอบข้อมูล
      console.log(this.username)
      console.log(this.price)
      console.log(this.url)
      

    


      //ส่งข้อมูลไป-->firebase
      db.collection('Admin')
        .doc(this.username)
        .set({
          Name: this.username,
          PicUrl: this.url,
          Price: parseInt (this.price),

         
        })
        .then(function(docRef) {
          //console.log('Document written with ID: ', docRef.id)
        })
        .catch(function(error) {
          console.error('Error adding document: ', error)
        })
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