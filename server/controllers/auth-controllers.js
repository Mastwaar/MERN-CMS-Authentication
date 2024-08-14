const User = require("../models/user-model");
const bcrypt = require("bcryptjs");


/**
 * *********************************************
 * **************  H O M E  *************
 * *********************************************
 */

const home = async (req, res) => {

    try {
        res.status(200).send("ABC using Controller");
    }
    catch (error){
        console.log("Something went wrong");
    }

}


/**
 * *********************************************
 * **************  R E G I S T E R  *************
 * *********************************************
 */


const register = async (req, res) => {

    try {

        console.log(req.body);
        const { username, email, phone, password} = req.body;

        const userExist = await User.findOne({ email: email });

        if (userExist) {
            return res.status(400).json({ message : "Email already exists" });
        }


        const userCreated = await User.create({username, email, phone, password});



        res.status(200).json({ msg: "Registeration Successful" ,
             token: await userCreated.generateToken(),
              userId: userCreated._id.toString(), 
              password: userCreated.password });   
    }

    catch (error){
        console.log(error);
        // res.status(500).json("Internal Server Error", error);
        next(error);
    }
    
};   

/**
 * *********************************************
 * **************  L O G I N  *************
 * *********************************************
 */

const login = async (req, res) => {
    try {
        const { email, password} = req.body;
        const userExist = await User.findOne({email : email});
        

        if(!userExist) {
            // console.log("Invalid Credentials");
            return res.json({msg: "Invalid credentials"});
        }


         const userValid = await bcrypt.compare(password, userExist.password);


        // const userValid = await userExist.comparePassword(password);

        if(userValid) {
            res.status(200).json({
                msg: "Login Successful",
                token: await userExist.generateToken(),
                userId: userExist._id.toString(),
            });
        }
        else {
            res.status(401).json({message: "Invalid email or Password"});
        }
    }
    
    catch (error) {
        console.log(error);
        // res.status(500).json("Internal Server Error");
        next(error);
    }   
};


/**
 * *********************************************
 * **************  U S E R  *************
 * *********************************************
 */

    const user = async (req, res) => {
        try {
            const userData = req.user;
            console.log(userData);
           return res.status(200).json({ userData });
        } catch (error) {
            console.log(`error from the user route ${error} `)
        }
    }

module.exports = {home , register, login, user};