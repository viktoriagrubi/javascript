function checkCashRegister(price, cash, cid) {
  const currencyUnits = [
    ["ONE HUNDRED", 100],
    ["TWENTY", 20],
    ["TEN", 10],
    ["FIVE", 5],
    ["ONE", 1],
    ["QUARTER", 0.25],
    ["DIME", 0.1],
    ["NICKEL", 0.05],
    ["PENNY", 0.01],
  ];

  // Calculate the change due
  let changeDue = cash - price;

  // Calculate the total cash in the drawer
  let totalInDrawer = 0;
  for (let unit of cid) {
    totalInDrawer += unit[1];
  }
  totalInDrawer = totalInDrawer.toFixed(2);

  // Check if change due is greater than total in drawer
  if (changeDue > totalInDrawer) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  // Check if change due is equal to total in drawer
  if (changeDue == totalInDrawer) {
    return { status: "CLOSED", change: cid };
  }

  // Calculate the change to be given
  let change = [];
  for (let unit of currencyUnits) {
    const unitName = unit[0];
    const unitValue = unit[1];
    const unitInDrawer = cid.find((item) => item[0] === unitName)[1];
    let unitCount = unitInDrawer / unitValue;
    let changeCount = 0;

    while (changeDue >= unitValue && unitCount > 0) {
      changeDue -= unitValue;
      changeDue = changeDue.toFixed(2);
      unitCount--;
      changeCount++;
    }

    if (changeCount > 0) {
      change.push([unitName, changeCount * unitValue]);
    }
  }

  // If changeDue is not zero but there is still money in the drawer
  if (changeDue > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  return { status: "OPEN", change };
}

// Example usage
console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
  ])
);
