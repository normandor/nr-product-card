# NR-product-card

Test for NPM deploy.

## Ejemplo
```
import { ProductCard, ProductTitle, ProductImage, ProductButtons } from 'nr-product-card';
```

```
<ProductCard
    product={product}
    initialValues={{
        count: 4,
        maxCount: 10,
    }}
>
    {
        ({ count, maxCount, isMaxCountReached, reset, increaseBy }) => (
            <>
                <ProductImage />
                <ProductTitle />
                <ProductButtons />
            </>
        )
    }

</ProductCard>
```