import Image from "next/image"

const Home = () => {
  return (
    <>
      <section className="px-6 md:px-20 py-24 border-2 border-red-500">
        <div className="flex max-xl:flex-col gap-16">
          <div className="felx flex-col justify-center">
            <p className="small-text">
              Smart Shopping Starts Here:
              <Image 
                src='../public/assets/icons/arrow-right.svg'
                alt="arrow-right"
                width={16}
                height={16}
              />
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home