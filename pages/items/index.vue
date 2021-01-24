<template>
  <div>
    <h1>PageNumber</h1>
  </div>
</template>
<script>
export default {
  data() {
    return {
      itemsOnPage: 10 // a.k.a. LIMIT in SQL
    }
  },
  async fetch() {
    try {
      console.log('this', this);
      /*const loadParams = new FormData();
      loadParams.append('pageNumber', this.$route.query.page);
      loadParams.append('itemsOnPage', this.itemsOnPage);
      const loadedItems = await this.$axios.$post('/load-items', loadParams) */
      const loadedItems = await this.$axios.$get(`/load-items?limit=${this.itemsOnPage}&offset=${this.$route.query.page}`)
      console.log('lloadedItems', loadedItems);
    }
    catch (e) {
      console.log('fetch in page error', e);
    }
  },
  // fetchOnServer: false
}
</script>
