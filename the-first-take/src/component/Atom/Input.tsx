import * as React from "react"

type Props = {
  elementType: string
}

const Input: React.FCX<Props> = props => {
  const { className, elementType } = props
  let inputElement
  switch (elementType) {
    case "input":
      inputElement = <input className={className} />
      break
    case "textarea":
      inputElement = <textarea className={className} />
      break
    case "select":
      inputElement = (
        <select className={className}>
          <option></option>
        </select>
      )
      break
    default:
      inputElement = <input className={className} />
  }
  return inputElement
}

export default Input
