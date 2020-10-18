import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, ValidationErrors, FormControl, FormGroupDirective} from '@angular/forms';
export interface Data{
  fileType: string,
  format: string,
  fileName: string,
  dateCreated: string,
  fileSize: string,
  description: string,
}

const dummyData: Data[] = [
  {fileType: 'fas fa-file-csv', format:'.csv', fileName:'customer_data_2019', dateCreated:'2019-09-30', fileSize:'46 KB', description:'-' },
  {fileType: 'far fa-file-pdf', format:'.pdf', fileName:'Sale record (March 2020)', dateCreated:'2020-04-06', fileSize:'79 KB', description:'-' },
  {fileType: 'far fa-file-word', format:'.docx', fileName:'Product Categories list (2020_03)', dateCreated:'2020-03-06', fileSize:'16 KB', description:'-' },
  {fileType: 'fas fa-database', format:'.sql', fileName:'TransactionRecord2020Q3', dateCreated:'2020-10-02', fileSize:'176 KB', description:'-' },
  {fileType: 'far fa-file-alt', format:'.txt', fileName:'New_customer_list_2020', dateCreated:'2020-10-15', fileSize:'25 KB', description:'-' },
];

@Component({
  selector: 'data-entry-table-list',
  templateUrl: './data-entry-table-list.component.html',
  styleUrls: ['./data-entry-table-list.component.css']
})
export class DataEntryTableListComponent implements OnInit {

  displayedColumns: string[] = ['fileType',
                      'fileName',
                      'format',
                      'dateCreated',
                      'fileSize',
                      'description',
                      'action'
                    ];
  dataSource = dummyData;





  ngOnInit(){

  }












}
