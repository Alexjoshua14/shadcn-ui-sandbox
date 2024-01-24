import { FC } from 'react'
import 'server-only'

/**
 * A very basic react component that imports 'server-only' meaning it will through
 * an error if it is rendered on the client
 */
const ServerComponent: FC = ({ }) => {
  return (
    <div className="w-full h-full bg-teal-700">
      ServerComponent
    </div>
  )
}

export default ServerComponent