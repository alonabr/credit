export class User {
  
  constructor(
    public userName: string,
    public password: string,
    public email: string,
    public phoneNumber: string,
    public firstName: string,
    public lastName: string,
    public gender: number,
    public birthDate: Date,
    public meritalStatus: number,
    public spouseName: string,
    //public children;
    //Address;
    public hobbies: string,
    public description: string,
    //langauges
    public userType: number,
    public relocationTo: string,
    public offerDescription: string,
    public communities: string,
    public relocatedDate: Date
    ) { }
  
}