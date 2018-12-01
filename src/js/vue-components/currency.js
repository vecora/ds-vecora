
Vue.component("sg-currency", {
  props: ["amount"],
  computed: {
    formated: function () {
      return accounting.formatMoney(this.amount, {
        symbol: "kr",
        decimal : ",",
    		thousand: " ",
        format: "%v %s"
      });
    }
  },
  template: '{{ formated }}'
})
