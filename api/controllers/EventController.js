/**
 * EventController
 *
 * @description :: Server-side logic for managing events
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
// CREATE action  
  create: function(req, res) {
    var params = req.params.all();
    console.log(params);
    Event.create(params, function(err, event) {
      if (err) return res.json({error : err});
        res.status(201);
        res.json(event);
    });
  },

  // FIND action
  find: function(req, res) {
    var id = req.param('id');
    Event.findOne({id:id})
      .exec(function(err, event) {
        if (err) {
          return res.json({
            error: err
          });
        }
        if (!event) {
          return res.notFound('Could not find Event, sorry.');
        }

        sails.log('Found "%s"', event.title);
        return res.json(event);    
    });
  },

  // DESTROY action
  destroy: function(req, res) {
    var id = req.param('id');
    Event.destroy({id:id}).exec(function (err){
      if (err) {
        return res.negotiate(err);
      }
      sails.log('event now been deleted, if there were any.');
      return res.ok();
    });
  },

  // UPDATE action
  update: function(req, res) {
    var params = req.params.all();
    Event.update({id:params.id},params).exec(function afterwards(err, updated){
      if (err) {
      	sails.log(err);
        return;
      }
      console.log('Updated event to have title ' + updated[0].title);
      return res.json(params); 
    });
  }	
};

