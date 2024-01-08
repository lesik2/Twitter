import { useEffect, useRef } from 'react';

export function useAdjustTextArea(text: string) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  useEffect(() => {
    const adjustTextareaHeight = () => {
      if (textareaRef.current) {
        textareaRef.current.style.height = 'auto';
        textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
      }
    };

    adjustTextareaHeight();
  }, [text]);

  return textareaRef;
}
