// todo-backend.js

const express = require('express');
const bodyParser = require('body-parser');
const { Configuration, OpenAIApi } = require('openai');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors()); // Enable CORS for all routes

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
});
const openai = new OpenAIApi(configuration);

app.post('/summarize', async (req, res) => {
  const todos = req.body.todos;
  const prompt = `Summarize the following todo list: ${todos.join(', ')}`;

  try {
    const response = await openai.createChatCompletion({
      model: 'gpt-4',
      messages: [{ role: 'user', content: prompt }]
    });

    res.json({ summary: response.data.choices[0].message.content });
  } catch (error) {
    res.status(500).send('Error generating summary');
  }
});

app.listen(4000, () => console.log('Server running on port 4000'));
