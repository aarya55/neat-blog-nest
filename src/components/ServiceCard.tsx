
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

const ServiceCard = ({
  title,
  description,
  icon,
  className,
}: ServiceCardProps) => {
  return (
    <div
      className={cn(
        "bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow",
        className
      )}
    >
      <div className="mb-4 text-blue-600">{icon}</div>
      <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceCard;
