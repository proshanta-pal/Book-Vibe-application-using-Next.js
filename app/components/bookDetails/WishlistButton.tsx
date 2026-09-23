'use client'
import { BooksContext } from '@/app/context/BooksContext'
import { IBook } from '@/app/types/book.type'
import React, { Dispatch, SetStateAction, useContext } from 'react'
import { toast } from 'react-toastify'

export default function WishlistButton({ book }: {book: IBook}) {
  const {wishList, setWishList} = useContext(BooksContext) as {
    wishList: IBook[];
    setWishList: Dispatch<SetStateAction<IBook[]>>
  }

  const handleWishList = () => {
    // console.log('Wishlist', wishList);
    setWishList([...wishList, book]);
    toast.success(`Added to your wishlist ${book.bookName}`)
  }

  return (
    <button className="btn btn-primary"
    onClick={() => handleWishList()}>Wishlist</button>
  )
}
