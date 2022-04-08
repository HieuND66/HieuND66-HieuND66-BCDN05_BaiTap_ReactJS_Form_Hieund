import React, { Component } from 'react'
import FormDangKy from './FormDangKy'
import TableSV from './TableSV'

export default class QLSV extends Component {
  render() {
    return (
      <div className='container'>
        <FormDangKy/>
        <TableSV/>
      </div>
    )
  }
}
