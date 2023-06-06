const { StatusCodes } = require("http-status-codes");
const CustomeAPIError = require("./custom-api");

class BadRequestError extends CustomeAPIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.BAD_REQUEST;
  }
}

module.exports = BadRequestError;
