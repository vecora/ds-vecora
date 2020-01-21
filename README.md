# Style guide for Vecora

## Usage

To use the styles, copy everything in the `dist` folder to your web root.

Read the [documentation](https://vecora.github.io/sg-vecora/docs/) for more information.

## Build instructions

### Building the style guide

1. Install [Node.js](https://nodejs.org/), if it's not already installed.

2. Open Terminal in the folder where the repository is located.

3. Install [Gulp](https://gulpjs.com/) globally, if it's not already installed, by typing `sudo npm install -g gulp-cli`.

4. Install dependencies locally by typing `npm install --save-dev`.

5. Type `gulp` to build. Build files are located in the `dist` folder. Alternatively type `gulp watch` to watch for changes in the `src` folder and build continuously as files are changed. You can type `gulp watch --cp [path]` to automatically copy the built files somewhere. **Warning:** if you provide the `--cp` option _and do not provide a path_ the files are automatically copied to `../craft-vecora.no/web/`. This behaviour is obviously subject to change in future updates.

### Building the documentation

#### macOS Catalina

Assuming Xcode is already installed.

1. `gem install --user-install bundler jekyll`

2. `bundle install --path vendor/bundle`

3. `bundle exec jekyll serve`


#### macOS Mojave

1. `sudo xcode-select --install`

2. `open /Library/Developer/CommandLineTools/Packages/macOS_SDK_headers_for_macOS_10.14.pkg`

3.
```
echo '# Install Ruby Gems to ~/gems' >> ~/.bashrc
echo 'export GEM_HOME=$HOME/gems' >> ~/.bashrc
echo 'export PATH=$HOME/gems/bin:$PATH' >> ~/.bashrc
source ~/.bashrc
```

4. `gem install bundler jekyll` (locally. no sudo)

5. `bundle install`

6. `bundle exec jekyll serve`
