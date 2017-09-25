import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogoRoutingModule } from './catalogo-routing.module';
import { CatalogoComponent } from './catalogo.component';
import { NuevoComponent } from './nuevo/nuevo.component';
import { BaseComponent } from './base.component';
import { ListaComponent } from './lista/lista.component';

import { FormsModule} from '@angular/forms';

import { SharedModule } from 'app/core/shared/shared.module';
import { SharedService } from 'app/routes/catalogo/service/shared.service';
import { FilaComponent } from './lista/fila/fila.component';

@NgModule({
  imports: [
    CommonModule,
    CatalogoRoutingModule,
    SharedModule,
    FormsModule
  ],
  declarations: [CatalogoComponent, NuevoComponent, BaseComponent, ListaComponent, FilaComponent],
  providers: [SharedService]
})
export class CatalogoModule { }
