const pic = {
    uniform: "https://spy-family.net/assets/img/common/header_bottomimg_3.png",
    icecream: "https://spy-family.net/assets/img/common/header_bottomimg_3_family.png",
    uniform_large: "https://spy-family.net/assets/img/top/chara_anya_1.png",
    casual_large: "https://spy-family.net/assets/img/top/chara_anya_2.png",
};

for (let i = 1; i <= 40; i++) {
    pic[`icon_${i}`] = `https://spy-family.net/assets/img/special/anya/${i
        .toString()
        .padStart(2, "0")}.png`;
}

export default pic;
