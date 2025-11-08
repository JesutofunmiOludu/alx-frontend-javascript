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

interface printTeacherFunction{
    firstName: string;
    lastName: string;
}

function printTeacher(firstName:string, lastName:string):string {
  // Get the first initial and convert it to uppercase)  {
  const firstInitial = firstName.charAt(0).toUpperCase();

  // Return the formatted string
  return `${firstInitial}. ${lastName}`;
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
