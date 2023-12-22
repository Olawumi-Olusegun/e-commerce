import React from "react";

export interface Product {
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