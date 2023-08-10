const Pool = require('pg').Pool
const pool = new Pool({
  user: 'dzk22yqu',
  host: '127.0.0.1',
  database: 'dzk22yqu',
  password: 'e313KeeBnj0Wr3rbr6v',
  port: 5432,
});

const createFeedback = (body) => {
  return new Promise(function(resolve, reject) {
    const { CONSENT,OPT1, OPT2, OPT3, OPT4, OPT5, OPT6, OPT7, OPT8, OPT9, OPT10, OPT11, OPT12, OPT13, OPT14, OPT15, OPT16, OPT17, OPT18, OPT19, OPT20, OPT21, OPT22, OPT23, OPT24, OPT25, OPT26, OPT27, OPT28, OPT29 } = body
    
    console.log(body)
    pool.query('INSERT INTO "public"."Feedback" VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27, $28, $29, $30) RETURNING *', 
    [CONSENT, OPT1, OPT2, OPT3, OPT4, OPT5, OPT6, OPT7, OPT8, OPT9, OPT10, OPT11, OPT12, OPT13, OPT14, OPT15, OPT16, OPT17, OPT18, OPT19, OPT20, OPT21, OPT22, OPT23, OPT24, OPT25, OPT26, OPT27, OPT28, OPT29], (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(`The feedback has been added.`)
    })
  })
}

module.exports = {
  createFeedback,
}