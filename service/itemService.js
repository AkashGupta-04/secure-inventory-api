const Item = require('../model/itemSchema');

exports.fetchAll = async () => {
  return await Item.find();
};

exports.create = async (payload) => {
  if (!payload.name || !payload.qty || !payload.rate) {
    throw new Error('All fields are required');
  }

  const item = new Item(payload);
  return await item.save();
};

exports.update = async (id, payload) => {
  return await Item.findByIdAndUpdate(id, payload, { new: true });
};

exports.delete = async (id) => {
  return await Item.findByIdAndDelete(id);
};
