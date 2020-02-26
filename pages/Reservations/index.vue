<template>
  <b-card title="การจองโต๊ะ" sub-title="กรองรายละเอีอด" class="container" >
    <div>
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group
          id="input-group-1"
          label="Email address:"
          label-for="input-1"
          description="We'll never share your email with anyone else."
        >
          <b-form-input
            id="input-1"
            v-model="email"
            type="email"
            required
            placeholder="Enter email"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="ชื่อ-นามสกุล :" label-for="input-2">
          <b-form-input id="input-2" v-model="name" required placeholder="Enter name"></b-form-input>
        </b-form-group>

         <b-form-group id="input-group-4" label="เบอร์โทรติดต่อ : " label-for="input-2">
          <b-form-input id="input-2" 
           onKeyPress="if(this.value.length==10) return false; return event.keyCode !== 69 && event.keyCode !== 101 && event.keyCode !== 45  ; "
          v-model="phonenumber" required placeholder="Enter your phone number"></b-form-input>
        </b-form-group>


        <b-form-group id="input-group-3" label="โซนที่ท่านต้องการนั่ง:" label-for="input-3">
          <b-form-select id="input-3" v-model="food" :options="zone" required></b-form-select>
        </b-form-group>

        <div>
          <label for="range-1">จำนวนลูกค้าที่มา {{ person }} คน</label>
          <b-form-input id="range-1" v-model="person" type="range" min="1" max="12"></b-form-input>
        </div>
          
        <div>
          <label >วันที่และเวลาที่ลูกค้าจะมา</label>
          <datetime type="datetime" v-model="datetime"></datetime><br>
        </div>
        

        <b-button :disabled="checkSub" type="submit" variant="primary" :to="{path:'/OrderRED'} " @click=" Upload(),up(name),update(datetime),upEmail(email),foodZoon(food)" >Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
      </b-form>
      <!-- <b-card class="mt-3" header="Form Data Result">
        <pre class="m-0">{{ form }}</pre>
      </b-card> -->
    </div>
  </b-card>
</template>

<script>
import { db } from '@/plugins/firebaseRL.js'

import { Datetime } from 'vue-datetime'
import 'vue-datetime/dist/vue-datetime.css'
export default {
  computed: {
    checkSub() {
      // :disabled="checkSub"
      return (
        (this.name.length >= 5 ? false : true) ||
        (this.email.length >= 5 ? false : true)
      )
    }
  },
  data() {
    return {
      // email : '',
        
        email: '',
        name: '',
        food: null,
        checked: [],
        person: 1,
        datetime: '',
        phonenumber:""
      ,
      zone: [
        { text: 'Select One', value: null },
        'ในห้องแอร์',
        'นอกร้าน',
        'ห้องประชุม'
      ],
      show: true
    }
  },
  components: {
    datetime: Datetime
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.email))
    },
    
    onReset(evt) {
      evt.preventDefault()
      // Reset our form values
      this.email = ''
      this.name = ''
      this.food = null
      this.checked = []
      this.person = 1
      this.datetime=null
      this.phonenumber=0
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    },
    Upload() {
      //ทดสอบข้อมูล
      console.log(this.email)
      console.log(this.name)
      console.log(this.phonenumber)
      console.log(this.food)
      console.log(this.person)
      console.log(this.datetime)


      

      //ส่งข้อมูลไป-->firebase
      db.collection('User')
        .doc(this.email)
        .set({
          Email: this.email,
          Name: this.name,
          Phonenumber: this.phonenumber,
          SetRoom: this.food,
          Person: this.person,
          Datetime: this.datetime,
         
        })
        .then(function(docRef) {
          //console.log('Document written with ID: ', docRef.id)
        })
        .catch(function(error) {
          console.error('Error adding document: ', error)
        })
    },
     up(todos) {
      this.$store.commit('product/name', todos)
    },
    update(datetime) {
      this.$store.commit('product/date', datetime)
    },upEmail(email){
      this.$store.commit('product/email', email)
    },foodZoon(food){
      this.$store.commit('product/zone', food)
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
