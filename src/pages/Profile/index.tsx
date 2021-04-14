import React from 'react'
import { Input } from 'antd'
import { SchemaForm, SchemaMarkupField as Field, FormButtonGroup, Submit, Reset } from '@formily/antd'
import { IPageComponent, IPageComponentProps } from '@/types'

import styles from './index.less'

interface values {
  name: string
}

const Profile: IPageComponent = (props: IPageComponentProps) => {
  return (
    <SchemaForm
      components={{ Input }}
      onSubmit={(values: values) => {
        console.log(values)
      }}
    >
      <Field type="string" name="name" title="Name" x-component="Input" />
      <FormButtonGroup>
        <Submit>查询</Submit>
        <Reset>查询</Reset>
      </FormButtonGroup>
    </SchemaForm>
  )
}

Profile.title = 'PROFILE_TITLE'
Profile.layout = 'PRO_LAYOUT'
Profile.requireSignin = true

export default Profile
