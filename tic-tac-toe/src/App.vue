<template>
  <div>
    <h3>{{ player }}</h3>
    <Board @playerTurn="currentPlayer"></Board>
  </div>
</template>
<script>
import Board from "./components/Board";
export default {
  name: "App",
  components: {
    Board,
  },
  data() {
    return {
      player: "Player 1 ",
    };
  },
  methods: {
    currentPlayer: function(player, win) {
      if (win) {
        if (win == "won") {
          this.player = player == "X" ? "Player 1 Won" : "Player 2 Won";
        } else if (win == "draw") {
          this.player = "The match is draw";
        }
      } else {
        this.player = player == "X" ? "Player 1 Turn" : "Player 2 Turn";
      }
    },
  },
};
</script>

<style></style>
