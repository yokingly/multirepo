import { useEffect, useState, useCallback } from 'react';

interface TypewriterEffectProps {
  words: string[];
  className?: string;
}

const getRandomTypingDelay = () => {
  // Human typing delays (in ms):
  // Base delay: 100-300ms between characters
  // Longer delay for space: additional 50-150ms
  // Occasional "thinking" delay: 500-1200ms
  const baseDelay = Math.random() * 200 + 100;
  const thinkingProbability = Math.random();
  
  if (thinkingProbability > 0.95) {
    // Occasional longer "thinking" pause
    return baseDelay + Math.random() * 700 + 500;
  }
  
  return baseDelay;
};

const getRandomBackspaceDelay = () => {
  // Backspace is typically faster than typing
  return Math.random() * 100 + 50;
};

export const TypewriterEffect = ({ words, className = '' }: TypewriterEffectProps) => {
  const [currentText, setCurrentText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);

  const animateText = useCallback(() => {
    const currentWord = words[currentWordIndex];

    if (isTyping && !isDeleting) {
      if (currentText.length < currentWord.length) {
        // Typing forward
        const nextChar = currentWord[currentText.length];
        const delay = getRandomTypingDelay();
        
        setTimeout(() => {
          setCurrentText(prev => prev + nextChar);
        }, delay);
      } else {
        // Finished typing current word
        setTimeout(() => {
          setIsDeleting(true);
        }, 2000); // Pause at the end of the word
      }
    } else if (isDeleting) {
      if (currentText.length > 0) {
        // Deleting
        const delay = getRandomBackspaceDelay();
        
        setTimeout(() => {
          setCurrentText(prev => prev.slice(0, -1));
        }, delay);
      } else {
        // Finished deleting
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        setTimeout(() => {
          setIsTyping(true);
        }, 500); // Pause before starting next word
      }
    }
  }, [currentText, currentWordIndex, isTyping, isDeleting, words]);

  useEffect(() => {
    animateText();
  }, [currentText, animateText]);

  return (
    <span className={className}>
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
}; 