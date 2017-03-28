new Vue({
    el: '#app',
    data: {
        gameisRunning: false,
        humanHealth: 100,
        monsterHealth: 100,
        turns: []
    },
    methods: {
        startGame: function() {
            this.gameisRunning = true;
            this.humanHealth = 100;
            this.monsterHealth = 100;
            this.turns = []
        },
        attack: function() {
            var damage = this.calculateDamage(3, 10);
            this.monsterHealth -= damage
            this.turns.unshift({
              isPlayer: true,
              text: 'Player hits the monster for ' + damage
            })
            if (this.checkWin()) {
                return
            }
            this.monsterAttack()
        },
        specialAttack: function() {
            var damage = this.calculateDamage(10, 20);
            this.monsterHealth -= damage
            this.turns.unshift({
              isPlayer: true,
              text: 'Player hits the monster hard for ' + damage
            })
            if (this.checkWin()) {
                return
            }
            this.monsterAttack()
        },
        monsterAttack: function() {
            var damage = this.calculateDamage(5, 11)
            this.humanHealth -= damage
            this.checkWin()
            this.turns.unshift({
              isPlayer: false,
              text: 'Monster hits the you for ' + damage
            })
        },
        heal: function() {
            if (this.humanHealth <= 90) {
                this.humanHealth += 10;
            } else {
                this.humanHealth = 100;
            }
            this.turns.unshift({
              isPlayer: false,
              text: 'You heal for 10'
            })
            this.monsterAttack()
        },
        giveUp: function() {
          this.gameisRunning = false;
        },
        calculateDamage: function(min, max) {
            return Math.max(Math.floor(Math.random() * 10) + 1, min)
        },
        checkWin: function() {
            if (this.monsterHealth <= 0) {
                if (confirm('You won! New game?')) {
                    this.startGame();
                } else {
                    this.gameisRunning = false;
                }
                return true;
            } else if (this.humanHealth < 0) {
                if (confirm('You lost! New Game')) {
                    this.startGame();
                } else {
                    this.gameisRunning = false;
                }
                return true
            }
            return false
        }
    },
})
