
// import React, { Component } from 'react'
// import { connect } from 'react-redux'


// class FormDangKy extends Component {

//   state = {
//     values: {
//       maSV: '',
//       hoTen: '',
//       sdt: '',
//       email: ''
//     },
//     errors: {
//       maSV: '',
//       hoTen: '',
//       sdt: '',
//       email: ''
//     },
//   }
//   handleInput = (event) => {
//     let { value, name } = event.target;
//     // let newValues = { ...this.state.values };
//     let newValues = {...this.props.sinhVien.values};
//     newValues[name] = value;
   
//     // let newErrors = { ...this.state.errors }
//     let newErrors = {...this.props.sinhVien.errors}
//     let message = ''

//     if (value.trim() === '') {
//       message = name + ' không được để trống'
//     }
//     let attrValue = event.target.getAttribute('data-type');

//     let reg = ''
//     if (attrValue === 'email') {
//       reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//       if (!reg.test(value)) {
//         message = name + ' không đúng định dạng'
//       }
//       else {
//         message = ''
//       }
//     }
//     if(name === 'sdt'){
//       reg = /^\+?[0-9]{3}-?[0-9]{6,12}$/;
//       if (!reg.test(value)) {
//         message = name + ' là số và có 9 đến 15 số'
//       } else {
//         message = ''
//       }
//     }
//     // if(name === 'maSV'){
//     //    this.props.mangSV
//     // }

//     newErrors[name] = message;


//     // this.setState({
//     //   values: newValues,
//     //   errors: newErrors
//     // })
//     let action = {
//       type: "HANDLE_INPUT",
//       sinhVienCapNhat: {
//         values: newValues,
//         errors: newErrors
//       }
//     }
//     this.props.dispatch(action)
//   }
//   handleSubmit = (event) => {
//     event.preventDefault();
//     // console.log(this.state);
//     console.log(this.props.mangSV);
//     let isValid = true;
//     // for(let key in this.state.errors){
//     for (let key in this.props.sinhVien.errors) {
//       if (this.props.sinhVien.errors[key] !== '') {
//         isValid = false;
//         break;
//       }
//     }
//     if (!isValid) {
//       alert('co loi')
//       return;
//     }
//     let action = {
//       type: "THEM_SINH_VIEN",
//       // nguoiDung: this.state.values
//       nguoiDung: this.props.sinhVien.values
//     }
//     this.props.dispatch(action)
//   }

//   // static getDerivedStateFromProps(newProps, currentState){

//   //   return {
//   //     ...currentState, 
//   //     values: newProps.sinhVien
//   //   }
//   // }

//   render() {
    

//     // let { maSV, hoTen, sdt, email } = this.state.errors;
//     // let {values} = this.props.sinhVien;
//     // let values = this.state.values;
//     let {maSV, hoTen, sdt, email} = this.props.sinhVien.errors;
//     // let values = this.state.values;
//     // let {sinhVien} = this.props
//     let {values} = this.props.sinhVien
//     // console.log(values);
//     // console.log('he' this.props.SinhVien.errors);
//     // console.log(maSV);
//     return (
//       <div className='card mt-5 ' >
//         <form onSubmit={this.handleSubmit}>
//           <div className="card-header bg-dark text-white">Form Đăng Ký</div>
//           <div className="card-body">
//             <div className="form-row">
//               <div className="form-group col-md-6">

//           <label >Ma SV</label>
//                 <input type="text" className="form-control" name='maSV'
//                   onChange={this.handleInput}
//                   value={values.maSV}
//                 />

//                 <p className='text-danger'>{maSV}</p>
//               </div>
//               <div className="form-group col-md-6">
//                 <label >Họ tên</label>
//                 <input type="text" className="form-control" name='hoTen'
//                   onChange={this.handleInput}
//                   value={values.hoTen}
//                 />
//                 <p className='text-danger'>{hoTen}</p>
//               </div>

//             </div>

//             <div className="form-row">
//               <div className="form-group col-md-6">
//                 <label >Số điện thoại</label>
//                 <input type="text" className="form-control" name='sdt'
//                   onChange={this.handleInput}
//                   value={values.sdt}
//                 />
//                 <p className='text-danger'>{sdt}</p>
//               </div>
//               <div className="form-group col-md-6">
//                 <label >Emai</label>
//                 <input type="text" data-type='email' className="form-control" name='email'
//                   onChange={this.handleInput}
//                   value={values.email}
//                 />
//                 <p className='text-danger'>{email}</p>
//               </div>

//             </div>
//           </div>
//           <div className="card-footer bg-dark text-white">

//             <button className="btn btn-success mr-3" >Đăn ký</button>
//             <button
//               className="btn btn-primary"
//               type='button'
//               onClick={() => {
//                 let action = {
//                   type: 'CAP_NHAT',
//                   thongTinCN: this.props.sinhVienCapNhat.values
//                 }
//                 this.props.dispatch(action);
//               }}
//             // onClick={() => {
//             // let action = {
//             //   type: "CAP_NHAT",
//             //   thongTinCN: this.props.nguoiDung.values
//             // }
//             // this.props.dispatch(action);
//             // }}
//             >Cập nhật</button>
//           </div>
//         </form>
//       </div>
//     )
//   }
// }

// const mapStateToProps = (rootReducer) => {
//   return {

//     // thongTinSV: rootReducer.formReducer.mangSV,
//     // nguoiDung: rootReducer.quanLyNDReducer.nguoiDung
//     // sinhVien: rootReducer.formReducer.thongTinSinhVien,
//     thongtinSV: rootReducer.formReducer.thongTinSinhVien,
//     sinhVien: rootReducer.formReducer.sinhVien,
//     mangSV: rootReducer.mangSV
//   }
// }

// export default connect(mapStateToProps)(FormDangKy)
import React, { Component } from 'react'
import { connect } from 'react-redux'

class FormDangKy extends Component {

  state = {
    values: {
      maSV: '',
      hoTen: '',
      sdt: '',
      email: ''
    },
    errors: {
      maSV: '',
      hoTen: '',
      sdt: '',
      email: ''
    },
  }
  handleInput = (event) => {
    let { value, name } = event.target;
    let newValues = { ...this.state.values };

    newValues[name] = value;
   
    let newErrors = { ...this.state.errors }
    let message = ''

    if (value.trim() === '') {
      message = name + ' không được để trống'
    }
    let attrValue = event.target.getAttribute('data-type');

    let reg = ''
    if (attrValue === 'email') {
      reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (!reg.test(value)) {
        message = name + ' không đúng định dạng'
      }
      else {
        message = ''
      }
    }
    if(name === 'sdt'){
      reg = /^\+?[0-9]{3}-?[0-9]{6,12}$/;
      if (!reg.test(value)) {
        message = name + ' là số và có 9 đến 15 số'
      } else {
        message = ''
      }
    }

    newErrors[name] = message;


    this.setState({
      values: newValues,
      errors: newErrors
    })

    // let action = {
    //   type: "HANDLE_INPUT",
    //   sinhVienCapNhat: {
    //     values: newValues,
    //     errors: newErrors
    //   }
    // }
    // this.props.dispatch(action)
  }
  handleSubmit = (event) => {
    event.preventDefault();
    // console.log(this.state);
    // console.log(this.props.mangSV);
    let isValid = true;
    // for(let key in this.state.errors){
    for (let key in this.props.sinhVien.errors) {
      if (this.props.sinhVien.errors[key] !== '') {
        isValid = false;
        break;
      }
    }
    if (!isValid) {
      alert('co loi')
      return;
    }
    // console.log(this.state);
    let action = {
    
      type: "THEM_SINH_VIEN",
      nguoiDung: this.state.values
      // nguoiDung: this.props.sinhVien.values
    }
    this.props.dispatch(action)
  }

  // static getDerivedStateFromProps(newProps, currentState){
  //   if(currentState.values.maSV !== newProps.thongtinSV.maSV){
  //     return {
  //       ...currentState, 
  //       values: newProps.thongtinSV
  //     }
  //   }
  //   return currentState
  // }
  componentWillReceiveProps(newProps){
    this.setState({
        values:newProps.thongtinSV
    });
}



  render() {
    
    let { maSV, hoTen, sdt, email } = this.state.errors;
    // let {maSV, hoTen, sdt, email} = this.props.sinhVien.errors;

    // let {values} = this.props.sinhVien
    let values = this.state.values;

    return (
      <div className='card mt-5 ' >
        <form onSubmit={this.handleSubmit}>
          <div className="card-header bg-dark text-white">Form Đăng Ký</div>
          <div className="card-body">
            <div className="form-row">
              <div className="form-group col-md-6">

          <label >Ma SV</label>
                <input type="text" className="form-control" name='maSV'
                  onChange={this.handleInput}
                  value={values.maSV}
                />

                <p className='text-danger'>{maSV}</p>
              </div>
              <div className="form-group col-md-6">
                <label >Họ tên</label>
                <input type="text" className="form-control" name='hoTen'
                  onChange={this.handleInput}
                  value={values.hoTen}
                />
                <p className='text-danger'>{hoTen}</p>
              </div>

            </div>

            <div className="form-row">
              <div className="form-group col-md-6">
                <label >Số điện thoại</label>
                <input type="text" className="form-control" name='sdt'
                  onChange={this.handleInput}
                  value={values.sdt}
                />
                <p className='text-danger'>{sdt}</p>
              </div>
              <div className="form-group col-md-6">
                <label >Emai</label>
                <input type="text" data-type='email' className="form-control" name='email'
                  onChange={this.handleInput}
                  value={values.email}
                />
                <p className='text-danger'>{email}</p>
              </div>

            </div>
          </div>
          <div className="card-footer bg-dark text-white">

            <button className="btn btn-success mr-3" >Đăn ký</button>
            <button
              className="btn btn-primary"
              type='button'
              onClick={() => {
                console.log(this.state);
                let action = {
                  
                  type: 'CAP_NHAT',
                  // thongTinCN: this.props.sinhVien.values
                  thongTinCN: this.state.values

                }
                this.props.dispatch(action);
              }}
            // onClick={() => {
            // let action = {
            //   type: "CAP_NHAT",
            //   thongTinCN: this.props.nguoiDung.values
            // }
            // this.props.dispatch(action);
            // }}
            >Cập nhật</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (rootReducer) => {
  return {

    thongtinSV: rootReducer.formReducer.thongTinSinhVien,
    sinhVien: rootReducer.formReducer.sinhVien,
    mangSV: rootReducer.mangSV
  }
}

export default connect(mapStateToProps)(FormDangKy)