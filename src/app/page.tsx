import { Suspense } from 'react'
import { Form } from './_components/form'
import { Tasks } from './_components/tasks'

export default function Home() {
  return (
    <div className="flex-1 max-w-3xl w-full mx-auto px-4">
      <Form />
      <Suspense fallback={<p>Carregando...</p>}>
        <Tasks />
      </Suspense>
    </div>
  )
}
