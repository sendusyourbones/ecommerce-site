const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories, include associated Product data
  try {
    const categoriesData = await Category.findAll({
      include: [{ model: Product }],
    });
    res.json(categoriesData);
  } catch (error) {
    res.status(500).json({error});
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value, include associated Product data
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });
    res.json(categoryData);
  } catch (error) {
    res.status(500).json({error});
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const newCategory = await Category.create({
      category_name: req.body.category_name,
    });
    res.json(newCategory);
  } catch (error) {
    res.status(500).json({error});
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const updatedRowCount = await Category.update({
      category_name: req.body.category_name,
    },
    {
      where: {
        id: req.params.id,
      },
    });
    res.json(updatedRowCount);
  } catch (error) {
    res.status(500).json({error});
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const deletedRowCount = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json(deletedRowCount);
  } catch (error) {
    res.status(500).json({error});
  }
});

module.exports = router;
