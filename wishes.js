
 // These are some diwali messages from me, you can add 
 // more messages to this array or you can also fetch data
 // from a third party api.
  
module.exports = () => {
    const wishes = [`😇ज्योति-पर्व है,ज्योति जलाएं,
    मन के तम को दूर भगाएं।
    दीप जलाएं सबके घर पर,
    जो नम आँखें उनके घर पर।
    हर मन में जब दीप जलेगा,
    तभी दिवाली पर्व मनेगा।😇`,
    ` 🥳 जगमगाये, तेरा दीप जगमगाये
    सारे जहांन की खुशिया तेरे भी घर को आये
    गंगा और यमुना सा निर्मल हो तेरा मन
    अम्बर और धरा सा स्वछ हो तेरा तन
    इस नगर में तेरी ज्योति चमचमाए
    तू जगमगाये तेरा दीप जगमगाये
    दिवाली के त्यौहार की शुभकामनाएं 🥳`,
    ` 🤩 Sun glows for a day;
    Candle for an hour;
    Matchstick for a minute;
    But a wish glows forever.
    Here is my wish for a….
    Glowing Diwali and glowing life!
    Happy Diwali 🤩 `,
    ` 🙏🏻 Light a lamp of love!
    Blast a chain of sorrow!
    Shoot a rocket of prosperity!
    Fire a flowerpot of happiness!
    Wish u and your family…
    A VERY SPARKLING DIWALI  🙏🏻 `
]
 let len = wishes.length;
 let idx = Math.ceil(Math.random()*len) - 1;
  return wishes[idx]; 
}