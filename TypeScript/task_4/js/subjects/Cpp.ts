// Declaration merging: Adding new optional attribute experienceTeachingC to the Teacher interface
namespace Subjects {
    export interface Teacher {
      experienceTeachingC?: number;
    }
  
    // Cpp class extending Subject
    export class Cpp extends Subject {
      // Method to get the list of requirements for Cpp
      getRequirements(): string {
        return 'Here is the list of requirements for Cpp';
      }
  
      // Method to get the available teacher for Cpp
      getAvailableTeacher(): string {
        if (!this.teacher || this.teacher.experienceTeachingC === undefined || this.teacher.experienceTeachingC <= 0) {
          return 'No available teacher';
        }
        return `Available Teacher: ${this.teacher.firstName}`;
      }
    }
  }