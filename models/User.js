import { model, models, Schema } from "mongoose";

const userSchima = new Schema({
  name: String,
});

const User = models.User || model("User", userSchima);

export default User;
