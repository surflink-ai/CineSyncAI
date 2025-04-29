const express = require('express');
const router = express.Router();
const { OpenAI } = require('openai');

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

router.post('/', async (req, res) => {
  const { idea } = req.body;
  const prompt = `
You are an expert film producer assistant. Given the idea below, generate a detailed pre-production plan.

IDEA: "${idea}"

Return:
- Title Suggestions
- Treatment
- Themes
- Act Structure
- Research
- Target Audience
- Crew/Gear
- Locations
- Budget Estimate
- Permits Needed
`;

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.7
    });

    const result = completion.choices[0].message.content;
    res.json({ result });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'AI generation failed.' });
  }
});

module.exports = router;