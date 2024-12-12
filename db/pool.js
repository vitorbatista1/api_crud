import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
    user: 'vitorbatista1',
    host: 'localhost',
    database: 'gerenciamento_estoque',
    password: '1234',
    port: 5432,
});

export default pool;