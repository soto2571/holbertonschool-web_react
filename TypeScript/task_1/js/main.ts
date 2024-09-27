interface Teacher {
    readonly firstName: string; // Can only be set during initialization
    readonly lastName: string;  // Can only be set during initialization
    fullTimeEmployee: boolean;
    yearsOfExperience?: number; // Optional property
    location: string;
  
    // Allowing any additional property with a string key and any type of value
    [key: string]: any;
  }
  interface Directors extends Teacher {
    readonly numberOfReports: number;
  }

// Define the interface for the printTeacher function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Implement the printTeacher function based on the interface
const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

// Define the interface for the class
interface StudentClassInterface {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

// Implement the class based on the interfaces
class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // Method to indicate working on homework
  workOnHomework(): string {
    return "Currently working";
  }

  // Method to display the first name of the student
  displayName(): string {
    return this.firstName;
  }
}