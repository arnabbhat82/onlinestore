import { Component, OnInit, Input } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() pageTitle: string;
  @Input() iconTitle: string;
  @Input() helpTitle: string;
  configData;
  counter = 0;
  userStatusColor = 'warn';

  constructor(private backendServive: BackendService) { }

  ngOnInit() {
    this.configData = this.backendServive.getConfig();
    // this.counter = this.backendServive.getCartTotal();
    this.backendServive.getCartTotal().subscribe(
      (data) => {
      this.counter = data;
      }
    );
    this.backendServive.getUserStatus().subscribe(
      (res) => {
        this.userStatusColor = res ? 'primary' : 'warn';
      }
    );

  }

}
