'use strict';

function getEmployeeData() {
  const employees = [];
  const listItems = document.querySelectorAll('ul li');

  listItems.forEach((item) => {
    const employeeName = item.textContent.trim();
    const position = item.getAttribute('data-position');
    const salary = parseInt(
      item.getAttribute('data-salary').replace(/\$|,/g, ''),
      10,
    );
    const age = item.getAttribute('data-age');

    employees.push({
      employeeName,
      position,
      salary,
      age,
    });
  });

  return employees;
}

function sortEmployees() {
  const employees = getEmployeeData();

  return employees.sort((a, b) => b.salary - a.salary);
}

sortEmployees();
