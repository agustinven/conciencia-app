import React from "react";
import { motion } from "framer-motion";
import { mix } from "@popmotion/popcorn";

const randomInt = (min, max) => Math.round(mix(min, max, Math.random()));
const generateParagraphLength = () => randomInt(5, 20);
const generateWordLength = () => randomInt(20, 100);

// Randomly generate some paragraphs of word lengths
const paragraphs = [...Array(3)].map(() => {
  return [...Array(generateParagraphLength())].map(generateWordLength);
});

const Parrafo = ({ words }) => (
  <div className="paragraph">
    {words.map((width) => (
      <Word width={width} />
    ))}
  </div>
);

const Paragraph = () => {
  <motion.div
    variants={{ collapsed: { scale: 0.8 }, open: { scale: 1 } }}
    transition={{ duration: 0.8 }}
    className="content-placeholder"
  >
    {paragraphs.map((words) => (
      <Parrafo words={words} />
    ))}
  </motion.div>;
};

export default Paragraph;
