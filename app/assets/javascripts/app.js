// Webpack installed rather than sprockets

// Required for all pages
require("../stylesheets/application.scss");
require("expose?NavBar!./components/Application/NavBar.js.jsx");

// Required for any post listings
require("expose?PostTitle!./components/Posts/PostTitle.js.jsx");
require("expose?PostList!./components/Posts/PostList.js.jsx");

// Required for post summary pages (includes Comment)
require("expose?PostSummary!./components/Posts/PostSummary.js.jsx");
