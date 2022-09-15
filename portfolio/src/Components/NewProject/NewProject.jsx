import React, { useState } from "react";
import Axios from "axios";
import '../../css/New.css';

function NewProject() {
    const [img, setSelectedImages] = useState([]);
    const [name, setProjectName] = useState("");
    const [category, setProjectCategory] = useState("");
    const [description, setDescription] = useState("");
    const [imagesPreview, setImagesPreview] = useState([]);
    // const [data, setData] = useState([]);
    const skills = ["Java", "PHP", "Python"];

    /*     useEffect(() => {
            const urlImagesingle = "http://localhost:3002/getSingleImages";
            const urlMultipleImages = "http://localhost:3002/getMultipleImages";
            Axios.get(urlMultipleImages).then((response) => {
                setData(response.data)
            }).catch((err) => {
                console.log("error occured while reading data:: ", err)
            })
        }, []) */

    const createProductImagesChange = (e) => {


        setSelectedImages(e.target.files)
        const files = Array.from(e.target.files);

        setImagesPreview([]);

        files.forEach((file) => {
            const reader = new FileReader();

            reader.onload = () => {
                if (reader.readyState === 2) {
                    setImagesPreview((old) => [...old, reader.result]);
                }
            };

            reader.readAsDataURL(file);
        });
    };



    const addToList = async (e) => {
        e.preventDefault();
        const formData = new FormData()
        formData.append('name', name);
        formData.append('category', category)
        formData.append("description", description)
        const imagedata = [];

        // ----- To upload New Project -----------
        for (let i = 0; i < img.length; i++) {
            const formData1 = new FormData()
            formData1.append("file", img[i]);
            formData1.append('upload_preset', "sa1lmakg")
            const result = await Axios.post("https://api.cloudinary.com/v1_1/raghuvansh/upload", formData1)
            const eachDetail = {
                public_id: result.data.public_id,
                url: result.data.url
            }
            imagedata.push(eachDetail);
        }
        formData.append("skills", skills)
        formData.append("Images", JSON.stringify(imagedata))
        const url = "/uploadNewProject";

        await Axios.post(url, formData)
            .then(() => { console.log("Array send successfully") })
            .catch((err) => { console.log("error while sending array", err) });

    };

    return (<div className="newProductContainer">
        <form
            className="createProductForm"
            encType="multipart/form-data"
        >
            <h1>Create Project</h1>

            <div>
                <input
                    type="text"
                    placeholder="Project Name"
                    required
                    value={name}
                    onChange={(e) => setProjectName(e.target.value)}
                />
            </div>

            <div>
                <input
                    type="text"
                    placeholder="Project Category"
                    required
                    value={category}
                    onChange={(e) => setProjectCategory(e.target.value)}
                />
            </div>


            <div>
                <textarea
                    placeholder="Project Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    cols="30"
                    rows="1"
                ></textarea>
            </div>

            <div id="createProductFormFile">
                <input
                    type="file"
                    name="avatar"
                    accept="image/*"
                    onChange={createProductImagesChange}
                    multiple
                />
            </div>

            <div id="createProductFormImage">
                {imagesPreview.map((image, index) => (
                    <img key={index} src={image} alt="Product Preview" />
                ))}
            </div>

            <button id="createProductBtn" onClick={addToList}>Upload</button>
        </form>
    </div>
    );

}

export default NewProject;