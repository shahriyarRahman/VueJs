<template>
  <div class="row my-4">
    <!-- <input type="text" v-on:input="onInput" /> -->
    <input type="text" @input="onInput" class="form-input col-9 m-auto" />
  </div>
</template>
<script>
export default {
  name: "SearchBar",
  methods: {
    onInput: function(event) {
      //$emit(name of function, additional info about function ) is used to send data to parent component
      this.$emit("searchChange", event.target.value);
    },
  },
};
</script>
<style scoped></style>
