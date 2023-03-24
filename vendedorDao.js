const VendedorModel = require('../VendedorModel');

class VendedorDao {
  static async create(vendedor) {
    const vendedorModel = new VendedorModel(vendedor.nome, vendedor.email, vendedor.cpf, vendedor.metas);
    const id = await vendedorModel.save();
    return id;
  }

  static async findAll() {
    const vendedores = await VendedorModel.findAll();
    return vendedores;
  }

  static async findById(id) {
    const vendedor = await VendedorModel.findById(id);
    return vendedor;
  }
}

export default Vendedordao;
