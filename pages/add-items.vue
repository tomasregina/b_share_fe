<template>
  <div>
    <h3>Add Bicycle</h3>
    <form action="" method="post" @submit.prevent="addItem">
      <label for="title">Bicycle Title</label>
      <input type="text" @change="emptyField=false" :class="{emptyFieldAlert: !itemInfo.title && emptyField}" name="title" id="title" v-model="itemInfo.title">
      <label for="description">Bicycle Description</label>
      <input type="text" @change="emptyField=false" :class="{emptyFieldAlert: !itemInfo.description && emptyField}" name="description" id="description" v-model="itemInfo.description">
      <label for="pricePerDay">Price Per Day</label>
      <input type="number" @change="emptyField=false" :class="{emptyFieldAlert: !itemInfo.pricePerDay && emptyField}" name="pricePerDay" id="pricePerDay" v-model="itemInfo.pricePerDay">
      <label for="pricePerHour">Price Per Hour</label>
      <input type="number" @change="emptyField=false" :class="{emptyFieldAlert: !itemInfo.pricePerHour && emptyField}" name="pricePerHour" id="pricePerHour" v-model="itemInfo.pricePerHour">
      <input type="submit" value="Add item">
    </form>
  </div>
</template>
<script>
export default {
  middleware: 'auth',
  data() {
    return {
      itemInfo: {
        title: undefined,
        description: undefined,
        pricePerDay: undefined,
        pricePerHour: undefined
      },
      emptyField: false,
      alertTextSuccess: undefined,
      alertTextDanger: undefined
    }
  },
  methods: {
    async addItem() {
      const newItemForm = new FormData();
      newItemForm.append('title', this.itemInfo.title);
      newItemForm.append('description', this.itemInfo.description);
      newItemForm.append('pricePerDay', this.itemInfo.pricePerDay);
      newItemForm.append('pricePerHour', this.itemInfo.pricePerHour);
      try {
        const test = await this.$axios.$post('/add-item', newItemForm, { withCredentials: true });
        this.alertTextSuccess = 'Item added'

      }
      catch (e) {
        console.log('add item error', e);
      }

    }
  }
}
</script>
<style lang="scss" scoped>
.emptyFieldAlert {
  border-color: red;
}
</style>
