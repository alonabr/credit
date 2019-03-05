import { AlertService } from "./common/services/alert.service";
import { AuthenticationService } from './common/services/authentication.service';
import { LoginService } from './login/login.service';
import { LoginObject } from './login/loginobject';
import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LoginService]
})
export class AppComponent implements OnInit {
  
    model: any = {};
    result: string;
    loading = false;
    returnUrl: string;
    @Input() loginScreen: boolean = true;
  
  
  constructor(private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService) {
  }


  ngOnInit(): void {
        // reset login status
        this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  
  login(){
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(
                data => {
                  this.router.navigate([this.returnUrl]);
                },
                error => {
                    //this.alertService.error(error);
                    this.loading = false;
                    this.result = error;
                  
                });
    }
}

