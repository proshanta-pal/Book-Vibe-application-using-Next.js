import BookDetailsCard from '@/app/components/shared/BookDetailsCard';
import { IBook } from '@/app/types/book.type';
import React from 'react'

interface BookDetailsPageProps {
    params: Promise<{
        bookId: string;
    }>
}

const getBooks = async () => {
    const res = await fetch('http://localhost:3000/data.json');
    const data = await res.json();
    return data;
}

export default async function BookDetailsPage({params}: BookDetailsPageProps) {

  const { bookId } = await params;

  const books = await getBooks();
  const book = books.find((book: IBook) => book.bookId === parseInt(bookId));

  return (
    <section className='max-w-7xl mx-auto'>
        <BookDetailsCard book={book}/>
    </section>
  )
}
