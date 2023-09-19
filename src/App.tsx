import React from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

export default function App() {
  return (
    <div className="w-full flex flex-col min-h-screen">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}
