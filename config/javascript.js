'use strict';

module.exports = {
  // Our core JS source files. These will be copied across 

  // Third part libraries and Javacript files that are not directly related to
  // the project and not expected to change often during development time.
  //
  // Generally, these files will take longer to concat and minify than our
  // *actual* source files, so we keep them here to speed up the build process.
  vendor: {
    'https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.23/browser.min.js'
    'bower_components/react/react.js',
    'bower_components/react/react-dom.js'
  }
}