import React, { useState, type FC, type PropsWithChildren } from "react";

import Button from "../button";

type TabsContextType = {
  value: string;
  setValue: (val: string) => void;
};

const TabsContext = React.createContext<TabsContextType | undefined>(undefined);

export const Tabs: FC<PropsWithChildren<{ defaultValue?: string }>> = ({
  defaultValue,
  children,
}) => {
  const [value, setValue] = useState(defaultValue || "");
  return (
    <TabsContext.Provider value={{ value, setValue }}>
      <div>{children}</div>
    </TabsContext.Provider>
  );
};

export const TabsList: FC<PropsWithChildren<{ className: string }>> = ({
  children,
  className,
}) => {
  return (
    <div className={`rounded-md bg-gray-100 p-1 text-gray-500 ${className}`}>
      {children}
    </div>
  );
};

export const TabsTrigger: FC<PropsWithChildren<{ value: string }>> = ({
  value,
  children,
}) => {
  const ctx = React.useContext(TabsContext);
  if (!ctx) throw new Error("TabsTrigger must be used inside Tabs");

  const isActive = ctx.value === value;

  return (
    <Button
      variant="none"
      size="md"
      onClick={() => ctx.setValue(value)}
      className={`text-sm ${
        isActive
          ? "bg-white text-black shadow-sm"
          : "text-gray-500 hover:text-black"
      }`}
    >
      {children}
    </Button>
  );
};

export const TabsContent: FC<PropsWithChildren<{ value: string,className:string }>> = ({
  value,
  className,
  children,
}) => {
  const ctx = React.useContext(TabsContext);
  if (!ctx) throw new Error("TabsContent must be used inside Tabs");
  if (ctx.value !== value) return null;

  return <div className={`m-1 ${className}`}>{children}</div>;
};
