#! /usr/env/bin/ node

import inquirer from "inquirer";

let exchangeRates = {
	USD: 1,
	EUR: 0.9,
	GBP: 0.75,
	PKR: 280,
	INR: 70
};

let input = await inquirer.prompt(
	[
		{
			name: "fromCurrency",
			type: "list",
			choices: [
      		"USD",
      		"EUR",
      		"GBP",
     			"PKR",
				"INR",
			],
			message: "From currency:"
		},
		{
			name: "toCurrency",
         type: "list",
         choices: [
            "USD",
            "EUR",
            "GBP",
            "PKR",
            "INR",
         ],
         message: "To currency:"
		},
		{
         name: "amount",
         type: "number",
         message: "Amount:"
      }
	]
);
console.log(input);
