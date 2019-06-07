const request = require("request");
const server = require("../../src/server");
const base = "http://localhost:3000/";
const User = require("../../src/db/models").User;
const Activity=  require("../../src/db/models").Activity;
const Score=  require("../../src/db/models").Score;
const sequelize = require("../../src/db/models/index").sequelize;
  describe("activities tests", () => {
    beforeEach((done) => {
      this.activity;
      this.score;
      this.user;
      sequelize.sync({force: true}).then((res) => {
        User.create({
          name:"User",
          email: "starman@tesla.com",
          password: "Trekkie4lyfe"
        })
        .then((user) => {
          this.user = user;

          Activity.create({
            activity: "Winter Games",
            userId:this.user.id,
            Scores: [{
              score: 10,
              date: 20/12/1234,

            }]
          }, {
            include: {
              model: Score,
              as: "Scores"
            }
          })
          .then((activity) => {
            this.activity = activity;
            this.score = activity.Scores[0];
            done();
          })
        })
      });
    });

  describe("GET /activityPage", () => {
   it("should return a status code 200 and the form", (done) => {
     let url = `${base}activityPage`;
      request.get(url, (err, res, body) => {
        expect(res.statusCode).toBe(200);
        expect(err).toBeNull();
        done();
      });
    });
  });
  describe("POST /activityPage/create", () => {
   it("should return a status code 200 and the form", (done) => {
     let url = `${base}activityPage/create`;
      request.post(url, (err, res, body) => {
      expect(this.activity.activity).toBe("Winter Games");
      expect(this.score.score).toBe(10);
        expect(err).toBeNull();
        done();
      });
    });
  });


})
