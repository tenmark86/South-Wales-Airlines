class Client {
  constructor(
    id,
    name,
    passport,
    cpf,
    email,
    phone,
    profession,
    nationality,
    age
  ) {
    this.id = id;
    this.name = name;
    this.passport = passport;
    this.cpf = cpf;
    this.email = email;
    this.phone = phone;
    this.profession = profession;
    this.nationality = nationality;
    this.age = age;
    this.schedulings = [];
  }

  showClient() {
    return `${this.name} - ${this.age} years - ${this.nationality}`;
  }

  addScheduling(scheduling) {
    this.schedulings.push(scheduling);
  }

  searchScheduling(id) {
    this.schedulings.forEach((scheduling) => {
      if (scheduling.id == id) {
        return scheduling;
      }
    });
  }

  getSchedulings() {
    this.schedulings.forEach((scheduling) => console.log(scheduling));
  }
}
