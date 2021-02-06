import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Enterprise, Application, Criticality } from '../modal/Modal';
import { ApplicationService } from '../service/application.service';
import { EnterpriseService } from '../service/enterprise.service';

@Component({
  selector: 'app-find-enterprise',
  templateUrl: './find-enterprise.page.html',
  styleUrls: ['./find-enterprise.page.scss'],
})
export class FindEnterprisePage implements OnInit {
  enterprise: Enterprise = {} as Enterprise;
  applications: Application[];
  filterApps: Application[];
  id: number;
  calculateJava: number;
  calculateJavascript: number;
  calculatePhp: number;
  calculateLow: number;
  calculateMedium: number;
  calculateHigh: number;

  constructor(private enterpriseService: EnterpriseService, private route: ActivatedRoute,
    private applicationService: ApplicationService, private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.enterpriseService.findEnterprise(this.id).subscribe(enterprise => {
      this.enterprise = enterprise;
    });
    this.applicationService.findApplications().subscribe(applications => {
      this.applications = applications;
      this.applicationService.findApplicationsForEnterprise(this.id).subscribe(filterApps => {
        this.filterApps = filterApps;
        filterApps.forEach(app => {
         this.applications = this.applications.filter(a => a.id !== app.id)
        })
      })
    })
  this.getCalculate();
  }
  setApplication(e) {
   this.applicationService.createApplicationForEnterprise(e.target.value, this.id).subscribe(() => {
     window.location.reload();
   })
  }
  getCalculate() {
    this.enterpriseService.calculateJava(this.id).subscribe(calculateJava => {
      this.calculateJava = calculateJava;
    });
    this.enterpriseService.calculateJavascript(this.id).subscribe(calculateJavascript => {
      this.calculateJavascript = calculateJavascript;
    });
    this.enterpriseService.calculatePhp(this.id).subscribe(calculatePhp => {
      this.calculatePhp = calculatePhp;
    });
    this.enterpriseService.calculateLow(this.id).subscribe(calculateLow => {
      this.calculateLow = calculateLow;
    });
    this.enterpriseService.calculateMedium(this.id).subscribe(calculateMedium => {
      this.calculateMedium = calculateMedium;
    })
    this.enterpriseService.calculateHigh(this.id).subscribe(calculateHigh => {
      this.calculateHigh = calculateHigh;
    })
  }
  cancel() {
   this.router.navigateByUrl("/tabs/find-enterprises");
  }
  deleteEnterprise() {
    if(confirm('Are you sure'))
    this.enterpriseService.deleteEnterprise(this.id).subscribe(() => {
      window.location.replace('/tabs/find-enterprises')
    })
  }
}
