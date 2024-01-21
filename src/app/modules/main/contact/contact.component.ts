import { Component } from '@angular/core';
import { Github, Instagram, Linkedin, Mail } from 'lucide-angular';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  github = Github
  linkedin = Linkedin
  mail = Mail
  instagram = Instagram
}
