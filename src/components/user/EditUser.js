import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { updateUser, getUser } from '../../store/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from "react-toastify";
const initialState = {
  name: "",
  email: "",
  phone: "",
};

const EditUser = () => {

  const {id} = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {user} = useSelector((state) => state.users)
  const [state, setState] = useState(initialState);

  const { name, email, phone } = state;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !phone) {
      toast.error("Please provide value into each input field");
    } else {
      dispatch(updateUser(state));
      toast.success("User Update Successfully");

      setTimeout(() => navigate("/"),500)
    }
  };
  useEffect(() => {
    dispatch(getUser(id));
    setState({...user})
  },[id,user])
 
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  
  return (
    <React.Fragment>
     
  <section className='add-contact p-3'>
      <div className="container mt-3">
        <div className="row">
          <div className="col">
            <p className="h4 text-primary fw-bold">Edit User</p>
            <p className="fst-italic">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur quisquam, repudiandae voluptates rerum praesentium soluta. Maxime beatae fugit non adipisci.</p>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-md-6">
            <form onSubmit={handleSubmit}>
              <div className="mb-2">
                <input type="text" className='form-control' placeholder='Name' name='name'  required={true}  value={name || ""}
          onChange={handleInputChange} />
              </div>
              <div className="mb-2">
                <input type="email" className='form-control' placeholder='Email' name='email' required={true}  value={email || ""}
          onChange={handleInputChange}  />
              </div>
              <div className="mb-2">
                <input type="number" className='form-control' placeholder='Mobile' name='phone' required={true}  value={phone || ""}
          onChange={handleInputChange} />
              </div>
              <div className="mb-2">
                <button type="submit" className='btn btn-primary'>Update</button>
                <Link className='btn btn-dark ms-3' to={'/'}>Cancel</Link>
              </div>
            </form>
          </div>
        </div>
      </div>

    </section>
       
  
  </React.Fragment>
  )
}

export default EditUser