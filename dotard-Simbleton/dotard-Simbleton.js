const businesses = [
    {
      purchasingAgent: { nameLast: "Kirlin", nameFirst: "Kristy" },
      phoneWork: "089.129.2290 x9400",
      orders: [7826.96, 8323.11, 5756.28, 6308.42, 5622.28],
      companyName: "Care-media",
      companyIndustry: "Education",
      addressZipCode: "56839",
      addressStateCode: "WI",
      addressFullStreet: "8417 Franklin Court Tunnel",
      addressCity: "Mouthcard"
    },
    {
      purchasingAgent: { nameLast: "Steuber", nameFirst: "Kamron" },
      phoneWork: "(833) 222-7579 x5874",
      orders: [6252.5, 9769.02, 9521.17, 7994.05, 7945.93],
      companyName: "Stanholding",
      companyIndustry: "Hospitality",
      addressZipCode: "09705",
      addressStateCode: "NY",
      addressFullStreet: "2889 Fawn Court Garden",
      addressCity: "Fellsmere"
    },
    {
      purchasingAgent: { nameLast: "Gutkowski", nameFirst: "Kaylee" },
      phoneWork: "235.266.6278",
      orders: [7634.43, 9766.72, 9953.45, 6559.8, 5054.9],
      companyName: "Highnix",
      companyIndustry: "Agriculture",
      addressZipCode: "49376",
      addressStateCode: "ME",
      addressFullStreet: "5734 Maple Avenue Throughway",
      addressCity: "Little Genesee"
    },
    {
      purchasingAgent: { nameLast: "Crona", nameFirst: "Lauren" },
      phoneWork: "1-449-987-3083 x23263",
      orders: [7384.52, 9252.72, 7272.65, 5251.84, 9680.08],
      companyName: "Conit",
      companyIndustry: "Defense",
      addressZipCode: "53326",
      addressStateCode: "IL",
      addressFullStreet: "5755 Hillside Drive Crossroad",
      addressCity: "Norval"
    },
    {
      purchasingAgent: { nameLast: "Krajcik", nameFirst: "Elvera" },
      phoneWork: "1-730-411-8580",
      orders: [6069.05, 8535.38, 5782.7, 7838.91, 7578.36],
      companyName: "Dong-tom",
      companyIndustry: "Energy",
      addressZipCode: "67071",
      addressStateCode: "KS",
      addressFullStreet: "4826 Arch Street Lights",
      addressCity: "Newburyport"
    },
    {
      purchasingAgent: { nameLast: "Kling", nameFirst: "Ellie" },
      phoneWork: "(868) 043-0950",
      orders: [6726.2, 8393.21, 8087.13, 6393.13, 8646.35],
      companyName: "Dan-dox",
      companyIndustry: "Manufacturing",
      addressZipCode: "98842",
      addressStateCode: "WV",
      addressFullStreet: "9767 Cedar Court Corner",
      addressCity: "Prince George"
    },
    {
      purchasingAgent: { nameLast: "Robel", nameFirst: "Otilia" },
      phoneWork: "(298) 305-1942 x53653",
      orders: [8676.05, 7430.69, 9379.81, 8074.29, 5998.75],
      companyName: "J-base",
      companyIndustry: "Health care",
      addressZipCode: "72993",
      addressStateCode: "FL",
      addressFullStreet: "9954 Buckingham Drive Mountains",
      addressCity: "Vesper"
    },
    {
      purchasingAgent: { nameLast: "Gusikowski", nameFirst: "Karolann" },
      phoneWork: "(743) 934-8981 x692",
      orders: [8650.08, 8042.69, 5555.72, 7467.86, 8851.43],
      companyName: "Span-fix",
      companyIndustry: "Construction",
      addressZipCode: "59860",
      addressStateCode: "MT",
      addressFullStreet: "4151 Orange Street Extension",
      addressCity: "Little Rock Air Force Base"
    },
    {
      purchasingAgent: { nameLast: "Hartmann", nameFirst: "Zena" },
      phoneWork: "727.635.6610 x6483",
      orders: [9415.89, 8935.45, 7413.91, 6830.96, 9746.57],
      companyName: "Sanaplane",
      companyIndustry: "Information",
      addressZipCode: "85156",
      addressStateCode: "NY",
      addressFullStreet: "4765 Fairview Avenue Locks",
      addressCity: "Dennisville"
    },
    {
      purchasingAgent: { nameLast: "Torphy", nameFirst: "Celia" },
      phoneWork: "(992) 079-1670 x71569",
      orders: [7431.21, 5911.85, 7954.86, 7141.52, 8416.79],
      companyName: "Ran-taxon",
      companyIndustry: "Manufacturing",
      addressZipCode: "96673",
      addressStateCode: "MD",
      addressFullStreet: "7157 Hudson Street Ford",
      addressCity: "Watrous"
    }
  ];


// ***** OUTPUT LIST OF BUSINESSES *****
  const outEl = document.querySelector("#output")
  outEl.innerHTML = "<h1>Active Businesses</h1>"
  let someVariableThatMeansZip = "addressZipCode";

  // Evaluates the value of the string and inserts into bracket
  // Useful if weird characters in the variable

// Lightning Exercise: Add another section sibling to the current
// one and use object dot notation to display each company's city.
// Use square bracket notation to display the state code.
// Use dynamic square bracket notation to add the zip code.

businesses.forEach(business => {
  outEl.innerHTML += `
    <h2>${business.companyName}</h2>
    <section>
      ${business.addressFullStreet}
    </section>
    <section>
      ${business.addressCity}, ${(business['addressStateCode'])}
        ${business[someVariableThatMeansZip]} 
    </section>
  `
  outEl.innerHTML += "<hr/>"
});

// filter() Method
// Array to contain all the New York businesses
const newYorkBusinesses = businesses.filter(business => {
    let inNewYork = false  
    if (business.addressStateCode === "NY") {
        inNewYork = true
    }  
    return inNewYork
  })
  console.log("New York Businesses Using Filter")
console.table(newYorkBusinesses)

// EMILY'S FOR LOOP
// let nyBiz = []
// for(let i=0; i < businesses.length; i++) {
//     if (businesses[i].addressStateCode === "NY") {
//         nyBiz.push(businesses[i])
//     } console.table(nyBiz);
// }

const newYorkBusinesses2 = businesses.filter(business => business.addressStateCode === "NY");


// // Lightning Exercise: Use filter() to create another array named
// // manufacturingBusinesses that will contain all businesses in the
// // manufacturing industry. Display those to the DOM.

const manufacturingBusinesses = businesses.filter(business => business.companyIndustry === "Manufacturing");
console.log("Manufacturing Businesses Using Filter")
console.table(manufacturingBusinesses)
outEl.innerHTML = "<h1>Manufacturing Businesses</h1>"
manufacturingBusinesses.forEach(business => {
      outEl.innerHTML += `
      <h2>${business.companyName}</h2>
      <section>
        ${business.addressFullStreet}
      </section>
      <section>
        ${business.addressCity}, ${(business['addressStateCode'])}
          ${business[someVariableThatMeansZip]} 
      </section>
    `
    outEl.innerHTML += "<hr/>"
  });

  //  ***** map *****
/*
    Using map(), you extract the purchasing agent object
    from each business and store it in a new array
*/

outEl.innerHTML += "<h1>Purchasing Agents</h1>";
const agents = businesses.map(business => {
    return business.purchasingAgent
})
console.log("List of Purchasing Agents")
console.table(agents)

agents.forEach(agent => {
  outEl.innerHTML += `<h4>${agent.nameFirst} ${agent.nameLast}</h4>`;
  outEl.innerHTML += "<hr/>";
});

// Lightning Exercise: Instead of just returning the purchasing agent object,
// eturn a new object that has the full name of the purchasing agent, the
// company name, and the phone number. The data structure is shown below.
// Use that new data structure to display the agent with their company and
// phone number
// {
//     "fullName": "Kaylee Gutkowski",
//     "company": "Highnix",
//     "phoneNumber": "235.266.6278"
// }
     
const agentFull = businesses.map(business => {
    let agentInfo = 
    {
    "fullName": `${business.purchasingAgent.nameFirst} ${business.purchasingAgent.nameLast}`,
    "company": business.companyName,
    "phoneNumber": business.phoneWork
    }
    return agentInfo;
})
console.log("Purchasing Agent Data")
console.table(agentFull)

agentFull.forEach(agent => {
  outEl.innerHTML += `<h3>${agent.fullName}</h3>
   <p>${agent.company}</p>
   <p>${agent.phoneNumber}</p>`;
  outEl.innerHTML += "<hr/>";
});

//const outEl = document.querySelector("#output");
//character code for enter is 13
//Includes works on a string not an object
//therefore only on nameFirst not fullname
document
    .querySelector("#companySearch")
    .addEventListener("keypress", keyPressEvent => {
        console.log("keypress", keyPressEvent.target.value);
        
        if (keyPressEvent.charCode === 13) {
            /* WHEN  USER PRESSES ENTER, FIND MATCHING BUSINESS */
            const foundBusiness = businesses.find(business =>
                    business.companyName.includes(keyPressEvent.target.value)
            );
            outEl.innerHTML = `
            <h2>
            ${foundBusiness.companyName}
            </h2>
            <section>
            ${foundBusiness.addressFullStreet}

            </section>
            <section>
            ${foundBusiness.addressCity},
            ${foundBusiness.addressStateCode}
            ${foundBusiness.addressZipCode}
            </section>
        `;
        console.log("Company Find() includes() keyPressEvent")
        }
    });

// Lightning Exercise 1: Refactor your code to search for purchasing agents
// instead. If the search text is found in the first name of any purchasing
// agent, show that agent.
document
    .querySelector("#agentSearch")
    .addEventListener("keypress", keyPressEvent => {
        console.log("keypress", keyPressEvent.target.value);
        
        if (keyPressEvent.charCode === 13) {
            /* WHEN  USER PRESSES ENTER, FIND MATCHING BUSINESS */
            const foundAgent = businesses.find(business =>
                    business.purchasingAgent.nameFirst.includes(keyPressEvent.target.value)
            );
            outEl.innerHTML = `
            <h2>
            ${foundAgent.purchasingAgent.nameFirst} ${foundAgent.purchasingAgent.nameLast}
            </h2>
            `;
            console.log("Agent Find() includes() keyPressEvent")
        }
    });

// Lightning Exercise 2: Refactor your code so that if the search text is
// found in the first name, or last name, of any purchasing agent, show that
// agent.
document
    .querySelector("#agentSearch")
    .addEventListener("keypress", keyPressEvent => {
        console.log("keypress", keyPressEvent.target.value);
        
        if (keyPressEvent.charCode === 13) {
            /* WHEN  USER PRESSES ENTER, FIND MATCHING BUSINESS */
            const foundAgent = businesses.find(
              business =>
          `${business.purchasingAgent.nameFirst} ${business.purchasingAgent.nameLast}`.includes(keyPressEvent.target.value) 
          // OR add || business.purchasingAgent.nameLast.includes(keyPressEvent.target.value)
      );
            outEl.innerHTML = `
            <h2>
            ${foundAgent.purchasingAgent.nameFirst} ${foundAgent.purchasingAgent.nameLast}
            </h2>
            `;
        }
    });

    // reduce - Taking an entire collection and returning a single thing
    //for example - a total or a single sentence from an array of words
    // THE OLD WAY WAS TO USE FOREACH
    // businesses.forEach(business => {
    /* CALCULATE ORDER SUMMARY */
    // let totalOrders = 0
    // });

    /* CALCULATE ORDER SUMMARY */
console.log("          ");
console.log("TOTAL ORDERS");
businesses.forEach(business => {
  let totalOrders = business.orders.reduce(
    (currentTotal, nextValue) => currentTotal += nextValue,
    0
  )

  outEl.innerHTML += `
        <h2>
            ${business.companyName}
            ($${totalOrders.toFixed(2)})
        </h2>
        <section>
            ${business.addressFullStreet}
        </section>
        <section>
            ${business.addressCity},
            ${business.addressStateCode}
            ${business.addressZipCode}
        </section>
    `;
  outEl.innerHTML += "<hr/>";
  // toFixed on totalOrders rounds it to 2 decimal places
    console.log(`${business.companyName} + ${totalOrders.toFixed(2)}`)
  });  

    //reduce
// Lightning Exercise 1: Use the reduce method on the following array to determine
// how much total rain fell last month.
const monthlyRainfall = [23, 13, 27, 20, 20, 31, 33, 26, 19, 12, 14, 12, 10]

let totalRainfall = monthlyRainfall.reduce(
    (currentPrecipitation, nextValue) => currentPrecipitation += nextValue)
console.log("          ");
console.log("Lightning Exercise 1:");
console.log("Total Rainfall in last month: " + totalRainfall);

// Lightning Exercise 2: Use the reduce method on the following array to build a sentence.
const wordList = ["The", "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog"]

const sentenceTotal = wordList.reduce(
    (currentWord, nextWord) => currentWord += nextWord += " ", "")
console.log("          ");
console.log("Lightning Exercise 2:");
console.log(sentenceTotal)

//currentWord += ` ${nextValue}`)

//  *****  Practice: Big Spenders  *****

// Use the filter method to get all the big spenders in the main array
// into a new one.
// Array to contain all the big spenders
console.log("          ");
console.log("Companies with totalOrders over $40,000");
const reducer = (accumulator, currentValue) => accumulator + currentValue;

const bigSpender = businesses.filter(business => {
  let totalOrders = business.orders.reduce(reducer);
  return totalOrders > 40000;
  })
  console.table(bigSpender);

// List only the companies that have placed a single order for more than
// nine thousand dollars  in the orders array 
console.log("          ");
console.log("Order array for each company");

const borders = businesses.orders
function niner(orders) {
  return orders > 9000
}

const overNine = businesses.filter(business => {
  console.log(business.companyName + "   " + business.orders)
  let whatever = business.orders.some(orders => orders > 9000)
  return whatever
})
console.log("          ");
console.log("Companies with single orders over $9,000");
console.log(overNine)