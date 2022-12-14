
import React from 'react'
import { number } from 'yargs';

const Pagination =({postsPerPage, totalPosts}) => {

    const pageNumbers=[];

    for(let i=1; i<=Math.ceil(totalPosts / postsPerPage); i++){
        pageNumbers.push(i)
    }
  return (
    <div>
        <ul>
            {
                pageNumbers.map(number => (
                    <li key={number}>
                        <a href="!#">{number}</a>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default Pagination;
