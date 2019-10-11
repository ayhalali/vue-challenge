const add = (x) => { return x.length }

const adder = new Vue({
  el: '#adder',
  data: {
    guest: 'Ali'
  },
  computed: {
    result: function () {
      const i = this.guest
      return `${this.guest}, the length is ${add(i)}.`
    }
  }
})