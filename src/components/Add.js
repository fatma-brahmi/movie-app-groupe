import React, { useState } from 'react'
import Modal from 'react-modal';
import StartRating from './StartRating';
const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  
  // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
  Modal.setAppElement('#root');
const Add = ({hendeladd }) => {
    const [modalIsOpen, setIsOpen] = React.useState(false);
  const [form, setForm] = useState({
      name:'',
      date:'',
      image:'',
      rating:1,
  })
  //hendelchange les inputs mta3 lform
    function openModal() {
      setIsOpen(true);
    }
    const handelrate = (newrate) => {
        setForm({...form, rating:newrate});
      }
    //hendelchange les inputs mta3 lform
  
  const handelChange = (e) => {
    setForm({...form,[e.target.name]: e.target.value})
}
const handelsubmit = (e) => {
    e.preventDefault();
    let newmovie={...form,id:Math.random()}
    hendeladd(newmovie);
    setForm({ name:'',
    date:'',
    image:'',
    rating:1,
})
    closeModal();
    
}

  
    function closeModal() {
      setIsOpen(false);
    }
  
    return (
        <div>
             <button className='btn add-movie-btn' onClick={openModal}>Add movie</button>
      <Modal
        isOpen={modalIsOpen}
       
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        
       
        <div>I am a modal</div>
        <form onSubmit={handelsubmit}>
         
          
          <label > Name </label>
          <input type='text' name='name' onChange={handelChange} required />
          <label  >Date</label>
          <input name='date' type='date' onChange={handelChange} required />
          <label>Poster</label>
          <input  name='image' type='url' onChange={handelChange} required />
          <label >Rate</label>
          <StartRating handelrate={handelrate}  rate={form.rating} />
          <button className='btn btn-primary' >ADD</button>
          <button className='btn btn-danger' onClick={closeModal}>close</button>
        </form>
      </Modal>
        </div>
    )
}

export default Add
