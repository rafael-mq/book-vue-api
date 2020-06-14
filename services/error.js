const { error } = require('../constants');

const service = {
    handle: async function (response, err) {
        if (err.message == error.BAD_REQUEST) {
            response.sendStatus(400);
        } else if (err.message == error.UNAUTHORIZED) {
            response.sendStatus(401);
        } else if (err.message == error.PAYMENT_REQUIRED) {
            response.sendStatus(402);
        } else if (err.message == error.INACTIVE) {
            response.sendStatus(403);
        } else if (err.message == error.NOT_FOUND) {
            response.sendStatus(404);
        } else if (err.message == error.CONFLICT) {
            response.sendStatus(409);
        } else {
            response.sendStatus(500);
        }
    }
};

module.exports = service;