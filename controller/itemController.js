const itemService = require('../service/itemService');

exports.getAll = async (req, res) => {
  const items = await itemService.fetchAll();
  res.json(items);
};

exports.createItem = async (req, res) => {
  try {
    const item = await itemService.create(req.body);
    res.status(201).json(item);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updateItem = async (req, res) => {
  const updated = await itemService.update(req.params.id, req.body);
  res.json(updated);
};

exports.deleteItem = async (req, res) => {
  await itemService.delete(req.params.id);
  res.json({ message: 'Item deleted' });
};
