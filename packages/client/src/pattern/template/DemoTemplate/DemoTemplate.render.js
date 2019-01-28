import React from 'react'
import DemoTemplate from './DemoTemplate'

const page = {
  page: {
    id: 'demo',
    name: 'some-name',
  },
}

const demoTemplateDefault = <DemoTemplate page={page} startPageRoute="/" />

export default demoTemplateDefault
