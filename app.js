import express from "express";
import employees from "#db/employees";

const app = express();

app.route("/").get((req, res) => {
  res.send("Hello employees!");
});

app.route("/employees").get((req, res) => {
  res.send(employees);
});

app.route("/employees/random").get((req, res) => {
    let random = Math.random() * employees.length;
    random = Math.floor(random);
    res.send(employees[random]);
});

app.route("/employees/:id").get((req, res) => {
  const { id } = req.params;
  const employee = employees[id];
  if (!employee) {
    return res
      .status(404)
      .send({ message: `No employee with the id of ${id}` });
  }
  res.send(employee);
});


export default app;
