import * as React from "react"

import Button from "../Atom/Button"
import Input from "../Atom/Input"

const Form: React.FCX = ({ children }) => {
  return (
    <form>
      <Input elementType="textarea" />
      <Button>{children}</Button>
    </form>
  )
}

export default Form
