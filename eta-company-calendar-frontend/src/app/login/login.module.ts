import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './components/login.component';
import { LoginRoutingModule } from './login-routing.module';

@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    SharedModule,
    LoginRoutingModule,
    TranslateModule.forChild(),
  ]
})
export class LoginModule { }
