module.exports = {
actForm(req,res,next){
  res.render("activity/actPage")
},
createActivity(req, res, next){
  User.findOne({where:{activity:req.user.activity}})
  .then(act){
    
  }

},

}
