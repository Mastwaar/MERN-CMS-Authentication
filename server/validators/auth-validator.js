const { z } = require("zod");

const signupSchema = z.object({
    username: z.string({ required_error: "Name is required"})
    .trim()
    .min(3,{ message: "Name must be atleast 3 characters"})
    .max(255, {message: "Name must not be more than 255 characters"}),

    email: z.string({ required_error: "Email is required"})
    .trim()
    .email({message: "Invalid email address"})
    .min(3,{ message: "Email must be atleast 3 characters"})
    .max(255, {message: "Email must not be more than 255 characters"}),

    phone: z.string({ required_error: "phone is required"})
    .trim()
    .min(10,{ message: "Phone must be atleast 10 characters"})
    .max(255, {message: "Phone must not be more than 20 characters"}),

    password: z.string({ required_error: "Password is required"})
    .min(6,{ message: "Password must be atleast 6 characters"})
    .max(1024, "Password cant be greater than 1024 characters" ),
});

const loginSchema = z.object({
    email: z.string({ required_error: "Email is required"})
    .trim()
    .email({message: "Invalid email address"})
    .min(3,{ message: "Email must be atleast 3 characters"})
    .max(255, {message: "Email must not be more than 255 characters"}),

    password: z.string({ required_error: "Password is required"})
    .min(6,{ message: "Password must be atleast 6 characters"})
    .max(1024, "Password cant be greater than 1024 characters" ),

});


module.exports = {signupSchema, loginSchema};

