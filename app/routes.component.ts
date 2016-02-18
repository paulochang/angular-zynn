import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

declare var $: any;

@Component({
  selector: 'my-route',
  templateUrl: 'app/routes.component.html',
  styleUrls: ['plugins/datatables/dataTables.bootstrap.css']
})

export class RoutesComponent {
    constructor() {
        console.log($);
        
        $('#example').DataTable({
            "language": {
                "paginate": {
                  "next": ">>",
                  "previous": "<<"
                }
            }
        });
    }
}

