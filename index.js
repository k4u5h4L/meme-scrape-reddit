const axios = require("axios");
const cheerio = require("cheerio");

const mainUrl = `https://reddit.com/r/dankmemes`;
axios
    .get(mainUrl)
    .then((response) => {
        dealWithData(response.data);
    })
    .catch((err) => {
        console.log(err);
    });
const dealWithData = (html) => {
    const $ = cheerio.load(html);
    const urlMeme = $("._2_tDEnGMLxpM6uOa2kaDB3.ImageBox-image.media-element._1XWObl-3b9tPy64oaG6fax");
    // console.log(urlMeme);
    const indexValue = randNo(urlMeme.length);
    console.log(`Source is:\n${urlMeme[indexValue].attribs.src}`);
};
const randNo = (limit) => {
    const thatNo = Math.floor(Math.random() * limit);
    return thatNo;
};
