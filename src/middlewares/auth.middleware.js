import jwt from "jsonwebtoken";
import "dotenv/config";

const authenticate = (req, res, next) => {
  try {
    const authorization = req.headers.authorization;

    if (!authorization) {
      throw {
        status: 401,
        message: "No authorization token",
      };
    }
    const token = authorization.split(" ")[1];
    const user = jwt.verify(token, process.env.JWT_SECRET, {
      algorithms: "HS512",
    });
    req.user = user;
  } catch (error) {
    next(error);
  }
};

export default authenticate;
