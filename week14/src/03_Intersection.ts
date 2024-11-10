type Employee = {
  name: string;
  startDate: string;
};

type Manager = {
  name: string;
  depertment: string;
};

type TeamLead = Employee & Manager;

let e: Employee = {
  name: "Aniket",
  startDate: "20-03-24"
}

let b: Manager = {
  name: "Varun",
  depertment: "Electric"
}

let c: TeamLead = {
  name: "Rutvij",
  startDate: "12-03-23",
  depertment: "Computer"
}
