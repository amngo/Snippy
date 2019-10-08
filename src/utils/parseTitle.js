import axios from 'axios';
import cheerio from 'cheerio';

export default async url => {
    let title;
    try {
      const result = await axios.get(
        `https://cors-anywhere.herokuapp.com/${url}`
      );
      const $ = cheerio.load(result.data);
      title = $('title').text();
      return title;
      // parse = $('link[rel="shortcut icon"]').attr('href');
      // if (typeof parse === 'undefined' || parse === null) {
      //   parse = $('link[sizes="32x32"]').attr('href');
      // }
    } catch (error) {
      console.log(error);
    }
};
