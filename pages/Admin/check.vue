<template>
  <div class="container">
    <div>
      <h1>Check</h1>
      <br />
      <b-button class="btn btn-primary">Search</b-button>
      <br>
      <b-table striped hover :items="items" :fields="fields"></b-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Note 'isActive' is left out and will not appear in the rendered table
      fields: [
        {
          key: 'Date Time',
          sortable: true
        },
        {
          key: 'Name',
          sortable: false
        },
        {
          key: 'Zone',
          label: 'Person',
          sortable: true,
          // Variant applies to the whole column, including the header and footer
        },{
          key: 'Phone',
          sortable: false
        },
      ],
      items: [
        {
          isActive: true,
          age: 40,
          first_name: 'Dickerson',
          last_name: 'Macdonald'
        },
        { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
        { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson' },
        { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney' }
      ]
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