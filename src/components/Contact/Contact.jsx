import { useState } from "react";
import "./Contact.css";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                alert("Message sent!");
            } else {
                alert("Failed to send message.");
            }
        } catch (error) {
            console.error("Error:", error);
            // alert("An error occurred.");
        }
    };

    return (
        <div className="contact">
            <div className="headingcontact">
                <h1>Contact Me</h1>
            </div>
            <div className="headingh3contact">
                <h3>Please fill out the form below to discuss any work opportunities</h3>
            </div>
            <form onSubmit={handleSubmit}>
                <input name="name" placeholder="Your Name" className="input1" value={formData.name} onChange={handleInputChange} />
                <br />
                <input name="email" type="email" placeholder="Your Email" className="input2" value={formData.email} onChange={handleInputChange} />
                <textarea name="message" rows="5" placeholder="Your Message" cols="50" className="textarea" value={formData.message} onChange={handleInputChange} />
                <br />
                <button type="submit" className="submitbtn">Submit</button>
            </form>
            <div className="contact-info">
                <h3>You can also reach me at:</h3>
                <p>Email: <a href="mailto:nehaljain2023@gmail.com">nehaljain2023@gmail.com</a></p>
                <h3>Follow me on:</h3>
                <ul>
                    <li><a href="https://www.linkedin.com/in/nehal-jain-40ab82234/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                    <li><a href="https://github.com/Nehal203" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                    <li><a href="https://www.geeksforgeeks.org/user/nehaljain38z/" target="_blank" rel="noopener noreferrer">GeeksForGeeks</a></li>
                    <li><a href="https://leetcode.com/u/nehaljain2023/" target="_blank" rel="noopener noreferrer">LeetCode</a></li>
                </ul>
            </div>
        </div>
    );
}
