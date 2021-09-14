import {
  Text,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Spinner,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import { useEffect } from 'react'
import { columns } from './_data'

export const TableContent = ({ loading, employees }) => {


  return (
    <Table style={{ height: '50vh' }} my="8" borderWidth="1px" fontSize="sm">
      <Thead bg={mode('gray.50', 'gray.800')}>
        <Tr>
          {columns.map((column, index) => (
            <Th whiteSpace="nowrap" scope="col" key={index}>
              {column.Header}
            </Th>
          ))}
          <Th />
        </Tr>
      </Thead>
      {!loading ? <Tbody>
        {employees.length > 0 ? employees.map((row, index) => (
          <Tr key={index}>
            {columns.map((column, index) => {
              const cell = row[column.accessor]
              const element = column.Cell?.(row) ?? cell
              return (
                <Td w={index !== 0 ? '30%' : '10%'} whiteSpace="nowrap" key={index}>
                  {element}
                </Td>
              )
            })}
          </Tr>
        )) : <Tr><Td colSpan={columns.length}><Text textAlign='center' fontSize="md">No data found</Text></Td></Tr>}
      </Tbody> : <Tbody><Tr><Td colSpan={columns.length}><Text textAlign='center' fontSize="md"><Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      /></Text></Td></Tr></Tbody>}
    </Table>
  )
}