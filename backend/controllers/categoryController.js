const Category = require('../models/Category');

exports.getCategories = async (req, res) => {
    try {
        const categories = await Category.find({ user: req.user.id });
        res.json(categories);
    } catch (err) {
        res.status(500).send('Sunucu hatasi');
    }
};

exports.createCategory = async (req, res) => {
    try {
        const { name } = req.body;
        const newCategory = new Category({ name, user: req.user.id });
        const category = await newCategory.save();
        res.json(category);
    } catch (err) {
        res.status(500).send('Sunucu hatasi');
    }
};
