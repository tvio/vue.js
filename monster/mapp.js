new Vue({
  el: "#app",
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameIsRunning: false
  },
  methods: {
    reset: function() {
      (this.playerHealth = 100),
        (this.monsterHealth = 100),
        (this.gameIsRunning = false);
    },
    attack: function() {
      this.playerHealth = this.playerHealth - Math.floor(Math.random() * 10);
      this.monsterHealth = this.monsterHealth - Math.floor(Math.random() * 10);
    },
    specialAttack: {}
  }
});
