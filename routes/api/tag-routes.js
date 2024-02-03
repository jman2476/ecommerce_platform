const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tags = await Tag.findAll({
      include: Product
    })

    res.json(tags)
  } catch (err) {
    console.log(err)
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tag_id = req.params.id
    const tags = await Tag.findByPk(tag_id, {
      include: Product
    })

    res.json(tags)
  } catch (err) {
    console.log(err)
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const newTag = req.body
    const tag = await Tag.create(newTag)

    res.json({
      message: 'New tag created',
      tag
    })
  } catch (err) {
    console.log(err)
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const tag_id = req.params.id
    const newTagName= req.body.tag_name
    const tagToUpdate = await Tag.findByPk(tag_id)

    tagToUpdate.tag_name = newTagName

    await tagToUpdate.save()

    res.json({
      message: 'Tag updated successfully',
      tagToUpdate
    })

  } catch (err) {
    console.log(err)
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const tag_id = req.params.id
    const tagToDelete = await Tag.findByPk(tag_id)

    await tagToDelete.destroy()

    res.json({
      message: 'Tag annihilated'
    })
  } catch (err) {
    console.log(err)
  }
});

module.exports = router;
