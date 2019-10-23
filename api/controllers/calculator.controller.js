"use strict";

import Operation from '../models/calculator.model';


const listOperations = async (req, res) => {
  const operations = await Operation.find({});
  res.json(operations);
};

const createOperation = async (req, res) => {
  const newOperation = new Operation(req.body);

  const savedOperation = await newOperation.save();
  res.json(savedOperation);
};

export { listOperations, createOperation };
