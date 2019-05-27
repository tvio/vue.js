new Vue({
    el:'#exercise',
    data:{
        jmeno: 'tom',
        vek: 99,
        imgsrc: "https://img.csfd.cz/files/images/film/posters/000/033/33877_f802d5.jpg",
       
        
    },
    methods:{
        rnd: function(){
           return Math.random();
        }

    }
});