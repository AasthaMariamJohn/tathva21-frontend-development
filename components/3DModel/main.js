
import dynamic from 'next/dynamic'
import Loader2 from '../common/loader2'

const LazyNitcModel = dynamic(() => import('./nitc-model'), {
  ssr: false,
  loading: () => <Loader2/>
})

const Main = ({ children, router }) => {
  return (<div>
   
        <LazyNitcModel />

        {children}

      </div>
  
  )
}

export default Main
