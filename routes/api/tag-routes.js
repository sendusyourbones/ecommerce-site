const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags, include associated Product data
  try {
    const tagsData = await Tag.findAll({
      include: [{ model: Product }],
    });
    res.json(tagsData);
  } catch (error) {
    res.status(500).json({error});
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`, include associated Product data
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: [{ model: Product }],
    });
    res.json(tagData);
  } catch (error) {
    res.status(500).json({error});
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const newTag = await Tag.create({
      tag_name: req.body.tag_name,
    });
    res.json(newTag);
  } catch (error) {
    res.status(500).json({error});
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
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

router.delete('/:id', async (req, res) => {
  // delete a tag by its `id` value
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
