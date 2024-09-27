/// <reference path="./Teacher.ts" />
/// <reference path="./Subject.ts" />

// Declaration merging: Adding a new optional attribute experienceTeachingReact to the Teacher interface
namespace Subjects {
    export interface Teacher {
      experienceTeachingReact?: number;
    }
  
    // React class extending Subject
    export class React extends Subject {
      // Method to get the list of requirements for React
      getRequirements(): string {
        return 'Here is the list of requirements for React';
      }
  
      // Method to get the available teacher for React
      getAvailableTeacher(): string {
        if (!this.teacher || this.teacher.experienceTeachingReact === undefined || this.teacher.experienceTeachingReact <= 0) {
          return 'No available teacher';
        }
        return `Available Teacher: ${this.teacher.firstName}`;
      }
    }
  }