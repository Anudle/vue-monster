new Vue({
    el: '#app',
    data: {
        gameisRunning: false,
        humanHealth: 100,
        monsterHealth: 100,


    },
    methods: {
        startGame: function() {
            this.gameisRunning = true;
            this.humanHealth = 100;
            this.monsterHealth = 100;
        },
        attack: function() {
            this.monsterHealth -= this.calculateDamage(3, 10);
            if (this.checkWin()) {
                return
            }
            this.monsterAttack()
        },
        specialAttack: function() {
            this.monsterHealth -= this.calculateDamage(10, 20);
            if (this.checkWin()) {
                return
            }
            this.monsterAttack()
        },
        monsterAttack: function() {
            this.humanHealth -= this.calculateDamage(5, 11)
            this.checkWin()
        },
        heal: function() {
            if (this.humanHealth <= 90) {
                this.humanHealth += 10;
            } else {
                this.humanHealth = 100;
            }
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
