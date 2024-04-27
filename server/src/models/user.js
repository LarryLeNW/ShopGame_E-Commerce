"use strict";
const { Model } = require("sequelize");
const crypto = require("crypto");
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
        createPasswordChangedToken = async () => {
            const resetToken = crypto.randomBytes(32).toString("hex");
            this.passwordResetToken = crypto
                .createHash("sha256")
                .update(resetToken)
                .digest("hex");
            this.passwordResetExpires = Date.now() + 15 * 60 * 1000;
            await this.save();
            return resetToken;
        };
    }
    User.init(
        {
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            password: DataTypes.STRING,
            sdt: DataTypes.STRING,
            money: DataTypes.DOUBLE,
            address: DataTypes.STRING,
            avatar: DataTypes.STRING,
            birthday: DataTypes.BIGINT,
            roleId: DataTypes.STRING,
            typeLogin: DataTypes.STRING,
            passwordResetToken: DataTypes.STRING,
            passwordResetExpires: DataTypes.STRING,
            tokenLogin: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "User",
        }
    );
    return User;
};
