const hobbiesRouteMiddleware = (req, res, next) => {
    console.log("Time: ", Date.now());
    next();
  };
  
  const hobbiesGetRouteMiddleware = (req, res, next) => {
    console.log("GET middleware");
    next();
  };
  
module.exports = { hobbiesRouteMiddleware, hobbiesGetRouteMiddleware };