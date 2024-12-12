import express from 'express';
import ProdutoController from '../controllers/produtoControllers.js';

const router = express.Router();
const produtoController = new ProdutoController();

router.post('/produtos', produtoController.criar);
router.get('/produtos/:id', produtoController.buscarPorId);
router.get('/produtos', produtoController.buscarTodos);
router.delete('/produtos/:id', produtoController.deletar);

export default router;