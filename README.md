# preview.morganevans.io

## Developing

morganevans.io is a static web page. It uses Gulp as a build tool to prepare files, prefix CSS, and optimize images.

Development dependencies are NPM, Bower, and Gulp.

Clone the project and `npm install && bower install` to resolve dependencies.

#### BrowserSync

Gulp compiles Sass to the `dist` directory and BrowserSync makes a local server available for testing.

```bash
gulp serve
```

## Building

The default Gulp task lints the code and builds the source files to the `/dist` directory.

```bash
gulp
```

From there, you can publish to GitHub pages or a webserver.

```bash
git subtree push --prefix dist origin gh-pages
```

## To Do

* Switch to a new theme; requirements:
     - uses a CSS organization system, such as smacss or bem
     - uses ems for sizing
     - uses sass + color variables
* Reduce the page size-- uncss + google cdn assets?
* Add some basic tests of functionality
* Debug + improve build pipeline; commit hooks; maybe travis
* Move to AWS S3