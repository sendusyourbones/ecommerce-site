const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// get all categories with associated Product data
router.get('/', async (req, res) => {
  try {
    const categoriesData = await Category.findAll({
      include: [{ model: Product }],
    });
    res.json(categoriesData);
  } catch (error) {
    res.status(500).json({error});
  }
});

// get one category with associated Product data
router.get('/:id', async (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });
    res.json(categoryData);
  } catch (error) {
    res.status(500).json({error});
  }
});

// create a new category
router.post('/', async (req, res) => {
  try {
    const newCategory = await Category.create({
      category_name: req.body.category_name,
    });
    res.json(newCategory);
  } catch (error) {
    res.status(500).json({error});
  }
});

// update a category
router.put('/:id', async (req, res) => {
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

// delete a category
router.delete('/:id', async (req, res) => {
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
