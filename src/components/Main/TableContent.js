import {
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import { columns } from './_data'
import Loading from './Loading'
import Empty from './Empty'

export const TableContent = ({ loading, employees }) => {


  return (
    <Table my="8" borderWidth="1px" fontSize="sm">
      <Thead className='tableHead' bg={mode('gray.50', 'gray.800')}>
        <Tr>
          {columns.map((column, index) => (
            <Th minW={index !== 0 ? '30%' : '10%'} w={index !== 0 ? '30%' : '10%'} whiteSpace="nowrap" scope="col" key={index}>
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
                <Td minW={index !== 0 ? '30%' : '10%'} w={index !== 0 ? '30%' : '10%'} whiteSpace="nowrap" key={index}>
                  {element}
                </Td>
              )
            })}
          </Tr>
        )) : <Empty columns={columns}/>}
      </Tbody> : <Loading columns={columns} />}
    </Table>
  )
}