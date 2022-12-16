const router = require("express").Router();
const fs = require("fs");
const path = require("path");
const db = require("../db");

router.get("/groups", (req, res) => {
  let sql = fs
    .readFileSync(path.resolve(process.env.BASEDIR, "sql/groups.sql"))
    .toString();

  db(sql)
    .then(data => {
    // возможно временный код
      data.forEach( item => item.nodes = JSON.parse(item.nodes));
      return res.json(data);
    })
    .catch(err => {
      return res.status(500).json(err);
    });
});

router.get("/metrics", (req, res) => {
  let sql = fs
    .readFileSync(path.resolve(process.env.BASEDIR, "sql/metrics.sql"))
    .toString();

  sql = sql.replace("dateTimeRequest", req.query.dateTimeRequest).replace("lastRowId", req.query.lastRowId);

  db(sql)
    .then(data => {
      return res.json(data);
    })
    .catch(err => {
      return res.status(500).json(err);
    });
});

module.exports = router;
