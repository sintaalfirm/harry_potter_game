  console.log(Math.floor(Math.random() * 3 + 1));
  const bola = ["./harry.png", "./hermione.png", "./ron.png"];
    function handleClick(item) {
        document.getElementById('image-player').className = 'letsgo';
        document.getElementById('image-enemy').className = 'letsgo'; 
        if (item === 'harry') {
          const enemy = bola[Math.floor(Math.random() * 3 + 1) - 1]; 
          document.getElementById("image-player").src = "./harry.png";
          document.getElementById("image-enemy").src = enemy;
          document.getElementById("result").innerHTML = checkWinner(item, enemy);
        } else if (item === 'hermione') {
          const enemy = bola[Math.floor(Math.random() * 3 + 1) - 1]; 
          document.getElementById("image-player").src = "./hermione.png";
          document.getElementById("image-enemy").src = enemy;
          document.getElementById("result").innerHTML = checkWinner(item, enemy);
        } else if (item === 'ron') {
          const enemy = bola[Math.floor(Math.random() * 3 + 1) - 1];
          document.getElementById("image-player").src = "./ron.png";
          document.getElementById("image-enemy").src = enemy;
          document.getElementById("result").innerHTML = checkWinner(item, enemy);
        }
    }             

    function checkWinner(player, enemy) {
      if (player === "harry") {
        if (enemy === "./hermione.png") {
          return "lose";
        }
        if (enemy === "./ron.png") {
          return "win";
        }
        if (enemy === "./harry.png") {
          return "draw";
        }
      }
      if (player === "hermione") {
        if (enemy === "./ron.png") {
          return "lose";
        }
        if (enemy === "./harry.png") {
          return "win";
        }
        if (enemy === "./hermione.png") {
        return "draw";
        }
      }
      if (player === "ron") {
        if (enemy === "./harry.png") {
        return 'lose';
        }
        if (enemy === "./hermione.png") {
        return 'win';
        }
        if (enemy === "./ron.png") {
        return "draw";      
      }
      }
    }
      