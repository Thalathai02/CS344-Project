export const state = () => ({
  order: [],
  //PriceOrder:0,
  name: '',
  Date: '',
  email: '',
  phonenumber: '',
  person: 0,
  zone: '',
  counter: 0,
  pri: 0,

})
export const mutations = {
  decrement(state) {                 //state คือ data    
    state.counter = state.counter - 1

  },
  increment(state, Price) {                 //state คือ data    
    state.counter++
    state.pri = state.pri + Price

  },
  Decret(state, PriceOrder) {                 //state คือ data  
    state.pri = state.pri - PriceOrder

  },
  Updatefood(state, food) {
    state.order.push(food)
  },
  UpdatePrice(state, Price) {
    state.PriceOrder = Price
  },
  name(state, food) {
    state.name = food
  },
  email(state, email) {
    state.email = email
  },
  zone(state, food) {
    state.zone = food
  },
  date(state, food) {
    state.Date = food
  },
  removefood(state, food) {
    state.order.splice(food, 1);
  }


}
