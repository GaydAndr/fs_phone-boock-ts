export {}
const path = require("path");

const resolvePath=(p: string)=>path.resolve(__dirname, p);

module.exports = {
  webpack: {
    alias: {
      "@assets": resolvePath( "./src/assets"),
      "@components": resolvePath( "./src/components"),
      "@pages": resolvePath( "./src/pages"),
      "@redux": resolvePath( "./src/redux"),
      "@services": resolvePath( "./src/services"),
    },
  },

};