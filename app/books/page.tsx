import React from 'react'
import { IBook } from '../types/book.type';
import BookCard from '../components/shared/BookCard';

const getBooks = async () => {
    const res = await fetch('http://localhost:3000/data.json');
    const data = await res.json();
    return data;
}

export default async function page() {
  
  const books: IBook[] = await getBooks();
//   console.log(books);

  return (
    <section className='max-w-7xl mx-auto'>
        <h2 className='text-center font-bold text-2xl my-5'>All Books</h2>
        <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4'>
            {
                books.map((book: IBook) => {
                    return (
                        <BookCard key={book.bookId} book={book}/>
                    )
                })
            }
        </div>
    </section>
  )
}
