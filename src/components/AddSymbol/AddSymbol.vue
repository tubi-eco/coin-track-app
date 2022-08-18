<template>
    <div>
      <ul>
        <li v-for="item in savedInfo" :key="item.id">
            <span><b>{{item.symbol}}</b> <br> {{item.lastPrice}} - {{item.weightedAvgPrice}}</span>
            <span class="button-container">
            <Counter/> <DeleteButton v-on:click.native="removeData(item)"/><UpdateButton/>
            </span>
        </li>
      </ul>
    </div>
</template>

<script>
import DeleteButton from '@/components/Buttons/Delete.vue'
import UpdateButton from '@/components/Buttons/Update.vue'
import Counter from '@/components/Counter/Counter.vue'
export default {
  name: 'AddSymbol',
  props:['itemList'],
  components:{DeleteButton,UpdateButton,Counter},
  data(){
    return{
      savedInfo:[],
      counter: 1
    }
  },

  mounted() {
   if (localStorage.getItem('savedInfo')) {
      this.savedInfo = JSON.parse(localStorage.getItem('savedInfo'));
    }
  },
  methods: {
    addNewData(item) {
      let counterValue = this.$store.state.counter;
      this.savedInfo.push({ ...item,  counterValue});
      item = '';
      counterValue = '';
      this.saveData();
    },
    removeData(item) {
      this.savedInfo.splice(item, 1);
      this.saveData();
    },
    saveData() {
      const parsed = JSON.stringify(this.savedInfo);
      localStorage.setItem('savedInfo', parsed);
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
 
}
li {
    margin: 15px 0;
    display: flex;
    width: 100%;
    border: 1px solid #eaeaea;
    border-radius: 4px;
    padding: 5px 7px;
    font-size: 12px;
    align-items: center;
    justify-content: space-between;
      @media only screen and (max-width: 990px) {
        display: inline-block;
      }
    .button-container{
      float: right;
        @media only screen and (max-width: 990px) {
          float: none;
          width: 100%;
          display: block;
          margin-top:10px;
        }
      button{
        margin-left: 10px;
      }
    }
}
a {
  color: #42b983;
}
</style>
