// Define the Teacher interface
interface Teacher {
  readonly firstName: string;          // Readonly — can only be set during initialization
  readonly lastName: string;           // Readonly — can only be set during initialization
  fullTimeEmployee: boolean;           // Always defined
  yearsOfExperience?: number;          // Optional
  location: string;                    // Always defined
  [key: string]: any;                  // Allows adding other dynamic properties
}

// Define the Teacher interface
interface Director extends Teacher {
    numberOfReports: number;
}

// Example usage:
const teacher1: Teacher = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: true,
  location: "London",
  contract: false, // Extra property (works because of the index signature)
};

// Interface for the printTeacher function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

function printTeacher({ firstName, lastName }: { firstName: string, lastName: string }): string {
  // Get the first initial and convert it to uppercase)  {
  const firstName = firstName.charAt(0).toUpperCase();

  // Return the formatted string
  return `${firstName}. ${lastName}`;
}

interface printTeacherFunction{
    firstName: string;
    lastName: string;
}


// Example usage
console.log(printTeacher("John", "Doe")); // Output: J. Doe
console.log(printTeacher("Sarah", "Smith")); // Output: S. Smith
console.log(printTeacher("Michael", "Johnson")); // Output: M. Johnson




const director1: Directors = {
    firstName : "Bolu",
    lastName : "James",
    fullTimeEmployee : true,
    location : "Ogun",
    contract : true,
    numberOfReports : 17
}
console.log(director1);

// Interface describing the constructor parameters
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentInterface;
}

// Interface describing the class structure
interface StudentInterface {
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements StudentInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// Example usage:
const student = new StudentClass("John", "Doe");
console.log(student.displayName()); // Output: John
console.log(student.workOnHomework()); // Output: Currently working

const student = new StudentClass({firstName: "John", lastName: "Doe" });
console.log(student.displayName()); // Output: John
console.log(student.workOnHomework()); // Output: Currently working

