const Movie = require('../models/Movie');

const createMovie = async (req, res) => {
    try {
        const newMovie = await Movie.create(req.body);
        res.send('Le film a été ajouté avec succès');
    } catch (err) {
        console.error(err);
        res.status(500).send('Une erreur s\'est produite lors de la création du film.');
    }
};

const allMovies = async (req, res) => {
    try {
        const allMovies = await Movie.find();
        res.send(allMovies);
    } catch (err) {
        console.error(err);
        res.status(500).send('Une erreur s\'est produite lors de la récupération des films.');
    }
};

const findByTitle = async (req, res) => {
    try {
        const movieByTitle = await Movie.findOne({ title: req.params.title });
        res.send(movieByTitle);
    } catch (err) {
        console.error(err);
        res.status(500).send('Une erreur s\'est produite lors de la récupération du film.');
    }
};

const updateById = async (req, res) => {
    try {
        const updatedMovie = await Movie.findOneAndUpdate(
            {_id: req.params.id},
            {$set: req.body},
            {new: true}
        );
        res.send(updatedMovie);
    } catch (err) {
        console.error(err);
        res.status(500).send('Une erreur s\'est produite lors de la mise à jour du film.');
    }
};

const deleteById = async (req, res) => {
    try {
        await Movie.findByIdAndDelete({ _id: req.params.id });
        res.send('Le film a été supprimé avec succès');
    } catch (err) {
        console.error(err);
        res.status(500).send('Une erreur s\'est produite lors de la suppression du film.');
    }
};

module.exports = {
    createMovie,
    allMovies,
    findByTitle,
    updateById,
    deleteById
};