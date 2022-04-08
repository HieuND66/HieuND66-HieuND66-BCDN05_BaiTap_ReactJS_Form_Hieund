let dssv = {
  search: '',
  mangSV: [
    {
      maSV: 'sv201',
      hoTen: 'Duy Hieu',
      sdt: '0905161616',
      email: 'test1@gmail.com'
    },
    {
      maSV: 'sv202',
      hoTen: 'Duy Hieu',
      sdt: '0905161616',
      email: 'test1@gmail.com'
    },
    {
      maSV: 'sv204',
      hoTen: 'Long',
      sdt: '0905161616',
      email: 'test1@gmail.com'
    },
    {
      maSV: 'sv205',
      hoTen: 'Ky',
      sdt: '0905161616',
      email: 'test1@gmail.com'
    },
    {
      maSV: 'sv206',
      hoTen: 'Phung',
      sdt: '0905161616',
      email: 'test1@gmail.com'
    },
  ],
  thongTinSinhVien: {
    maSV: '',
    hoTen: '',
    sdt: '',
    email: ''
  },
  sinhVien: {
    values: {
      maSV: '',
      hoTen: '',
      sdt: '',
      email: '',
    },
    errors: {
      maSV: '',
      hoTen: '',
      sdt: '',
      email: '',
    },
  }

}

export const formReducer = (state = dssv, action) => {
  switch (action.type) {
    case 'THEM_SINH_VIEN':
      state.mangSV = [...state.mangSV, action.nguoiDung];

      return { ...state }
    case "XOA_SINH_VIEN":
      let mangSVXoa = [...state.mangSV]
      state.mangSV = mangSVXoa.filter((nd) => {
        return nd.maSV !== action.sinhVienXoa
      })

      return { ...state }
    case 'XEM_SINH_VIEN':
      state.thongTinSinhVien = action.thongTinSV
      // state.sinhVien.values = action.thongTinSV
      // state.sinhVien = {...state.sinhVien}
      return { ...state }
    case "HANDLE_INPUT":
      // state.sinhVien = action.sinhVien
      state.sinhVien = action.sinhVienCapNhat
      // state.sinhVien = {...state.sinhVien}

      return { ...state }
    case 'CAP_NHAT':
      let mangCapNhat = [...state.mangSV]
      let nguoiDungCapNhat = mangCapNhat.find((sv) => {
        return sv.maSV === action.thongTinCN.maSV;
      });
      if (nguoiDungCapNhat) {
        nguoiDungCapNhat.hoTen = action.thongTinCN.hoTen
        nguoiDungCapNhat.sdt = action.thongTinCN.sdt
        nguoiDungCapNhat.email = action.thongTinCN.email
      }
      state.mangSV = mangCapNhat;
      return { ...state }

    default:
      return state
  }

}