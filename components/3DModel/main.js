
import dynamic from 'next/dynamic'
import TathvaLoader from '../common/loader2'

const LazyNitcModel = dynamic(() => import('./nitc-model'), {
  ssr: false,
  loading: () => <TathvaLoader/>
})

const Main = ({ children, router }) => {
  return (<div>
   
        <LazyNitcModel />

        {children}

      </div>
  
  )
}

export default Main
