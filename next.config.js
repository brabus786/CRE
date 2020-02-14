const withImages = require('next-images');
const withStyles = require('@webdeb/next-styles');

module.exports = withImages(withStyles({
    sass: true, // use .scss files
    modules: true, // style.(m|module).css & style.(m|module).scss for module files
}));

