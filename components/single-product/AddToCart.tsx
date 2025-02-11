import ProductsGrid from "../products/ProductsGrid";
import { Button } from "../ui/button";

function AddToCart({ ProductsId }: { ProductsId: string }) {
  return (
    <Button className="capitalize mt-8" size="lg">
      add to cart
    </Button>
  );
}

export default AddToCart;
