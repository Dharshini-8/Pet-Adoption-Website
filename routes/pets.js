const express = require('express');
const router = express.Router();
const Pet = require('../models/Pet');

// Get all pets
router.get('/', async (req, res) => {
    try {
        const pets = await Pet.find();
        res.json(pets);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create a new pet
router.post('/', async (req, res) => {
    const pet = new Pet({
        name: req.body.name,
        age: req.body.age,
        breed: req.body.breed,
        description: req.body.description
    });

    try {
        const newPet = await pet.save();
        res.status(201).json(newPet);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Get a specific pet
router.get('/:id', getPet, (req, res) => {
    res.json(res.pet);
});

// Update a pet
router.patch('/:id', getPet, async (req, res) => {
    if (req.body.name != null) {
        res.pet.name = req.body.name;
    }
    if (req.body.age != null) {
        res.pet.age = req.body.age;
    }
    if (req.body.breed != null) {
        res.pet.breed = req.body.breed;
    }
    if (req.body.description != null) {
        res.pet.description = req.body.description;
    }
    if (req.body.adopted != null) {
        res.pet.adopted = req.body.adopted;
    }

    try {
        const updatedPet = await res.pet.save();
        res.json(updatedPet);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete a pet
router.delete('/:id', getPet, async (req, res) => {
    try {
        await res.pet.remove();
        res.json({ message: 'Deleted Pet' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

async function getPet(req, res, next) {
    let pet;
    try {
        pet = await Pet.findById(req.params.id);
        if (pet == null) {
            return res.status(404).json({ message: 'Cannot find pet' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }

    res.pet = pet;
    next();
}

module.exports = router;
