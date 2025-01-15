import Image from "@/components/Image"

const Homepage = () => {
  return (
    <div className=''>
      <div className="relative">
        <Image
         path="general/post.jpeg"
         w={600}
         h={600}
         alt="test pos"
         tr={false}
        />
      </div>
    </div>
  )
}

export default Homepage
