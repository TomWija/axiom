import React from 'react';
import renderer from 'react-test-renderer';
import TextInput from './TextInput';
import TextInputIcon from './TextInputIcon';
import TextInputButton from './TextInputButton';

const getComponent = (props = {}, children = 'Lorem ipsum') =>
  renderer.create(
    <TextInput { ...props }>{ children }</TextInput>
  );

describe('TextInput', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders when disabled', () => {
    const component = getComponent({ disabled: true });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with onClear and value', () => {
    const component = getComponent({ onClear: () => {}, value: 'Lorem' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders when invalid', () => {
    const component = getComponent({ invalid: true });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with label', () => {
    const component = getComponent({ label: 'Lorem ipsum' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders when valid', () => {
    const component = getComponent({ valid: true });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with TextInputIcon', () => {
    const component = getComponent({},
      <TextInputIcon name="twitter" />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with TextInputButton', () => {
    const component = getComponent({},
      <TextInputButton>Test</TextInputButton>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('renders with size', () => {
    ['small', 'medium', 'large'].forEach((size) => {
      it(size, () => {
        const component = getComponent({ size });
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });
});
