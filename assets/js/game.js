  // Simple words list
    const words = ["REACT", "PYTHON", "HTML", "NODEJS", "JAVA"];
    const hints = [
      "JS Library",
      "Language",
      "Markup Language",
      "JS Runtime",
      "Language",
    ];

    // Random selection
    let index = Math.floor(Math.random() * words.length);
    let word = words[index];
    let hint = hints[index];

    let attempts = 4;
    let wrongLetters = [];

    // Select Element
    const wordBox = document.getElementById("wordBox");
    const input = document.getElementById("letterInput");
    const wrongText = document.getElementById("wrongLetters");
    const remainText = document.querySelector(".guess");
    const hintText = document.querySelector(".info-row strong");
    const resetBtn = document.querySelector(".btn");

    // Game setup function
    function start() {
      hintText.innerText = hint;
      remainText.innerText = "0" + attempts;

      // Box Reset
      wordBox.innerHTML = "";
      for (let i = 0; i < word.length; i++) {
        wordBox.innerHTML += `<div class="letter" style="display:flex; justify-content:center; align-items:center; font-size:20px; font-weight:bold;"></div>`;
      }
    }

    // Check Input
    input.addEventListener("input", function () {
      let char = input.value.toUpperCase();
      input.value = ""; // Clear Inputzz
      if (!char.match(/[A-Z]/)) return; // allow letters

      if (word.includes(char)) {
        // If letter is correct show in the box
        let boxes = document.querySelectorAll(".letter");
        for (let i = 0; i < word.length; i++) {
          if (word[i] === char) {
            boxes[i].innerText = char;
          }
        }
      } else {
        // Wrong letter logic
        if (!wrongLetters.includes(char)) {
          wrongLetters.push(char);
          attempts--;
          wrongText.innerText = wrongLetters.join(", ");
          remainText.innerText = "0" + attempts;
        }
      }

      // Check Win or Loss
      setTimeout(() => {
        let currentWord = "";
        document
          .querySelectorAll(".letter")
          .forEach((b) => (currentWord += b.innerText));

        if (currentWord === word) {
          alert("You Won!");
        } else if (attempts <= 0) {
          alert("Game Over! Word was: " + word);
        }
      }, 100);
    });

    // Reset button click
    resetBtn.onclick = () => {
      location.reload();
    };

    start();