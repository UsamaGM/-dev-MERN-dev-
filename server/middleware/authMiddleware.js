import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import dotenv from "dotenv";

dotenv.config();

async function protect(req, res, next) {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      if (!token) {
        res.status(401).json({ message: "Not authorized, no token" });
        return;
      }

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decoded.id).select("_id email role");

      if (!req.user) {
        res.status(401).json({ message: "Not authorized, user not found" });
        return;
      }
      next();
    } catch (error) {
      console.error(error);
      res.status(401).json({ message: "Not authorized, token failed" });
    }
  }
}

function authorizeRoles(roles) {
  (req, res, next) => {
    if (!req.user) {
      res.status(401).json({ message: "Not authorized, user not found" });
    }
    if (!roles.includes(req.user.role)) {
      res.status(403).json({ message: "Forbidden, insufficient privileges." });
    }
    next();
  };
}

function authorizeAdmin(req, res, next) {
  if (req.user.role !== "teacher") {
    res.status(403).send({ error: "Unauthorized" });
  }
  next();
}

export { protect, authorizeRoles, authorizeAdmin };
