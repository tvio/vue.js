new Vue({
  el: "#exercise",
  data: {
    effectClasses: {
      highlight: false,
      shrink: true
    },
    float: "float",
    userClass: "",
    isVisible: true,
    myStyle: {
      width: "200px",
      float: "center",
      height: "100px",
      backgroundColor: "gray"
    },
    progressBar: {
      width: "0px",
      backgroundColor: "red"
    }
  },
  methods: {
    startEffect: function() {
      var vm = this;
      setInterval(function() {
        vm.effectClasses.highlight = !vm.effectClasses.highlight;
        vm.effectClasses.shrink = !vm.effectClasses.shrink;
      }, 3000);
    },
    gogo: function() {
      var vm = this;
      var width = 0;
      setInterval(function() {
        width < 101 ? (width = width + 10) : (width = 0);
        vm.progressBar.width = width + "px";
      }, 500);
    }
  }
});
