import Image from 'next/image'
import DashboardIndexPage from './dashboard'
import Input from './components/input'

export default function Home() {
  return (
    <main>
      <DashboardIndexPage />
      <Input />
    </main>
  )
}
