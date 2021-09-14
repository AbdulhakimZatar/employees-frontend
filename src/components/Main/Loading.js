import {
  Text,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Spinner,
} from '@chakra-ui/react'
function Loading({ columns }) {
  return (
    <Tbody>
      <Tr><Td colSpan={columns.length}></Td></Tr>
      <Tr><Td colSpan={columns.length}></Td></Tr>
      <Tr>
        <Td textAlign='center' colSpan={columns.length}><Spinner
          thickness="4px"
          textAlign='center'
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        /></Td>
      </Tr>
      <Tr><Td colSpan={columns.length}></Td></Tr>
      <Tr><Td colSpan={columns.length}></Td></Tr>
    </Tbody>
  )
}

export default Loading
