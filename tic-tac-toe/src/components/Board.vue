<template>
  <table class="board" border>
    <tr>
      <cells :val="gameState.cell1" :player="gameState.currentPlayer" @onMarked="checkWin"></cells>
      <cells :val="gameState.cell2" :player="gameState.currentPlayer" @onMarked="checkWin"></cells>
      <cells :val="gameState.cell3" :player="gameState.currentPlayer" @onMarked="checkWin"></cells>
    </tr>
    <tr>
      <cells :val="gameState.cell4" :player="gameState.currentPlayer" @onMarked="checkWin"></cells>
      <cells :val="gameState.cell5" :player="gameState.currentPlayer" @onMarked="checkWin"></cells>
      <cells :val="gameState.cell6" :player="gameState.currentPlayer" @onMarked="checkWin"></cells>
    </tr>
    <tr>
      <cells :val="gameState.cell7" :player="gameState.currentPlayer" @onMarked="checkWin"></cells>
      <cells :val="gameState.cell8" :player="gameState.currentPlayer" @onMarked="checkWin"></cells>
      <cells :val="gameState.cell9" :player="gameState.currentPlayer" @onMarked="checkWin"></cells>
    </tr>
  </table>
</template>

<script>
import cells from "./Cells";
export default {
  name: "Board",
  data() {
    return {
      gameState: {
        currentPlayer: "X",
        winState: null,
        cell1: {
          val: null,
        },
        cell2: {
          val: null,
        },
        cell3: {
          val: null,
        },
        cell4: {
          val: null,
        },
        cell5: {
          val: null,
        },
        cell6: {
          val: null,
        },
        cell7: {
          val: null,
        },
        cell8: {
          val: null,
        },
        cell9: {
          val: null,
        },
      },
    };
  },
  methods: {
    checkWin: function(player) {
      var game = this.gameState;
      if (!!game.cell1.val && game.cell1.val === game.cell2.val && game.cell2.val === game.cell3.val) {
        console.log(game);
        this.updateWin(game);
      } else if (!!game.cell1.val && game.cell1.val === game.cell4.val && game.cell4.val === game.cell7.val) {
        this.updateWin(game);
      } else if (!!game.cell1.val && game.cell1.val === game.cell5.val && game.cell5.val === game.cell9.val) {
        this.updateWin(game);
      } else if (!!game.cell2.val && game.cell2.val === game.cell5.val && game.cell5.val === game.cell8.val) {
        this.updateWin(game);
      } else if (!!game.cell3.val && game.cell3.val === game.cell6.val && game.cell6.val === game.cell9.val) {
        this.updateWin(game);
      } else if (!!game.cell3.val && game.cell3.val === game.cell5.val && game.cell5.val === game.cell7.val) {
        this.updateWin(game);
      } else if (!!game.cell4.val && game.cell4.val === game.cell5.val && game.cell5.val === game.cell6.val) {
        this.updateWin(game);
      } else if (!!game.cell7.val && game.cell7.val === game.cell8.val && game.cell8.val === game.cell9.val) {
        this.updateWin(game);
      } else if (
        !!game.cell1.val &&
        !!game.cell2.val &&
        !!game.cell3.val &&
        !!game.cell4.val &&
        !!game.cell5.val &&
        !!game.cell6.val &&
        !!game.cell7.val &&
        !!game.cell8.val &&
        !!game.cell9.val
      ) {
        game.gameState = "draw";
        this.$emit("playerTurn", game.currentPlayer, game.gameState);
      } else {
        this.playerChange(player);
      }
    },
    playerChange: function(player) {
      this.gameState.currentPlayer = player;

      this.$emit("playerTurn", this.gameState.currentPlayer);
    },
    updateWin: function(game) {
      game.winState = "won";
      this.$emit("playerTurn", game.currentPlayer, game.winState);
      game.winState = null;
    },
  },
  components: {
    cells,
  },
};
</script>

<style>
.board {
  width: 600px;
  height: 600px;
  margin: auto;
  border: 1px solid black;
  border-collapse: collapse;
}
</style>
