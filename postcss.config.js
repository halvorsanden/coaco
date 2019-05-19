module.exports = {
    plugins: {
      'postcss-import': {},
      'postcss-simple-vars': {},
      'postcss-nested': {},
      'autoprefixer': {
        grid: true,
        browsers: ['last 2 versions', '> 8%'],
      },
      'cssnano': {
       removeQuotes: false
      },
    },
  };