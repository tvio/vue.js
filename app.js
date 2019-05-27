new Vue({
    el:'#app',
    data:{
        title:'Hello World!',
        link: 'http://google.com',
        finishedLink:'<a href="http://google.com">Gooogle</a>',
        counter:0,
        x:0,
        y:0
    },
    methods:{
        sayHello: function(){
            this.title='Hello';
            return this.title;
        },        
        increase: function(){
            this.counter++;
        },
        updateCoordinates: function(event){
            this.x = event.clientX;
            this.y= event.clientY;
        }
    }
});