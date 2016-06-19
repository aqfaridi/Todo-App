/**
* UserController
*
* @description :: Server-side logic for managing Users
* @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
*/

module.exports = {

  // CREATE action  
  create: function(req, res) {
    var params = req.params.all();
    console.log(params);
    User.create(params, function(err, user) {
      if (err) return res.json({error : err});
        res.status(201);
        res.json(user);
    });
  },

  // FIND action
  find: function(req, res) {
    var id = req.param('id');
    User.findOne({id:id})
      .exec(function(err, user) {
        if (err) {
          return res.json({
            error: err
          });
        }
        if (!user) {
          return res.notFound('Could not find User, sorry.');
        }

        sails.log('Found "%s"', user.name);
        return res.json(user);    
    });
  },

  // DESTROY action
  destroy: function(req, res) {
    var id = req.param('id');
    User.destroy({id:id}).exec(function (err){
      if (err) {
        return res.negotiate(err);
      }
      sails.log('user now been deleted, if there were any.');
      return res.ok();
    });
  },

  // UPDATE action
  update: function(req, res) {
    var params = req.params.all();
    User.update({id:params.id},params).exec(function afterwards(err, updated){
      if (err) {
        return;
      }
      console.log('Updated user to have name ' + updated[0].name);
      return res.json(params); 
    });
  }
};

