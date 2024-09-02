import React, { useState } from 'react';
import axios from 'axios';

function UpdateArticles() {
    const [formData, setFormData] = useState({
        type: 'None',
        title: '',
        description: '',
        imagePath: '',
    });

    const [auth, setAuth] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        // console.log(formData)
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleChangeAuth = (e) => setAuth(e.target.value);

    console.log("auth", auth);

    const updateData = async () => {
        if (auth == "bharatcxo2024") {
            try {
                if (formData.type != "" && formData.title != "" && formData.description != "" && formData.imagePath != "") {
                    const updateCxoData = await axios.patch("/data/update/articles/updatecxodata", formData,
                        {
                            headers: { "Content-Type": "application/json" },
                            withCredentials: true
                        }
                    ) // for cookie because we have to use axious method to fetch data
                    console.log("updateCxoData => ", updateCxoData);
                } else {
                    throw "fill all the form properly"
                }
                alert("post added successfully")
            } catch (err) {
                console.log(err);
            }
        }else{
            alert("password is wrong")
        }
    }

    return (
        <div style={{ width: '25%', margin: '20vh auto 0' }}>
            <h2>Update Article</h2>
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
                        Authenticatioin :
                        <input
                            type="password"
                            name="Auth"
                            value={auth}
                            onChange={handleChangeAuth}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Select Type:
                        <select name="type" value={formData.type} onChange={handleChange}>
                            <option value="undefined">None</option>
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

export default UpdateArticles;
