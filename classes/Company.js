class Company {
  constructor(id, name, cnpj, email, phone) {
    this.id = id;
    this.name = name;
    this.cnpj = cnpj;
    this.email = email;
    this.phone = phone;
    this.stars = [1];
    this.flight = [];
  }

  evaluateCompany(newStars) {
    const values = [1, 2, 3, 4, 5];
    values.forEach((value) => {
      if (newStars === value) {
        this.stars.push(newStars);
      }
    });
  }

  // média ponderada
  calculateStars() {
    let stars = [0, 0, 0, 0, 0];
    let result;
    let denominator = 0;
    let numerator = 0;
    this.stars.forEach((star) => {
      switch (star) {
        case 1:
          stars[0]++;
          break;
        case 2:
          stars[1]++;
          break;
        case 3:
          stars[2]++;
          break;
        case 4:
          stars[3]++;
          break;
        case 5:
          stars[4]++;
          break;
      }
    });
    stars.forEach((star, index) => {
      switch (index) {
        case 0:
          numerator += star * 1;
          denominator += star;
          break;
        case 1:
          numerator += star * 2;
          denominator += star;
          break;
        case 2:
          numerator += star * 3;
          denominator += star;
          break;
        case 3:
          numerator += star * 4;
          denominator += star;
          break;
        case 4:
          numerator += star * 5;
          denominator += star;
          break;
      }
    });
    result = numerator / denominator;
    return result;
  }

  addFlight(flight) {
    this.flight.push(flight);
  }

  searchFlight(id) {
    this.flight.forEach((flight) => {
      if (flight.id === id) {
        return flight;
      } else {
        console.log("Flight not found");
      }
    });
  }
}
