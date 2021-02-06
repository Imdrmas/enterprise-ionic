import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Application } from '../modal/Modal';
import { ApplicationService } from '../service/application.service';

@Component({
  selector: 'app-find-application',
  templateUrl: './find-application.page.html',
  styleUrls: ['./find-application.page.scss'],
})
export class FindApplicationPage implements OnInit {
  application: Application = {} as Application;
  id: number;

  constructor(private router: Router, private route: ActivatedRoute,
     private applicationService: ApplicationService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.applicationService.findApplication(this.id).subscribe(application => {
      this.application = application;
    })
  }
  cancel() {
   this.router.navigateByUrl("/tabs/find-applications")
  }
  deleteApplication() {
    if(confirm('Are you sure')) {
      this.applicationService.deleteApplication(this.id).subscribe(() => {
        window.location.replace('/tabs/find-applications')
      })
    }
  }
}
