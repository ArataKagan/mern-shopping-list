const express = require('express');
const router = express.Router();

// Item Model 
const Item = require('../../models/Item');

// @route GET api/items
// @desc GET All Items
// @access Public 
router.get('/', (req, res) => {
    Item.find()
        .sort({ date: -1 })
        .then(items => res.json(items))
});

// @route POST api/items
// @desc CREATE A Item
// @access Public 
router.post('/', (req, res) => {
    const newItem = new Item({
        name: req.body.name
    });

    newItem.save().then(item => res.json(item));
});

// @route DELETE api/items/:id
// @desc CREATE A Item
// @access Public 
router.delete('/:id', (req, res) => {
   Item.findById(req.params.id)
   .then(item => item.remove().then(() => res.json({success: true})))
   .catch(err => res.status(404).json({success: false}));
})

// router.put('/:id', (req, res) => {
//     Item.findById(req.params.id, function(err, item){
//         if(err)
//             res.send(err);
//         console.log('inside of items.js');
//         if(item.isPurchased === false){
//             Item.update({'isPurchased': true});
//             console.log('set true');
//         } else {
//             Item.update({'isPurchased': false});
            
//         }
//     })
    
// })


module.exports = router;