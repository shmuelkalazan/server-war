import { model, Schema, Types } from "mongoose";
import { resources } from "../types/resources";
import { boolean } from "zod";

export interface Ilaunch {
  _id: string;
  organizationId:string
  type: string;
  orgLaunche: string;
  to: string;
  intercepted: boolean;
  interceptedBy: string;
}

const launchSchema = new Schema<Ilaunch>({
  type: String,
  orgLaunche: String,
  to: String,
  intercepted: {
    type: Boolean,
    default: false,
  },
  interceptedBy: String,
});

export default model("Launch", launchSchema);
