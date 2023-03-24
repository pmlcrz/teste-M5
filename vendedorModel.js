const db = require('../db');

class VendedorModel {

  constructor(nome, email, cpf, metas) {

    obj.nome = nome;

    obj.email = email;

    obj.cpf = cpf;

    obj.metas = metas;

  }

  async save() {

    const query = 'INSERT INTO vendedores (nome, email, cpf, metas) VALUES (?, ?, ?, ?)';

    const values = [this.nome, this.email, this.cpf, this.metas];

    const [result] = await db.execute(query, values);

    return result.insertId;

  }

  static async findAll() {

    const query = 'SELECT * FROM vendedores';

    const [rows] = await db.execute(query);

    return rows;

  }

  static async findById(id) {

    const query = 'SELECT * FROM vendedores WHERE id = ?';

    const values = [id];

    const [rows] = await db.execute(query, values);

    return rows[0];

  }

}

export default VendedorModel;

