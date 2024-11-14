import { model, Schema, Types } from "mongoose";
import { resources } from "../types/resources";

export interface Iuser {
  username: string;
  password: string;
  organization: string;
  location: string;
  resources: resources[];
  budget: number;
}

const userSchema = new Schema<Iuser>({
  username: String,
  password: String,
  organization: String,
  location: String,
  resources: {
    type: [
      {
        name: String,
        amount: Number,
      },
    ],
  },
  budget: String,
});

export default model("User", userSchema);
