import words from "../files/words.json";
import name from 'emoji-name-map';

interface IWords {
  [key: string]: string[];
}

const getRandomIndex = (length: number) =>
  Math.round(Math.random() * (length - 1));

const getRandomWord = (wordList: string[]): string => {
  const randomIndex = getRandomIndex(wordList.length);
  return wordList[randomIndex];
};

const defaultSentenceStructure = [
  "art",
  "adj",
  "noun",
  "pre",
  "verb",
  "art",
  "adj",
  "noun",
];

const upperFirst = (word: string): string => word.charAt(0).toUpperCase() + word.substr(1);

const getRandomSentence = (words: IWords, structure: Array<string>, mb: boolean): string => {
  const output = structure.map(type => {
    const word = getRandomWord(words[type]);
    if (mb) {
      const emoji = name.get(word);
      return emoji !== undefined ?  word + ' ' + emoji : word;
    }
    return word;
  });
  const length = output.length;
  return output.reduce((acc, curr, index) => acc + (index === 0 ? upperFirst(curr) : curr) + (index === length - 1 ? '. ' : ' '), "");
};

const runOnce = (mb: boolean) => getRandomSentence(words, defaultSentenceStructure, mb);

export default runOnce;
