module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-theme-ui/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-mdx/gatsby-browser.js'),
      options: {"plugins":[],"extensions":[".mdx",".md"],"defaultLayouts":{"default":"C:\\stoanc\\projects\\Portfolio\\node_modules\\@pauliescanlon\\gatsby-theme-terminal\\src\\layouts\\PageLayout.js"}},
    },{
      plugin: require('../node_modules/@pauliescanlon/gatsby-theme-terminal/gatsby-browser.js'),
      options: {"plugins":[],"source":["posts","projects"]},
    }]
