export { default as ApplicationStore } from './ApplicationStore';

import ApplicationStore from './ApplicationStore';
/**
 * This interface should be used in component to define props like
 *
 * interface SomeComponentProps extends IConnectedComponent {}
 * class SomeComponent extends React.Component<SomeComponentProps> {}
 *
 * or to be used directly if there are no own props
 *
 * class SomeComponent extends React.Component<IConnectedComponent> {}
 */
export interface IConnectedComponent {
  store: typeof ApplicationStore;
}
