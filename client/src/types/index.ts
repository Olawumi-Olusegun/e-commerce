import React, { PropsWithChildren } from "react";
import { LinkProps } from "react-router-dom";

export interface Product {
    id?: string;
    img: string;
    title:  string;
    star: React.ReactElement,
    reviews:  string;
    prevPrice:  string;
    newPrice:  string;
    company:  string;
    color:  string;
    category:  string;
}

export interface ProductResponse {
    message: string;
    data: Omit<Product, "star">
}




interface LinkProp extends LinkProps, PropsWithChildren {
    renderAs: "link";
  };
  interface ButtonProp extends React.ButtonHTMLAttributes<HTMLButtonElement>, PropsWithChildren {
    renderAs: "button";
  };
  interface AnchorProp extends React.AnchorHTMLAttributes<HTMLAnchorElement>, PropsWithChildren {
    renderAs: "anchor";
  };
  
  export type ButtonProps = LinkProp | ButtonProp | AnchorProp;


