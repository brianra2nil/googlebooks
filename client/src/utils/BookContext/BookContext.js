import React, { createContext } from 'react'

const BookContext = createContext({
  search: '',
  media: [],
  handleInputChange: () => { },
  handleSearchGoogle: () => { },
  handleSaveGoogle: () => { }
})

export default BookContext