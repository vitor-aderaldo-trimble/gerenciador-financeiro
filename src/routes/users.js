module.exports = (app) => {
   const findAll = async (req, res) => {
      let users = await app.services.user.findAll();
      res.status(200).json(users);
   };

   const create = async (req, res) => {
      let user = await app.services.user.save(req.body);
      if (user.error) return res.status(400).json(user);
      res.status(201).json(user[0]);
   };

   return { findAll, create };
};
