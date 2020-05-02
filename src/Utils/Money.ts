class Money {
  static toMoney = (number: number, currency?: "USD" | "BRL") => {
    const formated = number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");

    switch (currency) {
      case "BRL":
        const newFormated = formated.split(",").join(".");

        return `R$ ${newFormated.substr(0, newFormated.lastIndexOf(".")) +
          "," +
          newFormated.substr(newFormated.lastIndexOf(".") + 1)}`;
      default:
        return `$ ${formated}`;
    }
  };
}

export default Money;
