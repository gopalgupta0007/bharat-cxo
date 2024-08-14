import React, { useState } from 'react';
import axios from 'axios';

function UpdatePosts() {
    const [formData, setFormData] = useState({
        type: 'None',
        title: '',
        description: '',
        imagePath: '',
        imageSrc: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        // console.log(formData)
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const updateData = async() => {
        try {
            if (formData.type != "" && formData.title != "" && formData.description != "" && formData.imagePath != "" && formData.imagePath != "") {
                const updateCxoData = await axios.patch("/data/update/updatecxodata", formData,
                    {
                        headers: { "Content-Type": "application/json" },
                        withCredentials: true
                    }
                ) // for cookie because we have to use axious method to fetch data
                console.log("updateCxoData => ", updateCxoData);
            } else {
                throw "fill all the form properly"
            }
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div style={{ width: '25%', margin: '20vh auto 0' }}>
            <h2>Submit Your Content</h2>
            {/* <form onSubmit={updateData}> */ console.log(formData)}
            <form>
                <div>
                    <label>
                        Title:
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Description:
                        <input
                            type="text"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Image Path:
                        <input
                            type="text"
                            name="imagePath"
                            value={formData.imagePath}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Image Src:
                        <input
                            type="text"
                            name="imageSrc"
                            value={formData.imageSrc}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Select Type:
                        <select name="type" value={formData.type} onChange={handleChange}>
                            <option value="undefined">None</option>
                            <option value="posts">Posts</option>
                            <option value="articles">Articles</option>
                        </select>
                    </label>
                </div>
                <div>
                    <button type="submit" onClick={updateData}>Submit</button>
                </div>
            </form>
        </div>
    );
}

export default UpdatePosts;
