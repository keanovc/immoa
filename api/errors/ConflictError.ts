import BaseError from "./BaseError";

export default class ConflictError extends BaseError {
    constructor() {
        super("Already Exists", 409);
    }
}
