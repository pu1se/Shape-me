import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../../_core/services/api.service";

@Component({
  selector: 'app-edit-info',
  templateUrl: './edit-info.component.html',
  styleUrls: ['./edit-info.component.scss']
})
export class EditInfoComponent implements OnInit {

  constructor(private api: ApiService) { }

  ngOnInit() {

    this.api.get('products').subscribe(response => {
      alert(JSON.stringify(response));
    });

  }

}
