<template>
  <div class="container">
    <div class="card" style="width: 18rem;">
      <img class="card-img-top" src="https://th.qr-code-generator.com/wp-content/themes/qr/new_structure/markets/basic_market/generator/dist/generator/assets/images/websiteQRCode_noFrame.png" alt="Card image cap" />
      <div class="card-body">
        <h5 class="card-title">กรุณาชำระเงิน</h5>
        <p
          class="card-text"
        >#ระบบทดสอบ#</p>
        <b-link  class="btn btn-primary" @click=" Upload" >ข้าม</b-link >
      </div>
    </div>
  </div>
</template>
<script type="text/javascript" src="https://cdn.emailjs.com/sdk/2.3.2/email.min.js"></script>
<script type="text/javascript">
;(function() {
  emailjs.init('user_TEwsFhr419MlYf13TSnui')
})()
</script>
<script>
import emailjs from 'emailjs-com'
export default {
     methods: {
    Upload() {
        console.log(this.$store.state.product.name)
        var template_params = {
        name: this.$store.state.product.name,
        date: this.$store.state.product.Date,
        order: this.$store.state.product.order,
        Price: this.$store.state.product.pri,
        Email:this.$store.state.product.email,
        zone:this.$store.state.product.zone
        
      }


      emailjs.init('user_TEwsFhr419MlYf13TSnui')
      emailjs.send('gmail', 'template_mLJUyauX', template_params).then(
        response => {
          console.log('SUCCESS!', response.status, response.text)
        },
        error => {
          console.log('FAILED...', error)
        }
      )
    },
   
  }
    
}
</script>

<style>
</style>