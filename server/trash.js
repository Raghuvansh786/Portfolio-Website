const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 3002;
const cors = require("cors")
const record = require("./models/test");
const multer = require("multer");
const fs = require("fs");
const image = require("./models/image");
const MultipleFile = require("./models/mulitipleFile");
const cloudinary = require("./utils/cloudinary");
const bodyParser = require("body-parser")
// app.use(express.json());
app.use(cors());
app.use("/uploads", express.static('uploads'))
// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

// mongoose.connect("mongodb+srv://NewUser:T69u2GpMHTJsjPKj@portfolio.gacponj.mongodb.net/portfolio?retryWrites=true&w=majority",{
//     useNewUrlParser: true,
// })

mongoose.connect("mongodb+srv://NewUser:T69u2GpMHTJsjPKj@portfolio.gacponj.mongodb.net/imgDatabase?retryWrites=true&w=majority", {
        useNewUrlParser: true,
}).then(() => console.log("connected Successfully.."))
        .catch((err) => console.log("Unable to connect to Mongo", err));



const storage = multer.diskStorage({
        destination: (req, file, cb) => {
                cb(null, "uploads")
        },
        filename: (req, file, cb) => {
                cb(null, file.originalname)
        }
});

const upload = multer({ storage: storage });

app.get("/getSingleImages", async (req, res) => {
        const allData = await image.find({});
        res.json(allData);

})

app.post('/cloudinary',async (req, res) => {
        console.log("This is req.body", req.body.name);
        console.log("It is req.body.file: ", req.files);
        // res.json(req.body);
        res.send("Request is made.....")
})
app.get("/getMultipleImages", async (req, res) => {
        const data = await MultipleFile.find({});
        res.json(data);
})



app.post('/uploadMultipleImages', async (req, res) => {
        console.log("This is req.body for name: ", req.body);
        console.log("It is req.file: ", req.files);
/*         let filesArray = [];

        req.files.forEach(elem => {
                const file = {
                        fileName: fs.readFileSync(elem.path),
                }
                filesArray.push(file);
        })

        const images = new MultipleFile({
                Name: req.body.name,
                files: filesArray
        })
        await images.save()
                .then(() => {
                        console.log('Image is uploaded')
                }).catch((err) => {
                        console.log("An error has occured", err)
                }); */
                res.json(req.files);
        // res.send("Images are saved")
})


app.post('/uploadNewImage', upload.single('file'), (req, res) => {
        console.log("This is req.body for name: ", req.body);
        console.log("It is req.file: ", req.file);

        console.log("This is files array: ", req.file);
        const saveImage = new image({
                name: req.body.name,
                img: {
                        data: fs.readFileSync(req.file.path),
                        contentType: "image/jpg"
                },
        })

        saveImage.save()
                .then(() => {
                        console.log('Image is uploaded')
                }).catch((err) => {
                        console.log("An error has occured", err)
                });
        res.send("Image is saved")
})

/* app.get("/", async (req, res)=>{
        const data = new record({Name:"Raghuvansh", College:"Douglas College"})
        try{
        await data.save();
        res.send("Data inserted.")
        }catch(err){
                console.log(err)
        }
}) */

app.get("/read", async (req, res) => {
        record.find({}, (err, result) => {
                if (err) {
                        res.send(err);
                }
                res.send(result);
        })
})

app.listen(PORT, () => {
        console.log("Server is running on port:", PORT);
})


// T69u2GpMHTJsjPKj




// ------ SAMPLE REQUEST-------

/*       await Axios({
            method: "POST",
            url: url1,
            data: imagedata,
            headers: {
                'Content-Type': 'application/json'
            },
            transformRequest: (data, headers) => {
                return formData;
            }
        }).then(() => { console.log("Multiple files send successfully") }).catch((err) => { console.log("error while sending multiple files", err) })  */







    const getData = () => {
        data.map((elem) => {
            DBName.push(elem.Name)
            elem.files.map((e) => {
                filePaths.push(e.fileName)
            })
        })
    }
    getData();
    




    const createProductImagesChange = (e) => {

        console.log("This is e.target.files: ", e.target.files);
        const filesArray = Array.from(e.taget.file);
        setSelectedImages([]);
        filesArray.forEach((file) => {
            const reader = new FileReader();

            reader.onload = () => {
                if (reader.readyState === 2) {
                    setImagesPreview((old) => [...old, reader.result]);
                    setSelectedImages((old) => [...old, reader.result])
                    console.log("This is reader.result: ", reader.result);
                }
            };

            reader.readAsDataURL(file);
        });
    };



app.post('/uploadMultipleImages', async (req, res) => {
        console.log("This is req.body for name: ", req.body.name);
        console.log("It is req.file: ", req.files);
        /*         let filesArray = [];
        
                req.files.forEach(elem => {
                        const file = {
                                fileName: fs.readFileSync(elem.path),
                        }
                        filesArray.push(file);
                })
        
                const images = new MultipleFile({
                        Name: req.body.name,
                        files: filesArray
                })
                await images.save()
                        .then(() => {
                                console.log('Image is uploaded')
                        }).catch((err) => {
                                console.log("An error has occured", err)
                        }); */
        res.json(req.files);
        // res.send("Images are saved")
})




app.post('/uploadNewImage', (req, res) => {
        console.log("This is req.body for name: ", req.body);
        console.log("It is req.file: ", req.file);

        console.log("This is files array: ", req.file);
        const saveImage = new image({
                name: req.body.name,
                img: {
                        data: fs.readFileSync(req.file.path),
                        contentType: "image/jpg"
                },
        })

        saveImage.save()
                .then(() => {
                        console.log('Image is uploaded')
                }).catch((err) => {
                        console.log("An error has occured", err)
                });
        res.send("Image is saved")
})



app.get("/read", async (req, res) => {
        record.find({}, (err, result) => {
                if (err) {
                        res.send(err);
                }
                res.send(result);
        })
})


app.get("/getMultipleImages", async (req, res) => {
        const data = await MultipleFile.find({});
        res.json(data);
})


app.get("/getSingleImages", async (req, res) => {
        const allData = await image.find({});
        res.json(allData);

})