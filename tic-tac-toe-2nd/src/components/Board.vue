<template>
  <table border>
    <tr>
      <Cells></Cells>
      <Cells></Cells>
      <Cells></Cells>
    </tr>
    <tr>
      <Cells></Cells>
      <Cells></Cells>
      <Cells></Cells>
    </tr>
    <tr>
      <Cells></Cells>
      <Cells></Cells>
      <Cells></Cells>
    </tr>
  </table>
</template>

<script>
import Cells from "./Cells";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Sample",
  components: {
    Cells,
  },
  methods: { ...mapActions([]) },
  computed: { ...mapGetters([]) },
};
</script>

<style>
table {
  margin: auto;
  border-collapse: collapse;
}
</style>
