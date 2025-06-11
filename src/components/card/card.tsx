import type { FC, PropsWithChildren } from "react";

interface CardProps {
  className?: string;
}

interface CardSubComponentProps extends CardProps {}

interface CardSubComponents {
  Header: FC<CardSubComponentProps>;
  Title: FC<CardSubComponentProps>;
  Description: FC<CardSubComponentProps>;
  Content: FC<CardSubComponentProps>;
  Footer: FC<CardSubComponentProps>;
}

const CardComponent: FC<PropsWithChildren<CardProps>> = ({
  className = "",
  children,
}) => {
  return (
    <div
      className={`rounded-lg border border-gray-100 bg-white text-black shadow-sm ${className}`}
    >
      {children}
    </div>
  );
};

const CardHeader: FC<PropsWithChildren<CardSubComponentProps>> = ({
  className = "",
  children,
}) => (
  <div className={`flex flex-col space-y-1.5 p-6 ${className}`}>{children}</div>
);

const CardTitle: FC<PropsWithChildren<CardSubComponentProps>> = ({
  className = "",
  children,
}) => (
  <div
    className={`text-2xl font-semibold leading-none tracking-tight ${className}`}
  >
    {children}
  </div>
);

const CardDescription: FC<PropsWithChildren<CardSubComponentProps>> = ({
  className = "",
  children,
}) => <div className={`text-sm text-gray-500 ${className}`}>{children}</div>;

const CardContent: FC<PropsWithChildren<CardSubComponentProps>> = ({
  className = "",
  children,
}) => <div className={className}>{children}</div>;

const CardFooter: FC<PropsWithChildren<CardSubComponentProps>> = ({
  className = "",
  children,
}) => (
  <div className={`flex items-center p-6 pt-0 ${className}`}>{children}</div>
);

const Card: FC<PropsWithChildren<CardProps>> & CardSubComponents =
  Object.assign(CardComponent, {
    Header: CardHeader,
    Title: CardTitle,
    Description: CardDescription,
    Content: CardContent,
    Footer: CardFooter,
  });

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
