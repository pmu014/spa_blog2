'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Post.init({
    postId : {
      primaryKey :true,
      type:DataTypes.INTEGER,
    },
    userId: DataTypes.INTEGER,
    nickname: DataTypes.STRING,
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    likes: {
      defaultValue : 0,
      type:DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};