new Vue({
  el: '#exercise',
  data: {
  bool: false
  },
  methods: {
    startEffect: function() {
      
        setInterval(function(){
          if (bool) {console.log('true');this.bool=false; return 'highlight'}
          
          else {console.log('false');this.bool=true; return 'shrink'}
         }, 3000)
      }
    }
  }
);
