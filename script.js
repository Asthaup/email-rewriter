async function rewriteEmail() {
  const input = document.getElementById('inputEmail').value;
  const profession = document.getElementById('profession').value;
  const customProfession = document.getElementById('customProfession').value;
  const recipient = document.getElementById('recipient').value;
  const outputDiv = document.getElementById('result');
  const spinner = document.getElementById('spinner');
  const copyBtn = document.getElementById('copyBtn');

  outputDiv.innerText = '';
  spinner.style.display = 'block';
  copyBtn.style.display = 'none';

  if (!input.trim()) {
    spinner.style.display = 'none';
    outputDiv.innerText = 'Please enter an email.';
    return;
  }

  if (!profession && !customProfession.trim()) {
    spinner.style.display = 'none';
    outputDiv.innerText = 'Please select a profession or enter a custom one.';
    return;
  }

  const finalProfession = customProfession.trim() || profession;
  const recipientText = recipient ? ` addressed to a ${recipient}` : '';
  const prompt = `Rewrite this email for a ${finalProfession}${recipientText}: "${input}"`;

  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": "Bearer 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",
        "Content-Type": "application/json",
        "HTTP-Referer": "https://chat.openrouter.ai",
        "X-Title": "email-rewriter-project"
      },
      body: JSON.stringify({
        model: "mistralai/mixtral-8x7b-instruct",
        messages: [{ role: "user", content: prompt }]
      })
    });

    const data = await response.json();
    spinner.style.display = 'none';

    if (data.choices && data.choices[0]) {
      outputDiv.innerText = data.choices[0].message.content;
      copyBtn.style.display = 'block';
    } else {
      outputDiv.innerText = "Failed to rewrite. Try again.";
    }
  } catch (error) {
    spinner.style.display = 'none';
    outputDiv.innerText = "Error. Check your API key or internet.";
  }
}

function copyResult() {
  const outputDiv = document.getElementById('result');
  navigator.clipboard.writeText(outputDiv.innerText);
  alert('Email copied!');
}
