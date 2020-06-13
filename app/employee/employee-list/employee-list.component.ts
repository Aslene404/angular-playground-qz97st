import { Component, OnInit } from "@angular/core";
import { EmployeeService } from "../employee.service";

@Component({
  selector: "app-employee-list",
  templateUrl: "./employee-list.component.html",
  styleUrls: ["./employee-list.component.css"]
})
export class EmployeeList implements OnInit {
  private employees = [];
  constructor(private emplyeeService: EmployeeService) {}

  ngOnInit() {
    this.reload();
  }

  reload(): void {
    this.emplyeeService.getAllEmployees().subscribe({
      next: value => (this.employees = value),
      error: err => console.error(err),
      complete: () => console.log("Completed")
    });
  }
}
