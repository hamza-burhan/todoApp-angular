import { AfterViewInit, Component } from "@angular/core";

@Component({
  selector: "app-screen",
  templateUrl: "./screen.component.html",
  styleUrls: ["./screen.component.scss"],
})
export class ScreenComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    //pagination
    let allPaginateBtns = document.querySelectorAll(".pagination li");
    allPaginateBtns.forEach((el) => {
      el.addEventListener("click", (e) => {
        clearPaginatedActive();
        el.classList.add("active");
      });
    });

    function clearPaginatedActive() {
      allPaginateBtns.forEach((el) => {
        el.classList.remove("active");
      });
    }
  }
}
