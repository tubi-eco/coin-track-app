<template>
    <div>
       <div id="chart">
        <apexchart type="pie" width="100%" :key="series.length" :options="chartOptions" :series="series"></apexchart>
      </div>
    </div>
</template>
<script>
import VueApexCharts from 'vue-apexcharts'
export default {
    name:'Chart',
        components: {
          apexchart: VueApexCharts,
        },
        data(){
          return{
            chartOptions: {
              chart: {
                width: 380,
                type: 'pie',
               
              },
              legend: {
                show: true,
                position: 'bottom',
                itemMargin: {
                    horizontal: 5,
                    vertical: 5
                }
            },
              responsive: [{
                breakpoint: 480,
                options: {
                  chart: {
                    width: 360
                  },
                  legend: {
                    position: 'bottom'
                  }
                }
              }],
              },
            savedInfo:[],
          }
        },
      computed: {
        series() {
          return this.savedInfo.map((item) => item.counterValue)
        },
      },
      mounted() {
        if (localStorage.getItem('savedInfo')) {
              this.savedInfo = JSON.parse(localStorage.getItem('savedInfo'));
        }
      }
}
</script>
<style lang="scss">
.apexcharts-canvas {
    margin: 0 auto;
}
#chart{
  width:80%;
    margin: 0 auto;
}
@media only screen and (max-width: 990px) {
  #chart{
    width:100%;
    margin: 0 auto;
  }
}
</style>