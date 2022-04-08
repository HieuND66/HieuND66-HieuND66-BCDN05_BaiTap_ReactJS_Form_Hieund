import React, { Component } from 'react'
import { connect } from 'react-redux'

class TableSV extends Component {

  state = {
    keyWord : ''
  }
  renderTable = () => {
    let { mangSV } = this.props
    let count = 1;
    if(this.state.keyWord){
      return mangSV.filter((sv) => sv.hoTen.toLowerCase().includes(this.state.keyWord)).map((sv) => {
        return <tr key={sv.maSV}>
          <td>{count++}</td>
          <td>{sv.maSV}</td>
          <td>{sv.hoTen}</td>
          <td>{sv.sdt}</td>
          <td>{sv.email}</td>
          <td>
            <button 
              className="btn btn-danger mr-2"
              onClick={() =>{
                let action = {
                  type: "XOA_SINH_VIEN",
                  sinhVienXoa: sv.maSV
                }
                this.props.dispatch(action)
              }}
  
            >Xóa</button>
            <button 
              className="btn btn-info"
              onClick={()=>{
                let action ={
                  type: 'XEM_SINH_VIEN',
                  thongTinSV: sv
                }
                this.props.dispatch(action)
              }}
            >Xem </button>
          </td>
        </tr>
      })
    }
    return mangSV.map((sv) => {
      return <tr key={sv.maSV}>
        <td>{count++}</td>
        <td>{sv.maSV}</td>
        <td>{sv.hoTen}</td>
        <td>{sv.sdt}</td>
        <td>{sv.email}</td>
        <td>
          <button 
            className="btn btn-danger mr-2"
            onClick={() =>{
              let action = {
                type: "XOA_SINH_VIEN",
                sinhVienXoa: sv.maSV
              }
              this.props.dispatch(action)
            }}

          >Xóa</button>
          <button 
            className="btn btn-info"
            onClick={()=>{
              let action ={
                type: 'XEM_SINH_VIEN',
                thongTinSV: sv
              }
              this.props.dispatch(action)
            }}
          >Xem </button>
        </td>
      </tr>
    })
  }

  render() {

    return (
      <div className="card mt-5 ">
        <div className="card-header bg-dark text-white">Danh Sách Người dùng</div>
        <div className="card-body">
          <div className="searchForm form-inline mb-3">
            <input className="form-control w-50" type="text" placeholder="Tên sinh viên" 
              onChange={(e) => {
                this.setState({
                  keyWord: e.target.value.toLocaleLowerCase()
                })
              }
            }
            
            /> 
          </div>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">STT</th>
                <th scope="col">Mã SV</th>
                <th scope="col">Họ Tên</th>
                <th scope="col">SĐT</th>
                <th scope="col">Email</th>
                <th scope="col"></th>
              </tr>
            </thead>

            <tbody>
           

              {this.renderTable()}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (rootReducer) => {
  return {

    mangSV: rootReducer.formReducer.mangSV,
    search: rootReducer.formReducer.search
  }

}
export default connect(mapStateToProps)(TableSV)