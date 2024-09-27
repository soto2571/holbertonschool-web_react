/// <reference path="./Teacher.ts" />
/// <reference path="./Subject.ts" />

// Declaration merging: Adding a new optional attribute experienceTeachingJava to the Teacher interface
namespace Subjects {
    export interface Teacher {
      experienceTeachingJava?: number;
    }
  
    // Java class extending Subject
    export class Java extends Subject {
      // Method to get the list of requirements for Java
      getRequirements(): string {
        return 'Here is the list of requirements for Java';
      }
  
      // Method to get the available teacher for Java
      getAvailableTeacher(): string {
        if (!this.teacher || this.teacher.experienceTeachingJava === undefined || this.teacher.experienceTeachingJava <= 0) {
          return 'No available teacher';
        }
        return `Available Teacher: ${this.teacher.firstName}`;
      }
    }
  }