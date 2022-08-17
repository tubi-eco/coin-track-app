<template>
    <div>
      <ul>
        <li v-for="(item, index) in filteredArticles" :key="index" :filter="filter" class="content" v-bind:id="index">
            <span><b>{{item.symbol}}</b> - {{item.lastPrice}}</span>
            <span class="button-container">
             <Counter />  <AddButton v-on:click.native="addNewData(item)"/> <DeleteButton v-on:click.native="removeData(item)"/><UpdateButton />
            </span>
        </li>
        <span v-if="filteredArticles==0">Symbol not found!</span>
      </ul>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import AddButton from '@/components/Buttons/Add.vue';
import DeleteButton from '@/components/Buttons/Delete.vue'
import UpdateButton from '@/components/Buttons/Update.vue'
import Counter from '@/components/Counter/Counter.vue'
export default {
  name: 'List',
  props:['filter','count'],
  data(){
    return{
      savedInfo:[],
    }
  },
  components:{AddButton, DeleteButton,UpdateButton,Counter},
  
  computed: {
    ...mapGetters(["info"]),
    filteredArticles() {
      if (this.filter) {
          return this.info.filter(item => {
            return item.symbol.toLowerCase().includes(this.filter.toLowerCase());
          })
      }
    },
  },
  mounted() {
    this.$store.dispatch("getDataUrl");
    if (localStorage.getItem('savedInfo')) {
      this.savedInfo = JSON.parse(localStorage.getItem('savedInfo'));
    };
  },
  methods: {
    addNewData(item) {
      let quantity =  Number(this.$el.querySelector(".countValue").textContent);
      this.savedInfo.push({ ...item, quantity });
      item = '';
      quantity = '';
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
      font-size: 14px;
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
.checkAddData{
  display: none;
}
</style>
