//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn, DietType } = require('./src/db.js');
//diets types file
const dietTypesJSON = require('./src/json/dietTypesJSON.json');

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(3001, async() => {
    //load diets in the database from json file (start)
    const allDiets = DietType.findAll();
    if(!allDiets.length){
      // dietTypesJSON.map(diet => (
      //   DietType.create(diet)
      // ));
      DietType.bulkCreate(dietTypesJSON);
    }
    //load diets ti database from json file (finish)
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});
