
const validate = (schema) => async (req, res, next) => {
    try {
        
        const parseBody = await schema.parseAsync(req.body);
        req.body= parseBody;
        next();
    } catch (error) {
        console.log(error);
        const message = error.message;
        // console.log(error)
        // res.status(400).json({ message: message});
        next({...error, message: message});

    }
}


module.exports = validate;