export class Personne {
id: number;
name: string;
firstname: string;
age: number;
job: string;
path: string;
cin: number;
  constructor(id: number = 0,
              name: string = '',
              firstname: string = '',
              age: number = 0,
              job: string = '',
              path: string = '', cin: number = 0) {
    this.id = id;
    this.name = name;
    this.firstname = firstname;
    this.age = age;
    this.job = job;
    this.path = path;
    this.cin = cin;
  }
}
