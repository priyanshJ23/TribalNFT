const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const dotenv = require("dotenv").config();

// Load environment variables
const PORT = process.env.PORT || 5000

// MongoDB
console.log(process.env.MONGODB_URL)
mongoose.set('strictQuery', false)

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const start = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        app.listen(PORT, () => {
            console.log("BE started port", PORT);
        });
    } catch (error) {
        console.error("Error starting server:", error);
    }
};

start();


const ContactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  Subject : String,
});

const Contact = mongoose.model('Contact', ContactSchema);

app.post('/contact', async (req, res) => {
  try {
    const { name, email, message , Subject } = req.body;
    const newContact = new Contact({ name, email, message,Subject });
    await newContact.save();
    res.status(200).json({ message: 'Contact form submitted successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

const userSchema = new mongoose.Schema ({
    name: {
      type:String,
      required:true
    },
    email: {
      type:String,
      required:true
    },
    password: {
      type:String,
      required:true
    }
})
const loginSchema = new mongoose.Schema ({
    email: {
      type:String,
      required:true
    },
    password: {
      type:String,
      required:true
    }
})

const UserModel =  mongoose.model("User" , userSchema)
const LoginModel =  mongoose.model("Login" , loginSchema)


const red=(req,res)=>{
  app.get("/login", function(){
    res.redirect("/");
  })
}


app.post("/login", async (req, res) => {
  const mail = req.body.email;
  const password = req.body.password;
  try {
    const user1 = await UserModel.find({ email: mail });
    if (user1.length === 0) {
        // res.json({msg: "Invalid User"})
    } else {
      if (password == user1[0].password) {
        const ourUser = user1[0];
        const temp = {password : ourUser.password, email : ourUser.email};
        Object.assign(temp, {msg: "Success"})
      
        console.log(temp);
        // red(req,res);
        res.send({message: "Login Success", ourUser: ourUser})
        // res.json(temp);
      }

      else res.json({msg : "Pls enter correct Password"});
      
    }
  } catch (err) {
    console.log(err);
    res.send({message: "Login Success", ourUser: ourUser})
  }
});



app.post("/Signup" ,async (req , res)=> {
  const newUser=new UserModel(req.body);
  await newUser.save();
  console.log(newUser.email);
  res.status(200).json({
    "Message":"User created successfully"
  })
});