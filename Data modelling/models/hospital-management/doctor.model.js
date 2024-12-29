import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },'orderSchema'
    age: {
      type: Number,
      required: true,
    },

    qualificatins: {
      type: String,
      required: true,
    },
    specialization: {
      type: String,
      required: true,
    },
    worksInHospital: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "hospital",
      },
    ],
    salary: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);
export const doctor = mongoose.Schema("doctor", doctorSchema);
