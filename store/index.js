export const state = () => ({
    counter: 0,
    

  })
  
  export const mutations = {            //mutations คือ เมดตอด  เรียกใช้ ตรงๆไม่ได้
    increment (state) {                 //state คือ data    
      state.counter++
     
    },

  }