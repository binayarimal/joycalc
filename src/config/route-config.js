module.exports = {
  init(app){
    const staticRoutes = require("../routes/static");
    const userRoutes = require("../routes/users");
    const activityRoutes = require("../routes/activities");
    app.use(staticRoutes);
    app.use(userRoutes);
    app.use(activityRoutes);
  }
}
