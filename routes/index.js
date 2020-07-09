const express = require('express');
const router = express.Router();

// @desc    Login/Landing page
// @route   GET /
router.get('/', (req, rsp) =>  {
    rsp.render('pages/login', {page_name: 'Login'});
});

// @desc    Dashboard
// @route   Get /dashboard
router.get('/dashboard', (req, rsp) => {
    rsp.render('pages/dashboard', {page_name: 'Dashboard'});
});

module.exports = router;