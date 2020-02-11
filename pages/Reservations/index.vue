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
            v-model="form.email"
            type="email"
            required
            placeholder="Enter email"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="ชื่อ-นามสกุล :" label-for="input-2">
          <b-form-input id="input-2" v-model="form.name" required placeholder="Enter name"></b-form-input>
        </b-form-group>

         <b-form-group id="input-group-4" label="เบอร์โทรติดต่อ : " label-for="input-2">
          <b-form-input id="input-2" v-model="form.phonenumber" required placeholder="Enter your phone number"></b-form-input>
        </b-form-group>


        <b-form-group id="input-group-3" label="โซนที่ท่านต้องการนั่ง:" label-for="input-3">
          <b-form-select id="input-3" v-model="form.food" :options="zone" required></b-form-select>
        </b-form-group>

        <div>
          <label for="range-1">จำนวนลูกค้าที่มา {{ form.person }} คน</label>
          <b-form-input id="range-1" v-model="form.person" type="range" min="1" max="12"></b-form-input>
        </div>
          
        <div>
          <label >วันที่และเวลาที่ลูกค้าจะมา</label>
          <datetime type="datetime" v-model="form.datetime"></datetime><br>
        </div>

        <b-button type="submit" variant="primary" :to="{path:'/OrderRED'}">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
      </b-form>
      <!-- <b-card class="mt-3" header="Form Data Result">
        <pre class="m-0">{{ form }}</pre>
      </b-card> -->
    </div>
  </b-card>
</template>

<script>
import { Datetime } from 'vue-datetime'
import 'vue-datetime/dist/vue-datetime.css'
export default {
  data() {
    return {
      form: {
        email: '',
        name: '',
        food: null,
        checked: [],
        person: 1,
        datetime: '',
        phonenumber:""
      },
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
      alert(JSON.stringify(this.form))
    },
    onReset(evt) {
      evt.preventDefault()
      // Reset our form values
      this.form.email = ''
      this.form.name = ''
      this.form.food = null
      this.form.checked = []
      this.form.person = 1
      this.form.datetime=null
      this.form.phonenumber=0
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
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
