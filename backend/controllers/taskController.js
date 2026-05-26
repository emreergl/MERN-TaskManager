const Task = require('../models/Task');

exports.getTasks = async (req, res) => {
    try {
        const tasks = await Task.find({ user: req.user.id }).populate('category');
        res.json(tasks);
    } catch (err) {
        res.status(500).send('Sunucu hatasi');
    }
};

exports.createTask = async (req, res) => {
    try {
        const { title, description, category } = req.body;
        const newTask = new Task({ title, description, category, user: req.user.id });
        const task = await newTask.save();
        res.json(task);
    } catch (err) {
        res.status(500).send('Sunucu hatasi');
    }
};

exports.updateTask = async (req, res) => {
    try {
        let task = await Task.findById(req.params.id);
        if (!task) return res.status(404).json({ message: 'Gorev bulunamadi' });
        if (task.user.toString() !== req.user.id) return res.status(401).json({ message: 'Yetkisiz islem' });

        task = await Task.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        res.json(task);
    } catch (err) {
        res.status(500).send('Sunucu hatasi');
    }
};

exports.deleteTask = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) return res.status(404).json({ message: 'Gorev bulunamadi' });
        if (task.user.toString() !== req.user.id) return res.status(401).json({ message: 'Yetkisiz islem' });

        await Task.findByIdAndDelete(req.params.id);
        res.json({ message: 'Gorev silindi' });
    } catch (err) {
        res.status(500).send('Sunucu hatasi');
    }
};
