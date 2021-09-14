import { Box, Heading } from '@chakra-ui/react'
import { TableActions } from './TableActions'
import { TableContent } from './TableContent'
import { TablePagination } from './TablePagination'
import superagent from 'superagent'
import { useState, useEffect } from 'react'

export default function Main() {
  const [employees, setEmployees] = useState([])
  const [count, setCount] = useState(0)
  const [selectedDepartment, setSelectedDepartment] = useState('')
  const [type, setType] = useState('name')
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (loading) return
    const delayDebounceFn = setTimeout(() => {
      getEmployees()
      setPage(1)
    }, 800)

    return () => clearTimeout(delayDebounceFn)
  }, [search, type])

  useEffect(() => {
    getEmployees()
  }, [page, selectedDepartment])

  const getEmployees = async () => {
    setLoading(true)
    const API = process.env.REACT_APP_API || 'http://localhost:5000/v1'
    const URL = `${API}/employees?page=${page}&filter=${selectedDepartment}&type=${type}&search=${search}`
    const results = await superagent.get(URL)
    setEmployees(results.body.data)
    setCount(results.body.count)
    setLoading(false)
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
          <TableActions setSearch={setSearch} setType={setType} setSelectedDepartment={setSelectedDepartment} />
          <TableContent loading={loading} getEmployees={getEmployees} employees={employees} />
          <TablePagination page={page} setPage={setPage} count={count} />
        </Box>
      </Box>
    </Box>
  )
}
