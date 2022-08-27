import React from 'react'
import Button, { ButtonProps } from 'react-bootstrap/Button'

interface ButtonInterface extends ButtonProps {
  color?: string
}

const ButtonComponent = (props: ButtonInterface) => (
  <Button { ...props }>Primary</Button>
)

export default ButtonComponent