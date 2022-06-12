const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (elm) => {
  try {
    const [responseIXX, responseVGC] = await Promise.all([promiseTheaterIXX(), promiseTheaterVGC()])
    const res = [...responseIXX, ...responseVGC]

    return res.filter(item => item.hasil === elm).length
  } catch (err) {
    console.log('Invalid Sum')
  }
};

module.exports = {
  promiseOutput,
};
