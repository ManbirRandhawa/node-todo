var mongoose = require('mongoose');

var TodoSchema =  new mongoose.Schema({
   text : {type : String, default: ''},
   done : {type : Boolean, default: ''}
   
});

TodoSchema.methods.completeIt = function(cb) {
    this.done = true;
    this.save(cb);
};


module.exports = mongoose.model('Todo', TodoSchema);
