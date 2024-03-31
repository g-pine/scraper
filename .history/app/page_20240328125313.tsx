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
            <h1 className="head-text">
              Unleash the Power of
              <span className="text-primary"> PriceWise</span>
            </h1>
            <p className="mt-6">
              Powerfull, self-serve product and growth analytics to help you convert,
              engage, and retain more.
            </p>
            SearchBar
          </div>
          HeroCarousel
        </div>
      </section>
      <section className="trending-section">
        <h2 className="section-text">Trending</h2>
        <div className="flex flex-wrap gap-x-8 gap-y-16">
          {['Apple Iphone 15', 'Book', 'Sneakers']}
        </div>
      </section>
    </>
  )
}

export default Home