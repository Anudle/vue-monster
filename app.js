new Vue({
  el: '#app',
  data: {
    options: false,
    humanHealth: {
      width: '100',
      backgroundColor: 'green',
      margin: '0',
      color: 'white',
    },
    monsterHealth: {
      width: '100',
      backgroundColor: 'green',
      margin: '0',
      color: 'white',
    }

  },
  methods: {
    attack: function(){
    var vm = this
    var humanAttack = Math.floor(Math.random() * 10) + 1
    var monsterAttack = Math.floor(Math.random() * 10) + 1
    console.log('human attack is ' + humanAttack)
    console.log('monster attack is ' + monsterAttack)
    var updateHumanHealth = vm.humanHealth.width - humanAttack;
    vm.humanHealth.width = updateHumanHealth + '%';
    }
  }
})
