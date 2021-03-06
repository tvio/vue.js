new Vue({
  el: "#app",
  data: {
    title: "Hello World!",
    link: "http://google.com",
    finishedLink: '<a href="http://google.com">Gooogle</a>',
    counter: 0,
    secondCounter: 0,
    x: 0,
    y: 0,
    name: "",
    attachRed: false,
    attachBlue: false,
    color: "green",
    width: 100,
    show: true,
    ingredients: ["maso", "ovoce", "susenky"],
    persons: [
      { jmeno: "Tom", vek: 99, barva: "red" },
      { jmeno: "Kvik", vek: 88, barva: "blue" }
    ]
  },
  computed: {
    output: function() {
      console.log("computed");
      return this.counter > 5 ? "Greater 5" : "Smaller then 5";
    },
    divClasses: function() {
      return { red: this.attachRed };
    },
    myStyle: function() {
      return {
        backgroundColor: this.color,
        width: this.width + "px"
      };
    }
  },
  watch: {
    counter: function(value) {
      var vm = this;
      setTimeout(function() {
        vm.counter = 0;
      }, 2000);
    }
  },
  methods: {
    sayHello: function() {
      this.title = "Hello";
      return this.title;
    },
    increase: function(step, event) {
      this.counter += step;
    },
    updateCoordinates: function(event) {
      this.x = event.clientX;
      this.y = event.clientY;
    },
    // // dummy: function(event){
    // //     event.stopPropagation();
    // // }
    alertMe: function() {
      alert("Alert");
    },
    result() {
      console.log("Method");
      return this.counter > 5 ? "Greater 5" : "Smaller then 5";
    }
  }
});
