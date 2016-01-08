module.exports = {
  
  // Telescope
  master: false,
  server: true,
  compiler: true,

  // Server settings.
  port: 5000,

  paths:[
    {
      url: '/',
      source: 'dist/public',
    },
    {
      url:'/assets',
      source: 'dist/assets'
    },
    {
      url: '/preview',
      source: 'dist/preview'
    }
  ],

  // Compile settings.
  dist: 'dist', // Distribution
  compile:[
    {
      source: 'design',
      dist: 'design'
    },
    {
      source: 'photography',
      dist: 'photography'
    },
    {
      source: 'lab',
      dist: 'lab'
    },
    {
      source: 'coding',
      dist: 'coding'
    },
    {
      source: 'blog',
      dist: 'blog'
    }
  ]
};