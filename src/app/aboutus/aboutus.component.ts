 // step1
import { Component,
  OnInit,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  ComponentRef,
  ComponentFactory
} from '@angular/core';
// step2
import { ActivatedRoute } from '@angular/router';

export interface StateList {
  id: number;
stateName: string;
}
// step3
import { HomepageComponent } from '../homepage/homepage.component';
import { MyshopingcartComponent } from '../myshopingcart/myshopingcart.component';
// shoping cart data service provider
import {ShopingCartService} from '../shoping-cart.service';
import { containsTree } from '@angular/router/src/url_tree';
@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})


export class AboutusComponent implements OnInit {
  productName;
  ddlState: Array<StateList> = [];
  stateName: string;
  rdoselecteditem: string;
  chkBoxSelected: Array<string> = [];
  productId: string;
   // step4
  title = 'load a dynamic component';
  componentRef: any;
  @ViewChild('messagecontainer', { read: ViewContainerRef }) entry: ViewContainerRef;
  // step5 add some parameter in construture to intiatlize the property
  constructor(private route: ActivatedRoute, private resolver: ComponentFactoryResolver, private shopingService: ShopingCartService) {
    this.ddlState.push({id: 1 , stateName: 'UP' });
    this.ddlState.push({id: 2 , stateName: 'Punjab' });
  }
  onCheckBoxSelection(statename: any, event: any) {
    if (event.target.checked === false) {
      this.chkBoxSelected = this.chkBoxSelected.filter(item => {
          return item !== statename.id;
      });

    } else {
    this.chkBoxSelected.push(statename.id);
    }
    console.log(this.chkBoxSelected);
  }
  ngOnInit() {
    this.productId = this.route.snapshot.params['productId'];
    // to add a dynamic component on load
    this.createComponent('home');
  }
  onKeySearch() {
   this.shopingService.SearchItemByKeyWord(this.productName);
  }
  // step6
  createComponent(componentName) {
   let componentN: any;
    if ( componentName === 'home') {
      componentN = HomepageComponent;
    } else {
      componentN = MyshopingcartComponent;
    }

    this.entry.clear();
    const factory = this.resolver.resolveComponentFactory(componentN);
    const componentRef = this.entry.createComponent(factory);
}
// step7
destroyComponent() {
  this.componentRef.destroy();
}

}
