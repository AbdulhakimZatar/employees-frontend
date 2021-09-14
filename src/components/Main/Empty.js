import {
  Tbody,
  Td,
  Tr,
  Text
} from '@chakra-ui/react'
function Empty({ columns }) {
  return (
    <>
      <Tr><Td colSpan={columns.length}></Td></Tr>
      <Tr><Td colSpan={columns.length}></Td></Tr>
      <Tr >
        <Td colSpan={columns.length} textAlign='center' ><Text fontSize="md">No data found</Text></Td>
      </Tr>
      <Tr><Td colSpan={columns.length}></Td></Tr>
      <Tr><Td colSpan={columns.length}></Td></Tr>
    </>
  )
}

export default Empty
