module.exports = {
  allActivities(activities){
    let allActs = [];
    for(let i =0; i< activities.length; i++){
        allActs.push(activities[i].activity);
      }
    return allActs
  },
  average(activities){
    let scores = [];
    for(let i =0; i< activities.length; i++){
      for(let j =0; j< activities[i].Scores.length; j++){
        scores.push(activities[i].Scores[j].score)
      }
    }
    let length = scores.length
    scores= scores.reduce((a,b)=>{return (a+b)});
    return scores/length
  },
    scoreSorted(activities){
    let sorted = [];
    let acts={};
    let topThree = [];
    let bottom
    for(let i =0; i< activities.length; i++){
      for(let j =0; j< activities[i].Scores.length; j++){
        if(!acts.activities){
          let actProps = activities[i].activity;
        acts[actProps]=[activities[i].Scores[j].score]
      }else{
        acts[actProps].push(activities[i].Scores[j].score)
      }
      }
    }
    for (let act in acts){
      let mapped = acts[act].reduce((x,y)=>{return x+y});
      acts[act] =mapped/ acts[act].length;
      sorted.push([act, acts[act]]);
    }
      sorted.sort((a, b)=> {
     return b[1] - a[1];
   })

  for (let i =0; i<3; i++){
    if (sorted[i]){
      topThree.push(sorted[i])
    }
  }
  bottom = sorted[sorted.length-1]
  return [topThree, bottom]

  },
  frequencySorted(activities){
    let sorted = [];
    topThree = [];
    let acts={};
    for(let i =0; i< activities.length; i++){
      for(let j =0; j< activities[i].Scores.length; j++){

          let actProps = activities[i].activity;
          acts[actProps]=activities[i].Scores.length


      }
    };
    for (let act in acts){
      sorted.push([act, acts[act]]);
    }
      sorted.sort((a, b)=> {
     return b[1] - a[1];
   })
   for (let i =0; i<3; i++){
     if (sorted[i]){
       topThree.push(sorted[i])
     }
   }
   return topThree
  }
}
