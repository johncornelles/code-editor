import { User } from "../models/user.model.js";
import generateTokenAndSetCookie from "../utils/jwt.js";
import bcrypt from 'bcryptjs';

export const login = async (req, res) => {
    const {username, password} = req.body;

    try {
        const user = await User.findOne({username});
        if (!user) {
            return res.status(401).json({message: 'Invalid username or password'});
            }
            const isValidPassword = await bcrypt.compare(password, user.password);
            if (!isValidPassword) {
                return res.status(401).json({message: 'Invalid username or password'});
                }
            const token = generateTokenAndSetCookie(user._id, res);
            user.password = null;
            return res.json({token, username: user.username, userID: user._id});
    } catch (error) {
        console.log(error.message)
    }
}


export const logout = async (req, res) => {
    try {
      res.cookie("jwt", "", { maxAge: 0 });
      res.status(200).json({
        message: "Successfully logged out!",
      });
  
    } catch (error) {
      console.log(error);
      res.status(500).json({
        error: error.message,
      });
    }
  }

  export const signUp = async (req, res) => {
      const { username, password } = req.body;
  
      try {
          if (!username || !password) {
              return res.status(400).json({ message: 'Username and password are required' });
          }
  
          const existingUser = await User.findOne({ username });
          if (existingUser) {
              return res.status(400).json({ message: 'Username already exists' });
          }
  
          const hashedPassword = await bcrypt.hash(password, 10);
  
          const newUser = await User.create({
              username,
              password: hashedPassword
          });
          
  
          const token = generateTokenAndSetCookie(newUser._id, res);
  
          return res.status(201).json({ token, userID: newUser._id, username: newUser._id });
      } catch (error) {
          console.log(error.message);
          res.status(500).json({ message: 'Internal Server Error' });
      }
  };
  