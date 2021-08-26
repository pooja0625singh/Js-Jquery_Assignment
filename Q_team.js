let qTeams = {aaiec: 400,
              aaiwc: 60,
              qai: 200,
              poc: 100,
              gtm: 50,
              hr: 10
        };


let sortedTeamMember = Object.keys(qTeams).sort(function(a,b){return qTeams[b] - qTeams[a]});
console.log(sortedTeamMember);
sortedTeamMember.forEach((element, index)=>console.log(index+1 + ". ", element));