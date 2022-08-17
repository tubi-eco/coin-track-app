<template>
    <div>
    <b-modal size="lg" scrollable hide-footer  id="modalPopover"  @show="resetModal" @hidden="resetModal" ok-disabled title="Add Stock">
        <SearchList @searchFilter="searchFilter"/>
        <List :filter="filter"/>
    </b-modal>
    </div>
</template>
<script>
import SearchList from '@/components/Search/Search.vue';
import List from '@/components/filterList/List.vue';
import { mapGetters } from "vuex";

export default {
  name:'ModalList',
  components: {
    SearchList,
    List,
  },
  props:[],
  data(){
    return{
      filter: '',
    }
  },
 computed: {
    ...mapGetters(["info"]),
  },
  methods: {
      searchFilter(text) {
        this.filter = text
      },
       resetModal() {
        this.filter = ''
      },
    },
  mounted() {
    this.$store.dispatch("getDataUrl");
  },
}
</script>
<style lang="scss">
.modal-header{
  border-bottom: 0!important;
}
</style>