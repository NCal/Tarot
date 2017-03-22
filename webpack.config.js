var webpack = require('webpack');
var WebpackCleanupPlugin = require('webpack-cleanup-plugin');
var isProd = (process.env.NODE_ENV === 'production');

function getPlugins(){
   var plugins = [];

   plugins.push( new webpack.DefinePlugin({
      'process.env':{
         'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
   }));

   if (isProd) {
         plugins.push(new webpack.IgnorePlugin(/jsdom$/));

         plugins.push(new webpack.optimize.UglifyJsPlugin({
           comments: false,
           compress: {
             // remove warnings
             warnings: false,
             // Drop console statements
             drop_console: true
           },
          }));

         plugins.push(new WebpackCleanupPlugin());

     }

   else {

   }

   return plugins;
}

module.exports = {
   entry: './src/index.js',
   output: {
      filename: 'bundle.js',
      path: __dirname + '/build'
   },
   plugins: getPlugins(),
   module: {
      loaders: [
         {
            test: /\.js$/,
            exclude: /node_modules/,
            loaders: ['react-hot', 'babel-loader'] 
         },
            {
            test: /\.scss$/,
            loader: 'style!css!sass?sourceMap'
         },
         {
            test: /\.css$/,
            loader: 'style-loader!css-loader' 
         },

      ]
   }
};




// var webpack = require('webpack');
// var webpackUglifyJsPlugin = require('webpack-uglify-js-plugin');

// module.exports = {
//    entry: './src/index.js',
//    plugins:[
//          new webpack.DefinePlugin({
//             'process.env':{
//                'NODE_ENV': JSON.stringify('production')
//             }
//          }),

//         // new webpack.IgnorePlugin(/jsdom$/),


//          // new webpackUglifyJsPlugin({
//          //    cacheFolder: __dirname+ 'public/cached_uglify/',
//          //    debug: false,
//          //    sourceMap: false,
//          //    drop_console: true,
//          //    output: {
//          //       comments: false 
//          //    },
//          //    compressor: {
//          //       warnings: false
//          //    }
//          // })
//    ],

//    module: {
//       loaders: [
//          {
//             test: /\.js$/,
//             exclude: /node_modules/,
//             loaders: ['react-hot', 'babel-loader'] 
//          },
//             {
//             test: /\.scss$/,
//             loader: 'style!css!sass?sourceMap'
//          },
//          {
//             test: /\.css$/,
//             loader: 'style-loader!css-loader' 
//          },

//       ]
//    },
//    output: {
//       filename: 'bundle.js',
//       path: __dirname + '/build'
//    },
// };