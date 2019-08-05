import * as React from "react";

export interface IHeaderProps {
  title: string;
  subTitle: string;
}

export default function Header({ title, subTitle }: IHeaderProps) {
  return (
    <>
      <h1>{title}</h1>
      <p>{subTitle}</p>
    </>
  );
}
