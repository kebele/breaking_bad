import React, { useState } from 'react'

const Search = () => {
    return (
        <section className="search">
            <form>
                <input type="text" className="form-control" placeholder="search character..." autoFocus/>
            </form>

        </section>
    )
}

export default Search

/* 
state kulanacağız, arama inputuna girilecek ifadeleri kullanabilmek için
*/