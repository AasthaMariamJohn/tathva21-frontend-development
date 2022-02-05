
import dynamic from 'next/dynamic'
import Loader from '../common/loader'

const LazyNitcModel = dynamic(() => import('./nitc-model'), {
  ssr: false,
  loading: () =><Loader/>
}) 

const Main = ({ children, router }) => {
  return (<div>
   
        <LazyNitcModel />

        {children}

      </div>
  
  )
}

export default Main
