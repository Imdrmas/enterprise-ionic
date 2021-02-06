import { Component, OnInit } from '@angular/core';
import { Application } from '../modal/Modal';
import { ApplicationService } from '../service/application.service';

@Component({
  selector: 'app-find-applications',
  templateUrl: './find-applications.page.html',
  styleUrls: ['./find-applications.page.scss'],
})
export class FindApplicationsPage implements OnInit {
  applications: Application[];

  constructor(private applicationService: ApplicationService) { }

  ngOnInit() {
    this.applicationService.findApplications().subscribe(applications => {
      this.applications = applications;
    })
  }

}
