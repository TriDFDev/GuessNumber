export function generateRandomNumber(): string {
  let num: string = "";
  const digits: string[] = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

  for (let i: number = digits.length - 1; i > 0; i--) {
    const j: number = Math.floor(Math.random() * (i + 1));
    [digits[i], digits[j]] = [digits[j], digits[i]];
  }

  for (let i: number = 0; i < 4; i++) {
    num += digits[i];
  }

  return num;
}





//   /////////////////////////////////////////


import { useState } from 'react';

type RandomNumberHook = () => {
  randomNumber: string;
  regenerateRandomNumber: () => void;
};

const useRandomNumber: RandomNumberHook = () => {
  const [randomNumber, setRandomNumber] = useState<string>('');

  const generateRandomNumber = () => {
    let num: string = "";
    const digits: string[] = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

    for (let i: number = digits.length - 1; i > 0; i--) {
      const j: number = Math.floor(Math.random() * (i + 1));
      [digits[i], digits[j]] = [digits[j], digits[i]];
    }

    for (let i: number = 0; i < 4; i++) {
      num += digits[i];
    }

    setRandomNumber(num);
  };

  const regenerateRandomNumber = () => {
    generateRandomNumber();
  };

  return {
    randomNumber,
    regenerateRandomNumber,
  };
};

export default useRandomNumber;