interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

let student1: Student;
let student2: Student;
const studentsList = [student1, student2];

// Vanilla JavaScript to render a table
const table = document.createElement("table");
const tableBody = document.createElement("tbody");

// Create table headers
const headerRow = document.createElement("tr");
const headerFirstName = document.createElement("th");
headerFirstName.textContent = "First Name";
const headerLocation = document.createElement("th");
headerLocation.textContent = "Location";

headerRow.appendChild(headerFirstName);
headerRow.appendChild(headerLocation);
tableBody.appendChild(headerRow);

// Loop through studentsList to create table rows
studentsList.forEach((student) => {
  const row = document.createElement("tr");

  const firstNameCell = document.createElement("td");
  firstNameCell.textContent = student.firstName;

  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);

  tableBody.appendChild(row);
});

table.appendChild(tableBody);
document.body.appendChild(table);