"use client"

const SearchBar = () => {
  const handleSubmit = () => {

  }  
  return (
    <form className='flex flex-wrap gap-4 mt-12'
        onSubmit={handleSubmit}>
        <input 
            type="text"
        />
    </form>
  )
}

export default SearchBar
