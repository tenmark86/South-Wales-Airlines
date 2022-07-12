class Scheduling {
  constructor(
    id,
    client,
    flight,
    schedulingTime,
    payment,
    installments,
    price,
    status
  ) {
    this.id = id;
    this.client = client;
    this.flight = flight;
    this.schedulingTime = schedulingTime;
    this.payment = payment;
    this.installments = installments;
    this.price = price;
    this.status = status || "Ative";
  }

  showScheduling() {
    return `${this.client.name} - id Flight: ${this.flight.id} - ${this.flight.price}: ${this.status}`;
  }

  getPrice() {
    return this.flight.price;
  }

  cancelScheduling() {
    this.status = "Canceled";
  }

  getStatus() {
    return `this schedule is ${this.status}`;
  }
}
