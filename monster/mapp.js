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

    dmg: function(min, max) {
      return Math.max(Math.floor(Math.random() * max) + 1, min);
    },
    checkDeath: function() {
      if (this.monsterHealth <= 0) {
        //confirm kontroluje potvrzeni + prida alert
        if (confirm("Vyhrál jsi")) {
          this.reset();
        } else this.gameIsRunning = false;
      } else if (this.playerHealth <= 0) {
        alert("Prohrál jsi");
        this.reset();
      }
    },

    attack: function() {
      var damage = this.dmg();
      this.playerHealth -= this.dmg(4, 10);
      this.monsterHealth -= this.dmg(2, 10);
      this.checkDeath();
    },
    specialAttack: function() {
      this.playerHealth -= this.dmg(4, 10);
      this.monsterHealth -= this.dmg(2, 10) * 2;
      this.checkDeath();
    },
    heal: function() {
      if (this.playerHealth <= 90) {
        this.playerHealth -= this.dmg(5, 10);
        this.playerHealth += 10;
      } else {
        this.playerHealth -= this.dmg(5, 10);
      }
    }
  }
});
