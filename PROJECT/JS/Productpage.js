import React from 'react';
import parseHtml from 'react-html-parser';
import Product_pageHtml from './Product_page.html';

function Product_page() {
  return parseHtml(Product_pageHtml);
}

export default Product_page;