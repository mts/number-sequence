import React from 'react'

const LazyDemoPage = React.lazy(() => import('./DemoPage'))

const AsyncDemoPage = () => (
  <React.Suspense fallback={null}>
    <LazyDemoPage />
  </React.Suspense>
)

export default AsyncDemoPage
