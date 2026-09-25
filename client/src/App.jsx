import { useEffect, useState } from "react";
import "./App.css";

function App() {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [feedback, setFeedback] = useState([]);

    // Get all feedback from backend
    const loadFeedback = async () => {
        const response = await fetch("http://localhost:5000/api/feedback");
        const data = await response.json();

        setFeedback(data);
    };

    // Load feedback when page opens
    useEffect(() => {
        loadFeedback();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        await fetch("http://localhost:5000/api/feedback", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                message: message
            })
        });

        setName("");
        setMessage("");

        // Reload feedback after submitting
        loadFeedback();
    };

    return (
        <div className="app">
            <h1>Student Feedback Portal</h1>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />

                <textarea
                    placeholder="Enter your feedback"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                />

                <button type="submit">
                    Submit Feedback
                </button>
            </form>

            <h2>All Feedback</h2>

            <div>
                {feedback.map((item) => (
                    <div className="feedback" key={item._id}>
                        <h3>{item.name}</h3>
                        <p>{item.message}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;