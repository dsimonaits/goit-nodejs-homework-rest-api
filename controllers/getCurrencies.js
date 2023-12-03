var money = require("money-js");

const currenciesCtrl = async (req, res) => {
  money.quote(
    { symbols: ["USDCAD", "USDEUR", "JPYUSD", "TWTR", "NASDAQ"] },
    function (err, result) {
      if (err) console.log(err);

      return res.json(
        responseOk("success", 200, "Currencies found successfully", result)
      );
    }
  );
};

module.exports = currenciesCtrl;
