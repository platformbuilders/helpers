import React, { FC } from 'react';
import { observable } from 'mobx';
import { mount } from 'enzyme';
import { withStore } from '..';

class TestStore {
  @observable
  count = 0;
}

const store = new TestStore();

interface Props {
  testStore: TestStore;
}

describe('Create mobx container tests', () => {
  it('should inject the stores on the component', () => {
    const Component: FC<Props> = ({ testStore }) => {
      const { count } = testStore;

      return (
        <div>
          <p>Count:</p>
          <p>{count}</p>
        </div>
      );
    };

    const Wrapped = withStore(Component, { testStore: store });

    const result = mount(<Wrapped />);

    expect(result.html()).toBe('<div><p>Count:</p><p>0</p></div>');
  });
});
