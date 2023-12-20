const nodemailer = require('nodemailer')

const signup = async (req, res) => {

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: "yourname@gmail.com", // Your gmail 
            pass: "yryltcqzttcmsfwy", // Create an app password in your gmail https://www.youtube.com/watch?v=yMjutdwuUQQ
        },
    });

    async function main() {
        // send mail with defined transport object
        const info = await transporter.sendMail({
            from: '"Saver " <yourname@gmail.com>', // sender address
            to: "user1@gmail.com", // list of receivers
            subject: "Hello ✔", // Subject line
            text: "Hello world?", // plain text body
            html: "<b>Hello world?</b>", // html body
        })
        console.log("Message sent: %s", info.messageId)
    }

    main().catch(console.error)

    res.status(201).json('Signup Successfully...')
}

module.exports = {
    signup
}