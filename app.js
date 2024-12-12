import express from 'express';
import cors from 'cors';
import produtoRouter from './routes/produto.js';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use('/produtos', produtoRouter);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});