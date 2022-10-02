import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { MenuStore, MenuState } from '../../state/menu/menu.store';

@Injectable({ providedIn: 'root' })
export class MenuQuery extends QueryEntity<MenuState> {

  constructor(protected override store: MenuStore) {
    super(store);
  }

}
