// components/Product.tsx
import { ProductType } from "@/types/ProductType"
import Image from 'next/image'; // Importe Image"

type ProductProps = {
    product: ProductType
};

export default function Product({product}: ProductProps){
  return (
      <div className="flex flex-col shadow-lg h-96 bg-slate-800 p-5 text-gray-300">
          {/* Usando o componente otimizado do Next.js */}
          <Image 
          
            src={product.image}
            alt={product.title}
            width={200} // Defina a largura base
            height={200} // Defina a altura base 
            className="relative max-h-72 flex-1 w-full h-40 object-cover mb-4"
            // className="relative max-h-72 flex-1"
          />
          <div className="flex justify-between font-bold my-3">{product.title}</div>
          <button className="rounded  hover:bg-blue-700 rouded-md bg-teal-600 text-white px-3.5 py-2.5 text-sm text-center br-5" >Adicionar ao Carrinho </button>
      </div>
  );
};
