export const textToNumber = (text: string) => {
  const encoded = btoa(encodeURIComponent(text));
  
  let sum = 0;
  for (let i = 0; i < encoded.length; i++) {
    sum += encoded.charCodeAt(i);
  }

  return Math.floor(sum);
};