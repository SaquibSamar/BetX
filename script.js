// INTRO SCREEN

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
            <h3>${match.teams?.[0] || 'Team 1'}</h3>
          </div>

          <div class="vs">VS</div>

          <div class="team">
            <img src="https://flagcdn.com/w320/au.png">
            <h3>${match.teams?.[1] || 'Team 2'}</h3>
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
            ${match.teams?.[0] || 'Team 1'} ${odd1}
          </button>

          <button onclick="openLogin()">
            ${match.teams?.[1] || 'Team 2'} ${odd2}
          </button>

        </div>

      </div>

    `;

  });

}


// LIVE AUTO UPDATE
setInterval(() => {
  getMatches();
}, 10000);


// INITIAL FETCH
getMatches();
