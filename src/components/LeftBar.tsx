import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const menuList = [
  {
    id: 1,
    name: "Homepage",
    link: "/",
    icon: "home.svg",
  },
  {
    id: 2,
    name: "Explore",
    link: "/",
    icon: "explore.svg",
  },
  {
    id: 3,
    name: "Notification",
    link: "/",
    icon: "notification.svg",
  },
  {
    id: 4,
    name: "Messages",
    link: "/",
    icon: "message.svg",
  },
  {
    id: 5,
    name: "Bookmarks",
    link: "/",
    icon: "bookmark.svg",
  },
  {
    id: 6,
    name: "Jobs",
    link: "/",
    icon: "job.svg",
  },
  {
    id: 7,
    name: "Communities",
    link: "/",
    icon: "community.svg",
  },
  {
    id: 8,
    name: "Premium",
    link: "/",
    icon: "logo.svg",
  },
  {
    id: 9,
    name: "Profile",
    link: "/",
    icon: "profile.svg",
  },
  {
    id: 10,
    name: "More",
    link: "/",
    icon: "more.svg",
  },
];

const LeftBar = () => {
  return (
    <div className='h-screen sticky top-0 flex flex-col justify-between pt-2 pb-8'>
      {/* Logo MENU BUTTON */}
      <div className="">
        {/* LOGO */}
        <Link href="/">
          <Image src="icons/logo.svg" alt='logo' width={24} height={24} />
        </Link>
        {/* MENU LIST */}
      <div className="flex flex-col">
        {menuList.map((item) => (
          <Link href={item.link} className='' key={item.id}>
            <Image
             src={`icons/${item.icon}`}
             alt={item.name}
             width={24}
             height={24}
            />
          </Link>
        ))}
      </div>
      </div>
      {/* USER */}
      <div className="">user</div>
    </div>
  )
}

export default LeftBar
