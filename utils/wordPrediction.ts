// word_prediction_app/utils/wordPrediction.ts
import sentences from "../data/unique_sentences.json"; // JSON: ["Satz 1", "Satz 2", ...]

function preprocess(text: string): string[] {
  text = text.toLowerCase();
  text = text
    .split("")
    .filter((char) => /[a-z0-9. ]/.test(char))
    .join("");
  text = text.replace(/\./g, " . ");
  return text
    .split(" ")
    .map((w) => w.trim())
    .filter((w) => w !== "");
}

function calc(words: string[]): Record<string, number> {
  const trigrams: Record<string, number> = {};
  for (let i = 0; i < words.length - 2; i++) {
    const tri = `${words[i]},${words[i + 1]},${words[i + 2]}`;
    trigrams[tri] = (trigrams[tri] || 0) + 1;
  }
  return trigrams;
}

// --- Vorbereitung beim Laden ---
const allText = (sentences as string[]).join(" ");
const words = preprocess(allText);
const trigrams = calc(words);
/**
 * Gibt mehrere Wort-Vorschläge zurück (Top N)
 * @param userInput Eingabe vom Nutzer
 * @param topN Anzahl der Vorschläge
 */
export function predictNextWords(userInput: string, topN = 5): string[] {
  const userWords = preprocess(userInput);
  if (userWords.length < 2) return [];

  const lastTwo = userWords.slice(-2);
  const candidates: Record<string, number> = {};

  // Kandidaten aus Trigrammen filtern
  for (const [tri, count] of Object.entries(trigrams)) {
    const triWords = tri.split(",");
    if (triWords[0] === lastTwo[0] && triWords[1] === lastTwo[1]) {
      candidates[triWords[2]] = count; // nur das dritte Wort merken
    }
  }

  // Sortiere nach Häufigkeit und nimm Top N
  const sorted = Object.entries(candidates)
    .sort((a, b) => b[1] - a[1])
    .slice(0, topN)
    .map(([word]) => word);

  return sorted;
}


