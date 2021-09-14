import { Button, ButtonGroup, Flex, Text, useColorModeValue as mode } from '@chakra-ui/react'
import * as React from 'react'

export const TablePagination = ({ count, page, setPage }) => {
  return (
    <Flex align="center" justify="space-between">
      <Text color={mode('gray.600', 'gray.400')} fontSize="sm">
        {count} employees
      </Text>
      <ButtonGroup variant="outline" size="sm">
        <Button isDisabled={page === 1} onClick={() => { if (page !== 1) setPage(page - 1) }} as="a" rel="prev">
          Previous
        </Button>
        {<Button as="a" rel="prev">
          {page}
        </Button>}
        <Button isDisabled={Math.ceil(count / 5) === page || count === 0} onClick={(e) => { if (Math.ceil(count / 5) !== page && count !== 0) setPage(page + 1) }} as="a" rel="next">
          Next
        </Button>
      </ButtonGroup>
    </Flex>
  )
}