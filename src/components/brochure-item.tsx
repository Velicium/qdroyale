import { Card } from "@material-tailwind/react";

interface BrochureItemProps {
  icon: React.ElementType;
  children: React.ReactNode;
}

export function BrochureItem({ icon: Icon, children }: BrochureItemProps) {
  return (
    <div className="flex items-start gap-4">
      <Card
        color="gray"
        className="h-12 w-12 shrink-0 items-center justify-center !rounded-lg"
      >
        <Icon className="h-6 w-6" strokeWidth={2} />
      </Card>
      <p className="w-full font-normal text-gray-500">
        {children}
      </p>
    </div>
  );
}

export default BrochureItem;
