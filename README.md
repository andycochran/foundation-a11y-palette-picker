# Foundation A11y-Compliant Color Palette Picker

This tool helps you choose an a11y-compliant color palette to use with Foundation by determining which colors meet WCAG 2.0 level AA contrast requirements.

## Requirements

- [NodeJS](https://nodejs.org/en/) (0.12 or greater)
- [Git](https://git-scm.com/)

## Setup

First download it with Git:

```bash
git clone https://github.com/andycochran/foundation-a11y-palette-picker
```

Then open the folder in your command line, and install the needed dependencies:

```bash
cd foundation-a11y-palette-picker
npm install
bower install
```

Finally, run `npm start` to run the Sass compiler. It will re-run every time you save a Sass file.

## Updating Foundation

When updating to a new version of Foundation, run `gulp foundation` to copy the JavaScript files from `bower_components`. 
