
module.exports.login = (req,res)=>{
    const {email, password} = req.body;
    res.status(200).json({
        status : 200,
        message: "Success",
        data: {
            email,
            password
        }
    });
}

module.exports.register = (req,res)=>{
    const {name, email, phone, password} = req.body;
    res.status(200).json({
        status : 200,
        message: "Your account create sucessfull.",
        data: {
            name,
            email,
            phone,
            password
        }
    });
}