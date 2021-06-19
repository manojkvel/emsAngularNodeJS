export interface IEmployee{
alternativeContactNumber? : String;
candidateRate : Number;
clientRate : Number;
email? : String;
empMonthlyRateMap : IMonthlyRate[];
firstName : String;
id : String;
lastName? : String;
primaryContactNumber? : String;
salaryRate : Number;
totalNumOfHours? : Number;
totalCandidateRate?: Number;
totalClientRate? : Number;
totalSalary? : Number;
}

export interface IMonthlyRate{
  monYear: String;
  inv : Number;
  numOfHours : Number;
  salary : Number;

}
