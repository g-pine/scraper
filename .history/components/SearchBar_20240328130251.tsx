"use client"

const SearchBar = () => {
  const handleSubmit = () => {

  }  
  return (
    <form className='flex flex-wrap gap-4 mt-12'
        onSubmit={handleSubmit}>
        <input 
            type="text"
            placeholder="Enter product link"
        />
    </form>
  )
}

export default SearchBar
