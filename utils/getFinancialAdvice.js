// utils/getFinancialAdvice.js

export const getFinancialAdvice = async (totalBudget, totalIncome, totalSpend) => {
  const userPrompt = `
    Based on the following financial data:
    - Total Budget: ₹${totalBudget} INR
    - Total Income: ₹${totalIncome} INR
    - Total Expenses: ₹${totalSpend} INR
    Provide personalized financial advice in two sentences.
  `;

  const requestData = {
    model: 'gemma2-9b-it',
    messages: [
      {
        role: 'user',
        content: userPrompt,
      },
    ],
    temperature: 0.7,
    max_completion_tokens: 1024,
  };

  try {
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer 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', // Hardcoded API key
      },
      body: JSON.stringify(requestData),
    });

    if (!response.ok) {
      throw new Error('Failed to fetch financial advice');
    }

    const data = await response.json();
    return data.choices[0]?.message?.content || 'No advice available.';
  } catch (error) {
    console.error('Error fetching financial advice:', error);
    return 'An error occurred while fetching financial advice. Please try again later.';
  }
};
