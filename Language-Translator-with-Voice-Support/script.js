const apiKey = "YOUR_GOOGLE_API_KEY"; // Replace with your API key
const translateButton = document.getElementById("translateButton");
const textToSpeechButton = document.getElementById("textToSpeechButton");
const voiceSearchButton = document.getElementById("voiceSearchButton");

translateButton.addEventListener("click", async () => {
  const text = document.getElementById("inputText").value;
  const targetLanguage = document.getElementById("languageSelector").value;

  try {
    const response = await fetch(
      `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          q: text,
          target: targetLanguage,
        }),
      }
    );
    const data = await response.json();
    document.getElementById("outputText").textContent =
      data.data.translations[0].translatedText;
  } catch (error) {
    console.error("Error trans
