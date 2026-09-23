'use client'

import { BooksContext } from '@/app/context/BooksContext'
import { IBook } from '@/app/types/book.type'
import React, { Dispatch, SetStateAction, useContext } from 'react'
import { toast } from 'react-toastify';

export default function ReadBooksButton({ book }: {book: IBook}) {

  const {readBooks, setReadBooks} = useContext(BooksContext) as {
    readBooks: IBook[];
    setReadBooks: Dispatch<SetStateAction<IBook[]>>;
  };

  const handleReadBooks = () => {
    // console.log('Read Books:', readBooks);
    setReadBooks([...readBooks, book]);
    toast.success(`You have read books ${book.bookName}`)
    
  }

  return (
    <div>
        <button className="btn btn-primary"
        onClick={() => handleReadBooks()}>Read</button>
    </div>
  )
}
