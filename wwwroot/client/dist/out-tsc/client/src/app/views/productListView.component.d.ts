import { OnInit } from "@angular/core";
import { Store } from "../services/store.services";
export default class ProductListView implements OnInit {
    store: Store;
    constructor(store: Store);
    ngOnInit(): void;
}
