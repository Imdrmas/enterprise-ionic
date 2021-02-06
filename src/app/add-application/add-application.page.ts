import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Application } from '../modal/Modal';
import { ApplicationService } from '../service/application.service';

@Component({
  selector: 'app-add-application',
  templateUrl: './add-application.page.html',
  styleUrls: ['./add-application.page.scss'],
})
export class AddApplicationPage implements OnInit {
  progressBar = false;
  application: Application = {} as Application;
  criticality: any;
  language: any;
  id: number;

  constructor(private applicationService: ApplicationService, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
  }

  setCriticality(e) {
    this.criticality = e.target.value;
  }
  setLanguage(e) {
    this.language = e.target.value;
  }
  addApplication() {
    this.progressBar = true;
    this.application.criticality = this.criticality;
    this.application.language = this.language;
    this.applicationService.createApplication(this.application, this.id).subscribe(application => {
      this.application = application;
      window.location.reload();
    })
  }
  cancel() {
    this.router.navigateByUrl("/tabs/add-user")
  }
}
