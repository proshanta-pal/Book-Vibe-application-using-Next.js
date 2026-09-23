import { IBook } from '@/app/types/book.type'
import Image from 'next/image';
import Link from 'next/link';

interface BookCardProps {
    book: IBook;
}

export default function BookCard({book}: BookCardProps) {
  return (
    <div className='group overflow-hidden border border-slate-300 rounded-2xl shadow-sm transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 p-5'>
        <div className='relative h-72'>
            <Image 
            src={book.image} alt={book.bookName} width={800} height={600} 
            className='h-full w-full object-cover transition-all rounded-2xl delay-500 group-hover:scale-105'/>

            <span className='absolute left-5 top-5 rounded-3xl bg-white/80 px-3 backdrop-blur'>
                {book.category}
            </span>

            <div className='absolute right-5 top-5 rounded-3xl bg-slate-900/80 text-white px-3 font-medium flex gap-1 items-center backdrop-blur'>
                <span className='text-yellow-400'>★</span>
                {book.rating}
            </div>

        </div>

        <div className='p-5'>
            <div className="mb-3 flex flex-wrap gap-2">
                {book.tags.map((tag) => (
                    <span key={tag} className="rounded-md bg-emerald-100 px-2.5 py-1 text-xs font-medium text-emerald-600">
                        #{tag}
                    </span>
                ))}
            </div>

            <h3 className="line-clamp-1 text-xl font-bold text-slate-800 transition-colors group-hover:text-emerald-600">
                {book.bookName}
            </h3>

            
            <p className="mt-1 text-md text-slate-500">
            by <span className="font-medium text-slate-700">{book.author}</span>
            </p>
        </div>

        <Link href={`/books/${book.bookId}`}>
          <button className="btn w-full rounded-xl border-0 bg-slate-900 text-white transition-all hover:bg-emerald-600">
            View Details
          </button>
        </Link>
    </div>
  )
}
