module.exports = () => {
  const numbers = ["8340476314"]; // These are dummy numbers
  let len = numbers.length - 1; // Put the numbers here to which you
  let idx = Math.ceil(Math.random() * len); // want to send diwali messages!
  return numbers[idx];
};
