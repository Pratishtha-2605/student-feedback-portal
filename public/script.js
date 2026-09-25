const form = document.getElementById("feedbackForm");
const feedbackList = document.getElementById("feedbackList");


// Submit feedback
form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const message = document.getElementById("message").value;

    await fetch("/api/feedback", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: name,
            message: message
        })
    });

    form.reset();

    loadFeedback();
});


// Load all feedback
async function loadFeedback() {

    const response = await fetch("/api/feedback");

    const feedback = await response.json();

    feedbackList.innerHTML = "";

    feedback.forEach((item) => {

        const div = document.createElement("div");

        div.className = "feedback";

        div.innerHTML = `
            <h3>${item.name}</h3>
            <p>${item.message}</p>
        `;

        feedbackList.appendChild(div);
    });
}


// Load feedback when page opens
loadFeedback();