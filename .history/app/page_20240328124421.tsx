import { FaArrowRight } from "react-icons/fa6";

const Home = () => {
  return (
    <>
      <section className="px-6 md:px-20 py-24 border-2 border-red-500">
        <div className="flex max-xl:flex-col gap-16">
          <div className="felx flex-col justify-center">
            <p className="small-text items-center"> 
              Smart Shopping Starts Here:
              <FaArrowRight/>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home