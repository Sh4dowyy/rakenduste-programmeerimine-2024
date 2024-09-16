import React from "react";
import "../Profile.css";

const Profile = ({ name }) => {
    const hobbies = [
        "Sport",
        "Swimming",
        "Coding",
    ];

    return (
        <>
            <h1>My name is {name}</h1>
            <h2>My hobbies are:</h2>
            <ul>
                {hobbies.map((hobby, index) => (
                    <li key={index}>{hobby}</li>
                ))}
            </ul>
            <form>
                <div>
                    <label htmlFor="email">Your email:</label>
                    <input type="email" id="email" name="email" />
                </div>
            <div>
                <label htmlFor="message">Your message:</label>
                <textarea id="message" name="message"></textarea>
            </div>
                <button type="button" className="cta-button">
                Send
                </button>
            </form>
        </>
    )
};


export default Profile;