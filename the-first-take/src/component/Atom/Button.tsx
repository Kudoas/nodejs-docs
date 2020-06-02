import * as React from "react"
import { Link } from "react-router-dom"

type Props = {
  link?: string
  onClick?: () => void
  disabled?: boolean
  loading?: boolean
}

const Button: React.FCX<Props> = props => {
  const { className, link, onClick, disabled, loading, children } = props
  let button
  if (!link) {
    button = (
      <button
        className={className}
        onClick={onClick}
        disabled={disabled || loading}
      >
        {children}
      </button>
    )
  } else {
    button = <Link to={link}></Link>
  }

  return button
}

export default Button
