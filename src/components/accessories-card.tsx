import Image from "next/image";
import { Card, CardHeader, CardBody } from "@material-tailwind/react";

interface AccessoriesCardProps {
  img: string;
  title: string;
  desc: string;
}

export function AccessoriesCard({ img, title, desc }: AccessoriesCardProps) {
  return (
    <Card color="transparent" shadow={false}>
      <CardHeader floated={false} className="mx-0 mt-0 mb-6 h-48">
        <Image
          src={img}
          alt={title}
          width={768}
          height={768}
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody className="p-0">
        <a
          href="#"
          className="text-blue-gray-900 transition-colors hover:text-gray-800"
        >
          <h5 className="mb-2 text-xl font-medium">
            {title}
          </h5>
        </a>
      </CardBody>
    </Card>
  );
}

export default AccessoriesCard;
