// This will export a function that will be able to create stings and random letters and numbers

module.exports = () => 
 Math.floor((1 + Math.random()) * 0x1000)
 .toString(16)
 .substring(1); 