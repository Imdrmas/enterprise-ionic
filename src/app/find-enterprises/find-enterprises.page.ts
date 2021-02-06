import { Component, OnInit } from '@angular/core';
import { Enterprise } from '../modal/Modal';
import { EnterpriseService } from '../service/enterprise.service';

@Component({
  selector: 'app-find-enterprises',
  templateUrl: './find-enterprises.page.html',
  styleUrls: ['./find-enterprises.page.scss'],
})
export class FindEnterprisesPage implements OnInit {
  enterprises: Enterprise[];

  constructor(private enterpriseService: EnterpriseService) { }

  ngOnInit() {
    this.enterpriseService.findEnterprises().subscribe(enterprises => {
      this.enterprises = enterprises;
    })
  }

}
