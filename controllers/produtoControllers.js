// import Produto from "../models/produtoModels";
import Produto from "../models/produtoModels";


class ProdutoController {
    async criar(req, res){
        const { nome_produto, preco_entrada_produto, preco_venda_produto, fabricante_produto, quantidade_produto } = req.body;

        if (!nome_produto || !preco_entrada_produto || !preco_venda_produto || !fabricante_produto || !quantidade_produto){
            return res.status(400).json({
                error: 'Campos obrigatórios ausentes. Certifique-se de enviar todos os campos completos.'
            })
        }

        try {
            const produto = await Produto.criar(nome_produto, preco_entrada_produto, preco_venda_produto, fabricante_produto, quantidade_produto);
            res.status(201).json(produto);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro ao inserir produto'});
        }
    }

    async buscarPorId(req, res){
        const id = req.params.id;
        try {
            const produto = await Produto.buscarPorId(id);
            if(!produto){
                return res.status(404).json({ mensagem: 'Produto não encontrado' });
            }
            res.status(200).json(produto);
        } catch (error) {
            console.error(error);
            res.status(500).send('Erro no servidor');
        }
    }

    async buscarTodos(req, res) {
        try {
          const produtos = await Produto.buscarTodos();
          if (produtos.length === 0) {
            return res.status(404).json({ mensagem: 'Nenhum produto encontrado' });
          }
          res.json(produtos);
        } catch (error) {
          console.error(error);
          res.status(500).send('Erro ao buscar produtos');
        }
    }


    async deletar(req, res) {
        const id = req.params.id;
        try {
          const produto = await Produto.deletar(id);
          if (!produto) {
            return res.status(404).json({ mensagem: 'Produto não encontrado' });
          }
          res.status(200).json({ mensagem: 'Produto deletado com sucesso' });
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'Erro ao deletar produto' });
        }
    }
    
}

export default ProdutoController;
