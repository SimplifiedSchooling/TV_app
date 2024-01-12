const mongoose = require('mongoose');
const { toJSON, paginate } = require('../plugins');

const loanSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    amount: {
      type: Number,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
loanSchema.plugin(toJSON);
loanSchema.plugin(paginate);

const Loan = mongoose.model('Loan', loanSchema);

module.exports = Loan;
