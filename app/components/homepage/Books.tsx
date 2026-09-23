import { IBook } from "@/app/types/book.type";
import BookCard from "../shared/BookCard";
import Link from "next/link";


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
                books.slice(0, 4).map((book: IBook) => {
                    return (
                        <BookCard key={book.bookId} book={book}/>
                    )
                })
            }
        </div>

        <div className="text-center my-12">
                <Link href='/books'>
                    <button className=" text-green-500 border-2 rounded-full font-medium py-2 px-5 cursor-pointer hover:bg-green-500 hover:text-white transition-all">See more</button>
                </Link>
        </div>
    </section>
  )
}
