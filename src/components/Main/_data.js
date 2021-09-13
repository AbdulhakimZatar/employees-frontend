import { User } from './User'

export const columns = [
  {
    Header: 'ID',
    accessor: 'id',
  },
  {
    Header: 'Employee',
    accessor: 'name',
    Cell: function MemberCell(data) {
      console.log(data)
      return <User avatar={data.avatar} name={data.name} />
    },
  },
  {
    Header: 'Email',
    accessor: 'email',
  },
  {
    Header: 'Department',
    accessor: 'department',
  },
]