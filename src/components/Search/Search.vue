<template>
    <div>
        <b-input-group
        v-for="size in ['']"
        :key="size"
        :size="size"
        class="mb-3" >
            <b-form-input 
            id="filter-input"
            v-model="filter"
            type="search"
            :placeholder="'Search for symbol name'"
            @input="$emit('searchFilter', filter)"
            autocomplete="off"></b-form-input>
            <b-icon class="searchbg" icon="search" aria-hidden="true"></b-icon> 
        </b-input-group>
    </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
    name:'SearchList',
    data(){
        return{
            filter:null,
        }
    },
    computed: {
    ...mapGetters(["info"]),
    },
}
</script>
<style>
.searchbg{
    position: absolute;
    right: 10px;
    top: 10px;
}
</style>