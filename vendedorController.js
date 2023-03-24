const express = require('express');

const router = express.Router();

const VendedorDao = require('../vendedorDao.js');

router.post('/', async (req, res) => {

  try {

    const id = await VendedorDao.create(req.body);

    res.status(201).json({ id: id });

  } catch (err) {

    console.error(err);

    res.status(500).json({ error: 'Failed to create vendedor' });

  }

});

router.get('/', async (req, res) => {

  try {

    const vendedores = await VendedorDao.findAll();

    res.status(200).json(vendedores);

  } catch (err) {

    console.error(err);

    res.status(500).json({ error: 'Failed to retrieve vendedores' });

  }

});

router.get('/:id', async (req, res) => {

  try {

    const vendedor = await VendedorDao.findById(req.params.id);

    if (!vendedor) {

      res.status(404).json({ error: 'Vendedor not found' });

    } else {

      res.status(200).json(vendedor);

    }

  } catch (err) {

    console.error(err);

    res.status(500).json({ error: 'Failed to retrieve vendedor' });

  }

});

export default Vendedorcontroller;
