// Resume Information
const resumeInfo = {
  name: "Bharath S R",
  email: "bharathsrbharath85@gmail.com",
  phone: "+91 7483491386",
  education: [
    {
      degree: "B.E. in Electronics and Communication",
      college: "JNN College of Engineering, Shimoga",
      year: "2020 - 2024",
      cgpa: "7.92 (71.72%)"
    },
    {
      degree: "PUC - Science",
      college: "Adichunchanagiri PU College, Shimoga",
      year: "2018 - 2020",
      percentage: "87.5%"
    },
    {
      degree: "SSLC",
      college: "Sri Venkateshwara English Medium School",
      year: "2015 - 2018",
      percentage: "92.80%"
    }
  ],
  skills: ["Core Java", "MySQL", "CSS", "JavaScript", "Angular", "HTML", "Windows", "Ubuntu"],
  objective: `To work in a pragmatic and growth-oriented organization where I can showcase my talent, enhance my technical skills, and contribute effectively to meet software requirements.`
};

// GitHub Projects
const githubProjects = [
  {
    title: "Todo Summary Assistant",
    description: "Summarizes todos using AI. Built with Node.js, React, and OpenAI API.",
    url: "https://github.com/bharathsr01/todo-summary-assistant"
  },
  {
    title: "My Profile Website",
    description: "A personal portfolio website to showcase resume and projects.",
    url: "https://github.com/bharathsr01/Myprofile"
  }
];

// Render Resume Info
const resumeContainer = document.getElementById("resume-info");
resumeContainer.innerHTML = `
  <p><strong>Objective:</strong> ${resumeInfo.objective}</p>
  <p><strong>Email:</strong> ${resumeInfo.email} | <strong>Phone:</strong> ${resumeInfo.phone}</p>
  <h3>Education:</h3>
  <ul>
    ${resumeInfo.education.map(edu => `
      <li><strong>${edu.degree}</strong> from ${edu.college} (${edu.year}) - ${edu.cgpa || edu.percentage}</li>
    `).join('')}
  </ul>
  <h3>Skills:</h3>
  <p>${resumeInfo.skills.join(', ')}</p>
`;

/// Connect to backend and fetch summary
document.getElementById('todoForm').addEventListener('submit', async function (e) {
  e.preventDefault();
  const todosText = document.getElementById('todosInput').value;
  const todos = todosText.split(',').map(todo => todo.trim());

  const response = await fetch('http://localhost:4000/summarize', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ todos })
  });

  const data = await response.json();
  document.getElementById('summaryResult').innerHTML = `<p><strong>Summary:</strong> ${data.summary}</p>`;
});