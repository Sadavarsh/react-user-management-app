import React, { useEffect, useState } from 'react'
import { toast } from "react-toastify";
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { addUser,updateUser,getUser } from '../../store/userSlice';

const initialState = {
  name: "",
  email: "",
  phone: "",
  status: "",
};

const AddUser = () => {
  const {id} = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [state, setState] = useState(initialState);
  const { name, email, phone } = state;
  const {user} = useSelector((state) => state.users)

  useEffect(() => {
    dispatch(getUser(id));
    setState({...user})
  },[id,user])
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !phone) {
      toast.error("Please provide value into each input field");
    } else if((email.charAt(email.length-4)!='.') && (email.charAt(email.length-3)!=".")){
      toast.error("Please provide valid email address");
    }else if(phone.length !== 10){
      toast.error("Please enter 10 digis number");
    }
    else {
      if(!id) {
        dispatch( addUser(state));
      toast.success("User Added Successfully");
     
      }
      else{
        dispatch( updateUser(state));
        toast.success("User Updared Successfully");
      }
      setTimeout(() => navigate("/"),500)
    }
  };


  return (
    <React.Fragment>
      <section className='add-contact p-3'>
        <div className="container">
          <div className="row">
            <div className="col">
              {id? <p className="h4 text-success fw-bold">Update User</p> : <p className="h4 text-success fw-bold">Create User</p>}
              <p className="fst-italic">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur quisquam, repudiandae voluptates rerum praesentium soluta. Maxime beatae fugit non adipisci.</p>
            </div>
          </div>
          <div className="row align-itens-center">
            <div className="col">
              <form  onSubmit={handleSubmit} >
                <div className="mb-2">
                  <input type="text"   className='form-control' placeholder='Name' name='name'   value={name || ""}
          onChange={handleInputChange}  />
                </div>
                <div className="mb-2">
                  <input type="email" className='form-control' placeholder='Email' name='email'  value={email || ""}
          onChange={handleInputChange} />
                </div>
                <div className="mb-2">
                  <input type="number"  className='form-control' placeholder='phone' name='phone'  value={phone || ""}
          onChange={handleInputChange}  />
                </div>
                <div className="mb-2">
                  <input type="submit"  value={id ? "update" :"Save"} className='btn btn-success' />
                  <Link className='btn btn-dark ms-3' to="/">Cancel</Link>
                </div>
              </form>
            </div>
          </div>
        </div>

      </section>
    </React.Fragment>
  )
}

export default AddUser