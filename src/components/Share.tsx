"use client"
import React, { useState } from 'react'
import Image from './Image'
import { shareAction } from '@/actions'

const Share = () => {
  const [media, setMedia] = useState<File | null>(null)

  const handleMediaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.files && e.target.files[0]) {
      setMedia(e.target.files[0])
    }
  }
  return (
    <form className='p-4 flex gap-4' action={shareAction}>
      {/* AVATAR */}
      <div className="relative w-10 h-10 rounded-full overflow-hidden">
        <Image
          path='general/avatar.png'
          alt='Avatar'
          w={100}
          h={100}
          tr={true}
        />
      </div>
      {/* OTHER */}
      <div className="flex-1 flex flex-col gap-4">
        <input type="text" name='desc' placeholder='What is happening?!' className='bg-transparent outline-none placeholder:text-textGray text-xl'/>
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div className="flex gap-4 flex-wrap">
            <input type='file' name='file' onChange={handleMediaChange} className='hidden' id='file' />
            <label htmlFor='file'>
              <Image path='icons/image.svg' alt='icons' w={20} h={20} className='cursor-pointer' />
            </label>
            <Image path='icons/gif.svg' alt='icons' w={20} h={20} className='cursor-pointer' />
            <Image path='icons/poll.svg' alt='icons' w={20} h={20} className='cursor-pointer' />
            <Image path='icons/emoji.svg' alt='icons' w={20} h={20} className='cursor-pointer' />
            <Image path='icons/schedule.svg' alt='icons' w={20} h={20} className='cursor-pointer' />
            <Image path='icons/location.svg' alt='icons' w={20} h={20} className='cursor-pointer' />
          </div>
          <button className='bg-white text-black font-bold rounded-full py-2 px-4'>Post</button>
        </div>
      </div>
    </form>
  )
}

export default Share
