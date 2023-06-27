function multipleMongooseObject(mongooseArrays) {
    return mongooseArrays.map((mongooseArray) => mongooseArray.toObject());
}

function mongooseToObject(mongoose) {
    return mongoose ? mongoose.toObject() : mongoose;
}

export { multipleMongooseObject, mongooseToObject };
