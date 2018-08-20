module.exports = function(app) {

    const truck = require('../controllers/widgets.js')

    app.get('/trucks', function(req,res) {
        truck.index(req,res);
    });

    app.post('/trucks', function(req,res) {
        truck.add_widget(req,res);
    });

    app.put('/trucks/:id',function(req,res){
        truck.update_widget(req,res);
    })

    app.get('/trucks/:id',function(req,res){
        truck.find_widget(req,res);
    })

    app.delete('/trucks/:id', function(req,res) {
        truck.delete_widget(req,res);
    });
}