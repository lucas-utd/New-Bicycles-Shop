import jwt from "jsonwebtoken";

export const generateToken = (user) => {
  return jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    process.env.REACT_APP_JWT_SECERT || "somethingsecret",
    { expiresIn: "30d" }
  );
};
