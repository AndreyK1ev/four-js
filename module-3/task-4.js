'use strict';

function countTotalSalary(employees) {
  let TotalSalary = 0;
  for (const key in employees) {
    TotalSalary = employees[key] + TotalSalary;
  }
  return TotalSalary;
}

console.log(countTotalSalary({}));

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  }),
);

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  }),
);
