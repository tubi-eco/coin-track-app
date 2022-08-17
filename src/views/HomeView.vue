<template>
  <div class="home">
      <header>
         <ShowModal/>
         <RefreshButton v-on:click.native="RefreshComponent()"/>
      </header>
      <b-row class="coinView" v-if="!savedInfo.length">
        <b-col>
          You can start with add stock.
        </b-col>
      </b-row>
      <b-row class="coinView" v-else>
        <b-col sm="12" md="6"> <AddSymbol/></b-col>
        <b-col sm="12" md="6"> <Chart/></b-col>
      </b-row>
      <ModalList/>
  </div>
</template>

<script>
import ModalList from '@/components/Modal/ModalList.vue';
import RefreshButton from '@/components/Buttons/Refresh.vue';
import ShowModal from '@/components/Buttons/ShowModal.vue';
import AddSymbol from '@/components/AddSymbol/AddSymbol.vue';
import Chart from '@/components/PieChart/Chart.vue'

export default {
  name: 'HomeView',
  components: {
    ModalList,
    RefreshButton,
    ShowModal,
    AddSymbol,
    Chart
  },
  data(){
    return{
      savedInfo:[],
    }
  },
  mounted() {
    if (localStorage.getItem('savedInfo')) {
      this.savedInfo = JSON.parse(localStorage.getItem('savedInfo'));
    }
    if(this.savedInfo.length > 0){
      this.$el.querySelector(".changetxt").textContent = 'Add / Update'
    }
    else{
      this.$el.querySelector(".changetxt").textContent = 'Add Stock'
    }
  },
   methods: {
     RefreshComponent() {
     location.reload();
    }
  }
}
</script>
<style lang="scss">
.coinView {
  margin-top: 25px;
  .col-sm-12:nth-last-child(1)::before {
  content: '';
  position: absolute;
  left:50px;
  top: 25px;
  background: #ccc;
  width: 1px;
  height:100%;
   @media only screen and (max-width: 990px) {
    display:none;
   }
  }
}

</style>