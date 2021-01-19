<template>
  <div class="item-row">
    <h6>{{ title }}</h6>
    <p>{{ author }}</p>
    <p>{{ description }}</p>
  </div>
</template>
<script>
export default {
  props: {
    title: String,
    author:  String,
    description: String
  }
}
</script>
<style lang="scss" scoped>
.item-row {
  border: 0.1rem solid lightskyblue;
  border-radius: 1rem

}
</style>


