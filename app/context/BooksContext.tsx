'use client'

import  { createContext, ReactNode, useState } from 'react'

export const BooksContext = createContext({});

export default function BooksProvider({ children }: {children: ReactNode}) {
  const [readBooks, setReadBooks] = useState([]);
  const [wishList, setWishList] = useState([]);

  const sharedData = {
    readBooks,
    setReadBooks,
    wishList,
    setWishList
  }

  return (
    <BooksContext.Provider value={sharedData}>
        {children}
    </BooksContext.Provider>
  )
}

