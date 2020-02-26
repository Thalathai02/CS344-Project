<template>
  <div class="text-center" >
    <header class="dialog-header">
      <h1 color="green" class="dialog-title">รายชื่อลูกค้า</h1>
    </header>

<div class="container">
  <b-card-text>
      <b-link  class="btn btn-primary" @click="get" role="button">ดูข้อมูลทั้งหมด</b-link >
      <b-table striped hover :items="DataList" :fields="fields"></b-table>
    </b-card-text>
</div>
</div>
  
</template>

<script>
import { db } from '@/plugins/firebaseRL.js'  

export default {
  data:()=>({
      DataList:  [],
      show: true,
fields: [
        {
          key: 'Email',
          sortable: true
        },
        {
          key: 'Name',
          sortable: false
        },
        {
          key: 'SetRoom',
          label: 'Zone',
          sortable: true,
          // Variant applies to the whole column, including the header and footer
        },{
          key: 'Phonenumber',
          sortable: false
        },
      ],
    
    
  }),
  methods: {
       get() {
      db.collection('User')
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
    up(todos) {
      this.$store.commit('product/Updatefood', todos),
       this.$store.commit('product/increment')
    },
  }

  
}
</script>