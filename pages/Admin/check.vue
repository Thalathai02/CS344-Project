<template>
  <div class="container">
    <div>
      <h1>Check</h1>
      <br />
      <b-button class="btn btn-primary" v-show="show" @click="get()">Search</b-button>
      <br>
      <b-table striped hover :items="DataList" :fields="fields"></b-table>
    </div>
  </div>
</template>

<script>
import { db } from '@/plugins/firebaseRL.js'  

export default {
  data() {
    return {     
      show: true,

      DataList:  [],

      // Note 'isActive' is left out and will not appear in the rendered table
      fields: [
        {
          key: 'Datetime',
          sortable: true
        },
        {
          key: 'Name',
          sortable: false
        },
        {
          key: 'SetRoom',
          label: 'Person',
          sortable: true,
          // Variant applies to the whole column, including the header and footer
        },{
          key: 'Phonenumber',
          sortable: false
        },
      ],
      
    }
  },
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
    }

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