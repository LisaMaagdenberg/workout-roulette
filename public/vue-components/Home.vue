<template>
  <div class="flex-parent">
    <div id="app">
      <h1>Wat is je workout?</h1>
      <div>
        <h2>Level 1</h2>
        <p>{{level1}}</p>
        <button v-on:click="change1()">Klik!</button>
      </div>
      <div>
        <h2>Level 2</h2>
        <p>{{level2}}</p>
        <button v-on:click="change2()">Klik!</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      level1: 'Klik om te beginnen',
      level2: "Klik om te beginnen"
    }
  },
  methods: {
    change1: function(){
      const workouts = ["20 jumping jacks", "10 squats", "5 push-ups", "10 crunches", "30 sec plank", "15 lunges", "30 sec wall sit"];
      const random = Math.floor(Math.random() * workouts.length);
      const result = workouts[random];
      this.level1 = result;
    },
    change2: function(){
      const workouts = ["40 jumping jacks", "20 squats", "10 push-ups", "20 crunches", "45 sec plank", "25 lunges", "45 sec wall sit"];
      const random = Math.floor(Math.random() * workouts.length);
      const result = workouts[random];
      this.level2 = result;
    }
  }
}
</script>
