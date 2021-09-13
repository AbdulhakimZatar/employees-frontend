import { Box, Heading } from '@chakra-ui/react'
import { TableActions } from './TableActions'
import { TableContent } from './TableContent'
import { TablePagination } from './TablePagination'
import superagent from 'superagent'
import {useState} from 'react'

export default function Main  () {
  const [employees,setEmployees] = useState([])

  const getEmployees = async () => {
    const API = 'http://localhost:5000/v1/employees'
    const results = await superagent.get(API)
    setEmployees(results.body.data)
  }


  return (
    <Box as="section" py="12">
      <Box
        maxW={{
          base: 'xl',
          md: '7xl',
        }}
        mx="auto"
        px={{
          base: '6',
          md: '8',
        }}
      >
        <Box overflowX="auto">
          <Heading size="lg" mb="6">
            Employees
          </Heading>
          <TableActions />
          <TableContent getEmployees={getEmployees} employees={employees} />
          <TablePagination employees={employees}/>
        </Box>
      </Box>
    </Box>
  )
}
