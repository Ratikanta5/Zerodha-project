const mongoose = require('mongoose');
const PositionSchema = require('../schemas/PositionsSchema');


const Position = mongoose.model('Position',PositionSchema);

module.exports  = Position;