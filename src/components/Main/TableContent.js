import {
  Text,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import {useEffect,useState} from 'react'
import { columns } from './_data'

export const TableContent = (props) => {

  useEffect(() => {
    props.getEmployees()
  }, [])

  return (
    <Table style={{height:'50vh'}} my="8" borderWidth="1px" fontSize="sm">
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
      <Tbody>
        {props.employees.length>0?props.employees.map((row, index) => (
          <Tr key={index}>
            {columns.map((column, index) => {
              const cell = row[column.accessor]
              const element = column.Cell?.(row) ?? cell
              return (
                <Td w={index!==0?'30%':'10%'} whiteSpace="wrap" key={index}>
                  {element}
                </Td>
              )
            })}
          </Tr>
        )):<Tr></Tr>}
      </Tbody>
    </Table>
  )
}