import { Component } from "@angular/core";
import { Store } from "../services/store.services";

@Component({
    selector: "cart",
    templateUrl: "cartView.component.html",
    styleUrls: ["cartview.component.css"]
})

export class CartView {
    constructor(public store: Store) {

    }
}