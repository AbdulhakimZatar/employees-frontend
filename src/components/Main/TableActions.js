import {
  Button,
  ButtonGroup,
  FormControl,
  FormLabel,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Stack,
  Center
} from '@chakra-ui/react'
import {useState,useEffect} from 'react'
import { BsSearch } from 'react-icons/bs'
import { RiAddFill, RiArrowRightUpLine } from 'react-icons/ri'
import superagent from 'superagent'




export const TableActions = () => {
  const [departments, setDepartments] = useState([])
  const [selectedDepartment, setSelectedDepartment] = useState(null)
  
  useEffect(() => {
    getDepartments()
  }, [])
  
  const getDepartments = async () => {
    const API = 'http://localhost:5000/v1/departments'
    const results = await superagent.get(API)
    setDepartments(results.body.data)
  }

  const Departments =  () => {
  
    return departments.map(d=>{
      return <option key={d.id} value={d.id}>{d.name}</option>
    })
  }

  return (
    <Stack
      spacing="4"
      direction={{
        base: 'column',
        md: 'row',
      }}
      justify="space-between"
    >
      <HStack>
        <FormControl
          minW={{
            md: '320px',
          }}
          id="search"
        >
          <InputGroup size="sm">
            <FormLabel srOnly>Search</FormLabel>
            <InputLeftElement pointerEvents="none" color="gray.400">
              <BsSearch />
            </InputLeftElement>
            <Input rounded="base" type="search" placeholder="Search" />
          </InputGroup>
        </FormControl>
        <Select
          w={{
            base: '300px',
            md: '150px',
          }}
          rounded="base"
          size="sm"
        >
          <option value='name' selected='true'>Name</option>
          <option value='email' >Email</option>
          
        </Select>
      </HStack>
      <HStack size="sm" variant="outline">
        <Center>
          Filter by:
        </Center>
        <Select
          w={{
            base: '300px',
            md: 'unset',
          }}
          rounded="base"
          size="sm"
        >
          <option value={null} selected='true'>All departments</option>
          <Departments />
        </Select>
      </HStack>
    </Stack>
  )
}