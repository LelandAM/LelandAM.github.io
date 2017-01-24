$( document ).ready( function() {

  $("body").on("keyup", (function(e) {
    if (player1_count <= 11 && player2_count <= 11) {
      if (e.which==80) {
        $("tr#player1 td.active").removeClass('active')
        movePlayer1();
        update_player_position("player1", player1_count);
      }

      if (e.which==81) {
        $("tr#player2 td.active").removeClass('active')
        movePlayer2();
        update_player_position("player2", player2_count);
      }
    } else if (player1_count >= 11 || player2_count >= 11) {
      findWinner();
      resetGame();
    };

   }))

});

$("button").on("click", function(e) {
  resetGame();
  console.log("click");
});

var player1_count= 1;
var player2_count= 1;

function movePlayer1(){
   player1_count++;
}
function movePlayer2(){
   player2_count++;
}

function findWinner() {
  if (player1_count > player2_count) {
    window.alert("Player One Wins!");
  } else if (player1_count < player2_count) {
    window.alert("Player Two Wins!");
  }
}

function update_player_position (player, newPostion) {
  position = "tr#" + player + " td:nth-child(" + newPostion + ")";
  $(position).addClass("active")
}

function resetGame() {
  var positions = $("td");
  positions.removeClass("active")
  $("#donut_table tr td:first-child").addClass("active");
  player1_count= 1;
  player2_count= 1;
}
