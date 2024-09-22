const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

router.post('/', UserController.create);
router.get('/:username', UserController.getbyUsername);
router.get('/', UserController.getAllUser);
router.put('/:username', UserController.updatePassword);
router.delete('/:username', UserController.deleteUser);
router.post('/login', UserController.login);

module.exports = router;