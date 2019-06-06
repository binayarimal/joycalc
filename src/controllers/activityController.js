const activityQuery= require("../db/queries.activities.js");
const scoreQuery= require("../db/queries.scores.js");
const statistics = require("../methods/statFunctions.js")

module.exports = {
  actForm(req,res,next){

    res.render("activity/actPage")
  },
  createActivity(req, res,next){
    activityQuery.getActivity(req, (err, activity) =>{
      if (err){
        res.redirect("/");
        req.flash("error", "wasnot able to create activity");
        console.log(err)
      } else{
        if (activity === null){
          let newActivity = {
            activity:req.body.activity,
            userId:req.user.id,
          }
          activityQuery.addActivity(newActivity, (err, activity)=>{
            if(err){
              res.redirect("/");
              req.flash("error", "was not able to create activity");
              console.log(err)
            }  else{
              let newScore = {
                date:req.body.date,
                score:req.body.score,
                activityId:activity.id
              }
              scoreQuery.addScore(newScore, (err, score)=>{
                if (err){
                  console.log(err)
                  res.redirect(req.headers.referer);
                } else{
                  res.redirect(req.headers.referer);
                }
              })
            }
          })
        }

        else{
          let newScore = {
            date:req.body.date,
            score:req.body.score,
            activityId:activity.id
          }
          scoreQuery.addScore(newScore, (err, score)=>{
            if (err){
              console.log(err)
              res.redirect(req.headers.referer);
            } else{

              res.redirect(req.headers.referer);
            }
          })
        }
      }
    });
  },
  stat(req, res, next){
    activityQuery.getAllActivities(req,( err, activities)=>{
      if (err){
        res.redirect("/stat/activity");
        req.flash("error,  unable to get your activity scores ")
        console.log(err)
      } else{
        let stats = {
          average : statistics.average(activities),
          allActs: statistics.allActivities(activities),
          topsAndBottom:statistics.scoreSorted(activities),
          mostFrequent: statistics.frequencySorted(activities)
        };
        res.render("statistics/statPage", {stats});
      }
    })

},

}
