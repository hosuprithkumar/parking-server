const express = require('express');
const app = express();
const port = 3001;
const cors = require('cors')

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "https://parkingmanagement-366920.web.app");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
// var whitelist = ['http://localhost:3000', 'http://localhost:3001']
// var corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   }
// }

// Then pass them to cors:
// app.use(cors(corsOptions));

app.get('/', (req, res) => {
    res.send({test:123})
});
// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// });
const PORT = parseInt(process.env.PORT) || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});