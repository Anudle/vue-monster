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
            var max = 10;
            var min = 3;
            var damage = Math.max(Math.floor(Math.random() * 10) + 1, min)
            this.monsterHealth -= damage;

            if(this.monsterHealth <= 0){
              alert('You won!');
              this.gameisRunning = false;
            }
            max = 11
            min = 4
            var damage = Math.max(Math.floor(Math.random() * 10) + 1, min)
            this.humanHealth -= damage
            if(this.humanHealth <= 0){
              alert('You lost!');
              this.gameisRunning = false;
            }
        },
        specialAttack: function() {
            var vm = this;
            var humanSpecialAttack = Math.floor(Math.random() * 20) + 1;
            var monsterSpecialAttack = Math.floor(Math.random() * 20) + 1
            console.log('humman specialAttack ' + humanSpecialAttack);
            console.log('monster specialAttack ' + monsterSpecialAttack);
            vm.humanHealth = vm.humanHealth - humanSpecialAttack;
            vm.monsterHealth = vm.monsterHealth - monsterSpecialAttack
        },
        heal: function(){

        },
        giveUp: function(){

        }
    },
    computed: {

    }


})
