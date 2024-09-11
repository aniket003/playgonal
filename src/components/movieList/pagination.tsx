import React from 'react'
interface PageProps {
  page: number;  // Define the type of pagenumber as number
  setPageNumber: (page: number) => void;
  maxPages: number
}
const pages:number[]=[1,2,3]
const Pagination:React.FC<PageProps>=(props) => {
  const {page,setPageNumber,maxPages} = props
  return (
    <nav aria-label="Page navigation example">
    <ul className="pagination">
        <li className="page-item">
        <a className="page-link" aria-label="Previous" onClick={()=>setPageNumber(page>1?page-1:1)}>
            <span aria-hidden="true">&laquo;</span>
        </a>
        </li>
        { pages?.map((p,index)=>(
          index < maxPages &&
          <li className={`page-item ${page==p&&'active-page'}`} key={index} onClick={()=>setPageNumber(p)}><a className="page-link">{p}</a></li>
        )) }
        <li className="page-item">
        <a className="page-link" aria-label="Next" onClick={()=>setPageNumber(page<3?page+1:3)}>
            <span aria-hidden="true">&raquo;</span>
        </a>
        </li>
    </ul>
    </nav>
  )
}

export default Pagination