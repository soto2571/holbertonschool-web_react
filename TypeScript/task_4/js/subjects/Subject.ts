// Define the Subjects namespace
namespace Subjects {
    // Define the Subject class
    export class Subject {
      private teacher: Teacher;
  
      // Setter method for assigning a teacher
      setTeacher(teacher: Teacher): void {
        this.teacher = teacher;
      }
    }
  }