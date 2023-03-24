import bd from "../infra/bd.js";

const vendedoresModel = {
  modelar: (obj) => {
    return {
      nome: obj.nome,
      email: obj.email,
      cpf: obj.cpf,
      metas: obj.metas,
    };
  },
  armazenar: (obj) => {
    const modelado = vendedoresModel.modelar(obj);
    bd.vendedores.push(modelado);
    return {
      dados: { msg: "Vendedor cadastrado com sucesso" },
      status: 201,
    };
  },
  mostarTodos: () => {
    return {
      dados: { msg: bd.vendedores },
      status: 200,
    };
  },
  mostrarUm: (param) => {
    const data = bd.vendedores.find((usuario) => vendedores.email === param);
    return {
      dados: {
        msg: data,
      },
      status: 200,
    };
  },
  deletar: (param) => {
    const data = bd.vendedores.find(usuario => vendedores.email === param)
    const index = bd.vendedores.indexOf(data)
    bd.vendedores.splice(index, 1)
    return {
      dados: {
        msg: `vendedor com parametro : ${param} deletado com sucesso`,
      },
      status: 200,
    };
  },
};

export default vendedoresModel;
