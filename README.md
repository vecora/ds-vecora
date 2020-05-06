# Style guide for Vecora

## Usage

To use the styles, copy everything in the `dist` folder to your web root.

Read the [documentation](https://owe.github.io/style-guide/) for more information.

## Build instructions

### Building the style guide

1. Install [Node.js](https://nodejs.org/), if it's not already installed.

2. Open Terminal in the folder where the repository is located.

3. Install [Gulp](https://gulpjs.com/) globally, if it's not already installed, by typing `sudo npm install -g gulp-cli`.

4. Install dependencies locally by typing `npm install --save-dev`.

5. Type `gulp` to build. Build files are located in the `dist` folder. Alternatively type `gulp watch` to watch for changes in the `src` folder and build continuously as files are changed. You can type `gulp watch --cp [path]` to automatically copy the built files somewhere. **Warning:** if you provide the `--copy` option _and do not provide a path_ the files are automatically copied to `../project/public/`. This behaviour is obviously subject to change in future updates.

`gulp watch --copy`
`gulp watch --copy ../project/public/`

### Building the documentation

#### macOS Catalina

Assuming Xcode is already installed.

1. `cd docs`

2. `gem install --user-install bundler jekyll`

3. `bundle config set path 'vendor/bundle'`

4. `bundle install`

5. `bundle exec jekyll serve`
