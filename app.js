const app = Vue.createApp({
  data() {
    return {
      totalValue: 0,
      finalOutput: "",
    };
  },
  computed: {
    result() {
      if (this.totalValue < 37) {
        return "Not there yet";
      } else if (this.totalValue === 37) {
        return this.totalValue;
      } else return "Too much!";
    },
  },
  watch: {
    result() {
      const temp = this;
      setTimeout(() => {
        temp.totalValue = 0;
      }, 5000);
    },
  },
  methods: {
    addNum(number) {
      this.totalValue += number;
      console.log(this.totalValue)
    },
  },
}).mount("#assignment");
