'use strict';

/*
* Require the path module
*/
const path = require('path');

/*
 * Require the Fractal module
 */
const fractal = module.exports = require('@frctl/fractal').create();

/*
* Set the engines
*/
const twigAdapter = require('@frctl/twig')();
fractal.docs.engine(twigAdapter);
fractal.components.engine(twigAdapter);

/*
 * Give your project a title.
 */
fractal.set('project.title', 'Crafty Coffee');
fractal.set('project.author', 'Ryan Irelan');
fractal.set('project.version', '0.1');


/*
 * Tell Fractal where to look for components.
 */
fractal.components.set('path', path.join(__dirname, 'components'));
fractal.components.set('ext', '.twig');

/*
 * Tell Fractal where to look for documentation pages.
 */
fractal.docs.set('path', path.join(__dirname, 'docs'));
fractal.docs.set('ext', '.twig');

/*
 * Tell the Fractal web preview plugin where to look for static assets.
 */
fractal.web.set('static.path', path.join(__dirname, 'build'));

// require the Mandelbrot theme module
const mandelbrot = require('@frctl/mandelbrot');


// create a new instance with custom config options
const craftquest = mandelbrot({
    skin: 'black',
    nav: ['search', 'docs', 'components'],
    highlightStyles: 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.5.0/styles/monokai.min.css',
    favicon: 'https://craftycasts-com-userphotos.s3.amazonaws.com/craftquest-social-square-400x400.png',
});

// tell Fractal to use the configured theme by default
fractal.web.theme(craftquest);