import React from 'react'

const getImageUrl = (person, size='s') => {
  let sizeCode = size;
  
  // Map pixel sizes to imgur size codes
  if (typeof size === 'number') {
    if (size >= 100) sizeCode = 'l';
    else if (size >= 75) sizeCode = 'm';
    else sizeCode = 's';
  }
  
  return (
        'https://i.imgur.com/' +
        person.imageId +
        sizeCode +
        '.jpg'
  )
}

export default getImageUrl
