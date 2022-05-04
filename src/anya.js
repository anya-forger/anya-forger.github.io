const pic = {
    uniform: "https://spy-family.net/assets/img/common/header_bottomimg_3.png",
    icecream: "https://spy-family.net/assets/img/common/header_bottomimg_3_family.png",
    uniform_large: "https://spy-family.net/assets/img/top/chara_anya_1.png",
    casual_large: "https://spy-family.net/assets/img/top/chara_anya_2.png",
};

for (let i = 1; i <= 40; i++) {
    pic[`avatar_${i}`] = `https://spy-family.net/assets/img/special/anya/${i
        .toString()
        .padStart(2, "0")}.png`;
}

const about = [
    "My name is Anya Forger. I am 6 years old now!",
    "I am studing in Cecile Hall at Eden Academy.",
    "",
    "This summer I went to NTNU CSIE Camp to learn how to code.",
    "During the camp, I learned how to use " +
        "the most useful language JavaScript, " +
        "the famous front-end framework Vue and Tailwind, " +
        "the most popular back-end framework Node.js, " +
        "and Python AI Gaming Agent.",
    "",
    'By the way, I am starring in an anime called "SPY x FAMILY". Did you watch it?',
].join("\n");

export { pic, about };
