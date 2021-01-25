<template>
  <div>
    <h1>PageNumber</h1>
  </div>
</template>
<script>
export default {
  fetch() {
    try {
      // const loadedItems = await this.$axios.$post('/load-items', { page: this.$route.query.pageNumber })
    }
    catch (e) {
      console.log('fetch in page error');
    }
  }
}
</script>
