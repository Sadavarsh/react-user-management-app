import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector  } from 'react-redux/';
import { deleteUser } from '../store/userSlice';
import { toast } from 'react-toastify';




const Home = () => {  
  const dispatch = useDispatch()
  const {users} = useSelector((state) => state.users)

  const onDeleteContact = (id) => {
    if (
      window.confirm("Are you sure that you wanted to delete that contact ?")
    ) {
      dispatch(deleteUser(id));
      toast.success("User deleted Successfully")
    }
  };



  

return (
    <React.Fragment>
      <section className='contact-search p-3'>
        <div className="container">
          <div className="grid">
            <div className="row">
              <div className="col">
                <p className="h3 fw-bold">Users 
                <Link to="/adduser" className='btn btn-primary ms-5'> <i className="fa fa-plus-circle me-2"></i>Add New User</Link>
                </p>
                <p className="fst-italic"> Lorem ipsum dolor sit amet consectetur adipisicing elit. In amet consequuntur quo fugit cum! Illum nesciunt, libero facilis veritatis necessitatibus voluptatem blanditiis repellendus odio laudantium cumque similique, quas nisi ipsam? </p>
              </div>
            </div>
          </div>
        </div>
      </section>
         <section className="contact-list">
        <div className="container">
        <div className="row">
        {users.map((user) => {
            return (
         
                  <div className="col-md-6" key={user.id}>
                  <div className="card my-3">
                    <div className="card-body">
                     <div className="row align-items-center d-flex justify-content-around ">
                      <div className="col-md-10">
                        <ul className='list-group'>
                          <li className='list-group-item list-group-action'>
                            Name : <span className='fw-bold'>{user.name}</span>
                          </li>
                          <li className='list-group-item list-group-action'>
                            Email : <span className='fw-bold'>{user.email}</span>
                          </li>
                          <li className='list-group-item list-group-action'>
                            Mobile : <span className='fw-bold'>{user.phone}</span>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-2 d-flex flex-md-column flex-sm-row justify-content-center align-items-center mt-sm-2 gap-sm-3">
                        <Link className='btn btn-warning my-1'  to={`/viewuser/${user.id}`}  >
                          <i className='fa fa-eye'></i>
                        </Link>
                        <Link className='btn btn-primary' to={`/update/${user.id}`} >
                          <i className='fa fa-pen'></i>
                        </Link>
                        <button className='btn btn-danger my-1'  onClick={() => onDeleteContact(user.id)} >
                          <i className='fa fa-trash'></i>
                        </button>
                      </div>
                     </div>
                    </div>
                  </div>
                </div>
        
           );
          })}
            </div>
        </div>
      </section>    
    </React.Fragment>
  )
            }

export default Home