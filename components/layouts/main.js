
import dynamic from 'next/dynamic'
import NitcModelLoader from '../nitc-model-loader'

const LazyNitcModel = dynamic(() => import('../nitc-model'), {
  ssr: false,
  loading: () => <NitcModelLoader />
})

const Main = ({ children, router }) => {
  return (<div>
   
        <LazyNitcModel />

        {children}

      </div>
  
  )
}

export default Main
