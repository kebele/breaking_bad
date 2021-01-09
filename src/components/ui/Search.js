import React, { useState } from 'react'

const Search = ({ getQuery }) => {
  const [text, setText] = useState('')

  const onChange = (q) => {
    setText(q)
    getQuery(q)
  }

  return (
    <section className='search'>
      <form>
        <input
          type='text'
          className='form-control'
          placeholder='Search characters'
          value={text}
          onChange={(e) => onChange(e.target.value)}
          autoFocus
        />
      </form>
    </section>
  )
}

export default Search

/* 
state kulanacağız, arama inputuna girilecek ifadeleri kullanabilmek için
        <input
          type="text"
          className="form-control"
          placeholder="search character..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          autoFocus
        />
   burada text i value yaptık, ve setText ise text i belirleyen şey inputa yazılan value text stateti olacak, denemesini react dev tools da inputa girnlerin search deki state olarak atandıklarını görebiliriz,
   şimdi bizim bu değeri api ye yollayıp response u işlememiz lazım, App.js de düzenleme yapacağız     
*/
