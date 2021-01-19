<template>
  <div>
    <item-row
      v-for="bicycle in bicycles"
      :key="bicycle.id"
      :title="bicycle.title"
      :author="bicycle.author"
      :description="bicycle.description"
       />
  </div>
</template>
<script>
import ItemRow from '../components/ItemRow';
import bicycles from '../static/bicycles.json'
export default {
  data() {
    return {
      bicycles: bicycles
    }
  },
  components: {
    ItemRow
  }
}
</script>
