const Activity = require("./models").Activity;
const Score = require("./models").Score;
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = {

  addActivity(newActivity, callback){
    return Activity.create(newActivity)
    .then((activity) => {
      callback(null, activity);
    })
    .catch((err) => {
      callback(err);
    })
  },


   getAllActivities(req, callback){
    let weekAgo = new Date()
    weekAgo.setDate(weekAgo.getDate() - 7);
    return Activity.findAll({
      include: [{
        model: Score,
        as: "Scores",
        where:{date: {
          [Op.gt]: new Date(weekAgo)
        }},
      }]
    })
    .then((activities)=>{
      callback(null, activities)
    })
    .catch((err)=>{
      callback(err)
    })
  },
  getActivity(req, callback){
    return Activity.findOne({where:{activity:req.body.activity}})
    .then((activity)=>{
      callback(null, activity)
    })
    .catch((err)=>{
      callback(err)
    })

  },
  deleteActivity(req, callback){

    // #1
    return activity.findById(req.params.id)
    .then((activity) => {

      activity.destroy()
      .then((res) => {
        callback(null, activity);
      })
      .catch((err) => {
        callback(err);
      })
    })



  }
}
