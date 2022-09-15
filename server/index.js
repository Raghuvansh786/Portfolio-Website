const express = require("express");
require('dotenv').config();
const mongoose = require("mongoose");
const app = express();
const cors = require("cors")
const Project = require("./models/project");
const fileUpload = require("express-fileupload");
app.use(express.json());
app.use(cors());
app.use("/uploads", express.static('uploads'))

const uri = process.env.ATLAS_URI;
const PORT = process.env.PORT || 3002;
mongoose.connect(uri, {
        useNewUrlParser: true,
}).then(() => console.log("connected Successfully.."))
        .catch((err) => console.log("Unable to connect to Mongo", err));

app.use(fileUpload())



app.post('/uploadNewProject', async (req, res) => {
        console.log("This is req.body", req.body);
        const images = Array.from(JSON.parse(req.body.Images));

        const imagesLinks = [];
        try {
                for (let i = 0; i < images.length; i++) {
                        imagesLinks.push({
                                public_id: images[i].public_id,
                                url: images[i].url,
                        });

                        if(i==0){
                                req.body.thumbnail = {
                                        public_id: images[i].public_id,
                                        url: images[i].url,
                                };
                        }
                }

                req.body.Images = imagesLinks;

                const product = new Project(req.body);
                await product.save();             
        } catch (error) {
                console.log("error occured!", error)

        }

        res.send("Data Inserted Succesfully...")
})

app.get('/getProducts', async (req, res)=>{
        const response = await Project.find({category:"PHP"});
        res.json(response);
})

// ------ To get the projects of a particular category-----
app.get('/project/:category', async (req, res)=>{
        const category = req.params.category;
        console.log(" The category we got is: ", category)
        const response = await Project.find({"category":category});
        console.log(response);
        res.json(response);
})
// ------ To get the details of a specific project-----
app.get('/projectDetails/:id', async (req, res)=>{
        const id = req.params.id;
        console.log(" The id we got is: ", id)
        const response = await Project.findById(id);
        console.log(response);
        res.json(response);
})


const path = require("path");

// Step 1:
app.use(express.static(path.resolve(__dirname, "./portfolio/build")));
// Step 2:
app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "./portfolio/build", "index.html"));
});
app.listen(PORT, () => {
        console.log("Server is running on port:", PORT);
})
