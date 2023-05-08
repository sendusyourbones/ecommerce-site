const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// get all tags with associated Product data
router.get('/', async (req, res) => {
  try {
    const tagsData = await Tag.findAll({
      include: [{ model: Product }],
    });
    res.json(tagsData);
  } catch (error) {
    res.status(500).json({error});
  }
});

// get a single tag with associated Product data
router.get('/:id', async (req, res) => {
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: [{ model: Product }],
    });
    res.json(tagData);
  } catch (error) {
    res.status(500).json({error});
  }
});

// create a new tag
router.post('/', async (req, res) => {
  try {
    const newTag = await Tag.create({
      tag_name: req.body.tag_name,
    });
    res.json(newTag);
  } catch (error) {
    res.status(500).json({error});
  }
});

// update a tag's name
router.put('/:id', async (req, res) => {
  try {
    const updatedRowCount = await Tag.update({
      tag_name: req.body.tag_name,
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

// delete a tag
router.delete('/:id', async (req, res) => {
  try {
    const deletedRowCount = await Tag.destroy({
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
