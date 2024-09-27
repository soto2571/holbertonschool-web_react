// Define the MajorCredits interface
interface MajorCredits {
    credits: number;
    brand: "MajorCredits"; // Branding the interface to distinguish it
  }
  
  // Define the MinorCredits interface
  interface MinorCredits {
    credits: number;
    brand: "MinorCredits"; // Branding the interface to distinguish it
  }
  
  // Function to sum major credits
  function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return {
      credits: subject1.credits + subject2.credits,
      brand: "MajorCredits"
    };
  }
  
  // Function to sum minor credits
  function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return {
      credits: subject1.credits + subject2.credits,
      brand: "MinorCredits"
    };
  }