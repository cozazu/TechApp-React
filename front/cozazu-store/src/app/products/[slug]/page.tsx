import { getProductById } from '@/helpers'
import Image from 'next/image'

async function Page({ params }: { params: any }) {
  const { slug } = params
  const { name, description, image, price, stock, categoryId} = await getProductById(slug)

  return (
    <div className='mt-56'>
      <Image src={image} alt={name} width={300} height={300}/>
      <h1>{name}</h1>
      <p>{description}</p>
      <p>{price}</p>
      <p>{stock}</p>
      <p>{categoryId}</p>
    </div>
  )
}

export default Page