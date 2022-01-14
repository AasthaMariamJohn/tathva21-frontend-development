import { forwardRef } from 'react'
import { Box, Spinner } from '@chakra-ui/react'


export const ModelSpinner = () => (
  <Spinner
    size="xl"
    position="absolute"
    left="50%"
    top="50%"
    ml="calc(0px - var(--spinner-size) / 2)"
    mt="calc(0px - var(--spinner-size))"
  />
)

export const ModelContainer = forwardRef(({ children }, ref) => (

  <Box
    ref={ref}
    className="NITC-Model"
    
    m={['0px']}
    w={['100vw']}
    h={['100vh']}
    position="relative"
  >
    {children}
  </Box>
))

const Loader = () => {
  return (
    <ModelContainer />
  )
}

export default Loader
