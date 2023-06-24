import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import { getUser } from '../../store/userSlice';




const ViewUser = () => {

  const {id} = useParams();
  const dispatch = useDispatch();
  const {user} = useSelector((state) => state.users)

  useEffect(() => {
    dispatch(getUser(id));


  },[id])

  return (
    <React.Fragment>
      <section className="view-contact-intero">
        <div className="container mt-3">
          <div className="row">
            <div className="col">
              <p className="h3 text-warning fw-bold">View User</p>
              <p className="fst-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis laudantium voluptates iste pariatur cumque earum nihil repellat qui animi impedit.</p>
            </div>
          </div>
        </div>
      </section>
    <section className="view-contact mt-3">
            <div className="container">
              <div className="row align-items-center">
                <div className="col">
                <ul className='list-group'>
                          <li className='list-group-item list-group-action'>
                            Name : <span className='fw-bold'>{user.name}</span>
                          </li>
                          <li className='list-group-item list-group-action'>
                            Mobile : <span className='fw-bold'>{user.phone}</span>
                          </li>
                          <li className='list-group-item list-group-action'>
                            Email : <span className='fw-bold'>{user.email}</span>
                          </li>
                        </ul>
                </div>
                <div className="row mt-4">
                  <div className="col">
                    <Link className='btn btn-warning' to={'/'}>Back</Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

    </React.Fragment>
  )
}

export default ViewUser