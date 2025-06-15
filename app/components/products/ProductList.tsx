// components/accessories/ProductList.tsx
import ProductCard from './ProductCard';

type Product = {
  id: number;
  name: string;
  slug: string;
  price: number;
  category: string;
};

const CATEGORY_TITLES: Record<string, string> = {
  exhaust: 'Exhausts',
  spoiler: 'Spoiler',
  diffuser: 'Diffuser',
  aero: 'Aero',
  kit: 'Kit',
};

type Props = {
  products: Product[];
};

const ProductList = ({ products }: Props) => {
  const grouped = products.reduce((acc: Record<string, Product[]>, product) => {
    if (!acc[product.category]) acc[product.category] = [];
    acc[product.category].push(product);
    return acc;
  }, {});

  return (
    <div className="space-y-10">
      {Object.entries(grouped).map(([category, items]) => (
        <div key={category}>
          <h2 className="text-4xl font-bold mb-4 text-center">{CATEGORY_TITLES[category] || category}</h2>
          <div className='w-[80%] h-[2px] bg-black mx-auto shadow-xl mb-10'></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
