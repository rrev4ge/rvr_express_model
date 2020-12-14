const {
  Sequelize: { BaseError },
} = require('./../models');

module.exports.sequelizeErrorHandler = (err, req, res, next) => {
 if (err instanceof BaseError ) {
     console.log('seqBaseError :>> ', err);
 }
 next(err);
};

module.exports.errorHandler = (err, req, res, next) => {
  res.status(err?.status ?? 500).send({
    data: null,
    errors: [{ title: err?.message ?? 'internal server error' }],
    meta: null,
  });
};

