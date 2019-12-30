import axios from "axios";

import statusMessage from "./status";

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export function getCryptosInfos() {
  return dispatch =>
    new Promise(async (resolve, reject) => {
      await statusMessage(dispatch, "loading", true);
      // To show Loading Progress bar
      await sleep(2000);
      axios
        .get("https://rest.coinapi.io/v1/exchanges", {
          headers: {
            "X-CoinAPI-Key": "8E19DF7E-0C1D-44C1-AD58-227EF8D648ED",
          }
        })
        .then(response => {
          statusMessage(
            dispatch,
            "success",
            "We have emailed you a reset link"
          );
          return resolve(
            dispatch({
              type: "cryptoInfos",
              data: response.data
            })
          );
        })
        .catch(reject);
    }).catch(async err => {
      console.log("Error: ", err);
      await statusMessage(dispatch, "error", err.message);
      throw err.message;
    });
}
