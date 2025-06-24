import { useState, type FC, type PropsWithChildren } from "react";

import Button from "../button";

interface AccordionItemProps {
  title: string;
}

interface AccordionProps {
  items: Array<AccordionItemProps & { content: string }>;
}

const AccordionItem: FC<PropsWithChildren<AccordionItemProps>> = ({
  title,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b shadow-2xl border-gray-200 px-3 mt-2 bg-white rounded-sm">
      <div className="flex justify-between items-center">
        <Button
          className="w-full justify-start"
          variant="none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span>{title}</span>
        </Button>
        <span
          className={`mdi mdi-chevron-${
            isOpen ? "up" : "down"
          } cursor-pointer text-xl`}
        />
      </div>

      {isOpen && (
        <div className="overflow-hidden text-sm pb-4 border-t border-gray-100 py-1">
          {children}
        </div>
      )}
    </div>
  );
};

const Accordion: FC<AccordionProps> = ({ items }) => (
  <div className="w-full">
    {items.map((item, index) => (
      <AccordionItem key={index} title={item.title}>
        {item.content}
      </AccordionItem>
    ))}
  </div>
);

export default Accordion;
