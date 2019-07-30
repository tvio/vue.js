new Vue({
  el: "#app",
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameIsRunning: false,
    turns: []
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
      var damage = this.dmg(4, 10);
      this.playerHealth -= damage;
      this.turns.unshift({
        isPlayer: true,
        text: "Monster hits player for " + damage
      });
      damage = this.dmg(2, 10);
      this.monsterHealth -= damage;
      this.turns.unshift({
        isPlayer: false,
        text: "Player hits monster for " + damage
      });
      this.checkDeath();
    },
    specialAttack: function() {
      var damage = this.dmg(4, 10);
      this.playerHealth -= damage;
      this.turns.unshift({
        isPlayer: true,
        text: "Monster  hits player for " + damage
      });
      damage = this.dmg(2, 10) * 2;
      this.monsterHealth -= damage;
      this.turns.unshift({
        isPlayer: false,
        text: "Player special attack hits monster for " + damage
      });
      this.checkDeath();
    },
    heal: function() {
      var damage = this.dmg(5, 10);
      if (this.playerHealth <= 90) {
        this.playerHealth += 10;
        this.turns.unshift({
          isPlayer: true,
          text: "Heal for 10"
        });
      }
      this.playerHealth -= damage;
      this.turns.unshift({
        isPlayer: false,
        text: "Monster  hits player for " + damage
      });
    }
  }
});
