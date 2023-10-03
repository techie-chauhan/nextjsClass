import React from 'react'

export default function aboutPage(props) {
    console.log(props)
  return (
    <div>aboutPage {props.params.slug}</div>
  )
}
