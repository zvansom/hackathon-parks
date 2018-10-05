const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');
const issueController = require('../controllers/issueController');
const { catchErrors } = require('../handlers/errorHandlers')

// Do work here
router.get('/', homeController.home);

//
// issues
//
router.get('/issues', issueController.viewAllIssues);
router.get('/issues/new', issueController.openNewIssue);
router.post('/issues', authController.isLoggedIn,
  issueController.submitNewIssue);
router.get('/issues/:id', issueController.getIssueDetails);

router.get('/login', userController.loginForm);
router.post('/login', authController.login);

router.get('/register', userController.registerForm);
router.post('/register',
  // 1. Validate the registration data
  userController.validateRegister,
  // 2. Register the user
  userController.register,
  // 3. Log the user in
  authController.login,
);

router.get('/logout', authController.logout);

router.get('/account', authController.isLoggedIn, userController.account);
router.post('/account', catchErrors(userController.updateAccount));
router.post('/account/forgot', catchErrors(authController.forgot));
router.get('/account/reset/:token', catchErrors(authController.reset));
router.post('/account/reset/:token',
  authController.confirmedPasswords,
  catchErrors(authController.update
));

module.exports = router;
