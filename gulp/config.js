'use strict';

var ports = {
  browser: 3000,
  ui: 3001,
};

var directories = {
  src: './src',
  resources: './resources',
  build: './build',
  nodeModules: './node_modules',
};

var files = {
  scss: [
    `${directories.src}/**/*.scss`,
  ],
  js: [
    `${directories.src}/**/*.js`,
  ],
  vector: [
    `${directories.resources}/**/*.+(svg)`,
  ],
  img: [
    `${directories.resources}/**/*.{jpg,png,gif}`,
  ],
  fonts: [
    `${directories.src}/theme/fonts/**/*.{eot,svg,ttf,woff,woff2}`,
  ],
  html: [
    `${directories.src}/views/*.html`,
  ],
  vendor: {
    scss: [
      `${directories.nodeModules}/bootstrap/scss`,
    ],
    js: [
      `${directories.nodeModules}/jquery/dist/jquery.js`,
      `${directories.nodeModules}/tether/dist/js/tether.js`,
      `${directories.nodeModules}/popper.js/dist/umd/popper.js`,
      `${directories.nodeModules}/bootstrap/dist/js/bootstrap.js`,
    ],
    img: [
      // `${directories.bowerComponents}/ionic/release/img/**.{jpg,png,gif}`,
    ],
    fonts: [
      // `${directories.nodeModules}/font-awesome/fonts/**.{eot,svg,ttf,woff,woff2}`,
    ],
  },
};

var config = {
  directories: directories,
  files: files,
  ports: ports,
};

module.exports = config
