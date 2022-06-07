import User from '../models/User';

class UserController {
  async create(req, res) {
    try {
      const novoUser = await User.create(req.body);

      return res.status(200).json(novoUser);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // Index
  async index(req, res) {
    try {
      const user = await User.findAll({
        attributes: ['id', 'nome', 'email'],
      });

      return res.json(user);
    } catch (e) {
      return res.json(null);
    }
  }

  // Show
  async show(req, res) {
    try {
      const users = await User.findByPk(req.params.id);
      const { id, nome, email } = users;
      return res.json({
        id,
        nome,
        email,
      });
    } catch (e) {
      return res.json(null);
    }
  }

  // Update
  async update(req, res) {
    try {
      const user = await User.findByPk(req.userId);

      if (!user) {
        return res.status(400).json({
          errors: ['Usuario nao existe'],
        });
      }

      const novosDados = await user.update(req.body);
      return res.json(novosDados);
    } catch (e) {
      return res.json(null);
    }
  }
  // Delete

  async delete(req, res) {
    try {
      const users = await User.findByPk(req.userId);

      if (!users) {
        return res.status(400).json({
          errors: ['user not found'],
        });
      }

      await users.destroy();
      return res.json({ errors: ['Usuario apagado com sucesso'] });
    } catch (e) {
      return res.json(null);
    }
  }
}

export default new UserController();
