import {Component, OnInit, ViewChild} from '@angular/core';
import {User} from '../user';
import {StudyService} from '../study.service';
import {Study} from '../study';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-studycatalog-add',
  templateUrl: './studycatalog-add.component.html',
  styleUrls: ['./studycatalog-add.component.less']
})
export class StudycatalogAddComponent implements OnInit {

  study: Study = {name: '', description: '', acknowledgements: '', reference: ''};
  users: User[] = [];

  submitted = false;

  @ViewChild('studyForm') public studyForm: NgForm;

  constructor(private studyService: StudyService, private router: Router) { }

  ngOnInit() {
    this.studyService.getUser().subscribe(user => this.study.initiator = user);
    this.study.collaborators = [];
    this.studyService.getUsers().subscribe(users => this.users = users);
  }

  save(): void {
    this.submitted = true;
    if (!this.studyForm.invalid) {
      this.studyService.saveStudy(this.study).subscribe(response =>
        this.router.navigateByUrl('/'));
    }
  }

  updateCheckedCollaborators(user, event): void {
    if (event.target.checked) {
      this.study.collaborators.push(user);
    }
  }

  cancel(): void {
    this.router.navigateByUrl('/');
  }

}
