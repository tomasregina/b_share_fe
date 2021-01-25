<template>
  <div>
    <h1>PageNumber</h1>
    <div class="pageSwitcher">
      <span
      v-for="pageNumber in (Math.ceil(getAllItemsCount/10))"
      :key="pageNumber"
      @click="goToPage(pageNumber)"
      >
      {{ pageNumber }}
      </span>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex';
export default {
  data() {
    return {
      itemsOnPage: 10, // a.k.a. LIMIT in SQL
      items: undefined
    }
  },
  async fetch() {
    try {
      /*const loadParams = new FormData();
      loadParams.append('pageNumber', this.$route.query.page);
      loadParams.append('itemsOnPage', this.itemsOnPage);
      const loadedItems = await this.$axios.$post('/load-items', loadParams) */
      const loadedItems = await this.$axios.$get(`/load-items?limit=${this.itemsOnPage}&offset=${this.$route.query.page}`)
      console.log('lloadedItems', loadedItems);
      // this.items = loadedItems.loadedItems;
    }
    catch (e) {
      console.log('fetch in page error', e);
    }
  },
  // fetchOnServer: false
  computed: {
    ...mapGetters({
      getAllItemsCount: 'items/getAllItemsCount'
    })
  },
  methods: {
    async goToPage(pageNumber) {
      const loadedItems = await this.$axios.$get(`/load-items?limit=${this.itemsOnPage}&offset=${this.$route.query.page}`)
    }
  }
}
</script>
