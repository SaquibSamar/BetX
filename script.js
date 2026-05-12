// INTRO SCREEN
setTimeout(() => {
  document.getElementById("intro").style.display = "none";
}, 4000);


// LOGIN POPUP
function openLogin() {
  document.getElementById("loginPopup").style.display = "flex";
}

function closeLogin() {
  document.getElementById("loginPopup").style.display = "none";
}


// SIGNUP POPUP
function openSignup() {
  document.getElementById("signupPopup").style.display = "flex";
}

function closeSignup() {
  document.getElementById("signupPopup").style.display = "none";
}


// CLOSE POPUP OUTSIDE CLICK
window.onclick = function (e) {

  const login = document.getElementById("loginPopup");
  const signup = document.getElementById("signupPopup");

  if (e.target == login) {
    closeLogin();
  }

  if (e.target == signup) {
    closeSignup();
  }
};


// YOUR CRICAPI KEY
const API_KEY = "378eb698-beaf-4444-acab-2a6b965e7d12";


// FETCH LIVE MATCHES
async function getMatches() {

  try {

    const response = await fetch(
      `https://api.cricapi.com/v1/currentMatches?apikey=${API_KEY}&offset=0`
    );

    const data = await response.json();

    console.log(data);

    displayMatches(data.data);

  } catch (error) {

    console.log("API Error:", error);

  }
}


// DISPLAY MATCHES
function displayMatches(matches) {

  const container = document.querySelector(".matches-grid");

  container.innerHTML = "";


  matches.forEach((match) => {

    // RANDOM LIVE ODDS
    const odd1 = (Math.random() * 2 + 1).toFixed(2);
    const odd2 = (Math.random() * 2 + 1).toFixed(2);

    const score = match.score?.[0];

    container.innerHTML += `

      <div class="match-card">

        <div class="live-badge">
          <span></span>
          LIVE
        </div>


        <div class="teams">

          <div class="team">
            <img src="https://flagcdn.com/w320/in.png">
            <h3>${match.teams?.[0] || "Team 1"}</h3>
          </div>

          <div class="vs">VS</div>

          <div class="team">
            <img src="https://flagcdn.com/w320/au.png">
            <h3>${match.teams?.[1] || "Team 2"}</h3>
          </div>

        </div>


        <div class="score-section">

          <h1>
            ${score?.r || 0}/${score?.w || 0}
          </h1>

          <p>
            ${score?.o || 0} Overs
          </p>

        </div>


        <div class="odds-section">

          <button onclick="openLogin()">
            ${match.teams?.[0] || "Team 1"} ${odd1}
          </button>

          <button onclick="openLogin()">
            ${match.teams?.[1] || "Team 2"} ${odd2}
          </button>

        </div>

      </div>

    `;

  });

}


// AUTO UPDATE EVERY 10 SEC
setInterval(() => {
  getMatches();
}, 10000);


// INITIAL FETCH
getMatches();
