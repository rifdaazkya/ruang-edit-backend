module.exports = ({ env }) => ({
    'users-permissions': {
      config: {
      jwtSecret: env('JWT_SECRET'),
      },
    },

    // uncomment before push
    // upload: {
    //   config: {
    //     provider: 'cloudinary',
    //     providerOptions: {
    //       cloud_name: env('CLOUDINARY_NAME'),
    //       api_key: env('CLOUDINARY_KEY'),
    //       api_secret: env('CLOUDINARY_SECRET'),
    //     },
    //     actionOptions: {
    //       upload: {},
    //       delete: {},
    //     },
    //   },
    // },
  });
