import { Router } from 'express';

import loginRequired from '../middlewares/loginRequired';

import alunoController from '../controllers/AlunoController';

const route = new Router();

route.get('/', alunoController.index);
route.post('/', loginRequired, alunoController.store);
route.put('/:id', loginRequired, alunoController.update);
route.get('/:id', alunoController.show);
route.delete('/:id', loginRequired, alunoController.delete);

export default route;
