const mongoose=require('mongoose');

var mongoDatabase = 'mongodb://localhost:27017/EMS';



mongoose.Promise = global.Promise;

 mongoose.connect(mongoDatabase, { useNewUrlParser: true }).then(
  () => { console.log('Database is connected') },
  err => { console.log('There is problem while connecting database ' + err) }
  );




require('./employee.model');