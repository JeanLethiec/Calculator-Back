"use strict";

import { listOperations, createOperation } from '../controllers/calculator.controller';

export default (application) => {
  application
    .route("/operation")
    .get(listOperations)
    .post(createOperation)
};
