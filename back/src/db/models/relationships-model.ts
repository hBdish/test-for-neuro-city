import {UserModel} from "./user-model";
import {TokenModel} from "./token-model";

UserModel.hasOne(TokenModel)
TokenModel.belongsTo(UserModel)

export {UserModel, TokenModel}
