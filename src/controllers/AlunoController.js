// eslint-disable-next-line no-unused-vars
import Aluno from '../models/Aluno';
import Foto from '../models/Foto';

class AlunoController {
  async index(req, res) {
    const alunos = await Aluno.findAll({
      attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
      order: [['id', 'DESC'], [Foto, 'id', 'DESC']],
      include: {
        model: Foto,
        attributes: ['filename', 'id'],
      },
    });
    res.json(alunos);
  }

  async store(req, res) {
    try {
      const aluno = await Aluno.create(req.body);
      return res.status(200).json(aluno);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          erros: ['missing id'],
        });
      }
      const aluno = await Aluno.findByPk(id, { attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'] });

      if (!aluno) {
        res.status(404).json({
          erros: ['not found'],
        });
      }
      // eslint-disable-next-line no-unused-vars
      const novoAluno = await aluno.update(req.body);

      return res.status(200).json('Aluno atualizado com sucesso');
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          erros: ['missing id'],
        });
      }
      const aluno = await Aluno.findByPk(id, {
        attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
        order: [['id', 'DESC'], [Foto, 'id', 'DESC']],
        include: {
          model: Foto,
          attributes: ['url', 'filename', 'id'],
        },
      });

      if (!aluno) {
        res.status(404).json({
          erros: ['not found'],
        });
      }
      return res.status(200).json(aluno);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          erros: ['missing id'],
        });
      }
      const aluno = await Aluno.findByPk(id, { attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'] });

      if (!aluno) {
        res.status(404).json({
          erros: ['not found'],
        });
      }
      await aluno.destroy();
      return res.status(200).json(`aluno ${aluno.nome} apagado com sucesso`);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new AlunoController();
