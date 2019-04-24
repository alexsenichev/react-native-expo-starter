import { action, computed, configure, observable } from 'mobx';
import { create, persist } from 'mobx-persist';
import { AsyncStorage } from 'react-native';
import { ApiStore } from './ApiStore';

// TODO: Cleanup example values
class ApplicationStore {
  @observable
  public api: ApiStore = new ApiStore();

  @persist
  @observable
  public persistedVariable: string = 'Motorbike';

  @observable
  public exampleMobxStatePrimitive: boolean = true;

  @action
  public updateExampleStateValue = () => {
    this.exampleMobxStatePrimitive = !this.exampleMobxStatePrimitive;
  };

  @computed
  get exampleStateValue() {
    return this.exampleMobxStatePrimitive;
  }
}

configure({
  // Enable strict mode so observable values may be changed only in actions
  enforceActions: 'observed',
});

const singleton = new ApplicationStore();
export default singleton;

const hydrate = create({
  jsonify: true, // if you use AsyncStorage, this needs to be true
  storage: AsyncStorage, // Choose our storage medium, ensure it's imported above
});

// We hydrate anything we've persisted so that it is updated into the state on creation
hydrate('persistedState', singleton).then(data => {
  // console.log('Hydrated persisted data; ', data);
});
