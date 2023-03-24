import database from "./bd.js";

database.connection.connect();

database.connection.query(
  "CREATE TABLE `ztech`.`vendedores` (`idVendedores` INT NOT NULL AUTO_INCREMENT, `nome` VARCHAR(255) NOT NULL, `email` VARCHAR(255) NOT NULL, `cpf` VARCHAR(11) NOT NULL,`metas_atingidas` INT NOT NULL,PRIMARY KEY (`idVendedores`));",
  function (error, results, fields) {
    if (error) {
      console.log(error);
    } else {
      console.log("tabela usuarios criada com sucesso");
    }
  }
);
database.connection.query(
    "INSERT INTO vendedores (nome, email, cpf, metas_atingidas) VALUES('João', 'joao@gmail.com', '12345678901', 50),('Maria', 'maria@hotmail.com', '98765432101', 80),('Pedro', 'pedro@yahoo.com', '45678912301', 60);",
    function (error, results, fields) {
      if (error) {
        console.log(error);
      } else {
        console.log("tabela usuarios populada com sucesso");
      }
    }
  );

database.connection.end();






