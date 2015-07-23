// Webpack installed rather than sprockets

// Style for all pages
require("../stylesheets/application.scss");
require("../stylesheets/grid.sass");

// Required for all pages
require("expose?NavBar!./components/Application/NavBar.js.jsx");

// Required for any post listings
require("expose?PostList!./components/Posts/PostList.js.jsx");

// Required for post summary pages (includes Comment)
require("expose?PostSummary!./components/Posts/PostSummary.js.jsx");
