import Image, { StaticImageData } from "next/image";
import CollageLink from "../buttons/CollageLink";

const CollageContent = ({
  product,
}: {
  product: { href: string; image: StaticImageData; content: string };
}) => {
  return (
    <div className="w-3/5  flex">
      <div className=" bg-gray-200 w-full col-center gap-8">
        <p className="text-3xl w-4/5 text-center font-bold">
          {product.content}
        </p>
        <CollageLink href={product.href} />
      </div>
      <Image src={product.image} width={300} height={200} alt="logo" />
    </div>
  );
};

export default CollageContent;
