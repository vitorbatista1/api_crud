import pool from "../db/Pool";


class Produto {
    async criar(nome_produto, preco_entrada_produto, preco_venda_produto, fabricante_produto, quantidade_produto) {
        try {

            const result = await pool.query(
                'INSERT INTO products (nome_produto, preco_entrada_produto, preco_venda_produto, fabricante_produto, quantidade_produto) VALUES ($1, $2, $3, $4, $5) RETURNING *',
                [nome_produto, preco_entrada_produto, preco_venda_produto, fabricante_produto, quantidade_produto]
            );
            return result.rows[0]; 
        } catch (error) {
            throw error;
        }
    }


    async buscarPorId(id) {
        try {

            const result = await pool.query('SELECT * FROM products WHERE id = $1', [id]);

            if(result.rows.length === 0){
                return null;
            }
            return result.rows[0];
        } catch (error) {
            throw error;
        }
    }

    async buscarTodos(){
        try {

            const result = await pool.query('SELECT * FROM products');
            return result.rows;
            
        } catch (error) {
            throw error;
        }
    }


    async deletar(id){
        try {
            const result = await pool.query('DELETE FROM products WHERE id = $1 RETURNING *', [id]);
            if (result.rowCount === 0){
                return null;
            }
            return result.rows[0]
        } catch (error) {
            throw error;
        }
    }
}

export default Produto;