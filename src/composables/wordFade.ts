import { ref } from 'vue';

export function useWordByWord() {
  const displayedWords = ref<string[]>([]);

  const showWords = (text: string, delay: number = 300, fadeDuration: number = 3000) => {
    const words = text.split(' ');
    displayedWords.value = [];
    
    words.forEach((word, index) => {
      setTimeout(() => {
        displayedWords.value.push(word);
      }, delay * index);
    });
  };

  return { displayedWords, showWords };
}
