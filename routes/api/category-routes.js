const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categories = await Category.findAll({
      include: Product
    })

    res.json(categories)
  } catch (err) {
    console.log(err)
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  const catId = req.params.id

  try {
    const category = await Category.findOne({
      include: Product,
      where: {
        id: catId
      }
    })

    res.json(category)
  } catch (err) {
    console.log(err)
  }
});

router.post('/', async (req, res) => {
  // create a new category
  const newCat = req.body

  try {
    const category = await Category.create(newCat)

    res.json({
      message: "New category added",
      category
    })

  } catch (err) {
    console.log(err)
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const catId = req.params.id
    const newCat = req.body.category_name
    const catToUpdate = await Category.findOne({
      where: {
        id: catId
      }
    })

    catToUpdate.category_name = newCat

    await catToUpdate.save()

    res.json({
      message: "category update successful",
      catToUpdate
    })
  } catch (err) {
    console.log(err)
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const catId = req.params.id

    const catToDestroy = await Category.findOne({
      where: {
        id: catId
      }
    })

    await catToDestroy.destroy()

    res.json({
      message: 'Category deleted successfully'
    })

  } catch (err) {
    console.log(err)
  }
});

module.exports = router;
