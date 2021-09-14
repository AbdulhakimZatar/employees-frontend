import {
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
import { useState, useEffect } from 'react'
import { BsSearch } from 'react-icons/bs'
import superagent from 'superagent'




export const TableActions = ({ setSelectedDepartment,setType,setSearch }) => {
  const [departments, setDepartments] = useState([])
  
  const getDepartments = async () => {
    const API = process.env.REACT_APP_API || 'https://calm-beach-41183.herokuapp.com/v1'
    const URL = `${API}/departments`
    const results = await superagent.get(URL)
    setDepartments(results.body.data)
  }
  
  useEffect(() => {
    getDepartments()
  }, [])


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
            <Input  onChange={(e)=>{setSearch(e.target.value.length>0?e.target.value:'')}} rounded="base" type="search" placeholder="Search" />
          </InputGroup>
        </FormControl>
        <Select
          w={{
            base: '300px',
            md: '150px',
          }}
          rounded="base"
          size="sm"
          onChange={(e) => setType(e.target.value)}
          defaultValue='name'
        >
          <option value='name'>Name</option>
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
          onChange={(e) => { setSelectedDepartment(e.target.value) }}
        >
          <option value=''>All departments</option>
          {departments.map(d => {
            return <option key={d.id} value={d.id}>{d.name}</option>
          })}
        </Select>
      </HStack>
    </Stack>
  )
}