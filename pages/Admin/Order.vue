<template>
  <div class="text-center">
    <header class="dialog-header">
      <h1 color="green" class="dialog-title">รายการอาหาร</h1>
    </header>
<div class="container">
<b-card-text>
      <b-link  class="btn btn-primary" @click="get" role="button">ดูข้อมูลทั้งหมด</b-link >
      <b-table striped hover :items="DataList" :fields="fields"></b-table>
    </b-card-text>


</div>
  </div>
</template>


<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>

<script>
import { db } from '@/plugins/firebaseRL.js'

export default {
  data: () => ({
    DataList: [],
    fields: [
      {
        key: 'Date',
        sortable: true
      },
      {
        key: 'Name',
        sortable: false
      },
      {
        key: 'Order',
        label: 'รายการอาหาร',
        sortable: true
        // Variant applies to the whole column, including the header and footer
      }
    ]
  }),
  methods: {
    get() {
      db.collection('Order')
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
    }
  }
}
</script>