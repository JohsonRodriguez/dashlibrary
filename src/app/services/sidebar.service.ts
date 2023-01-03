import { Injectable } from '@angular/core';
import { CredentialsService } from 'src/app/services/credentials.service';
@Injectable({
  providedIn: 'root'
  
})
export class SidebarService {
  
  // public currentUser  = localStorage.getItem('rol');
  // public currentUser  = credentialsService.rol;
 //creación de menus por nfor    
  menu: any[] = [{

    submenu: [
      { titulo: 'Laptops', url: 'dashboard',icono:'nav-icon fa-solid fa-laptop',user:'ROLE_USER' },
      { titulo: 'Proyectores', url: 'users',icono:'nav-icon fa-solid fa-land-mine-on', user:'ROLE_ADMIN'},
      { titulo: 'Impresoras', url: 'register',icono:'fa-solid fa-print nav-icon' ,user:'ROLE_USER'},
      { titulo: 'Tablets', url: 'users',icono:'nav-icon fa-solid fa-tablet-screen-button', user:'ROLE_ADMIN'},
      { titulo: 'Televisores', url: 'persons',icono:'nav-icon fa-solid fa-tv', user:'ROLE_ADMIN'},
      { titulo: 'Telefonos', url: 'register',icono:'fa-solid fa-phone-volume nav-icon' ,user:'ROLE_USER'},


      
      // { titulo: 'Mis datos personales', url: '',icono:'fas fa-user-circle nav-icon' },
      // { titulo: 'Preguntas Frecuentes', url: '',icono:'fas fa-question-circle nav-icon' }
    ]

  }];

  menux: any[] = [{

    titulo: 'Computadoras',
    icono: '"nav-icon fa-solid fa-computer',
    user:'ROLE_ADMIN',
    submenux: [
      { titulo: 'Cpu', url: 'cpu' },
      { titulo: 'Monitores', url: 'reportperson' },
      { titulo: 'Teclado', url: 'reportcarsbyperson' },
      { titulo: 'Mouses', url: 'reportregister' },
    ]

  }];

  menucam: any[] = [{

    titulo: 'Cámaras',
    icono: '"nav-icon fa-solid fa-camera',
    user:'ROLE_ADMIN',
    submenux: [
      { titulo: 'Cámara Web', url: 'reportcars' },
      { titulo: 'Cámara Fotografica', url: 'reportperson' },
      { titulo: 'Cámara Seguridad', url: 'reportcarsbyperson' },
      ]

  }];
  
  menured: any[] = [{

    titulo: 'Redes',
    icono: '"nav-icon fa-solid fa-network-wired',
    user:'ROLE_ADMIN',
    submenux: [
      { titulo: 'Access Point', url: 'reportcars' },
      { titulo: 'Switch', url: 'reportperson' },
      ]

  }];

  menuOther: any[] = [{

    titulo: 'Otros',
    icono: '"nav-icon fa-solid fa-mattress-pillow',
    user:'ROLE_ADMIN',
    submenux: [
      { titulo: 'Controles', url: 'reportcars' },
      { titulo: 'Auriculares', url: 'reportperson' },
      { titulo: 'Extensiones', url: 'reportperson' },
      ]

  }];

  menuReport: any[] = [{

    titulo: 'Reportes',
    icono: '"nav-icon fa-solid fa-chart-simple',
    user:'ROLE_ADMIN',
    submenux: [
      { titulo: 'Access Point', url: 'reportcars' },
      { titulo: 'Switch', url: 'reportperson' },
      ]

  }];

  menuLoans: any[] = [{

    titulo: 'Prestamos',
    icono: '"nav-icon fa-solid fa-right-left',
    user:'ROLE_ADMIN',
    submenux: [
      { titulo: 'Pendientes', url: 'reportcars' },
      { titulo: 'Historial', url: 'reportperson' },
      ]

  }];
    

  

  constructor(
    
  ) { }
  
}
