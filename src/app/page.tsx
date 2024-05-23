import React from 'react';
import Campaign from '@/components/Campaign';
import Card from '@/components/Card';

const catData = [
  { name: 'Abyssinian', imgCat: 'https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg' },
  { name: 'American Shorthair', imgCat: 'https://cdn2.thecatapi.com/images/JFPROfGtQ.jpg' },
  { name: 'Cheetih', imgCat: 'https://cdn2.thecatapi.com/images/IFXsxmXLm.jpg' },
  { name: 'Donskoy', imgCat: 'https://cdn2.thecatapi.com/images/3KG57GfMW.jpg' },
  { name: 'AmericanCurl', imgCat: 'https://cdn2.thecatapi.com/images/xnsqonbjW.jpg' },
  { name: 'Arabian Mau', imgCat: 'https://cdn2.thecatapi.com/images/k71ULYfRr.jpg' },
  { name: 'British Shorthair', imgCat: 'https://cdn2.thecatapi.com/images/s4wQfYoEk.jpg' },
  { name: 'California Spangled', imgCat: 'https://cdn2.thecatapi.com/images/B1ERTmgph.jpg' },
  { name: 'Cyprus', imgCat: 'https://cdn2.thecatapi.com/images/tJbzb7FKo.jpg' },
  { name: 'Dragon Li', imgCat: 'https://cdn2.thecatapi.com/images/BQMSld0A0.jpg' },
  { name: 'Exotic Shorthair', imgCat: 'https://cdn2.thecatapi.com/images/YnPrYEmfe.jpg' },
  { name: 'Munchkin', imgCat: 'https://cdn2.thecatapi.com/images/j5cVSqLer.jpg' },
];

export default function Home() {
  return (
    <main className="container mx-auto py-8">
      <div className="">
        <Campaign/>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 px-4 mt-12">
        {catData.map((cat, index) => (
          <Card key={index} name={cat.name} imgCat={cat.imgCat} />
        ))}
      </div>
    </main>
  );
}
