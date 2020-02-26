<template>
  <div class="text-center">
    <header class="dialog-header">
      <h1 color="green" class="dialog-title">รายการอาหารของคุณ</h1>
    </header>
    <div>
      <h2 >จำนวนรายการอาหารที่สั่ง {{this.$store.state.product.counter}}</h2>

      <h3>ราคารวม {{this.$store.state.product.pri}}</h3>
            <!-- <h3>เวลา {{this.$store.state.product.Date}}</h3> -->
    </div>
<table class="table" >
  <thead>
    <tr>
      <th scope="col">ชื่ออาหาร</th>
      <th scope="col">ลบ</th>
    </tr>
  </thead>
  <tbody v-for="rder in Order " :key="rder.index " >
    <tr>
      <td>{{rder}}</td>
      <td><button text @click="removeproduct(Order,Price)" class="btn btn-danger">ลบ</button></td>
    </tr>
  </tbody>
</table>
      <b-link text @click=" Upload" class="btn btn-success" :to="{path:'/PayMent'}">ยืนยัน</b-link>
</div>
</template>
<script>
import { db } from '@/plugins/firebaseRL.js'

export default {
  data() {
    return {
      name: this.$store.state.product.name,
      Date: this.$store.state.product.Date,

      Order: this.$store.state.product.order,
      //PriceOrder: this.$store.state.product.PriceOrder,
      Price: this.$store.state.product.pri,

    };
  },
  methods: {
    Upload() {
      //ทดสอบข้อมูล
      console.log(this.name)
      console.log(this.Date)

      console.log(this.Order)

      console.log(this.Price)

      //ส่งข้อมูลไป-->firebase
      db.collection('Order')
        .doc(this.name)
        .set({
        // Email: this.Email,
        Order: this.Order,
        Name: this.name,
        Date: this.Date

  
        })
        .then(function(docRef) {
          //console.log('Document written with ID: ', docRef.id)
        })
        .catch(function(error) {
          console.error('Error adding document: ', error)
        })
    },
    pushproduct(show) {
      this.show.push(Order);
    },
    removeproduct(Order,Price) {
      
      this.$store.commit("product/Decret",Price);
      this.$store.commit("product/decrement");
      this.$store.commit("product/removefood", Order);
    },
    // up(todos) {
    //   this.$store.commit('product/Updatefood', todos),
    //    this.$store.commit('product/increment')
    // },
  }
};
</script>