import { Component, EventEmitter, Output } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
// import { debounceTime, distinctUntilChanged } from "rxjs/operators";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html"
})
export class SearchComponent {
  searchForm: FormGroup;
  @Output() citySearchEvent = new EventEmitter<string>();
  constructor(private _formBuilder: FormBuilder) {
    this.searchForm = this._formBuilder.group({
      city: ["", Validators.minLength(2)]
    });
  }

  search() {
    this.citySearchEvent.emit(this.searchForm.get("city").value);
    this.searchForm.reset();
  }
}
