import {Store} from '../store';

export const AmdEs: Store = {
  currency: '€',
  labels: {
    inStock: {
      container: '.btn-shopping-cart',
      text: ['add to cart'],
    },
    maxPrice: {
      container: '.product-page-description h4',
      euroFormat: true,
    },
    outOfStock: [
      {
        container: '.product-out-of-stock',
        text: ['Out of stock'],
      },
    ],
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://www.amd.com/es/direct-buy/5450881400/es',
    },
    {
      brand: 'amd',
      cartUrl:
        'https://www.amd.com/es/direct-buy/5450881400/es?add-to-cart=true',
      model: '5950x',
      series: 'ryzen5950',
      url: 'https://www.amd.com/es/direct-buy/5450881400/es',
    },
    {
      brand: 'amd',
      cartUrl:
        'https://www.amd.com/es/direct-buy/5450881500/es?add-to-cart=true',
      model: '5900x',
      series: 'ryzen5900',
      url: 'https://www.amd.com/es/direct-buy/5450881500/es',
    },
    {
      brand: 'amd',
      cartUrl:
        'https://www.amd.com/es/direct-buy/5450881600/es?add-to-cart=true',
      model: '5800x',
      series: 'ryzen5800',
      url: 'https://www.amd.com/es/direct-buy/5450881600/es',
    },
    {
      brand: 'amd',
      cartUrl:
        'https://www.amd.com/es/direct-buy/5450881700/es?add-to-cart=true',
      model: '5600x',
      series: 'ryzen5600',
      url: 'https://www.amd.com/es/direct-buy/5450881700/es',
    },
    {
      brand: 'amd',
      cartUrl:
        'https://www.amd.com/es/direct-buy/5458374100/es?add-to-cart=true',
      model: 'amd reference',
      series: 'rx6800xt',
      url: 'https://www.amd.com/es/direct-buy/5458374100/es',
    },
    {
      brand: 'amd',
      cartUrl:
        'https://www.amd.com/es/direct-buy/5458374000/es?add-to-cart=true',
      model: 'amd reference',
      series: 'rx6800',
      url: 'https://www.amd.com/es/direct-buy/5458374000/es',
    },
    {
      brand: 'amd',
      cartUrl:
        'https://www.amd.com/es/direct-buy/5458374200/es?add-to-cart=true',
      model: 'amd reference',
      series: 'rx6900xt',
      url: 'https://www.amd.com/es/direct-buy/5458374200/es',
    },
  ],
  name: 'amd-es',
};
