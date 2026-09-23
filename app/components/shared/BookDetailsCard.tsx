import { IBook } from '@/app/types/book.type'
import Image from 'next/image'
import React from 'react'
import ReadBooksButton from '../bookDetails/ReadBooksButton';
import WishlistButton from '../bookDetails/WishlistButton';

interface BookDetailsCardProps {
    book: IBook;
}

export default function BookDetailsCard({book}: BookDetailsCardProps) {
  return (
    <div className="card card-side bg-base-100 shadow-sm my-5">

        <Image src={book.image} alt={book.bookName} 
        width={800} height={500}/>


        <div className="card-body">
            <div className='flex gap-3'>
                <span className="badge badge-primary badge-outline">
                    {book.category}
                </span>

                {book.tags.map((tag) => (
                    <span key={tag} className="badge badge-ghost">
                        #{tag}
                    </span>
                ))}
            </div>


            <h2 className="card-title font-bold text-2xl">{book.bookName}</h2>
            <h3>by <span className='font-semibold text-lg'>{book.author}</span></h3>

            <div className='flex items-center gap-3 mb-8'>
                <div className='rating rating-sm'>
                    {
                        [1, 2, 3, 4, 5].map((star) => (
                            <input key={star} type='radio' name={`rating-${book.bookId}`}
                            className="mask mask-star-2 bg-orange-400" 
                            checked={Math.round(book.rating) === star} readOnly/>
                        ))
                    }
                </div>

                
                <span className="text-sm text-base-content/80"> <span className="font-semibold">{book.rating}</span> / 5.0</span>
            </div>

            <h3 className='font-semibold text-lg'>About the book</h3>
            <p>{book.review}</p>

            <div className='grid grid-cols-3 bg-slate-100 py-3 px-5 rounded-2xl my-3'>
                <div>
                    <h4 className='text-md'>Pages</h4>
                    <p className='font-semibold text-lg'>{book.totalPages}</p>
                </div>
                <div>
                    <h4 className='text-md'>Published</h4>
                    <p className='font-semibold text-lg'>{book.yearOfPublishing}</p>
                </div>
                <div>
                    <h4 className='text-md'>Publisher</h4>
                    <p className='font-semibold text-lg'>{book.publisher}</p>
                </div>
            </div>

            <div className="card-actions justify-end">
                <ReadBooksButton book={book}/>
                <WishlistButton book={book}/>
            </div>
        </div>
    </div>
  )
}
