import { Form } from './_components/form'
import { Tasks } from './_components/tasks'

export default function Home() {
  return (
    <div className="flex-1 flex flex-col max-w-3xl w-full mx-auto px-4">
      <Form />
      <Tasks />
    </div>
  )
}
