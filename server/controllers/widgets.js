const mongoose = require('mongoose'),
    Poll = mongoose.model('Poll'),
    Product = mongoose.model('Product'),
    Room = mongoose.model('Room'),
    User = mongoose.model('User')

module.exports = {
    index: function(req,res) {
        Room.find({},function(err,trucks) {
            if (err) {
                res.json({'status':500,'errors':err})
            }
            else {
                res.json({'status':200,'rooms':rooms});
            }
        })
    },
    add_widget: function(req,res) {
        var room = new Room({
            name:req.body.name,
            })
            room.save(function(err,truck){
            if (err) {
                res.json({'status':500,'errors':err})
            }
            else {
                res.json({'status':200,'room':room});
            }
        })
    },

}
