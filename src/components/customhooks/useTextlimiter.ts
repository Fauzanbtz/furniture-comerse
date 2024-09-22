import { useState } from "react";

// Custom hook to limit text based on a word limit
export function useTextLimiter(text: string, wordLimit = 20) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Split text into words
  const words = text.split(" ");

  // Limit text to the wordLimit and append "..."
  const truncatedText =
    words.length > wordLimit
      ? words.slice(0, wordLimit).join(" ") + " ..."
      : text;

  // Toggle between expanded and truncated text
  const toggleText = () => setIsExpanded(!isExpanded);

  return {
    isExpanded,
    toggleText,
    displayText: isExpanded ? text : truncatedText,
    hasMore: words.length > wordLimit,
  };
}
