import * as React from 'react';
import renderer from 'react-test-renderer';
import { ProductCard, ProductImage } from '../../src/components';
import { product2 } from '../data/products';

describe('ProductTitle', () => {
  test('debe demostrar el componente correctamente con imagen llamada test', () => {
    const wrapper = renderer.create(<ProductImage img="test" />);

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('debe demostrar el componente con imagen del producto', () => {
    const wrapper = renderer.create(
      <ProductCard product={product2}>{() => <ProductImage />}</ProductCard>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
