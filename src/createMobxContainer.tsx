import React from 'react';
import { observer } from 'mobx-react';

type IReactComponent<Props = any> =
  | React.ClassicComponentClass<Props>
  | React.ComponentClass<Props>
  | React.FunctionComponent<Props>
  | React.ForwardRefExoticComponent<Props>;

interface MobxStores {
  [storeName: string]: any;
}

export function createMobxContainer<
  Component extends any,
  Stores extends MobxStores
>(Wrapped: Component, stores: Stores): IReactComponent {
  return observer((): JSX.Element => <Wrapped {...stores} />);
}
