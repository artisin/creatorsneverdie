import express from 'express'
import passport from 'passport'

import pageController from '../controllers/pageController'
import userController from '../controllers/userController'

const router = express.Router()

const apiPrefix = '/api/v1'

router.get(`${apiPrefix}/listPages`, pageController.listPages);
router.post(`${apiPrefix}/createPage`, pageController.createPage);
router.get(`${apiPrefix}/getPage`, pageController.getPage);

router.put(`${apiPrefix}/editPage/:id`, pageController.editPage);
router.delete(`${apiPrefix}/deletePage/:id`, pageController.deletePage);

router.post(`${apiPrefix}/register`, userController.register);
router.post(`${apiPrefix}/login`, userController.signin);

module.exports = router;