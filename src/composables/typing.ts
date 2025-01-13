import { ref } from "vue";

export function useTypeText() {
  const displayedText = ref(""); // The text being displayed

  /**
   * Function to simulate typing effect
   * @param fullText - The complete text to type out
   * @param typingSpeed - Delay in milliseconds between typing each character
   */
  const typeText = async (fullText: string, typingSpeed: number) => {
    let tempText = "";
    let isTag = false;

    for (let i = 0; i < fullText.length; i++) {
      const char = fullText[i];

      if (char === "<") isTag = true;
      if (char === ">") isTag = false;

      tempText += char;

      if (!isTag) {
        displayedText.value = tempText;
        await new Promise((resolve) => setTimeout(resolve, typingSpeed));
      }
    }
  };

  return {
    displayedText,
    typeText,
  };
}
