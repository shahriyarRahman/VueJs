<template>
  <td class="cell" @click="marker">
    {{ currentPlayer }}
  </td>
</template>

<script>
export default {
  name: "Cells",
  data() {
    return {
      cell: {},
      currentPlayer: "",
    };
  },
  props: ["val", "player"],
  // ["cell", "player"],
  methods: {
    marker: function() {
      this.data = this.val;
      let player = this.player;
      if (this.data.val) {
        console.log("already marked");
      } else {
        this.data.val = player;
        this.currentPlayer = player;
        player = player === "X" ? "O" : "X";
        this.$emit("onMarked", player);
      }
    },
  },
};
</script>

<style>
td {
  text-align: center;
  width: 200px;
  height: 200px;
  font-size: 3rem;
}
</style>
