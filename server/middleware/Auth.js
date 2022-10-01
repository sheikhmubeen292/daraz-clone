function authUser(req, res, next) {
  try {
    if (req.body.email == null) {
      return res.status(403).json("You need to sign in");
    }
    next();
  } catch (e) {
    next(e);
  }
}

function authRole(role) {
  return (req, res, next) => {
    if (req.body.role !== role) {
      res.status(401);
      return res.send("Not allowed");
    }

    next();
  };
}

export { authUser, authRole };
