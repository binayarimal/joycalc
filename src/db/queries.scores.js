const score = require("./models").Score;

module.exports = {

  addScore(newScore, callback){
      return score.create(newScore)
      .then((score) => {
        callback(null, score);
      })
      .catch((err) => {
        callback(err);
      })
    },
 getAllScores(activityId, callback){
   return score.findAll({where:{activityId:activityId}})
   .then((score) => {
     callback(null, score);
   })
   .catch((err) => {
     callback(err);
   })
 },

    deleteScore(req, callback){
     return score.findById(req.params.id)
     .then((score) => {

         score.destroy()
         .then((res) => {
           callback(null, score);
         })
         .catch((err) => {
          callback(err);
     })
   })
},
}
