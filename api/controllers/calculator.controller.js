"use strict";

import { Model } from "mongoose";

const OperationModel = Model("Operation");

const listOperations = async (req, res) => {
  const operations = await OperationModel.find({});
  res.json(operations);
};

const createOperation = async (req, res) => {
  const newOperation = new OperationModel(req.body);

  const savedOperation = await newOperation.save();
  return savedOperation;
};

export { listOperations, createOperation };
