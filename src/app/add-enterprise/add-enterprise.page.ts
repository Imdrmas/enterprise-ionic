import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Enterprise } from '../modal/Modal';
import { EnterpriseService } from '../service/enterprise.service';

@Component({
  selector: 'app-add-enterprise',
  templateUrl: './add-enterprise.page.html',
  styleUrls: ['./add-enterprise.page.scss'],
})
export class AddEnterprisePage implements OnInit {
  progressBar = false;
  enterprise: Enterprise = {} as Enterprise;

  constructor(private router: Router, private enterpriseService: EnterpriseService) { }

  ngOnInit() {
  }
  addEnterprise() {
   this.progressBar = true;
   this.enterpriseService.createEnterprise(this.enterprise).subscribe(enterprise => {
     this.enterprise = enterprise;
     window.location.reload();
   })
  }
  cancel() {
    this.router.navigateByUrl("/tabs/find-enterprises");
  }
}
