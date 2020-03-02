module.exports = (sequelize, DataTypes) => {
  const Produto = sequelize.define(
    'Produto',
    {
      nome: DataTypes.STRING,
      preco: DataTypes.DECIMAL(10, 2),
      imagen: DataTypes.STRING,
      marca: DataTypes.STRING,
      modelo: DataTypes.STRING,
      promocao: DataTypes.BOOLEAN,
      descricao: DataTypes.STRING
    }
  )
  return Produto
}
