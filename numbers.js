module.exports = () => {
    const numbers = ['6223378731','7004373758','9088341171','7076628727','7903753242','7003160734']; // These are dummy numbers
    let len = numbers.length - 1;                                                                    // Put the numbers here to which you 
    let idx = Math.ceil(Math.random()*len);                                                          // want to send diwali messages!
     return numbers[idx]; 
}
