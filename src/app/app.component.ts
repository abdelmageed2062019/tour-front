import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./componants/header/header.component";
import { FooterComponent } from "./componants/footer/footer.component";
import { FooteritemComponent } from "./componants/footeritem/footeritem.component";
import { UpbuttonComponent } from "./componants/upbutton/upbutton.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, FooteritemComponent, UpbuttonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Yaro';
}
