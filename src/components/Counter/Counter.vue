<template>
    <div class="counter">
       <span>{{ this.$store.state.counter }}</span>
       <span>
        <button @click="increment"><b-icon icon="caret-up-fill"></b-icon></button>
        <button @click="decrement"> <b-icon icon="caret-down-fill"></b-icon></button>
       </span>
    </div>
</template>

<script>
export default {
  name:'Counter',
  data(){
    return {
        counter: 1
    }
  },
  methods:{
    increment(){
       this.$store.commit('increment');
    },
    decrement(){
        this.$store.commit('decrement');
    },
  }
}
</script>

<style lang="scss">
.counter{
    border: 1px solid #ccc;
    border-radius: 4px;
    display: inline-flex;
    width: 45px;
    height: 30px;
    align-items: center;
    justify-content: space-between;
    padding: 0 5px;
    button{
        width: 15px;
        height: 12px;
        position: relative;
        display: block;
        border: 0;
        background: transparent;
        .b-icon.bi{
            display: inline-block;
            vertical-align: 0;
            width: 15px;
            top: 0;
            left: 0;
            position: absolute;
        }
    }
}
</style>